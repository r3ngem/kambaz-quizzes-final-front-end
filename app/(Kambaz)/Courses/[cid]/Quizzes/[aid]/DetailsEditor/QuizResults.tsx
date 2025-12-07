/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import { useRouter, useParams } from "next/navigation";
import { Button, Card, Alert, Badge } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { RootState } from "../../../../../store";
import * as client from "./client";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";

export default function StudentQuizResults() {
  const { cid, qid } = useParams();
  const router = useRouter();
  const { currentUser } = useSelector((state: RootState) => state.accountReducer);
  const [quiz, setQuiz] = useState<any>(null);
  const [questions, setQuestions] = useState<any[]>([]);
  const [attempt, setAttempt] = useState<any>(null);
  const [attemptCount, setAttemptCount] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  // Fetch quiz, questions, latest attempt, and attempt count
  useEffect(() => {
    const fetchData = async () => {
      try {
        if (qid) {
          const [fetchedQuiz, fetchedQuestions, latestAttempt, countData] = await Promise.all([
            client.findQuiz(qid as string),
            client.findQuestionsForQuiz(qid as string),
            client.findLatestAttempt(qid as string),
            client.getAttemptCount(qid as string)
          ]);
          
          setQuiz(fetchedQuiz);
          setQuestions(fetchedQuestions);
          setAttempt(latestAttempt);
          setAttemptCount(countData.count);
          setIsLoading(false);
        }
      } catch (error) {
        console.error("Error fetching results:", error);
        setIsLoading(false);
      }
    };
    fetchData();
  }, [qid]);

  const isStudent = currentUser?.role === "STUDENT";

  // Redirect if not student
  useEffect(() => {
    if (!isLoading && !isStudent) {
      alert("This page is only available to students.");
      router.push(`/Courses/${cid}/Quizzes`);
    }
  }, [isLoading, isStudent, router, cid]);

  const handleRetakeQuiz = () => {
    router.push(`/Courses/${cid}/Quizzes/${qid}/take`);
  };

  const handleBackToQuizzes = () => {
    router.push(`/Courses/${cid}/Quizzes`);
  };

  const getQuestionAnswer = (questionId: string) => {
    return attempt?.answers.find((a: any) => a.question === questionId);
  };

  const renderQuestionResult = (question: any, index: number) => {
    const answerData = getQuestionAnswer(question._id);
    if (!answerData) return null;

    const isCorrect = answerData.isCorrect;

    return (
      <Card 
        key={question._id} 
        className={`mb-4 ${isCorrect ? 'border-success' : 'border-danger'}`}
      >
        <Card.Body>
          <div className="d-flex justify-content-between align-items-start mb-3">
            <div className="d-flex align-items-center">
              <h5 className="mb-0 me-2">Question {index + 1}</h5>
              {isCorrect ? (
                <FaCheckCircle className="text-success" size={24} />
              ) : (
                <FaTimesCircle className="text-danger" size={24} />
              )}
            </div>
            <div>
              <Badge bg={isCorrect ? "success" : "danger"}>
                {answerData.pointsEarned} / {question.points} pts
              </Badge>
            </div>
          </div>

          <p className="mb-3"><strong>{question.question}</strong></p>

          {/* Multiple Choice Results */}
          {question.type === "multiple-choice" && (
            <div>
              {question.choices?.map((choice: any, i: number) => {
                const isUserAnswer = answerData.answer === choice.text;
                const isCorrectAnswer = choice.isCorrect;

                return (
                  <div
                    key={i}
                    className={`mb-2 p-2 rounded ${
                      isCorrectAnswer ? "bg-success bg-opacity-10 border border-success" :
                      isUserAnswer ? "bg-danger bg-opacity-10 border border-danger" : ""
                    }`}
                  >
                    <div className="d-flex align-items-center">
                      <input
                        type="radio"
                        checked={isUserAnswer}
                        disabled
                        readOnly
                        className="me-2"
                      />
                      <span>
                        {choice.text}
                        {isCorrectAnswer && (
                          <span className="text-success ms-2">
                            <FaCheckCircle className="me-1" />
                            Correct Answer
                          </span>
                        )}
                        {isUserAnswer && !isCorrectAnswer && (
                          <span className="text-danger ms-2">
                            <FaTimesCircle className="me-1" />
                            Your Answer
                          </span>
                        )}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          {/* True/False Results */}
          {question.type === "true-false" && (
            <div>
              {[true, false].map((value) => {
                const isUserAnswer = answerData.answer === value;
                const isCorrectAnswer = value === question.correctAnswer;

                return (
                  <div
                    key={value.toString()}
                    className={`mb-2 p-2 rounded ${
                      isCorrectAnswer ? "bg-success bg-opacity-10 border border-success" :
                      isUserAnswer ? "bg-danger bg-opacity-10 border border-danger" : ""
                    }`}
                  >
                    <div className="d-flex align-items-center">
                      <input
                        type="radio"
                        checked={isUserAnswer}
                        disabled
                        readOnly
                        className="me-2"
                      />
                      <span>
                        {value ? "True" : "False"}
                        {isCorrectAnswer && (
                          <span className="text-success ms-2">
                            <FaCheckCircle className="me-1" />
                            Correct Answer
                          </span>
                        )}
                        {isUserAnswer && !isCorrectAnswer && (
                          <span className="text-danger ms-2">
                            <FaTimesCircle className="me-1" />
                            Your Answer
                          </span>
                        )}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          {/* Fill in the Blank Results */}
          {question.type === "fill-blank" && (
            <div>
              <div className={`p-3 rounded ${isCorrect ? 'bg-success bg-opacity-10 border border-success' : 'bg-danger bg-opacity-10 border border-danger'}`}>
                <p className="mb-2">
                  <strong>Your Answer:</strong> {answerData.answer || "(No answer provided)"}
                </p>
                {!isCorrect && (
                  <p className="mb-0">
                    <strong>Correct Answers:</strong> {question.possibleAnswers?.join(", ")}
                  </p>
                )}
              </div>
            </div>
          )}

          {/* Feedback */}
          <Alert variant={isCorrect ? "success" : "danger"} className="mt-3 mb-0">
            {isCorrect ? (
              <>
                <FaCheckCircle className="me-2" />
                Correct! You earned {answerData.pointsEarned} points.
              </>
            ) : (
              <>
                <FaTimesCircle className="me-2" />
                Incorrect. You earned {answerData.pointsEarned} points.
              </>
            )}
          </Alert>
        </Card.Body>
      </Card>
    );
  };

  if (isLoading) {
    return (
      <div className="text-center p-5">
        <p>Loading results...</p>
      </div>
    );
  }

  if (!isStudent) {
    return null;
  }

  if (!attempt) {
    return (
      <div className="text-center p-5">
        <Alert variant="info">
          <h4>No Attempts Yet</h4>
          <p>You haven't taken this quiz yet.</p>
          <Button variant="primary" onClick={handleRetakeQuiz}>
            Take Quiz
          </Button>
        </Alert>
      </div>
    );
  }

  const percentage = Math.round((attempt.score / attempt.totalPoints) * 100);
  const canRetake = quiz?.multipleAttempts 
    ? attemptCount < (quiz.maxAttempts || Infinity)
    : attemptCount < 1;

  return (
    <div id="wd-student-quiz-results" className="container mt-4">
      {/* Header */}
      <div className="mb-4">
        <h2>{quiz?.title}</h2>
        <p className="text-muted">Quiz Results - Attempt {attempt.attemptNumber}</p>
      </div>

      {/* Score Summary */}
      <Alert variant={percentage >= 70 ? "success" : percentage >= 50 ? "warning" : "danger"} className="mb-4">
        <h4>Your Score</h4>
        <h2 className="mb-0">
          {attempt.score} / {attempt.totalPoints} ({percentage}%)
        </h2>
        <p className="mb-0 mt-2">
          Submitted: {new Date(attempt.submittedAt).toLocaleString()}
        </p>
      </Alert>

      {/* Attempt Info */}
      <Card className="mb-4">
        <Card.Body>
          <div className="d-flex justify-content-between align-items-center">
            <div>
              <h5 className="mb-2">Attempt Information</h5>
              <p className="mb-1">
                <strong>Attempt Number:</strong> {attempt.attemptNumber}
                {quiz?.multipleAttempts && ` of ${quiz.maxAttempts || "unlimited"}`}
              </p>
              <p className="mb-0">
                <strong>Attempts Remaining:</strong>{" "}
                {canRetake 
                  ? quiz?.multipleAttempts 
                    ? (quiz.maxAttempts || "Unlimited") - attemptCount
                    : 0
                  : "None"}
              </p>
            </div>
            <div>
              {canRetake ? (
                <Button variant="primary" onClick={handleRetakeQuiz}>
                  Retake Quiz
                </Button>
              ) : (
                <Button variant="secondary" disabled>
                  No Attempts Left
                </Button>
              )}
            </div>
          </div>
        </Card.Body>
      </Card>

      {/* Questions and Answers */}
      <h4 className="mb-3">Detailed Results</h4>
      {questions.map((question, index) => renderQuestionResult(question, index))}

      {/* Footer Buttons */}
      <div className="d-flex justify-content-between mt-4 mb-5">
        <Button variant="secondary" onClick={handleBackToQuizzes}>
          Back to Quizzes
        </Button>
        {canRetake && (
          <Button variant="primary" onClick={handleRetakeQuiz}>
            Retake Quiz
          </Button>
        )}
      </div>
    </div>
  );
}
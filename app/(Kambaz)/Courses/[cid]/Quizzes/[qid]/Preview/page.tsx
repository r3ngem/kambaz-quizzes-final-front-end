/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import { useRouter, useParams } from "next/navigation";
import { Button, Card, Form, Alert, ProgressBar } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { RootState } from "../../../../../store";
import * as client from "../DetailsEditor/client";

export default function QuizPreview() {
  const { cid, qid } = useParams();
  const router = useRouter();
  const { currentUser } = useSelector((state: RootState) => state.accountReducer);
  const [quiz, setQuiz] = useState<any>(null);
  const [questions, setQuestions] = useState<any[]>([]);
  const [answers, setAnswers] = useState<{ [key: string]: any }>({});
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [score, setScore] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  // Fetch quiz and questions on component mount
  useEffect(() => {
    const fetchQuizData = async () => {
      try {
        if (qid) {
          const quizId = Array.isArray(qid) ? qid[0] : qid;
          const fetchedQuiz = await client.findQuiz(quizId);
          console.log("quizId:", quizId);
          const fetchedQuestions = await client.findQuestionsForQuiz(quizId);
          console.log("Fetched Quiz:", fetchedQuiz);
          console.log("Fetched Questions:", fetchedQuestions);
          setQuiz(fetchedQuiz);
          setQuestions(fetchedQuestions);
          setIsLoading(false);
        }
      } catch (error) {
        console.error("Error fetching quiz data:", error);
        setIsLoading(false);
      }
    };
    fetchQuizData();
  }, [qid]);
  
  // Check if user is faculty
  const isFaculty = currentUser?.role === "FACULTY";

  // Redirect if not faculty
  useEffect(() => {
    if (!isLoading && !isFaculty) {
      alert("This preview is only available to faculty members.");
      router.push(`/Courses/${cid}/Quizzes`);
    }
  }, [isLoading, isFaculty, router, cid]);

  const handleAnswerChange = (questionId: string, answer: any) => {
    setAnswers({
      ...answers,
      [questionId]: answer
    });
  };

  const checkAnswer = (question: any, userAnswer: any) => {
    if (!userAnswer) return false;

    switch (question.type) {
      case "multiple-choice":
        const correctChoice = question.choices?.find((c: any) => c.isCorrect);
        return userAnswer === correctChoice?.text;
      
      case "true-false":
        return userAnswer === question.correctAnswer;
      
      case "fill-blank":
        const normalizedAnswer = userAnswer.toLowerCase().trim();
        return question.possibleAnswers?.some(
          (answer: string) => answer.toLowerCase().trim() === normalizedAnswer
        );
      
      default:
        return false;
    }
  };

  const handleSubmit = () => {
    let totalScore = 0;
    let earnedScore = 0;

    questions.forEach((question) => {
      totalScore += question.points;
      const userAnswer = answers[question._id];
      if (checkAnswer(question, userAnswer)) {
        earnedScore += question.points;
      }
    });

    setScore(earnedScore);
    setShowResults(true);
  };

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const handleEditQuiz = () => {
    router.push(`/Courses/${cid}/Quizzes/${qid}/edit?tab=questions`);
  };

  const handleRetakeQuiz = () => {
    setAnswers({});
    setShowResults(false);
    setCurrentQuestionIndex(0);
    setScore(0);
  };

  const renderQuestion = (question: any, index: number) => {
    const userAnswer = answers[question._id];
    const isCorrect = showResults ? checkAnswer(question, userAnswer) : null;

    return (
      <Card key={question._id} className="mb-4">
        <Card.Body>
          <div className="d-flex justify-content-between align-items-start mb-3">
            <h5>Question {index + 1}</h5>
            <span className="badge bg-secondary">{question.points} pts</span>
          </div>

          <p className="mb-3"><strong>{question.question}</strong></p>

          {/* Multiple Choice */}
          {question.type === "multiple-choice" && (
            <div>
              {question.choices?.map((choice: any, i: number) => {
                const isSelected = userAnswer === choice.text;
                const showCorrect = showResults && choice.isCorrect;
                const showIncorrect = showResults && isSelected && !choice.isCorrect;

                return (
                  <div
                    key={i}
                    className={`mb-2 p-2 rounded ${
                      showCorrect ? "bg-success bg-opacity-10 border border-success" :
                      showIncorrect ? "bg-danger bg-opacity-10 border border-danger" : ""
                    }`}
                  >
                    <Form.Check
                      type="radio"
                      id={`${question._id}-choice-${i}`}
                      name={`question-${question._id}`}
                      label={
                        <span>
                          {choice.text}
                          {showCorrect && <span className="text-success ms-2">✓ Correct Answer</span>}
                          {showIncorrect && <span className="text-danger ms-2">✗ Your Answer</span>}
                        </span>
                      }
                      checked={isSelected}
                      onChange={() => handleAnswerChange(question._id, choice.text)}
                      disabled={showResults}
                    />
                  </div>
                );
              })}
            </div>
          )}

          {/* True/False */}
          {question.type === "true-false" && (
            <div>
              {[true, false].map((value) => {
                const isSelected = userAnswer === value;
                const showCorrect = showResults && value === question.correctAnswer;
                const showIncorrect = showResults && isSelected && value !== question.correctAnswer;

                return (
                  <div
                    key={value.toString()}
                    className={`mb-2 p-2 rounded ${
                      showCorrect ? "bg-success bg-opacity-10 border border-success" :
                      showIncorrect ? "bg-danger bg-opacity-10 border border-danger" : ""
                    }`}
                  >
                    <Form.Check
                      type="radio"
                      id={`${question._id}-${value}`}
                      name={`question-${question._id}`}
                      label={
                        <span>
                          {value ? "True" : "False"}
                          {showCorrect && <span className="text-success ms-2">✓ Correct Answer</span>}
                          {showIncorrect && <span className="text-danger ms-2">✗ Your Answer</span>}
                        </span>
                      }
                      checked={isSelected}
                      onChange={() => handleAnswerChange(question._id, value)}
                      disabled={showResults}
                    />
                  </div>
                );
              })}
            </div>
          )}

          {/* Fill in the Blank */}
          {question.type === "fill-blank" && (
            <div>
              <Form.Control
                type="text"
                placeholder="Type your answer here"
                value={userAnswer || ""}
                onChange={(e) => handleAnswerChange(question._id, e.target.value)}
                disabled={showResults}
                className={showResults ? (isCorrect ? "border-success" : "border-danger") : ""}
              />
              {showResults && (
                <div className="mt-2">
                  {isCorrect ? (
                    <Alert variant="success" className="mb-0 py-2">
                      ✓ Correct!
                    </Alert>
                  ) : (
                    <Alert variant="danger" className="mb-0 py-2">
                      ✗ Incorrect. Possible answers: {question.possibleAnswers?.join(", ")}
                    </Alert>
                  )}
                </div>
              )}
            </div>
          )}

          {/* Show correctness for multiple choice and true/false */}
          {showResults && question.type !== "fill-blank" && (
            <Alert variant={isCorrect ? "success" : "danger"} className="mt-3 mb-0">
              {isCorrect ? "✓ Correct!" : "✗ Incorrect"}
            </Alert>
          )}
        </Card.Body>
      </Card>
    );
  };

  if (isLoading) {
    return (
      <div className="text-center p-5">
        <p>Loading quiz...</p>
      </div>
    );
  }

  if (!isFaculty) {
    return null;
  }

  if (!quiz || questions.length === 0) {
    return (
      <div className="text-center p-5">
        <Alert variant="warning">
          <h4>Quiz Preview Not Available</h4>
          <p>This quiz has no questions yet. Please add questions to preview the quiz.</p>
          <Button variant="primary" onClick={handleEditQuiz}>
            Edit Quiz
          </Button>
        </Alert>
      </div>
    );
  }

  const totalPoints = questions.reduce((sum, q) => sum + q.points, 0);
  const answeredCount = Object.keys(answers).length;

  return (
    <div id="wd-quiz-preview" className="container mt-4">
      {/* Header */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h2>{quiz.title}</h2>
          <p className="text-muted mb-0">Faculty Preview Mode</p>
        </div>
        <Button variant="outline-primary" onClick={handleEditQuiz}>
          Edit Quiz
        </Button>
      </div>

      {/* Quiz Description */}
      {quiz.description && (
        <Alert variant="info" className="mb-4">
          <strong>Instructions:</strong> {quiz.description}
        </Alert>
      )}

      {/* Progress Bar */}
      {!showResults && (
        <div className="mb-4">
          <div className="d-flex justify-content-between mb-2">
            <span>Progress: {answeredCount} of {questions.length} questions answered</span>
            <span>Total Points: {totalPoints}</span>
          </div>
          <ProgressBar 
            now={(answeredCount / questions.length) * 100} 
            label={`${Math.round((answeredCount / questions.length) * 100)}%`}
          />
        </div>
      )}

      {/* Results Summary */}
      {showResults && (
        <Alert variant={score >= totalPoints * 0.7 ? "success" : "warning"} className="mb-4">
          <h4>Quiz Complete!</h4>
          <h5>Your Score: {score} / {totalPoints} ({Math.round((score / totalPoints) * 100)}%)</h5>
          <p className="mb-0">Review your answers below.</p>
        </Alert>
      )}

      {/* Questions Display */}
      {quiz.oneQuestionAtATime && !showResults ? (
        // One question at a time
        <div>
          {renderQuestion(questions[currentQuestionIndex], currentQuestionIndex)}
          
          <div className="d-flex justify-content-between mt-4">
            <Button
              variant="secondary"
              onClick={handlePrevious}
              disabled={currentQuestionIndex === 0}
            >
              Previous
            </Button>
            
            {currentQuestionIndex < questions.length - 1 ? (
              <Button
                variant="primary"
                onClick={handleNext}
              >
                Next
              </Button>
            ) : (
              <Button
                variant="success"
                onClick={handleSubmit}
                disabled={answeredCount < questions.length}
              >
                Submit Quiz
              </Button>
            )}
          </div>

          {answeredCount < questions.length && currentQuestionIndex === questions.length - 1 && (
            <Alert variant="warning" className="mt-3">
              Please answer all questions before submitting.
            </Alert>
          )}
        </div>
      ) : (
        // All questions at once
        <div>
          {questions.map((question, index) => renderQuestion(question, index))}
          
          {!showResults && (
            <div className="d-flex justify-content-end mt-4">
              <Button
                variant="success"
                size="lg"
                onClick={handleSubmit}
                disabled={answeredCount < questions.length}
              >
                Submit Quiz
              </Button>
            </div>
          )}

          {!showResults && answeredCount < questions.length && (
            <Alert variant="warning" className="mt-3">
              Please answer all {questions.length} questions before submitting. 
              ({answeredCount} answered)
            </Alert>
          )}

          {showResults && (
            <div className="d-flex justify-content-end gap-2 mt-4">
              <Button variant="secondary" onClick={handleRetakeQuiz}>
                Retake Quiz
              </Button>
              <Button variant="primary" onClick={handleEditQuiz}>
                Edit Quiz
              </Button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
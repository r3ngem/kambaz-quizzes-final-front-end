/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import { useRouter, useParams } from "next/navigation";
import { Button, Card, Form, Alert, ProgressBar } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { RootState } from "../../../../../store";
import * as client from "./client";

export default function StudentQuizTake() {
  const { cid, qid } = useParams();
  const router = useRouter();
  const { currentUser } = useSelector((state: RootState) => state.accountReducer);
  const [quiz, setQuiz] = useState<any>(null);
  const [questions, setQuestions] = useState<any[]>([]);
  const [answers, setAnswers] = useState<{ [key: string]: any }>({});
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [attemptCount, setAttemptCount] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Fetch quiz, questions, and attempt count
  useEffect(() => {
    const fetchQuizData = async () => {
      try {
        if (qid) {
          const [fetchedQuiz, fetchedQuestions, countData] = await Promise.all([
            client.findQuiz(qid as string),
            client.findQuestionsForQuiz(qid as string),
            client.getAttemptCount(qid as string)
          ]);
          
          setQuiz(fetchedQuiz);
          setQuestions(fetchedQuestions);
          setAttemptCount(countData.count);
          setIsLoading(false);
        }
      } catch (error) {
        console.error("Error fetching quiz data:", error);
        setIsLoading(false);
      }
    };
    fetchQuizData();
  }, [qid]);

  // Check if user is student
  const isStudent = currentUser?.role === "STUDENT";

  // Redirect if not student
  useEffect(() => {
    if (!isLoading && !isStudent) {
      alert("This quiz is only available to students.");
      router.push(`/Courses/${cid}/Quizzes`);
    }
  }, [isLoading, isStudent, router, cid]);

  // Check if attempts are exhausted
  const attemptsExhausted = quiz?.multipleAttempts 
    ? attemptCount >= (quiz.maxAttempts || 1)
    : attemptCount >= 1;

  const handleAnswerChange = (questionId: string, answer: any) => {
    setAnswers({
      ...answers,
      [questionId]: answer
    });
  };

  const checkAnswer = (question: any, userAnswer: any) => {
    if (!userAnswer && userAnswer !== false) return false;

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

  const handleSubmit = async () => {
    setIsSubmitting(true);
    
    try {
      let totalScore = 0;
      let earnedScore = 0;
      const attemptAnswers: any[] = [];

      questions.forEach((question) => {
        totalScore += question.points;
        const userAnswer = answers[question._id];
        const isCorrect = checkAnswer(question, userAnswer);
        const pointsEarned = isCorrect ? question.points : 0;
        
        earnedScore += pointsEarned;
        
        attemptAnswers.push({
          question: question._id,
          answer: userAnswer,
          isCorrect,
          pointsEarned
        });
      });

      const attempt = {
        answers: attemptAnswers,
        score: earnedScore,
        totalPoints: totalScore,
      };

      await client.submitQuizAttempt(qid as string, attempt);
      
      // Navigate to results page
      router.push(`/Courses/${cid}/Quizzes/${qid}/results`);
    } catch (error) {
      console.error("Error submitting quiz:", error);
      alert("Failed to submit quiz. Please try again.");
      setIsSubmitting(false);
    }
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

  const renderQuestion = (question: any, index: number) => {
    const userAnswer = answers[question._id];

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
              {question.choices?.map((choice: any, i: number) => (
                <div key={i} className="mb-2">
                  <Form.Check
                    type="radio"
                    id={`${question._id}-choice-${i}`}
                    name={`question-${question._id}`}
                    label={choice.text}
                    checked={userAnswer === choice.text}
                    onChange={() => handleAnswerChange(question._id, choice.text)}
                  />
                </div>
              ))}
            </div>
          )}

          {/* True/False */}
          {question.type === "true-false" && (
            <div>
              <Form.Check
                type="radio"
                id={`${question._id}-true`}
                name={`question-${question._id}`}
                label="True"
                checked={userAnswer === true}
                onChange={() => handleAnswerChange(question._id, true)}
              />
              <Form.Check
                type="radio"
                id={`${question._id}-false`}
                name={`question-${question._id}`}
                label="False"
                checked={userAnswer === false}
                onChange={() => handleAnswerChange(question._id, false)}
              />
            </div>
          )}

          {/* Fill in the Blank */}
          {question.type === "fill-blank" && (
            <Form.Control
              type="text"
              placeholder="Type your answer here"
              value={userAnswer || ""}
              onChange={(e) => handleAnswerChange(question._id, e.target.value)}
            />
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

  if (!isStudent) {
    return null;
  }

  if (!quiz || questions.length === 0) {
    return (
      <div className="text-center p-5">
        <Alert variant="warning">
          <h4>Quiz Not Available</h4>
          <p>This quiz has no questions or is not available.</p>
          <Button variant="primary" onClick={() => router.push(`/Courses/${cid}/Quizzes`)}>
            Back to Quizzes
          </Button>
        </Alert>
      </div>
    );
  }

  if (attemptsExhausted) {
    return (
      <div className="text-center p-5">
        <Alert variant="warning">
          <h4>No More Attempts Available</h4>
          <p>
            You have used all {quiz.multipleAttempts ? quiz.maxAttempts : 1} attempt(s) for this quiz.
          </p>
          <Button 
            variant="primary" 
            onClick={() => router.push(`/Courses/${cid}/Quizzes/${qid}/results`)}
          >
            View Last Results
          </Button>
        </Alert>
      </div>
    );
  }

  const totalPoints = questions.reduce((sum, q) => sum + q.points, 0);
  const answeredCount = Object.keys(answers).length;

  return (
    <div id="wd-student-quiz-take" className="container mt-4">
      {/* Header */}
      <div className="mb-4">
        <h2>{quiz.title}</h2>
        <p className="text-muted">
          Attempt {attemptCount + 1}
          {quiz.multipleAttempts && ` of ${quiz.maxAttempts || "unlimited"}`}
        </p>
      </div>

      {/* Quiz Description */}
      {quiz.description && (
        <Alert variant="info" className="mb-4">
          <strong>Instructions:</strong> {quiz.description}
        </Alert>
      )}

      {/* Time Limit Warning */}
      {quiz.timeLimit && (
        <Alert variant="warning" className="mb-4">
          <strong>Time Limit:</strong> {quiz.timeLimit} minutes
        </Alert>
      )}

      {/* Progress Bar */}
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

      {/* Questions Display */}
      {quiz.oneQuestionAtATime ? (
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
                disabled={answeredCount < questions.length || isSubmitting}
              >
                {isSubmitting ? "Submitting..." : "Submit Quiz"}
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
          
          <div className="d-flex justify-content-end mt-4">
            <Button
              variant="success"
              size="lg"
              onClick={handleSubmit}
              disabled={answeredCount < questions.length || isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Submit Quiz"}
            </Button>
          </div>

          {answeredCount < questions.length && (
            <Alert variant="warning" className="mt-3">
              Please answer all {questions.length} questions before submitting. 
              ({answeredCount} answered)
            </Alert>
          )}
        </div>
      )}
    </div>
  );
}
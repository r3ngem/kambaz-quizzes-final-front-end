/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import { Button, Card, Form, Alert, ProgressBar } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { useRouter, useParams } from "next/navigation";
import * as client from "../../client";

export default function QuizPreview() {
  const { cid, qid } = useParams();
  const quizId = Array.isArray(qid) ? qid[0] : qid;
  const router = useRouter();
  const { currentUser } = useSelector((state: any) => state.accountReducer);

  const [quiz, setQuiz] = useState<any>(null);
  const [questions, setQuestions] = useState<any[]>([]);
  const [answers, setAnswers] = useState<{ [key: string]: any }>({});
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [score, setScore] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [attemptCount, setAttemptCount] = useState(0);
  const [latestAttempt, setLatestAttempt] = useState<any>(null);

  const isFaculty = currentUser?.role === "FACULTY";
  const isStudent = currentUser?.role === "STUDENT";

  useEffect(() => {
    const fetchQuizData = async () => {
      if (!quizId) return;
      try {
        const quizData = await client.findQuiz(quizId);
        setQuiz(quizData);
        
        if (quizData.questions && quizData.questions.length > 0) {
          setQuestions(quizData.questions);
        } else {
          try {
            const questionsData = await client.findQuestionsForQuiz(quizId);
            setQuestions(questionsData || []);
          } catch (err) {
            console.log("No separate questions endpoint, using embedded questions");
            setQuestions(quizData.questions || []);
          }
        }

        // Fetch attempt data for students
        if (currentUser?.role === "STUDENT") {
          try {
            const countData = await client.getAttemptCount(quizId);
            setAttemptCount(countData.count || 0);
            
            const latest = await client.findLatestAttempt(quizId);
            if (latest) {
              setLatestAttempt(latest);
            }
          } catch (err) {
            console.log("No previous attempts found");
          }
        }
      } catch (err) {
        console.error("Error fetching quiz data:", err);
      } finally {
        setIsLoading(false);
      }
    };
    fetchQuizData();
  }, [quizId, currentUser?.role]);

  // Check if quiz is available for students
  useEffect(() => {
    if (!isLoading && isStudent && quiz) {
      if (quiz.published === false) {
        alert("This quiz is not yet available.");
        router.push(`/Courses/${cid}/Quizzes`);
      }
    }
  }, [isLoading, isStudent, quiz, router, cid]);

  const handleAnswerChange = (question: any, choiceId: string | boolean) => {
    if (question.allowMultipleCorrect) {
      const currentAnswers = answers[question._id] || [];
      if (currentAnswers.includes(choiceId)) {
        setAnswers({
          ...answers,
          [question._id]: currentAnswers.filter((id: string) => id !== choiceId),
        });
      } else {
        setAnswers({
          ...answers,
          [question._id]: [...currentAnswers, choiceId],
        });
      }
    } else {
      setAnswers({
        ...answers,
        [question._id]: choiceId,
      });
    }
  };

  const checkAnswer = (question: any, userAnswer: any) => {
    if (userAnswer === undefined || userAnswer === null) return false;
    if (Array.isArray(userAnswer) && userAnswer.length === 0) return false;
  
    switch (question.type) {
      case "multiple-choice":
        // Auto-detect if multiple answers are correct
        const correctChoices = question.choices?.filter((c: any) => c.isCorrect) || [];
        const isMultiSelect = question.allowMultipleCorrect || correctChoices.length > 1;
        
        if (isMultiSelect) {
          // For multiple correct answers, check if user selected all correct ones
          const correctChoiceIds = correctChoices.map((c: any, i: number) => {
            const originalIndex = question.choices.findIndex((choice: any) => choice === c);
            return c._id || `choice-${originalIndex}`;
          });
          const userAnswerArray = Array.isArray(userAnswer) ? userAnswer : [userAnswer];
          // Check if arrays have same elements
          if (correctChoiceIds.length !== userAnswerArray.length) return false;
          return correctChoiceIds.every((id: string) => userAnswerArray.includes(id));
        } else {
          // Single correct answer
          const correctChoice = question.choices?.find((c: any) => c.isCorrect);
          const correctIndex = question.choices?.findIndex((c: any) => c.isCorrect);
          const correctChoiceId = correctChoice?._id || `choice-${correctIndex}`;
          return userAnswer === correctChoiceId;
        }
  
      case "true-false":
        return String(userAnswer).toLowerCase().trim() === String(question.correctAnswer).toLowerCase().trim();
  
      case "fill-blank":
        if (!question.possibleAnswers || question.possibleAnswers.length === 0) return false;
        
        // User needs to provide ALL correct answers (comma-separated)
        const userAnswers = String(userAnswer)
          .split(",")
          .map((a: string) => a.toLowerCase().trim())
          .filter((a: string) => a.length > 0);
        
        const correctAnswers = question.possibleAnswers.map(
          (ans: string) => ans.toLowerCase().trim()
        );
        
        // Check if user provided all correct answers (order doesn't matter)
        if (userAnswers.length !== correctAnswers.length) return false;
        return correctAnswers.every((correct: string) => 
          userAnswers.some((user: string) => user === correct)
        );
  
      default:
        return false;
    }
  };

  const handleSubmit = async () => {
    // Check if student has exceeded allowed attempts
    if (isStudent && quiz.multipleAttempts === false && attemptCount >= 1) {
      alert("You have already used your only attempt for this quiz.");
      return;
    }
    if (isStudent && quiz.allowedAttempts && attemptCount >= quiz.allowedAttempts) {
      alert(`You have reached the maximum number of attempts (${quiz.allowedAttempts}).`);
      return;
    }

    setIsSubmitting(true);
    let earnedScore = 0;
    const totalPoints = questions.reduce((sum, q) => sum + (q.points || 0), 0);
    
    questions.forEach((q, index) => {
      const questionId = q._id || `question-${index}`;
      if (checkAnswer(q, answers[questionId])) earnedScore += q.points;
    });
    
    setScore(earnedScore);

    // Submit attempt for students
    if (isStudent && quizId) {
      try {
        // Format answers to match schema: { question, answer, isCorrect, pointsEarned }
        const formattedAnswers = questions.map((q, index) => {
          const questionId = q._id || `question-${index}`;
          const userAnswer = answers[questionId] ?? null;
          const isCorrect = checkAnswer(q, userAnswer);
          return {
            question: questionId,
            answer: userAnswer,
            isCorrect: isCorrect,
            pointsEarned: isCorrect ? q.points : 0,
          };
        });

        const attempt = {
          answers: formattedAnswers,
          score: earnedScore,
          totalPoints: totalPoints,
          submittedAt: new Date().toISOString(),
        };
        console.log("Submitting attempt:", attempt);
        await client.submitQuizAttempt(quizId, attempt);
        setAttemptCount(prev => prev + 1);
      } catch (err) {
        console.error("Error submitting quiz attempt:", err);
        alert("There was an error submitting your quiz. Please try again.");
        setIsSubmitting(false);
        return;
      }
    }

    setShowResults(true);
    setIsSubmitting(false);
  };

  const handleNext = () => setCurrentQuestionIndex((i) => Math.min(i + 1, questions.length - 1));
  const handlePrevious = () => setCurrentQuestionIndex((i) => Math.max(i - 1, 0));
  const handleEditQuiz = () => router.push(`/Courses/${cid}/Quizzes/${qid}/DetailsEditor`);
  const handleBackToQuizzes = () => router.push(`/Courses/${cid}/Quizzes`);
  
  const handleRetakeQuiz = () => {
    // Check if retake is allowed
    if (isStudent) {
      if (quiz.multipleAttempts === false) {
        alert("Multiple attempts are not allowed for this quiz.");
        return;
      }
      if (quiz.multipleAttempts && attemptCount >= quiz.allowedAttempts) {
        alert(`You have reached the maximum number of attempts (${quiz.allowedAttempts}).`);
        return;
      }
    }
    setAnswers({});
    setShowResults(false);
    setCurrentQuestionIndex(0);
    setScore(0);
  };

  const canTakeQuiz = () => {
    if (isFaculty) return true;
    if (quiz.multipleAttempts === false && attemptCount >= 1) return false;
    if (quiz.multipleAttempts && attemptCount >= quiz.allowedAttempts) return false;
    return true;
  };

  const renderQuestion = (question: any, index: number) => {
    // Use index as fallback if _id is missing
    const questionId = question._id || `question-${index}`;
    const userAnswer = answers[questionId];
    const isCorrect = showResults ? checkAnswer(question, userAnswer) : null;
    const showCorrectAnswers = isFaculty || (isStudent && quiz?.showCorrectAnswers !== false);

    // Auto-detect if multiple answers are correct
    const correctChoicesCount = question.choices?.filter((c: any) => c.isCorrect).length || 0;
    const isMultipleCorrect = question.allowMultipleCorrect || correctChoicesCount > 1;
  
    return (
      <Card key={questionId} className="mb-4">
        <Card.Body>
          <div className="d-flex justify-content-between align-items-start mb-3">
            <h5>Question {index + 1}</h5>
            <span className="badge bg-secondary">{question.points} pts</span>
          </div>
          <p className="mb-3"><strong>{question.question}</strong></p>
          {question.type === "multiple-choice" && isMultipleCorrect && !showResults && (
            <p className="text-muted small mb-2"><em>Select all that apply</em></p>
          )}
  
          {/* Multiple Choice */}
          {question.type === "multiple-choice" &&
            question.choices?.map((choice: any, i: number) => {
              const choiceId = choice._id || `choice-${i}`;
              const isSelected = isMultipleCorrect
                ? (userAnswer || []).includes(choiceId)
                : userAnswer === choiceId;
              const showCorrect = showResults && showCorrectAnswers && choice.isCorrect;
              const showIncorrect = showResults && isSelected && !choice.isCorrect;
              return (
                <div key={choiceId} className={`mb-2 p-2 rounded ${showCorrect ? "bg-success bg-opacity-10 border border-success" : showIncorrect ? "bg-danger bg-opacity-10 border border-danger" : ""}`}>
                  <Form.Check
                    type={isMultipleCorrect ? "checkbox" : "radio"}
                    id={`${questionId}-choice-${i}`}
                    name={`question-${questionId}`}
                    label={choice.text}
                    checked={isSelected}
                    onChange={() => {
                      if (isMultipleCorrect) {
                        const currentAnswers = answers[questionId] || [];
                        if (currentAnswers.includes(choiceId)) {
                          setAnswers({
                            ...answers,
                            [questionId]: currentAnswers.filter((id: string) => id !== choiceId),
                          });
                        } else {
                          setAnswers({
                            ...answers,
                            [questionId]: [...currentAnswers, choiceId],
                          });
                        }
                      } else {
                        setAnswers({
                          ...answers,
                          [questionId]: choiceId,
                        });
                      }
                    }}
                    disabled={showResults}
                  />
                </div>
              );
            })}
  
          {/* True/False */}
          {question.type === "true-false" &&
            [true, false].map((value) => {
              const isSelected = userAnswer === value;
              const showCorrect = showResults && showCorrectAnswers && value === question.correctAnswer;
              const showIncorrect = showResults && isSelected && value !== question.correctAnswer;
              return (
                <div key={value.toString()} className={`mb-2 p-2 rounded ${showCorrect ? "bg-success bg-opacity-10 border border-success" : showIncorrect ? "bg-danger bg-opacity-10 border border-danger" : ""}`}>
                  <Form.Check
                    type="radio"
                    id={`${questionId}-${value}`}
                    name={`question-${questionId}`}
                    label={
                      <span>
                        {value ? "True" : "False"}
                        {showCorrect && <span className="text-success ms-2">✓ Correct</span>}
                        {showIncorrect && <span className="text-danger ms-2">✗ Incorrect</span>}
                      </span>
                    }
                    checked={isSelected}
                    onChange={() => setAnswers({ ...answers, [questionId]: value })}
                    disabled={showResults}
                  />
                </div>
              );
            })}
  
          {/* Fill in the Blank */}
          {question.type === "fill-blank" && (
            <div>
              <Form.Control
                type="text"
                placeholder="Type your answer here"
                value={userAnswer || ""}
                onChange={(e) => setAnswers({ ...answers, [questionId]: e.target.value })}
                disabled={showResults}
                className={showResults ? (isCorrect ? "border-success" : "border-danger") : ""}
              />
              {showResults && showCorrectAnswers && (
                <Alert variant={isCorrect ? "success" : "danger"} className="mt-2 mb-0 py-2">
                  {isCorrect
                    ? "✓ Correct!"
                    : `✗ Incorrect. Acceptable answers: ${question.possibleAnswers?.map((a: string) => `"${a}"`).join(" or ")}`}
                </Alert>
              )}
              {showResults && !showCorrectAnswers && (
                <Alert variant={isCorrect ? "success" : "danger"} className="mt-2 mb-0 py-2">
                  {isCorrect ? "✓ Correct!" : "✗ Incorrect"}
                </Alert>
              )}
            </div>
          )}
        </Card.Body>
      </Card>
    );
  };

  if (isLoading) return <div className="text-center p-5">Loading quiz...</div>;
  
  if (!quiz || questions.length === 0) {
    return (
      <div className="text-center p-5">
        <Alert variant="warning">
          <h4>Quiz Not Available</h4>
          <p>{isFaculty ? "No questions found for this quiz. Add questions in the editor first." : "This quiz is not available at the moment."}</p>
          {isFaculty ? (
            <Button variant="primary" onClick={handleEditQuiz}>Go to Editor</Button>
          ) : (
            <Button variant="primary" onClick={handleBackToQuizzes}>Back to Quizzes</Button>
          )}
        </Alert>
      </div>
    );
  }

  const totalPoints = questions.reduce((sum, q) => sum + (q.points || 0), 0);
  const answeredCount = questions.filter((q, index) => {
    const questionId = q._id || `question-${index}`;
    const answer = answers[questionId];
    if (answer === undefined || answer === null) return false;
    if (Array.isArray(answer) && answer.length === 0) return false;
    if (typeof answer === 'string' && answer.trim() === '') return false;
    return true;
  }).length;

  // Show previous attempt info for students who can't retake
  if (isStudent && !canTakeQuiz() && !showResults) {
    return (
      <div className="container mt-4">
        <h2>{quiz.title}</h2>
        <Alert variant="info" className="mt-4">
          <h4>Quiz Already Completed</h4>
          <p>You have already completed this quiz.</p>
          {latestAttempt && (
            <p><strong>Your Score:</strong> {latestAttempt.score} / {latestAttempt.totalPoints} 
              ({Math.round((latestAttempt.score / latestAttempt.totalPoints) * 100)}%)</p>
          )}
          <p>Attempts used: {attemptCount} / {quiz.allowedAttempts || 1}</p>
          <Button variant="primary" onClick={handleBackToQuizzes}>Back to Quizzes</Button>
        </Alert>
      </div>
    );
  }

  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h2>{quiz.title}</h2>
          <p className="text-muted mb-0">
            {isFaculty ? "Faculty Preview Mode" : `Welcome, ${currentUser?.firstName || "Student"}`}
          </p>
          {isStudent && (
            <small className="text-muted">
              Attempts: {attemptCount} / {quiz.allowedAttempts || (quiz.multipleAttempts === false ? 1 : "Unlimited")}
            </small>
          )}
        </div>
        <div className="d-flex gap-2">
          {isFaculty && (
            <Button variant="outline-primary" onClick={handleEditQuiz}>Edit Quiz</Button>
          )}
          <Button variant="outline-secondary" onClick={handleBackToQuizzes}>Back to Quizzes</Button>
        </div>
      </div>

      {quiz.description && (
        <Alert variant="info" className="mb-4">
          <strong>Instructions:</strong> {quiz.description}
        </Alert>
      )}

      {!showResults && (
        <div className="mb-4">
          <div className="d-flex justify-content-between mb-2">
            <span>Progress: {answeredCount} of {questions.length} answered</span>
            <span>Total Points: {totalPoints}</span>
          </div>
          <ProgressBar now={(answeredCount / questions.length) * 100} />
        </div>
      )}

      {showResults && (
        <Alert variant={score >= totalPoints * 0.7 ? "success" : "warning"} className="mb-4">
          <h4>Quiz Complete!</h4>
          <h5>Score: {score} / {totalPoints} ({Math.round((score / totalPoints) * 100)}%)</h5>
        </Alert>
      )}

      {quiz.oneQuestionAtATime && !showResults ? (
        <div>
          {renderQuestion(questions[currentQuestionIndex], currentQuestionIndex)}
          <div className="d-flex justify-content-between mt-4">
            <Button variant="secondary" onClick={handlePrevious} disabled={currentQuestionIndex === 0}>
              Previous
            </Button>
            {currentQuestionIndex < questions.length - 1 ? (
              <Button variant="primary" onClick={handleNext}>Next</Button>
            ) : (
              <Button variant="success" onClick={handleSubmit} disabled={isSubmitting}>
                {isSubmitting ? "Submitting..." : "Submit Quiz"}
              </Button>
            )}
          </div>
        </div>
      ) : (
        <div>
          {questions.map((q, idx) => renderQuestion(q, idx))}
          {!showResults && (
            <div className="d-flex justify-content-end mt-4">
              <Button variant="success" size="lg" onClick={handleSubmit} disabled={isSubmitting}>
                {isSubmitting ? "Submitting..." : "Submit Quiz"}
              </Button>
            </div>
          )}
          {showResults && (
            <div className="d-flex justify-content-end gap-2 mt-4">
              {canTakeQuiz() && (
                <Button variant="secondary" onClick={handleRetakeQuiz}>Retake</Button>
              )}
              {isFaculty && (
                <Button variant="primary" onClick={handleEditQuiz}>Edit Quiz</Button>
              )}
              <Button variant="outline-secondary" onClick={handleBackToQuizzes}>Back to Quizzes</Button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
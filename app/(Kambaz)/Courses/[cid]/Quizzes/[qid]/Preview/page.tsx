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

  const isFaculty = currentUser?.role === "FACULTY";

  useEffect(() => {
    const fetchQuizData = async () => {
      if (!quizId) return;
      try {
        console.log("Fetching quiz:", quizId);
        const quizData = await client.findQuiz(quizId);
        console.log("Quiz data:", quizData);
        setQuiz(quizData);
        // Questions are embedded in the quiz, but also try fetching separately
        if (quizData.questions && quizData.questions.length > 0) {
          setQuestions(quizData.questions);
        } else {
          try {
            const questionsData = await client.findQuestionsForQuiz(quizId);
            console.log("Questions data:", questionsData);
            setQuestions(questionsData || []);
          } catch (err) {
            console.log("No separate questions endpoint, using embedded questions");
            setQuestions(quizData.questions || []);
          }
        }
      } catch (err) {
        console.error("Error fetching quiz data:", err);
      } finally {
        setIsLoading(false);
      }
    };
    fetchQuizData();
  }, [quizId]);

  useEffect(() => {
    if (!isLoading && !isFaculty) {
      alert("This preview is only available to faculty members.");
      router.push(`/Courses/${cid}/Quizzes`);
    }
  }, [isLoading, isFaculty, router, cid]);

  const handleAnswerChange = (question: any, choiceId: string | boolean) => {
    if (question.allowMultipleCorrect) {
      const currentAnswers = answers[question._id] || [];
      if (currentAnswers.includes(choiceId)) {
        // Remove choice if already selected
        setAnswers({
          ...answers,
          [question._id]: currentAnswers.filter((id: string) => id !== choiceId),
        });
      } else {
        // Add choice
        setAnswers({
          ...answers,
          [question._id]: [...currentAnswers, choiceId],
        });
      }
    } else {
      // Single answer
      setAnswers({
        ...answers,
        [question._id]: choiceId,
      });
    }
  };

  const checkAnswer = (question: any, userAnswer: any) => {
    if (userAnswer === undefined || userAnswer === null) return false;
  
    switch (question.type) {
      case "multiple-choice":
        const correctChoice = question.choices?.find((c: any) => c.isCorrect);
        return userAnswer === correctChoice?._id;
  
      case "true-false":
        return String(userAnswer).toLowerCase().trim() === String(question.correctAnswer).toLowerCase().trim();
  
      case "fill-blank":
        if (!question.possibleAnswers || question.possibleAnswers.length === 0) return false;
        const user = userAnswer.toLowerCase().trim();
        return question.possibleAnswers.some(
          (ans: string) => ans.toLowerCase().trim() === user
        );
  
      default:
        return false;
    }
  };
  
  

  const handleSubmit = () => {
    let earnedScore = 0;
    questions.forEach((q) => {
      if (checkAnswer(q, answers[q._id])) earnedScore += q.points;
    });
    setScore(earnedScore);
    setShowResults(true);
  };

  const handleNext = () => setCurrentQuestionIndex((i) => Math.min(i + 1, questions.length - 1));
  const handlePrevious = () => setCurrentQuestionIndex((i) => Math.max(i - 1, 0));
  const handleEditQuiz = () => router.push(`/Courses/${cid}/Quizzes/${qid}/DetailsEditor`);
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
          {question.type === "multiple-choice" &&
            question.choices?.map((choice: any, i: number) => {
              const isSelected = userAnswer === choice._id; // ✅ compare to stored id
              const showCorrect = showResults && choice.isCorrect;
              const showIncorrect = showResults && isSelected && !choice.isCorrect;
              return (
                <div key={i} className={`mb-2 p-2 rounded ${showCorrect ? "bg-success bg-opacity-10 border border-success" : showIncorrect ? "bg-danger bg-opacity-10 border border-danger" : ""}`}>
                  <Form.Check
                    type={question.allowMultipleCorrect ? "checkbox" : "radio"}
                    id={`${question._id}-choice-${i}`}
                    name={`question-${question._id}`}
                    label={choice.text}
                    checked={
                      question.allowMultipleCorrect
                        ? (answers[question._id] || []).includes(choice._id)
                        : answers[question._id] === choice._id
                    }
                    onChange={() => handleAnswerChange(question, choice._id)}
                    disabled={showResults}
                  />
                </div>
              );
            })}
  
          {/* True/False */}
          {question.type === "true-false" &&
            [true, false].map((value) => {
              const isSelected = userAnswer === value;
              const showCorrect = showResults && value === question.correctAnswer;
              const showIncorrect = showResults && isSelected && value !== question.correctAnswer;
              return (
                <div key={value.toString()} className={`mb-2 p-2 rounded ${showCorrect ? "bg-success bg-opacity-10 border border-success" : showIncorrect ? "bg-danger bg-opacity-10 border border-danger" : ""}`}>
                  <Form.Check
                    type="radio"
                    id={`${question._id}-${value}`}
                    name={`question-${question._id}`}
                    label={
                      <span>
                        {value ? "True" : "False"}
                        {showCorrect && <span className="text-success ms-2">✓ Correct</span>}
                        {showIncorrect && <span className="text-danger ms-2">✗ Incorrect</span>}
                      </span>
                    }
                    checked={isSelected}
                    onChange={() => handleAnswerChange(question._id, value)}
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
                onChange={(e) => handleAnswerChange(question._id, e.target.value)}
                disabled={showResults}
                className={showResults ? (isCorrect ? "border-success" : "border-danger") : ""}
              />
              {showResults && (
                <Alert variant={isCorrect ? "success" : "danger"} className="mt-2 mb-0 py-2">
                  {isCorrect
                    ? "✓ Correct!"
                    : `✗ Incorrect. Acceptable answers: ${question.possibleAnswers?.join(", ")}`}
                </Alert>
              )}
            </div>
          )}
        </Card.Body>
      </Card>
    );
  };
  

  if (isLoading) return <div className="text-center p-5">Loading quiz...</div>;
  if (!isFaculty) return null;
  if (!quiz || questions.length === 0) {
    return (
      <div className="text-center p-5">
        <Alert variant="warning">
          <h4>Quiz Preview Not Available</h4>
          <p>No questions found for this quiz. Add questions in the editor first.</p>
          <Button variant="primary" onClick={handleEditQuiz}>Go to Editor</Button>
        </Alert>
      </div>
    );
  }

  const totalPoints = questions.reduce((sum, q) => sum + (q.points || 0), 0);
  const answeredCount = Object.keys(answers).length;

  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h2>{quiz.title}</h2>
          <p className="text-muted mb-0">Faculty Preview Mode</p>
        </div>
        <Button variant="outline-primary" onClick={handleEditQuiz}>Edit Quiz</Button>
      </div>

      {quiz.description && <Alert variant="info" className="mb-4"><strong>Instructions:</strong> {quiz.description}</Alert>}

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
            <Button variant="secondary" onClick={handlePrevious} disabled={currentQuestionIndex === 0}>Previous</Button>
            {currentQuestionIndex < questions.length - 1 ? (
              <Button variant="primary" onClick={handleNext}>Next</Button>
            ) : (
              <Button variant="success" onClick={handleSubmit}>Submit Quiz</Button>
            )}
          </div>
        </div>
      ) : (
        <div>
          {questions.map((q, idx) => renderQuestion(q, idx))}
          {!showResults && (
            <div className="d-flex justify-content-end mt-4">
              <Button variant="success" size="lg" onClick={handleSubmit}>Submit Quiz</Button>
            </div>
          )}
          {showResults && (
            <div className="d-flex justify-content-end gap-2 mt-4">
              <Button variant="secondary" onClick={handleRetakeQuiz}>Retake</Button>
              <Button variant="primary" onClick={handleEditQuiz}>Edit Quiz</Button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useRouter, useParams } from "next/navigation";
import { Button, Card, Form, Alert, ProgressBar } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { RootState } from "../../../../store";
import * as client from "../[qid]/DetailsEditor/client";

export default function QuizPreview() {
  const { qid } = useParams();
  const quizId = Array.isArray(qid) ? qid[0] : qid; // <-- ensure string
  const router = useRouter();
  const { currentUser } = useSelector((state: RootState) => state.accountReducer);

  const [quiz, setQuiz] = useState<any>(null);
  const [questions, setQuestions] = useState<any[]>([]);
  const [answers, setAnswers] = useState<{ [key: string]: any }>({});
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [score, setScore] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  const isFaculty = currentUser?.role === "FACULTY";

  // Fetch quiz and questions
  useEffect(() => {
    if (!quizId) return;

    const fetchQuizData = async () => {
      try {
        const quizData = await client.findQuiz(quizId);
        const questionsData = await client.findQuestionsForQuiz(quizId);

        setQuiz(quizData);
        setQuestions(Array.isArray(questionsData) ? questionsData : []); // ensure array
      } catch (err) {
        console.error("Error fetching quiz data:", err);
        setQuiz(null);
        setQuestions([]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchQuizData();
  }, [quizId]);

  // Redirect if not faculty
  useEffect(() => {
    if (!isLoading && !isFaculty) {
      alert("This preview is only available to faculty members.");
      router.push(`/Courses/${quiz?.courseId || ""}/Quizzes`);
    }
  }, [isLoading, isFaculty, router, quiz]);

  const handleAnswerChange = (questionId: string, answer: any) => {
    setAnswers({ ...answers, [questionId]: answer });
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
        return question.possibleAnswers?.some(
          (ans: string) => ans.toLowerCase().trim() === userAnswer.toLowerCase().trim()
        );

      default:
        return false;
    }
  };

  const handleSubmit = () => {
    let totalScore = 0;
    let earnedScore = 0;

    questions.forEach((q) => {
      totalScore += q.points;
      if (checkAnswer(q, answers[q._id])) earnedScore += q.points;
    });

    setScore(earnedScore);
    setShowResults(true);
  };

  const handleNext = () => setCurrentQuestionIndex((i) => Math.min(i + 1, questions.length - 1));
  const handlePrevious = () => setCurrentQuestionIndex((i) => Math.max(i - 1, 0));
  const handleEditQuiz = () => router.push(`/Courses/${quiz?.courseId}/Quizzes/${quizId}/edit?tab=questions`);
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
          {/* Render choices based on type */}
          {question.type === "multiple-choice" && question.choices?.map((choice: any, i: number) => {
            const isSelected = userAnswer === choice.text;
            const showCorrect = showResults && choice.isCorrect;
            const showIncorrect = showResults && isSelected && !choice.isCorrect;
            return (
              <div key={i} className={`mb-2 p-2 rounded ${showCorrect ? "bg-success bg-opacity-10 border border-success" : showIncorrect ? "bg-danger bg-opacity-10 border border-danger" : ""}`}>
                <Form.Check
                  type="radio"
                  id={`${question._id}-choice-${i}`}
                  name={`question-${question._id}`}
                  label={choice.text}
                  checked={isSelected}
                  onChange={() => handleAnswerChange(question._id, choice.text)}
                  disabled={showResults}
                />
              </div>
            );
          })}
          {question.type === "true-false" && [true, false].map((value) => {
            const isSelected = userAnswer === value;
            const showCorrect = showResults && value === question.correctAnswer;
            const showIncorrect = showResults && isSelected && value !== question.correctAnswer;
            return (
              <div key={value.toString()} className={`mb-2 p-2 rounded ${showCorrect ? "bg-success bg-opacity-10 border border-success" : showIncorrect ? "bg-danger bg-opacity-10 border border-danger" : ""}`}>
                <Form.Check
                  type="radio"
                  id={`${question._id}-${value}`}
                  name={`question-${question._id}`}
                  label={value ? "True" : "False"}
                  checked={isSelected}
                  onChange={() => handleAnswerChange(question._id, value)}
                  disabled={showResults}
                />
              </div>
            );
          })}
          {question.type === "fill-blank" && (
            <Form.Control
              type="text"
              placeholder="Type your answer here"
              value={userAnswer || ""}
              onChange={(e) => handleAnswerChange(question._id, e.target.value)}
              disabled={showResults}
              className={showResults ? (isCorrect ? "border-success" : "border-danger") : ""}
            />
          )}
        </Card.Body>
      </Card>
    );
  };

  if (isLoading) return <div className="text-center p-5">Loading quiz...</div>;
  if (!isFaculty) return null;
  if (!quiz || questions.length === 0)
    return (
      <div className="text-center p-5">
        <Alert variant="warning">
          <h4>Quiz Preview Not Available</h4>
          <p>This quiz has no questions yet. Please add questions to preview the quiz.</p>
          <Button variant="primary" onClick={handleEditQuiz}>Edit Quiz</Button>
        </Alert>
      </div>
    );

  return (
    <div className="container mt-4">
      <h2>{quiz.title}</h2>
      {questions.map((q, idx) => renderQuestion(q, idx))}
      {!showResults && (
        <Button className="mt-3" variant="success" onClick={handleSubmit}>
          Submit Quiz
        </Button>
      )}
    </div>
  );
}

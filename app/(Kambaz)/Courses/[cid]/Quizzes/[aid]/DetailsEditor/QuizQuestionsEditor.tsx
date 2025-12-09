/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import { useRouter, useParams } from "next/navigation";
import { Button, Col, Form, FormControl, FormLabel, FormSelect, Row, Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { RootState } from "../../../../../store";
import * as client from "./client";
import { setQuestions, addQuestion, updateQuestion, deleteQuestion } from "./reducer";
import { FaPlus, FaTrash, FaPencilAlt } from "react-icons/fa";

interface QuizQuestionsEditorProps {
  quiz: any;
  setQuiz: (quiz: any) => void;
}

export default function QuizQuestionsEditor({ quiz, setQuiz }: QuizQuestionsEditorProps) {
  const [editingQuestion, setEditingQuestion] = useState<any>(null);
  const [isNewQuestion, setIsNewQuestion] = useState(false);

  const handleAddQuestion = () => {
    const newQuestion = {
      _id: `temp-${Date.now()}`,
      title: "New Question",
      type: "multiple-choice",
      points: 1,
      question: "",
      choices: [
        { text: "Option 1", isCorrect: true },
        { text: "Option 2", isCorrect: false },
        { text: "Option 3", isCorrect: false },
        { text: "Option 4", isCorrect: false }
      ],
    };
    setEditingQuestion(newQuestion);
    setIsNewQuestion(true);
  };

  const handleSaveQuestion = () => {
    const updatedQuestions = isNewQuestion
      ? [...quiz.questions, editingQuestion]
      : quiz.questions.map((q: { _id: any; }) =>
          q._id === editingQuestion._id ? editingQuestion : q
        );
  
    const updatedQuiz = { ...quiz, questions: updatedQuestions };
    setQuiz(updatedQuiz);
  
    setEditingQuestion(null);
    setIsNewQuestion(false);
  };

  const handleCancelEdit = () => {
    setEditingQuestion(null);
    setIsNewQuestion(false);
  };

  const handleEditQuestion = (question: any) => {
    setEditingQuestion({ ...question });
    setIsNewQuestion(false);
  };
  
  const handleDeleteQuestion = (questionId: string) => {
    if (window.confirm("Are you sure you want to delete this question?")) {
      const updatedQuestions = quiz.questions.filter((q: any) => q._id !== questionId);
      setQuiz({ ...quiz, questions: updatedQuestions });
      // If currently editing this question, cancel editing
      if (editingQuestion?._id === questionId) {
        setEditingQuestion(null);
        setIsNewQuestion(false);
      }
    }
  };

  // Calculate total points
  const totalPoints = quiz.questions?.reduce((sum: number, q: any) => sum + (q.points || 0), 0) || 0;

  // Render question editor based on type
  const renderQuestionEditor = () => {
    if (!editingQuestion) return null;

    return (
      <Card className="mb-4 p-4">
        <Form>
          {/* Question Type Selector */}
          <Row className="mb-3">
            <Col xs={3}>
              <FormLabel htmlFor="question-type" className="float-end">Question Type</FormLabel>
            </Col>
            <Col xs={9}>
              <FormSelect
                id="question-type"
                value={editingQuestion.type}
                onChange={(e) => {
                  const newType = e.target.value;
                  let updatedQuestion = { ...editingQuestion, type: newType };
                  
                  // Reset type-specific fields
                  if (newType === "multiple-choice") {
                    updatedQuestion.choices = [
                      { text: "Option 1", isCorrect: true },
                      { text: "Option 2", isCorrect: false },
                      { text: "Option 3", isCorrect: false },
                      { text: "Option 4", isCorrect: false }
                    ];
                    delete updatedQuestion.correctAnswer;
                    delete updatedQuestion.possibleAnswers;
                  } else if (newType === "true-false") {
                    updatedQuestion.correctAnswer = true;
                    delete updatedQuestion.choices;
                    delete updatedQuestion.possibleAnswers;
                  } else if (newType === "fill-blank") {
                    updatedQuestion.possibleAnswers = [""];
                    delete updatedQuestion.choices;
                    delete updatedQuestion.correctAnswer;
                  }
                  
                  setEditingQuestion(updatedQuestion);
                }}
              >
                <option value="multiple-choice">Multiple Choice</option>
                <option value="true-false">True/False</option>
                <option value="fill-blank">Fill in the Blank</option>
              </FormSelect>
            </Col>
          </Row>

          {/* Title */}
          <Row className="mb-3">
            <Col xs={3}>
              <FormLabel htmlFor="question-title" className="float-end">Title</FormLabel>
            </Col>
            <Col xs={9}>
              <FormControl
                id="question-title"
                value={editingQuestion.title}
                onChange={(e) => setEditingQuestion({ ...editingQuestion, title: e.target.value })}
                placeholder="Question title"
              />
            </Col>
          </Row>

          {/* Points */}
          <Row className="mb-3">
            <Col xs={3}>
              <FormLabel htmlFor="question-points" className="float-end">Points</FormLabel>
            </Col>
            <Col xs={9}>
              <FormControl
                id="question-points"
                type="number"
                value={editingQuestion.points}
                onChange={(e) => setEditingQuestion({ ...editingQuestion, points: parseInt(e.target.value) || 0 })}
              />
            </Col>
          </Row>

          {/* Question Text */}
          <Row className="mb-3">
            <Col xs={3}>
              <FormLabel htmlFor="question-text" className="float-end">Question</FormLabel>
            </Col>
            <Col xs={9}>
              <FormControl
                as="textarea"
                rows={3}
                id="question-text"
                value={editingQuestion.question}
                onChange={(e) => setEditingQuestion({ ...editingQuestion, question: e.target.value })}
                placeholder="Enter your question here"
              />
            </Col>
          </Row>

          {/* Type-specific fields */}
          {editingQuestion.type === "multiple-choice" && (
            <Row className="mb-3">
              <Col xs={3}>
                <FormLabel className="float-end">Choices</FormLabel>
              </Col>
              <Col xs={9}>
                {editingQuestion.choices?.map((choice: any, index: number) => (
                  <div key={index} className="mb-2 d-flex align-items-start">
                    <div className="me-2 mt-2">
                      <input
                        type="radio"
                        name="correct-answer"
                        checked={choice.isCorrect}
                        onChange={() => {
                          const newChoices = editingQuestion.choices.map((c: any, i: number) => ({
                            ...c,
                            isCorrect: i === index
                          }));
                          setEditingQuestion({ ...editingQuestion, choices: newChoices });
                        }}
                      />
                    </div>
                    <FormControl
                      as="textarea"
                      rows={2}
                      value={choice.text}
                      onChange={(e) => {
                        const newChoices = [...editingQuestion.choices];
                        newChoices[index].text = e.target.value;
                        setEditingQuestion({ ...editingQuestion, choices: newChoices });
                      }}
                      placeholder={`Choice ${index + 1}`}
                    />
                    <Button
                      variant="danger"
                      size="sm"
                      className="ms-2"
                      onClick={() => {
                        const newChoices = editingQuestion.choices.filter((_: any, i: number) => i !== index);
                        setEditingQuestion({ ...editingQuestion, choices: newChoices });
                      }}
                      disabled={editingQuestion.choices.length <= 2}
                    >
                      <FaTrash />
                    </Button>
                  </div>
                ))}
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={() => {
                    const newChoices = [...editingQuestion.choices, { text: "", isCorrect: false }];
                    setEditingQuestion({ ...editingQuestion, choices: newChoices });
                  }}
                >
                  <FaPlus className="me-2" /> Add Choice
                </Button>
              </Col>
            </Row>
          )}

          {editingQuestion.type === "true-false" && (
            <Row className="mb-3">
              <Col xs={3}>
                <FormLabel className="float-end">Correct Answer</FormLabel>
              </Col>
              <Col xs={9}>
                <div>
                  <Form.Check
                    type="radio"
                    label="True"
                    name="true-false-answer"
                    checked={editingQuestion.correctAnswer === true}
                    onChange={() => setEditingQuestion({ ...editingQuestion, correctAnswer: true })}
                  />
                  <Form.Check
                    type="radio"
                    label="False"
                    name="true-false-answer"
                    checked={editingQuestion.correctAnswer === false}
                    onChange={() => setEditingQuestion({ ...editingQuestion, correctAnswer: false })}
                  />
                </div>
              </Col>
            </Row>
          )}

          {editingQuestion.type === "fill-blank" && (
            <Row className="mb-3">
              <Col xs={3}>
                <FormLabel className="float-end">Possible Answers</FormLabel>
              </Col>
              <Col xs={9}>
                {editingQuestion.possibleAnswers?.map((answer: string, index: number) => (
                  <div key={index} className="mb-2 d-flex">
                    <FormControl
                      value={answer}
                      onChange={(e) => {
                        const newAnswers = [...editingQuestion.possibleAnswers];
                        newAnswers[index] = e.target.value;
                        setEditingQuestion({ ...editingQuestion, possibleAnswers: newAnswers });
                      }}
                      placeholder={`Correct answer ${index + 1}`}
                    />
                    <Button
                      variant="danger"
                      size="sm"
                      className="ms-2"
                      onClick={() => {
                        const newAnswers = editingQuestion.possibleAnswers.filter((_: any, i: number) => i !== index);
                        setEditingQuestion({ ...editingQuestion, possibleAnswers: newAnswers });
                      }}
                      disabled={editingQuestion.possibleAnswers.length <= 1}
                    >
                      <FaTrash />
                    </Button>
                  </div>
                ))}
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={() => {
                    const newAnswers = [...editingQuestion.possibleAnswers, ""];
                    setEditingQuestion({ ...editingQuestion, possibleAnswers: newAnswers });
                  }}
                >
                  <FaPlus className="me-2" /> Add Answer
                </Button>
              </Col>
            </Row>
          )}

          {/* Action Buttons */}
          <div className="d-flex justify-content-end gap-2 mt-4">
            <Button variant="secondary" onClick={handleCancelEdit}>
              Cancel
            </Button>
            <Button variant="danger" onClick={handleSaveQuestion}>
              {isNewQuestion ? "Save Question" : "Update Question"}
            </Button>
          </div>
        </Form>
      </Card>
    );
  };

  return (
    <div id="wd-quiz-questions-editor">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h4>Quiz Questions</h4>
        <div>
          <span className="me-3">Total Points: <strong>{totalPoints}</strong></span>
          <Button variant="danger" onClick={handleAddQuestion}>
            <FaPlus className="me-2" /> New Question
          </Button>
        </div>
      </div>

      {/* Question Editor (when editing/creating) */}
      {renderQuestionEditor()}

      {/* Questions List */}
      {(quiz.questions?.length || 0) === 0 && !editingQuestion && (
        <div className="text-center p-5 border rounded">
          <p className="text-muted">No questions yet. Click &quot;New Question&quot; to add one.</p>
        </div>
      )}

      {quiz.questions?.map((question: any, index: number) => (
        <Card key={question._id} className="mb-3">
          <Card.Body>
            <div className="d-flex justify-content-between align-items-start">
              <div className="flex-grow-1">
                <h5>
                  Question {index + 1}: {question.title}
                  <span className="badge bg-secondary ms-2 fs-6">{question.points} pts</span>
                </h5>
                <p className="text-muted mb-2">
                  Type: {question.type === "multiple-choice" ? "Multiple Choice" : 
                         question.type === "true-false" ? "True/False" : 
                         "Fill in the Blank"}
                </p>
                <p>{question.question}</p>

                {/* Preview based on type */}
                {question.type === "multiple-choice" && (
                  <div className="ms-3">
                    {question.choices?.map((choice: any, i: number) => (
                      <div key={i} className="mb-1">
                        <input type="radio" disabled checked={choice.isCorrect} className="me-2" />
                        {choice.text}
                        {choice.isCorrect && <span className="text-success ms-2">(Correct)</span>}
                      </div>
                    ))}
                  </div>
                )}

                {question.type === "true-false" && (
                  <div className="ms-3">
                    <p><strong>Correct Answer:</strong> {question.correctAnswer ? "True" : "False"}</p>
                  </div>
                )}

                {question.type === "fill-blank" && (
                  <div className="ms-3">
                    <p><strong>Possible Answers:</strong></p>
                    <ul>
                      {question.possibleAnswers?.map((answer: string, i: number) => (
                        <li key={i}>{answer}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              <div className="d-flex gap-2">
                <Button
                  variant="outline-primary"
                  size="sm"
                  onClick={() => handleEditQuestion(question)}
                >
                  <FaPencilAlt /> Edit
                </Button>
                <Button
                  variant="outline-danger"
                  size="sm"
                  onClick={() => handleDeleteQuestion(question._id)}
                >
                  <FaTrash /> Delete
                </Button>
              </div>
            </div>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}
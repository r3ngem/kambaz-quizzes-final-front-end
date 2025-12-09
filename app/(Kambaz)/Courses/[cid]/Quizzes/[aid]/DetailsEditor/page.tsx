/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useState } from "react";
import { Button, Col, Form, FormControl, FormLabel, FormSelect, Row, Card } from "react-bootstrap";
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
        { text: "Option 4", isCorrect: false },
      ],
    };
    setEditingQuestion(newQuestion);
    setIsNewQuestion(true);
  };

  const handleEditQuestion = (question: any) => {
    setEditingQuestion({ ...question });
    setIsNewQuestion(false);
  };

  const handleCancelEdit = () => {
    setEditingQuestion(null);
    setIsNewQuestion(false);
  };

  const handleSaveQuestion = () => {
    if (isNewQuestion) {
      setQuiz({ ...quiz, questions: [...quiz.questions, editingQuestion] });
    } else {
      const updatedQuestions = quiz.questions.map((q: any) =>
        q._id === editingQuestion._id ? editingQuestion : q
      );
      setQuiz({ ...quiz, questions: updatedQuestions });
    }
    setEditingQuestion(null);
    setIsNewQuestion(false);
  };

  const handleDeleteQuestion = (questionId: string) => {
    if (window.confirm("Are you sure you want to delete this question?")) {
      const filtered = quiz.questions.filter((q: any) => q._id !== questionId);
      setQuiz({ ...quiz, questions: filtered });
    }
  };

  // Total points
  const totalPoints = quiz.questions.reduce((sum: number, q: any) => sum + (q.points || 0), 0);

  const renderQuestionEditor = () => {
    if (!editingQuestion) return null;

    return (
      <Card className="mb-4 p-4">
        <Form>
          {/* Question Type */}
          <Row className="mb-3">
            <Col xs={3}>
              <FormLabel className="float-end">Question Type</FormLabel>
            </Col>
            <Col xs={9}>
              <FormSelect
                value={editingQuestion.type}
                onChange={(e) => {
                  const newType = e.target.value;
                  let updatedQuestion = { ...editingQuestion, type: newType };

                  if (newType === "multiple-choice") {
                    updatedQuestion.choices = [
                      { text: "Option 1", isCorrect: true },
                      { text: "Option 2", isCorrect: false },
                      { text: "Option 3", isCorrect: false },
                      { text: "Option 4", isCorrect: false },
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
              <FormLabel className="float-end">Title</FormLabel>
            </Col>
            <Col xs={9}>
              <FormControl
                value={editingQuestion.title}
                onChange={(e) => setEditingQuestion({ ...editingQuestion, title: e.target.value })}
                placeholder="Question title"
              />
            </Col>
          </Row>

          {/* Points */}
          <Row className="mb-3">
            <Col xs={3}>
              <FormLabel className="float-end">Points</FormLabel>
            </Col>
            <Col xs={9}>
              <FormControl
                type="number"
                value={editingQuestion.points}
                onChange={(e) => setEditingQuestion({ ...editingQuestion, points: parseInt(e.target.value) || 0 })}
              />
            </Col>
          </Row>

          {/* Question Text */}
          <Row className="mb-3">
            <Col xs={3}>
              <FormLabel className="float-end">Question</FormLabel>
            </Col>
            <Col xs={9}>
              <FormControl
                as="textarea"
                rows={3}
                value={editingQuestion.question}
                onChange={(e) => setEditingQuestion({ ...editingQuestion, question: e.target.value })}
                placeholder="Enter your question here"
              />
            </Col>
          </Row>

          {/* Type-specific fields */}
          {editingQuestion.type === "multiple-choice" && (
            <Row className="mb-3">
              <Col xs={3}><FormLabel className="float-end">Choices</FormLabel></Col>
              <Col xs={9}>
                {editingQuestion.choices?.map((choice: any, index: number) => (
                  <div key={index} className="mb-2 d-flex align-items-start">
                    <input
                      type="radio"
                      name="correct-answer"
                      checked={choice.isCorrect}
                      onChange={() => {
                        const newChoices = editingQuestion.choices.map((c: any, i: number) => ({ ...c, isCorrect: i === index }));
                        setEditingQuestion({ ...editingQuestion, choices: newChoices });
                      }}
                      className="me-2 mt-2"
                    />
                    <FormControl
                      as="textarea"
                      rows={2}
                      value={choice.text}
                      onChange={(e) => {
                        const newChoices = [...editingQuestion.choices];
                        newChoices[index].text = e.target.value;
                        setEditingQuestion({ ...editingQuestion, choices: newChoices });
                      }}
                    />
                    <Button
                      variant="danger"
                      size="sm"
                      className="ms-2"
                      disabled={editingQuestion.choices.length <= 2}
                      onClick={() => {
                        const newChoices = editingQuestion.choices.filter((_: any, i: number) => i !== index);
                        setEditingQuestion({ ...editingQuestion, choices: newChoices });
                      }}
                    >
                      <FaTrash />
                    </Button>
                  </div>
                ))}
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={() => setEditingQuestion({ ...editingQuestion, choices: [...editingQuestion.choices, { text: "", isCorrect: false }] })}
                >
                  <FaPlus className="me-2" /> Add Choice
                </Button>
              </Col>
            </Row>
          )}

          {editingQuestion.type === "true-false" && (
            <Row className="mb-3">
              <Col xs={3}><FormLabel className="float-end">Correct Answer</FormLabel></Col>
              <Col xs={9}>
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
              </Col>
            </Row>
          )}

          {editingQuestion.type === "fill-blank" && (
            <Row className="mb-3">
              <Col xs={3}><FormLabel className="float-end">Possible Answers</FormLabel></Col>
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
                    />
                    <Button
                      variant="danger"
                      size="sm"
                      className="ms-2"
                      disabled={editingQuestion.possibleAnswers.length <= 1}
                      onClick={() => {
                        const newAnswers = editingQuestion.possibleAnswers.filter((_: any, i: number) => i !== index);
                        setEditingQuestion({ ...editingQuestion, possibleAnswers: newAnswers });
                      }}
                    >
                      <FaTrash />
                    </Button>
                  </div>
                ))}
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={() => setEditingQuestion({ ...editingQuestion, possibleAnswers: [...editingQuestion.possibleAnswers, ""] })}
                >
                  <FaPlus className="me-2" /> Add Answer
                </Button>
              </Col>
            </Row>
          )}

          {/* Action Buttons */}
          <div className="d-flex justify-content-end gap-2 mt-4">
            <Button variant="secondary" onClick={handleCancelEdit}>Cancel</Button>
            <Button variant="danger" onClick={handleSaveQuestion}>{isNewQuestion ? "Save Question" : "Update Question"}</Button>
          </div>
        </Form>
      </Card>
    );
  };

  return (
    <div>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h4>Questions</h4>
        <div>
          <span className="me-3">Total Points: <strong>{totalPoints}</strong></span>
          <Button variant="danger" onClick={handleAddQuestion}><FaPlus className="me-2" /> New Question</Button>
        </div>
      </div>

      {renderQuestionEditor()}

      {quiz.questions.length === 0 && !editingQuestion && (
        <div className="text-center p-5 border rounded">
          <p className="text-muted">No questions yet. Click "New Question" to add one.</p>
        </div>
      )}

      {quiz.questions.map((question: any, index: number) => (
        <Card key={question._id} className="mb-3">
          <Card.Body>
            <div className="d-flex justify-content-between align-items-start">
              <div className="flex-grow-1">
                <h5>Question {index + 1}: {question.title} <span className="badge bg-secondary ms-2 fs-6">{question.points} pts</span></h5>
                <p className="text-muted mb-2">
                  Type: {question.type === "multiple-choice" ? "Multiple Choice" :
                         question.type === "true-false" ? "True/False" :
                         "Fill in the Blank"}
                </p>
                <p>{question.question}</p>
              </div>
              <div className="d-flex gap-2">
                <Button variant="outline-primary" size="sm" onClick={() => handleEditQuestion(question)}><FaPencilAlt /> Edit</Button>
                <Button variant="outline-danger" size="sm" onClick={() => handleDeleteQuestion(question._id)}><FaTrash /> Delete</Button>
              </div>
            </div>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}
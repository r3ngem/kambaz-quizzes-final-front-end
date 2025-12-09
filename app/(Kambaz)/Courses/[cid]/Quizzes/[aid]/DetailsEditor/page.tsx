/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import { useRouter, useParams } from "next/navigation";
import { Button, Col, Form, FormControl, FormLabel, FormSelect, InputGroup, Row, Nav } from "react-bootstrap";
import InputGroupText from "react-bootstrap/esm/InputGroupText";
import { FaRegCalendarAlt } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { RootState } from "../../../../../store";
import * as client from "./client";
import { setQuizzes, addQuiz, updateQuiz } from "./reducer";
import QuizQuestionsEditor from "./QuizQuestionsEditor";

interface Quiz {
  _id?: string;
  title: string;
  description: string;
  type: string;
  points: number;
  assignmentGroup: string;
  shuffleAnswers: boolean;
  timeLimitMinutes: number;
  multipleAttempts: boolean;
  howManyAttempts: number;
  showCorrectAnswers: string;
  accessCode: string;
  oneQuestionAtATime: boolean;
  webcamRequired: boolean;
  lockQuestionsAfterAnswering: boolean;
  dueDate: string;
  availableDate: string;
  untilDate: string;
  published: boolean;
  courseId: string;
  questions?: any[];
}

export default function QuizEditor() {
  const { cid, qid } = useParams();
  const router = useRouter();
  const { quizzes } = useSelector((state: RootState) => state.quizReducer) as { quizzes: Quiz[] };
  const dispatch = useDispatch();

  const [activeTab, setActiveTab] = useState("details");
  const [quiz, setQuiz] = useState<Quiz | null>(null); // lazy init

  // Load existing quiz or create new one
  useEffect(() => {
    if (qid && quizzes.length > 0) {
      const existingQuiz = quizzes.find(q => q._id === qid);
      if (existingQuiz) {
        setQuiz({
          ...existingQuiz,
          questions: existingQuiz.questions || [],
        });
        return;
      }
    }
    // New quiz
    setQuiz({
      title: "Unnamed Quiz",
      description: "",
      type: "Graded Quiz",
      points: 0,
      assignmentGroup: "Quizzes",
      shuffleAnswers: true,
      timeLimitMinutes: 20,
      multipleAttempts: false,
      howManyAttempts: 1,
      showCorrectAnswers: "",
      accessCode: "",
      oneQuestionAtATime: true,
      webcamRequired: false,
      lockQuestionsAfterAnswering: false,
      dueDate: "",
      availableDate: "",
      untilDate: "",
      published: false,
      courseId: cid as string,
      questions: [],
    });
  }, [qid, quizzes, cid]);

  if (!quiz) return <p>Loading quiz...</p>; // wait until quiz is loaded

  const handleSave = async (publish = false) => {
    try {
      const questionsToSave = quiz.questions?.map(q => {
        if (q._id?.startsWith("temp-")) {
          const { _id, ...rest } = q;
          return rest;
        }
        return q;
      });

      const quizToSave = { ...quiz, published: publish, questions: questionsToSave };

      let savedQuiz;
      if (quiz._id) {
        savedQuiz = await client.updateQuiz(quizToSave);
        dispatch(updateQuiz(savedQuiz));
      } else {
        savedQuiz = await client.createQuizForCourse(cid as string, quizToSave);
        dispatch(addQuiz(savedQuiz));
      }

      router.push(publish ? `/Courses/${cid}/Quizzes` : `/Courses/${cid}/Quizzes/${savedQuiz._id}`);
    } catch (err) {
      console.error("Failed to save quiz:", err);
      alert("Failed to save quiz. Please try again.");
    }
  };

  const handleCancel = () => {
    router.push(`/Courses/${cid}/Quizzes`);
  };

  return (
    <div id="wd-quiz-editor">
      {/* Tab Navigation */}
      <Nav variant="tabs" className="mb-4">
        <Nav.Item>
          <Nav.Link active={activeTab === "details"} onClick={() => setActiveTab("details")}>
            Details
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link active={activeTab === "questions"} onClick={() => setActiveTab("questions")}>
            Questions
          </Nav.Link>
        </Nav.Item>
      </Nav>

      {/* Details Tab */}
      {activeTab === "details" && (
        <Form>
          {/* Title */}
          <div className="form-group mb-3">
            <FormControl 
              value={quiz.title} 
              onChange={(e) => setQuiz({ ...quiz, title: e.target.value })} 
              placeholder="Quiz Title"
            />
          </div>

          {/* Description */}
          <div className="form-group mb-3">
            <FormLabel>Quiz Instructions:</FormLabel>
            <FormControl 
              as="textarea" 
              rows={5}
              value={quiz.description}
              onChange={(e) => setQuiz({ ...quiz, description: e.target.value })} 
              placeholder="Enter quiz description or instructions..."
            />
          </div>

          {/* Quiz Type */}
          <Row className="mb-3">
            <Col xs={3}>
              <FormLabel className="float-end">Quiz Type</FormLabel>
            </Col>
            <Col xs={9}>
              <FormSelect 
                value={quiz.type}
                onChange={(e) => setQuiz({ ...quiz, type: e.target.value })}
              >
                <option>Graded Quiz</option>
                <option>Practice Quiz</option>
                <option>Graded Survey</option>
                <option>Ungraded Survey</option>
              </FormSelect>
            </Col>
          </Row>

          {/* Assignment Group */}
          <Row className="mb-3">
            <Col xs={3}>
              <FormLabel className="float-end">Assignment Group</FormLabel>
            </Col>
            <Col xs={9}>
              <FormSelect 
                value={quiz.assignmentGroup}
                onChange={(e) => setQuiz({ ...quiz, assignmentGroup: e.target.value })}
              >
                <option>Quizzes</option>
                <option>Exams</option>
                <option>Assignments</option>
                <option>Project</option>
              </FormSelect>
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
                value={quiz.points}
                onChange={(e) => setQuiz({ ...quiz, points: parseInt(e.target.value) || 0 })}
              />
            </Col>
          </Row>

          {/* Additional options omitted for brevity, keep your original options here */}
        </Form>
      )}

      {/* Questions Tab */}
      {activeTab === "questions" && <QuizQuestionsEditor quiz={quiz} setQuiz={setQuiz} />}

      {/* Buttons */}
      <hr />
      <div className="d-flex justify-content-end gap-2 mb-3">
        <Button variant="secondary" size="lg" onClick={handleCancel}>Cancel</Button>
        <Button variant="outline-danger" size="lg" onClick={() => handleSave(true)}>Save & Publish</Button>
        <Button variant="danger" size="lg" onClick={() => handleSave(false)}>Save</Button>
      </div>
    </div>
  );
}

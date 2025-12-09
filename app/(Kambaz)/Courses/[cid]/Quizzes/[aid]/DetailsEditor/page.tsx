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

export default function QuizEditor() {
  const { cid, qid } = useParams();
  const router = useRouter();
  const { quizzes } = useSelector((state: RootState) => state.quizReducer);
  const dispatch = useDispatch();

  const [activeTab, setActiveTab] = useState("details");
  const [quiz, setQuiz] = useState<any>({
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
    courseId: cid,
    questions: [],
  });

  useEffect(() => {
    const fetchQuizzes = async () => {
      if (!cid) return;
      const fetchedQuizzes = await client.findQuizzesForCourse(cid as string);
      dispatch(setQuizzes(fetchedQuizzes));

      if (qid) {
        const existingQuiz = fetchedQuizzes.find((q: any) => q._id === qid);
        if (existingQuiz) setQuiz(existingQuiz);
      }
    };
    fetchQuizzes();
  }, [cid, qid, dispatch]);

  const handleSave = async (publish = false) => {
    try {
      const quizToSave = {
        ...quiz,
        published: publish,
        dueDate: quiz.dueDate ? new Date(quiz.dueDate) : null,
        availableDate: quiz.availableDate ? new Date(quiz.availableDate) : null,
        untilDate: quiz.untilDate ? new Date(quiz.untilDate) : null,
      };

      if (quiz._id) {
        const updatedQuiz = await client.updateQuiz(quizToSave);
        setQuiz(updatedQuiz);
        dispatch(updateQuiz(updatedQuiz));
        router.push(publish ? `/Courses/${cid}/Quizzes` : `/Courses/${cid}/Quizzes/${quiz._id}`);
      } else {
        const newQuiz = await client.createQuizForCourse(cid as string, quizToSave);
        setQuiz(newQuiz);
        dispatch(addQuiz(newQuiz));
        router.push(publish ? `/Courses/${cid}/Quizzes` : `/Courses/${cid}/Quizzes/${newQuiz._id}`);
      }
    } catch (error) {
      console.error("Error saving quiz:", error);
      alert("Failed to save quiz. Please try again.");
    }
  };

  const handleCancel = () => {
    router.push(`/Courses/${cid}/Quizzes`);
  };

  return (
    <div id="wd-quiz-editor">
      <Nav variant="tabs" className="mb-4">
        <Nav.Item>
          <Nav.Link active={activeTab === "details"} onClick={() => setActiveTab("details")}>Details</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link active={activeTab === "questions"} onClick={() => setActiveTab("questions")}>Questions</Nav.Link>
        </Nav.Item>
      </Nav>

      {activeTab === "details" && (
        <Form>
          {/* Title */}
          <Form.Group className="mb-3">
            <FormControl 
              value={quiz.title} 
              onChange={(e) => setQuiz({ ...quiz, title: e.target.value })} 
              placeholder="Quiz Title"
            />
          </Form.Group>

          {/* Description */}
          <Form.Group className="mb-3">
            <FormLabel>Quiz Instructions:</FormLabel>
            <FormControl 
              as="textarea" 
              rows={5} 
              value={quiz.description} 
              onChange={(e) => setQuiz({ ...quiz, description: e.target.value })} 
            />
          </Form.Group>

          {/* Type, Points, Assignment Group */}
          <Row className="mb-3">
            <Col xs={3}><FormLabel className="float-end">Quiz Type</FormLabel></Col>
            <Col xs={9}>
              <FormSelect value={quiz.type} onChange={(e) => setQuiz({ ...quiz, type: e.target.value })}>
                <option>Graded Quiz</option>
                <option>Practice Quiz</option>
                <option>Graded Survey</option>
                <option>Ungraded Survey</option>
              </FormSelect>
            </Col>
          </Row>

          <Row className="mb-3">
            <Col xs={3}><FormLabel className="float-end">Points</FormLabel></Col>
            <Col xs={9}>
              <FormControl
                type="number"
                value={quiz.points}
                onChange={(e) => setQuiz({ ...quiz, points: parseInt(e.target.value) || 0 })}
              />
            </Col>
          </Row>

          <Row className="mb-3">
            <Col xs={3}><FormLabel className="float-end">Assignment Group</FormLabel></Col>
            <Col xs={9}>
              <FormSelect value={quiz.assignmentGroup} onChange={(e) => setQuiz({ ...quiz, assignmentGroup: e.target.value })}>
                <option>Quizzes</option>
                <option>Exams</option>
                <option>Assignments</option>
                <option>Project</option>
              </FormSelect>
            </Col>
          </Row>

          {/* Options Section */}
          <div className="border p-3 mb-3">
            <h5>Options</h5>
            {/* Shuffle, Time Limit, Multiple Attempts, etc. */}
            {/* Keep your existing options logic here */}
          </div>

          {/* Assign Section */}
          <div className="border p-3 mb-3">
            <h5>Assign</h5>
            {/* Assign To, Due Date, Available Dates */}
            {/* Keep your existing assign section logic here */}
          </div>
        </Form>
      )}

      {activeTab === "questions" && (
        <QuizQuestionsEditor quiz={quiz} setQuiz={setQuiz} />
      )}

      <hr />
      <div className="d-flex justify-content-end gap-2 mb-3">
        <Button variant="secondary" size="lg" onClick={handleCancel}>Cancel</Button>
        <Button variant="outline-danger" size="lg" onClick={() => handleSave(true)}>Save & Publish</Button>
        <Button variant="danger" size="lg" onClick={() => handleSave(false)}>Save</Button>
      </div>
    </div>
  );
}

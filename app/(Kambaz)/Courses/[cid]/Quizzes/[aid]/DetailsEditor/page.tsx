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
  _id?: string;              // optional, because new quizzes won't have it yet
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
  questions?: any[];         // optional, array of questions
}

export default function QuizEditor() {
  const { cid, qid } = useParams();
  const router = useRouter();
  const { quizzes } = useSelector((state: RootState) => state.quizReducer);
  const current = quizzes.find((q: any) => q._id === qid);
  const dispatch = useDispatch();

  const [activeTab, setActiveTab] = useState("details");
  const [quiz, setQuiz] = useState<Quiz>({
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
  
  // update quiz state when quizzes are loaded
  useEffect(() => {
    if (qid && quizzes.length > 0) {
      const current = quizzes.find((q: any) => q._id === qid);
      if (current) setQuiz(current);
    }
  }, [qid, quizzes]);

  const handleSave = async (publish = false) => {
    try {
      // Prepare full quiz object
      const quizToSave = { ...quiz, published: publish };
  
      let savedQuiz;
      if (quiz._id) {
        // Update existing quiz
        savedQuiz = await client.updateQuiz(quizToSave);
        dispatch(updateQuiz(savedQuiz));
      } else {
        // Create new quiz
        savedQuiz = await client.createQuizForCourse(cid as string, quizToSave);
        dispatch(addQuiz(savedQuiz));
      }
  
      // Navigate appropriately
      if (publish) {
        router.push(`/Courses/${cid}/Quizzes`);
      } else {
        router.push(`/Courses/${cid}/Quizzes/${savedQuiz._id}`);
      }
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
          <Nav.Link 
            active={activeTab === "details"}
            onClick={() => setActiveTab("details")}
          >
            Details
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link 
            active={activeTab === "questions"}
            onClick={() => setActiveTab("questions")}
          >
            Questions
          </Nav.Link>
        </Nav.Item>
      </Nav>

      {/* Details Tab Content */}
      {activeTab === "details" && (
        <Form>
          {/* Title */}
          <div className="form-group mb-3">
            <FormControl 
              id="wd-quiz-title" 
              value={quiz.title} 
              onChange={(e) => setQuiz({ ...quiz, title: e.target.value })} 
              placeholder="Quiz Title"
            />
          </div>

          {/* Description */}
          <div className="form-group mb-3">
            <FormLabel htmlFor="wd-quiz-description">Quiz Instructions:</FormLabel>
            <FormControl 
              as="textarea" 
              id="wd-quiz-description" 
              rows={5}
              value={quiz.description}
              onChange={(e) => setQuiz({ ...quiz, description: e.target.value })} 
              placeholder="Enter quiz description or instructions..."
            />
          </div>

          {/* Quiz Type */}
          <Row className="mb-3">
            <Col xs={3}>
              <FormLabel htmlFor="wd-quiz-type" className="float-end">Quiz Type</FormLabel>
            </Col>
            <Col xs={9}>
              <FormSelect 
                id="wd-quiz-type"
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
              <FormLabel htmlFor="wd-assignment-group" className="float-end">Assignment Group</FormLabel>
            </Col>
            <Col xs={9}>
              <FormSelect 
                id="wd-assignment-group"
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
              <FormLabel htmlFor="wd-quiz-points" className="float-end">Points</FormLabel>
            </Col>
            <Col xs={9}>
              <FormControl 
                id="wd-quiz-points" 
                type="number"
                value={quiz.points}
                onChange={(e) => setQuiz({ ...quiz, points: parseInt(e.target.value) || 0 })}
              />
            </Col>
          </Row>

          {/* Options Section */}
          <div className="border p-3 mb-3">
            <h5>Options</h5>

            {/* Shuffle Answers */}
            <Row className="mb-3">
              <Col xs={3}>
                <FormLabel htmlFor="wd-shuffle-answers" className="float-end">Shuffle Answers</FormLabel>
              </Col>
              <Col xs={9}>
                <FormSelect 
                  id="wd-shuffle-answers"
                  value={quiz.shuffleAnswers ? "Yes" : "No"}
                  onChange={(e) => setQuiz({ ...quiz, shuffleAnswers: e.target.value === "Yes" })}
                >
                  <option>Yes</option>
                  <option>No</option>
                </FormSelect>
              </Col>
            </Row>

            {/* Time Limit */}
            <Row className="mb-3">
              <Col xs={3}>
                <FormLabel htmlFor="wd-time-limit" className="float-end">Time Limit</FormLabel>
              </Col>
              <Col xs={9}>
                <InputGroup>
                  <FormControl 
                    id="wd-time-limit"
                    type="number"
                    value={quiz.timeLimitMinutes}
                    onChange={(e) => setQuiz({ ...quiz, timeLimitMinutes: parseInt(e.target.value) || 20 })}
                  />
                  <InputGroupText>Minutes</InputGroupText>
                </InputGroup>
              </Col>
            </Row>

            {/* Multiple Attempts */}
            <Row className="mb-3">
              <Col xs={3}>
                <FormLabel htmlFor="wd-multiple-attempts" className="float-end">Multiple Attempts</FormLabel>
              </Col>
              <Col xs={9}>
                <FormSelect 
                  id="wd-multiple-attempts"
                  value={quiz.multipleAttempts ? "Yes" : "No"}
                  onChange={(e) => setQuiz({ ...quiz, multipleAttempts: e.target.value === "Yes" })}
                >
                  <option>No</option>
                  <option>Yes</option>
                </FormSelect>
              </Col>
            </Row>

            {/* How Many Attempts (only show if Multiple Attempts is Yes) */}
            {quiz.multipleAttempts && (
              <Row className="mb-3">
                <Col xs={3}>
                  <FormLabel htmlFor="wd-max-attempts" className="float-end">How Many Attempts</FormLabel>
                </Col>
                <Col xs={9}>
                  <FormControl 
                    id="wd-max-attempts"
                    type="number"
                    min="1"
                    value={quiz.howManyAttempts || 1}
                    onChange={(e) => setQuiz({ ...quiz, howManyAttempts: parseInt(e.target.value) || 1 })}
                  />
                </Col>
              </Row>
            )}

            {/* Show Correct Answers */}
            <Row className="mb-3">
              <Col xs={3}>
                <FormLabel htmlFor="wd-show-correct-answers" className="float-end">Show Correct Answers</FormLabel>
              </Col>
              <Col xs={9}>
                <FormControl 
                  id="wd-show-correct-answers"
                  value={quiz.showCorrectAnswers}
                  onChange={(e) => setQuiz({ ...quiz, showCorrectAnswers: e.target.value })}
                  placeholder="e.g., Immediately after submission"
                />
              </Col>
            </Row>

            {/* Access Code */}
            <Row className="mb-3">
              <Col xs={3}>
                <FormLabel htmlFor="wd-access-code" className="float-end">Access Code</FormLabel>
              </Col>
              <Col xs={9}>
                <FormControl 
                  id="wd-access-code"
                  value={quiz.accessCode}
                  onChange={(e) => setQuiz({ ...quiz, accessCode: e.target.value })}
                  placeholder="Optional access code"
                />
              </Col>
            </Row>

            {/* One Question at a Time */}
            <Row className="mb-3">
              <Col xs={3}>
                <FormLabel htmlFor="wd-one-question-at-time" className="float-end">One Question at a Time</FormLabel>
              </Col>
              <Col xs={9}>
                <FormSelect 
                  id="wd-one-question-at-time"
                  value={quiz.oneQuestionAtATime ? "Yes" : "No"}
                  onChange={(e) => setQuiz({ ...quiz, oneQuestionAtATime: e.target.value === "Yes" })}
                >
                  <option>Yes</option>
                  <option>No</option>
                </FormSelect>
              </Col>
            </Row>

            {/* Webcam Required */}
            <Row className="mb-3">
              <Col xs={3}>
                <FormLabel htmlFor="wd-webcam-required" className="float-end">Webcam Required</FormLabel>
              </Col>
              <Col xs={9}>
                <FormSelect 
                  id="wd-webcam-required"
                  value={quiz.webcamRequired ? "Yes" : "No"}
                  onChange={(e) => setQuiz({ ...quiz, webcamRequired: e.target.value === "Yes" })}
                >
                  <option>No</option>
                  <option>Yes</option>
                </FormSelect>
              </Col>
            </Row>

            {/* Lock Questions After Answering */}
            <Row className="mb-3">
              <Col xs={3}>
                <FormLabel htmlFor="wd-lock-questions" className="float-end">Lock Questions After Answering</FormLabel>
              </Col>
              <Col xs={9}>
                <FormSelect 
                  id="wd-lock-questions"
                  value={quiz.lockQuestionsAfterAnswering ? "Yes" : "No"}
                  onChange={(e) => setQuiz({ ...quiz, lockQuestionsAfterAnswering: e.target.value === "Yes" })}
                >
                  <option>No</option>
                  <option>Yes</option>
                </FormSelect>
              </Col>
            </Row>
          </div>

          {/* Assign Section */}
          <div className="border p-3 mb-3">
            <h5>Assign</h5>

            {/* Assign To */}
            <Row className="mb-3">
              <FormLabel htmlFor="wd-assign-to"><b>Assign To</b></FormLabel>
              <FormControl 
                id="wd-assign-to" 
                placeholder="Everyone" 
                defaultValue="Everyone"
              />
            </Row>

            {/* Due Date */}
            <Row className="mb-3">
              <Col>
                <FormLabel htmlFor="wd-due-date"><b>Due</b></FormLabel>
                <InputGroup>
                  <FormControl 
                    id="wd-due-date" 
                    type="date"
                    value={quiz.dueDate} 
                    onChange={(e) => setQuiz({ ...quiz, dueDate: e.target.value })}
                  />
                  <InputGroupText><FaRegCalendarAlt /></InputGroupText>
                </InputGroup>
              </Col>
            </Row>

            {/* Available From and Until */}
            <Row className="mb-3">
              <Col>
                <FormLabel htmlFor="wd-available-from"><b>Available from</b></FormLabel>
                <InputGroup>
                  <FormControl 
                    id="wd-available-from" 
                    type="date"
                    value={quiz.availableDate} 
                    onChange={(e) => setQuiz({ ...quiz, availableDate: e.target.value })}
                  />
                  <InputGroupText><FaRegCalendarAlt /></InputGroupText>
                </InputGroup>
              </Col>
              <Col>
                <FormLabel htmlFor="wd-available-until"><b>Until</b></FormLabel>
                <InputGroup>
                  <FormControl 
                    id="wd-available-until" 
                    type="date"
                    value={quiz.untilDate}
                    onChange={(e) => setQuiz({ ...quiz, untilDate: e.target.value })} 
                  />
                  <InputGroupText><FaRegCalendarAlt /></InputGroupText>
                </InputGroup>
              </Col>
            </Row>
          </div>
        </Form>
      )}
      {/* Questions Tab */}
      {activeTab === "questions" && ( 
        <QuizQuestionsEditor quiz={quiz} setQuiz={setQuiz} />
      )}

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

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
  const [quiz, setQuiz] = useState<Quiz | null>(null);

  useEffect(() => {
    // Convert useParams values to strings safely
    const courseId = Array.isArray(cid) ? cid[0] : cid;
    const quizId = Array.isArray(qid) ? qid[0] : qid;
  
    if (!courseId) return; // safety check
  
    const loadQuiz = async () => {
      try {
        // If quizzes not loaded, fetch them
        if (!quizzes || quizzes.length === 0) {
          const fetchedQuizzes = await client.findQuizzesForCourse(courseId);
          dispatch(setQuizzes(fetchedQuizzes));
        }
  
        // If editing an existing quiz
        if (quizId) {
          const existingQuiz = quizzes?.find(q => q._id === quizId);
          if (existingQuiz) {
            setQuiz({ ...existingQuiz, questions: existingQuiz.questions || [] });
            return;
          }
        }
  
        // Otherwise, create a new quiz
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
          courseId,
          questions: [],
        });
      } catch (err) {
        console.error("Failed to load quiz:", err);
        alert("Error loading quiz. Please try again.");
      }
    };
  
    loadQuiz();
  }, [cid, qid, quizzes, dispatch]);
  
  
  if (!quiz) return <p>Loading quiz...</p>;

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
              onChange={(e) => quiz && setQuiz({ ...quiz, title: e.target.value })}
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
      {activeTab === "questions" && quiz && (
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

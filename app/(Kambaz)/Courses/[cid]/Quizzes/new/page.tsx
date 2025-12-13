/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import { useRouter, useParams } from "next/navigation";
import { Button, Col, Form, FormControl, FormLabel, FormSelect, InputGroup, Row } from "react-bootstrap";
import InputGroupText from "react-bootstrap/esm/InputGroupText";
import { FaRegCalendarAlt } from "react-icons/fa";
import { useSelector } from "react-redux";
import { useState } from "react";
import * as client from "../client";

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
  questions: any[];
}

export default function NewQuiz() {
  const { cid } = useParams();
  const router = useRouter();
  const { currentUser } = useSelector((state: any) => state.accountReducer);

  const courseId = Array.isArray(cid) ? cid[0] : cid;

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
    courseId: courseId || "",
    questions: [],
  });

  const handleSave = async (publish = false) => {
    try {
      const quizToSave = { 
        ...quiz, 
        _id: `quiz-${Date.now()}`,
        published: publish,
        creatorId: currentUser?._id || "unknown"
      };

      const savedQuiz = await client.createQuizForCourse(courseId as string, quizToSave);

      // Redirect to editor to add questions, or to quiz list if published
      if (publish) {
        router.push(`/Courses/${cid}/Quizzes`);
      } else {
        router.push(`/Courses/${cid}/Quizzes/${savedQuiz._id}/DetailsEditor`);
      }
    } catch (err) {
      console.error("Failed to create quiz:", err);
      alert("Failed to create quiz. Please try again.");
    }
  };

  const handleCancel = () => {
    router.push(`/Courses/${cid}/Quizzes`);
  };

  return (
    <div id="wd-new-quiz">
      <h2>Create New Quiz</h2>
      <hr />

      <Form>
        {/* Title */}
        <div className="form-group mb-3">
          <FormLabel>Quiz Title</FormLabel>
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

        {/* Options Section */}
        <div className="border p-3 mb-3">
          <h5>Options</h5>

          <Row className="mb-3">
            <Col xs={3}>
              <FormLabel className="float-end">Time Limit</FormLabel>
            </Col>
            <Col xs={9}>
              <InputGroup>
                <FormControl 
                  type="number"
                  value={quiz.timeLimitMinutes}
                  onChange={(e) => setQuiz({ ...quiz, timeLimitMinutes: parseInt(e.target.value) || 20 })}
                />
                <InputGroupText>Minutes</InputGroupText>
              </InputGroup>
            </Col>
          </Row>

          <Row className="mb-3">
            <Col xs={3}>
              <FormLabel className="float-end">Multiple Attempts</FormLabel>
            </Col>
            <Col xs={9}>
              <FormSelect 
                value={quiz.multipleAttempts ? "Yes" : "No"}
                onChange={(e) => setQuiz({ 
                  ...quiz, 
                  multipleAttempts: e.target.value === "Yes",
                  howManyAttempts: e.target.value === "Yes" ? (quiz.howManyAttempts > 1 ? quiz.howManyAttempts : 2) : 1
                })}
              >
                <option>No</option>
                <option>Yes</option>
              </FormSelect>
            </Col>
          </Row>

          {/* How Many Attempts - Only show when Multiple Attempts is Yes */}
          {quiz.multipleAttempts && (
            <Row className="mb-3">
              <Col xs={3}>
                <FormLabel className="float-end">How Many Attempts</FormLabel>
              </Col>
              <Col xs={9}>
                <InputGroup>
                  <FormControl 
                    type="number"
                    min={2}
                    value={quiz.howManyAttempts}
                    onChange={(e) => setQuiz({ ...quiz, howManyAttempts: parseInt(e.target.value) || 2 })}
                  />
                  <InputGroupText>Attempts</InputGroupText>
                </InputGroup>
              </Col>
            </Row>
          )}

          <Row className="mb-3">
            <Col xs={3}>
              <FormLabel className="float-end">Shuffle Answers</FormLabel>
            </Col>
            <Col xs={9}>
              <FormSelect 
                value={quiz.shuffleAnswers ? "Yes" : "No"}
                onChange={(e) => setQuiz({ ...quiz, shuffleAnswers: e.target.value === "Yes" })}
              >
                <option>Yes</option>
                <option>No</option>
              </FormSelect>
            </Col>
          </Row>

          <Row className="mb-3">
            <Col xs={3}>
              <FormLabel className="float-end">One Question at a Time</FormLabel>
            </Col>
            <Col xs={9}>
              <FormSelect 
                value={quiz.oneQuestionAtATime ? "Yes" : "No"}
                onChange={(e) => setQuiz({ ...quiz, oneQuestionAtATime: e.target.value === "Yes" })}
              >
                <option>Yes</option>
                <option>No</option>
              </FormSelect>
            </Col>
          </Row>
        </div>

        {/* Dates Section */}
        <div className="border p-3 mb-3">
          <h5>Dates</h5>

          <Row className="mb-3">
            <Col>
              <FormLabel><b>Due Date</b></FormLabel>
              <InputGroup>
                <FormControl 
                  type="date"
                  value={quiz.dueDate} 
                  onChange={(e) => setQuiz({ ...quiz, dueDate: e.target.value })}
                />
                <InputGroupText><FaRegCalendarAlt /></InputGroupText>
              </InputGroup>
            </Col>
          </Row>

          <Row className="mb-3">
            <Col>
              <FormLabel><b>Available From</b></FormLabel>
              <InputGroup>
                <FormControl 
                  type="date"
                  value={quiz.availableDate} 
                  onChange={(e) => setQuiz({ ...quiz, availableDate: e.target.value })}
                />
                <InputGroupText><FaRegCalendarAlt /></InputGroupText>
              </InputGroup>
            </Col>
            <Col>
              <FormLabel><b>Until</b></FormLabel>
              <InputGroup>
                <FormControl 
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

      {/* Buttons */}
      <hr />
      <div className="d-flex justify-content-end gap-2 mb-3">
        <Button variant="secondary" size="lg" onClick={handleCancel}>Cancel</Button>
        <Button variant="danger" size="lg" onClick={() => handleSave(false)}>
          Save & Add Questions
        </Button>
      </div>
    </div>
  );
}
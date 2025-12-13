/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import { useParams, useRouter } from "next/navigation";
import { Button, Card, Row, Col, Alert } from "react-bootstrap";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import * as client from "../client";
import { FaEdit, FaEye } from "react-icons/fa";

interface Quiz {
  _id: string;
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
  questions: any[];
}

export default function QuizDetails() {
  const { cid, qid } = useParams();
  const router = useRouter();
  const quizId = Array.isArray(qid) ? qid[0] : qid;
  
  const [quiz, setQuiz] = useState<Quiz | null>(null);
  const [loading, setLoading] = useState(true);
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  
  const isFaculty = currentUser?.role === "FACULTY";

  useEffect(() => {
    const fetchQuiz = async () => {
      try {
        const data = await client.findQuiz(quizId as string);
        setQuiz(data);
      } catch (error) {
        console.error("Error fetching quiz:", error);
      } finally {
        setLoading(false);
      }
    };
    
    if (quizId) fetchQuiz();
  }, [quizId]);

  if (loading) return <div className="p-4">Loading quiz...</div>;
  if (!quiz) return <Alert variant="danger">Quiz not found</Alert>;

  return (
    <div className="p-3">
      {/* Action Buttons */}
      <div className="d-flex justify-content-center gap-3 mb-4">
        {isFaculty ? (
          <>
            <Button 
              variant="outline-secondary"
              onClick={() => router.push(`/Courses/${cid}/Quizzes/${qid}/Preview`)}
            >
              <FaEye className="me-2" /> Preview
            </Button>
            <Button 
              variant="outline-secondary"
              onClick={() => router.push(`/Courses/${cid}/Quizzes/${qid}/DetailsEditor`)}
            >
              <FaEdit className="me-2" /> Edit
            </Button>
          </>
        ) : (
          <Button 
            variant="danger" 
            size="lg"
            onClick={() => 
              router.push(`/Courses/${cid}/Quizzes/${qid}/take`)}
          >
            Start Quiz
          </Button>
        )}
      </div>

      <hr />

      {/* Quiz Title */}
      <h2 className="mb-4">{quiz.title}</h2>

      {/* Quiz Properties */}
      <Card className="mb-4">
        <Card.Body>
          <Row className="mb-2">
            <Col xs={4} className="text-end"><strong>Quiz Type:</strong></Col>
            <Col xs={8}>{quiz.type}</Col>
          </Row>
          <Row className="mb-2">
            <Col xs={4} className="text-end"><strong>Points:</strong></Col>
            <Col xs={8}>{quiz.points}</Col>
          </Row>
          <Row className="mb-2">
            <Col xs={4} className="text-end"><strong>Assignment Group:</strong></Col>
            <Col xs={8}>{quiz.assignmentGroup}</Col>
          </Row>
          <Row className="mb-2">
            <Col xs={4} className="text-end"><strong>Shuffle Answers:</strong></Col>
            <Col xs={8}>{quiz.shuffleAnswers ? "Yes" : "No"}</Col>
          </Row>
          <Row className="mb-2">
            <Col xs={4} className="text-end"><strong>Time Limit:</strong></Col>
            <Col xs={8}>{quiz.timeLimitMinutes} Minutes</Col>
          </Row>
          <Row className="mb-2">
            <Col xs={4} className="text-end"><strong>Multiple Attempts:</strong></Col>
            <Col xs={8}>{quiz.multipleAttempts ? `Yes (${quiz.howManyAttempts} attempts)` : "No"}</Col>
          </Row>
          <Row className="mb-2">
            <Col xs={4} className="text-end"><strong>Show Correct Answers:</strong></Col>
            <Col xs={8}>{quiz.showCorrectAnswers || "Immediately"}</Col>
          </Row>
          <Row className="mb-2">
            <Col xs={4} className="text-end"><strong>Access Code:</strong></Col>
            <Col xs={8}>{quiz.accessCode || "None"}</Col>
          </Row>
          <Row className="mb-2">
            <Col xs={4} className="text-end"><strong>One Question at a Time:</strong></Col>
            <Col xs={8}>{quiz.oneQuestionAtATime ? "Yes" : "No"}</Col>
          </Row>
          <Row className="mb-2">
            <Col xs={4} className="text-end"><strong>Webcam Required:</strong></Col>
            <Col xs={8}>{quiz.webcamRequired ? "Yes" : "No"}</Col>
          </Row>
          <Row className="mb-2">
            <Col xs={4} className="text-end"><strong>Lock Questions After Answering:</strong></Col>
            <Col xs={8}>{quiz.lockQuestionsAfterAnswering ? "Yes" : "No"}</Col>
          </Row>
        </Card.Body>
      </Card>

      {/* Dates */}
      <Card>
        <Card.Body>
          <Row className="mb-2">
            <Col xs={4} className="text-end"><strong>Due Date:</strong></Col>
            <Col xs={8}>{quiz.dueDate || "Not set"}</Col>
          </Row>
          <Row className="mb-2">
            <Col xs={4} className="text-end"><strong>Available From:</strong></Col>
            <Col xs={8}>{quiz.availableDate || "Not set"}</Col>
          </Row>
          <Row className="mb-2">
            <Col xs={4} className="text-end"><strong>Available Until:</strong></Col>
            <Col xs={8}>{quiz.untilDate || "Not set"}</Col>
          </Row>
        </Card.Body>
      </Card>

      {/* Questions Count */}
      <div className="mt-4 text-center text-muted">
        <strong>Number of Questions:</strong> {quiz.questions?.length || 0}
      </div>
    </div>
  );
}

/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import { useParams } from "next/navigation";
import { Button, Col, Row, Spinner } from "react-bootstrap";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import * as client from "./DetailsEditor/client"; // API helper

interface Quiz {
  title: string;
  type: string;
  points: number;
  assignmentGroup: string;
  shuffleAnswers: boolean;
  timeLimit: number;
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
}

export default function QuizDetails() {
  const { cid, qid } = useParams();
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const [quiz, setQuiz] = useState<Quiz | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchQuiz = async () => {
      try {
        const data = await client.findQuiz(qid as string);
        setQuiz(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchQuiz();
  }, [cid, qid]);

  if (!currentUser || loading) return <Spinner animation="border" />;

  const isFaculty = currentUser.role === "FACULTY";
  const isStudent = currentUser.role === "STUDENT";

  return (
    <div>
      <h1>Quiz Details</h1>
      <hr />

      <div id="quiz-detail-button">
        {isStudent && <Button variant="danger" href={`/Courses/${cid}/Quizzes/new/Preview`}>Start Quiz</Button>}
        {isFaculty && <>
          <Button variant="secondary" href={`/Courses/${cid}/Quizzes/new/Preview`}>Preview</Button>
          <Button variant="secondary" href={`/Courses/${cid}/Quizzes/new/DetailsEditor`}>Edit</Button>
        </>}
      </div>

      {isFaculty && quiz && (
        <div>
          {Object.entries(quiz).map(([key, value]) => (
            <Row key={key}><Col xs={4}><b>{key}</b></Col><Col>{String(value)}</Col></Row>
          ))}
        </div>
      )}
    </div>
  );
}

/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/exhaustive-deps */
"use client"

import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { Button, ListGroup, ListGroupItem, Dropdown } from "react-bootstrap";
import { BsGripVertical } from "react-icons/bs";
import { FaPlus, FaCheckCircle, FaBan, FaEllipsisV } from "react-icons/fa";
import { RxRocket } from "react-icons/rx";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import * as client from "./client";

interface Quiz {
  _id: string;
  title: string;
  published: boolean;
  points: number;
  availableDate?: string;
  dueDate?: string;
  untilDate?: string;
  questions?: any[];
}

export default function QuizList() {
  const { cid } = useParams();
  const router = useRouter();
  const courseId = Array.isArray(cid) ? cid[0] : cid;
  
  const [quizzes, setQuizzes] = useState<Quiz[]>([]);
  const [loading, setLoading] = useState(true);
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  
  const isFaculty = currentUser?.role === "FACULTY";

  const fetchQuizzes = async () => {
    try {
      const data = await client.findQuizzesForCourse(courseId as string);
      setQuizzes(data);
    } catch (error) {
      console.error("Error fetching quizzes:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (courseId) fetchQuizzes();
  }, [courseId]);

  const handleDelete = async (quizId: string) => {
    if (window.confirm("Are you sure you want to delete this quiz?")) {
      try {
        await client.deleteQuiz(quizId);
        setQuizzes(quizzes.filter(q => q._id !== quizId));
      } catch (error) {
        console.error("Error deleting quiz:", error);
      }
    }
  };

  const handleTogglePublish = async (quizId: string) => {
    try {
      const updatedQuiz = await client.togglePublish(quizId);
      setQuizzes(quizzes.map(q => q._id === quizId ? updatedQuiz : q));
    } catch (error) {
      console.error("Error toggling publish:", error);
    }
  };

  const getAvailabilityStatus = (quiz: Quiz) => {
    const now = new Date();
    const available = quiz.availableDate ? new Date(quiz.availableDate) : null;
    const until = quiz.untilDate ? new Date(quiz.untilDate) : null;

    if (until && now > until) return "Closed";
    if (available && now < available) return `Not available until ${quiz.availableDate}`;
    return "Available";
  };

  // Sort quizzes by due date (earliest first, quizzes without due dates at the end)
  const sortedQuizzes = [...quizzes].sort((a, b) => {
    if (!a.dueDate && !b.dueDate) return 0;
    if (!a.dueDate) return 1;
    if (!b.dueDate) return -1;
    return new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime();
  });

  if (loading) return <div className="p-4">Loading quizzes...</div>;

  return (
    <div id="wd-quizzes" className="p-3">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>Quizzes</h2>
        {isFaculty && (
          <Link href={`/Courses/${cid}/Quizzes/new`}>
            <Button variant="danger" size="lg">
              <FaPlus className="me-2" /> Quiz
            </Button>
          </Link>
        )}
      </div>
      
      <hr />

      {quizzes.length === 0 ? (
        <div className="text-center p-5 text-muted">
          <p>No quizzes available.</p>
          {isFaculty && <p>Click &quot;+ Quiz&quot; to create your first quiz.</p>}
        </div>
      ) : (
        <ListGroup className="rounded-0">
          {sortedQuizzes.map((quiz) => (
            <ListGroupItem 
              key={quiz._id} 
              className="d-flex align-items-center p-3"
            >
              <BsGripVertical className="me-3 fs-4 text-muted" />
              
              {/* Publish Icon */}
              {isFaculty && (
                <span 
                  className="me-3 cursor-pointer"
                  onClick={() => handleTogglePublish(quiz._id)}
                  style={{ cursor: "pointer" }}
                >
                  {quiz.published ? (
                    <FaCheckCircle className="text-success fs-5" title="Published - Click to unpublish" />
                  ) : (
                    <FaBan className="text-danger fs-5" title="Unpublished - Click to publish" />
                  )}
                </span>
              )}
              
              <RxRocket className="me-3 fs-4" style={{ color: quiz.published ? "green" : "gray" }} />

              {/* Quiz Info */}
              <div className="flex-grow-1">
                <Link 
                  href={`/Courses/${cid}/Quizzes/${quiz._id}`}
                  className="text-decoration-none text-dark"
                >
                  <h5 className="mb-1">{quiz.title}</h5>
                </Link>
                <small className="text-muted">
                  <strong>{getAvailabilityStatus(quiz)}</strong>
                  {quiz.dueDate && <> | <strong>Due:</strong> {quiz.dueDate}</>}
                  {" | "}{quiz.points || 0} pts
                  {" | "}{quiz.questions?.length || 0} Questions
                </small>
              </div>

              {/* Context Menu (Faculty Only) */}
              {isFaculty && (
                <Dropdown>
                  <Dropdown.Toggle variant="link" className="text-dark p-0">
                    <FaEllipsisV />
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item onClick={() => router.push(`/Courses/${cid}/Quizzes/${quiz._id}/DetailsEditor`)}>
                      Edit
                    </Dropdown.Item>
                    <Dropdown.Item onClick={() => handleDelete(quiz._id)}>
                      Delete
                    </Dropdown.Item>
                    <Dropdown.Item onClick={() => handleTogglePublish(quiz._id)}>
                      {quiz.published ? "Unpublish" : "Publish"}
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              )}
            </ListGroupItem>
          ))}
        </ListGroup>
      )}
    </div>
  );
}
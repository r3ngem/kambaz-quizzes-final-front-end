/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/exhaustive-deps */
"use client"
import Link from "next/link";
import { useParams } from "next/navigation";
import { Button, ListGroup, ListGroupItem } from "react-bootstrap";
import { BsGripVertical } from "react-icons/bs";
import { FaCaretDown, FaPlus } from "react-icons/fa6";
import { RxRocket } from "react-icons/rx";
import GreenCheckmark from "../Assignments/GreenCheckmark";
import { IoEllipsisVertical } from "react-icons/io5";
import { useEffect, useState } from "react";
import { FaBan } from "react-icons/fa";
import QuizControlButtons from "./QuizControlButtons";
import * as client from "../Quizzes/client";
import { useSelector } from "react-redux";

interface Quiz {
_id: string;
title: string;
published: boolean;
points: number;
availableDate?: string;
dueDate?: string;
questions?: any[];
}

export default function Quizzes() {
  const { cid, aid } = useParams();
  const [open, setOpen] = useState(false);
  const toggleMenu = (e: { stopPropagation: () => void; }) => {
    e.stopPropagation();
    setOpen(!open);
  };  

  const closeMenu = () => setOpen(false);

  const [quizzes, setQuizzes] = useState<Quiz[]>([]);
  
  const fetchQuizzes = async () => {
    const data = await client.findQuizzesByCourse(cid as string);
    setQuizzes(data);
  };
  const { currentUser } = useSelector((state: any) => state.accountReducer);


  useEffect(() => { fetchQuizzes(); }, [cid]);
  return (
    <div id="wd-quizzes">
      <h1 id="wd-quizzes-title">Quizzes</h1> <hr />
      {currentUser.role === "FACULTY" && (
        <Button 
        variant="danger" 
        size="lg" 
        href={`/Courses/${cid}/Quizzes/new`} >
        <FaPlus /> Quiz
      </Button> )}
     <br /><br /><br />

     
     <ListGroup className="rounded-0" id="wd-modules">
        <ListGroupItem className="wd-module p-0 mb-5 fs-5 border-gray">
          {quizzes.map((quiz) => (
  <ListGroupItem key={quiz._id} className="wd-assignment p-3 ps-1 d-flex align-items-center flex-nowrap">
    <BsGripVertical className="me-2 fs-3" /> 
    <RxRocket className="me-2 fs-4" style={{color: quiz.published ? 'green' : 'red'}}/>
    <div className="assignment-subtext">
      <Link href={`/Courses/${cid}/Quizzes/${quiz._id}`} className="wd-assignment-link border-0 text-dark">
        <b className="fs-3">{quiz.title}</b>
      </Link>
      <p>
        <b>{quiz.availableDate && new Date() < new Date(quiz.availableDate) ? "Not Available" : "Available"}</b> 
        | <b>Due</b> {quiz.dueDate} | {quiz.points} pts | {quiz.questions?.length || 0} Questions
      </p>
    </div>
    <QuizControlButtons quiz={quiz} />
  </ListGroupItem>
))}
            </ListGroupItem>
      </ListGroup>
    </div>
  )
}
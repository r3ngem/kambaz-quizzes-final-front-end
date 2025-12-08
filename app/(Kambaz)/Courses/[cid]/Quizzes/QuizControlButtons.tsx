/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import { useState, MouseEvent } from "react";
import GreenCheckmark from "../Assignments/GreenCheckmark";
import { IoEllipsisVertical } from "react-icons/io5";
import { Button } from "react-bootstrap";
import { useParams } from "next/navigation";

interface Quiz {
  _id: string;
  title: string;
  published: boolean;
  points: number;
  availableDate?: string;
  dueDate?: string;
  questions?: any[];
}

interface QuizControlButtonsProps {
  quiz?: Quiz;
}

export default function QuizControlButtons({ quiz }: QuizControlButtonsProps) {
  const { cid } = useParams();
  const [open, setOpen] = useState(false);

  const toggleMenu = (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    setOpen(!open);
  };

  const closeMenu = () => setOpen(false);

  return (
    <div className="float-end ms-auto">
      <GreenCheckmark />
      <div onClick={closeMenu} className="float-end ms-auto">
        <IoEllipsisVertical
          className="fs-4"
          size={22}
          onClick={toggleMenu}
          style={{ cursor: "pointer" }}
        />
        {open && (
          <div
            style={{
              position: "absolute",
              right: 0,
              top: "24px",
              background: "white",
              border: "1px solid #ccc",
              borderRadius: "4px",
              padding: "8px",
              boxShadow: "0px 2px 6px rgba(0,0,0,0.2)",
              zIndex: 999,
            }}
          >
            <div style={{ padding: "4px 8px", cursor: "pointer" }}>
              <Button href={`/Courses/${cid}/Quizzes/${quiz?._id}`}>Edit</Button>
            </div>
            <div style={{ padding: "4px 8px", cursor: "pointer" }}>Delete</div>
            <div style={{ padding: "4px 8px", cursor: "pointer" }}>Publish</div>
          </div>
        )}
      </div>
    </div>
  );
}

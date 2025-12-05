"use client"
import Link from "next/link";
import { useParams } from "next/navigation";
import { Button, ListGroup, ListGroupItem } from "react-bootstrap";
import { BsGripVertical } from "react-icons/bs";
import { FaCaretDown, FaPlus } from "react-icons/fa6";
import { RxRocket } from "react-icons/rx";
import GreenCheckmark from "../Assignments/GreenCheckmark";
import { IoEllipsisVertical } from "react-icons/io5";
import { useState } from "react";
import { FaBan } from "react-icons/fa";
import QuizControlButtons from "./QuizControlButtons";

export default function Quizzes() {
  const [open, setOpen] = useState(false);
  const toggleMenu = (e) => {
    e.stopPropagation();
    setOpen(!open);
  };  

  const closeMenu = () => setOpen(false);
  const { cid, aid } = useParams();
  return (
    <div id="wd-quizzes">
      <h1 id="wd-quizzes-title">Quizzes</h1> <hr />
      <Button variant="danger" size="lg" className="me-1 float-end" id="wd-view-progress" 
     href={`/Courses/${cid}/Quizzes/new`}>
       <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
       Quiz
     </Button>
     <br /><br /><br />

     
     <ListGroup className="rounded-0" id="wd-modules">
        <ListGroupItem className="wd-module p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary">
            <FaCaretDown className="me-2 fs-3" />Assignment Quizzes
          </div>
            <ListGroup className="wd-assignments rounded-0">

              <ListGroupItem className="wd-assignment p-3 ps-1 d-flex align-items-center flex-nowrap">
              <BsGripVertical className="me-2 fs-3" /> 
              <RxRocket className="me-2 fs-4" style={{color: 'green'}}/>
              <div className="assignment-subtext">
                <Link href={`/Courses/${cid}/Quizzes/new`}
             className="wd-assignment-link border-0 text-dark" ><b className="fs-3">Q1 - HTML</b></Link>
                <p> 
                  <b>
                    Closed </b>
                    | <b>Due</b> Sep 21 at 1pm | 29 pts | 11 Questions
                    </p>
              </div>
              
              <QuizControlButtons />
              </ListGroupItem>

              <ListGroupItem className="wd-assignment p-3 ps-1 d-flex align-items-center flex-nowrap">
              <BsGripVertical className="me-2 fs-3" /> 
              <RxRocket className="me-2 fs-4" style={{color: 'green'}}/>
              <div className="assignment-subtext">
                <Link href={`/Courses/${cid}/Quizzes/new`}
             className="wd-assignment-link border-0 text-dark" ><b className="fs-3">Q2 - CSS</b></Link>
                <p> 
                  <b>
                    Closed </b>
                    | <b>Due</b> Oct 5 at 1pm | 32 pts | 7 Questions
                    </p>
              </div>
              
              <QuizControlButtons />
              </ListGroupItem>

              <ListGroupItem className="wd-assignment p-3 ps-1 d-flex align-items-center flex-nowrap">
              <BsGripVertical className="me-2 fs-3" /> 
              <RxRocket className="me-2 fs-4" style={{color: 'green'}}/>
              <div className="assignment-subtext">
                <Link href={`/Courses/${cid}/Quizzes/new`}
             className="wd-assignment-link border-0 text-dark" ><b className="fs-3">EXAM 1 FA 23</b></Link>
                <p> 
                  <b>
                    Closed </b>
                    | <b>Due</b> Oct 26 at 5:30pm | 113 pts | 20 Questions
                    </p>
              </div>
              
              <QuizControlButtons />
              </ListGroupItem>

              <ListGroupItem className="wd-assignment p-3 ps-1 d-flex align-items-center flex-nowrap">
              <BsGripVertical className="me-2 fs-3" /> 
              <RxRocket className="me-2 fs-4" style={{color: 'green'}}/>
              <div className="assignment-subtext">
                <Link href={`/Courses/${cid}/Quizzes/new`}
             className="wd-assignment-link border-0 text-dark" ><b className="fs-3">Q3 - JS, ES6</b></Link>
                <p> 
                  <b> Available </b> <span className="red-module"> Multiple Dates </span>
                    | <b> Due </b> <span className="red-module"> Multiple Dates </span> | 38 pts | 13 Questions
                    </p>
              </div>
              
              <QuizControlButtons />
              </ListGroupItem>

              <ListGroupItem className="wd-assignment p-3 ps-1 d-flex align-items-center flex-nowrap">
              <BsGripVertical className="me-2 fs-3" /> 
              <RxRocket className="me-2 fs-4" style={{color: 'green'}}/>
              <div className="assignment-subtext">
                <Link href={`/Courses/${cid}/Quizzes/new`}
             className="wd-assignment-link border-0 text-dark" ><b className="fs-3">Q3</b></Link>
                <p> 
                  <b> Available </b> <span className="red-module"> Multiple Dates </span>
                    | <b> Due </b> <span className="red-module"> Multiple Dates </span> | 31 pts | 8 Questions
                    </p>
              </div>
              
              <QuizControlButtons />
              </ListGroupItem>

              <ListGroupItem className="wd-assignment p-3 ps-1 d-flex align-items-center flex-nowrap">
              <BsGripVertical className="me-2 fs-3" /> 
              <RxRocket className="me-2 fs-4" style={{color: 'green'}}/>
              <div className="assignment-subtext">
                <Link href={`/Courses/${cid}/Quizzes/new`}
             className="wd-assignment-link border-0 text-dark" ><b className="fs-3">Q4 - NODE</b></Link>
                <p> 
                  <b> Closed </b> 
                    | <b> Due </b> Nov 20 at 3pm | 25 pts | 4 Questions
                    </p>
              </div>
              
              <QuizControlButtons />
              </ListGroupItem>

              <ListGroupItem className="wd-assignment p-3 ps-1 d-flex align-items-center flex-nowrap">
              <BsGripVertical className="me-2 fs-3" /> 
              <RxRocket className="me-2 fs-4" style={{color: 'green'}}/>
              <div className="assignment-subtext">
                <Link href={`/Courses/${cid}/Quizzes/new`}
             className="wd-assignment-link border-0 text-dark" ><b className="fs-3">Q5 - Mongo</b></Link>
                <p> 
                  <b>
                    Not available until
                    </b> Nov 30 at 11:40am
                    | <b>Due</b> Nov 30 at 1pm | 38 pts | 10 Questions
                    </p>
              </div>
              {/* Replace with QuizControlButtons later(publish and unpublished state dealt in there) */}
              <div className="float-end ms-auto">
                              <FaBan style={{ color: 'red' }}/>
                              <div onClick={closeMenu} className = "float-end ms-auto">
                              <IoEllipsisVertical className="fs-4" size={22}
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
                            Edit
                          </div>
                          <div style={{ padding: "4px 8px", cursor: "pointer" }}>
                            Delete
                          </div>
                          <div style={{ padding: "4px 8px", cursor: "pointer" }}>
                            Publish
                          </div>
                        </div>
                      )}
                              </div>
                            </div>
              </ListGroupItem>

              <ListGroupItem className="wd-assignment p-3 ps-1 d-flex align-items-center flex-nowrap">
              <BsGripVertical className="me-2 fs-3" /> 
              <RxRocket className="me-2 fs-4" style={{color: 'green'}}/>
              <div className="assignment-subtext">
                <Link href={`/Courses/${cid}/Quizzes/new`}
             className="wd-assignment-link border-0 text-dark" ><b className="fs-3">EXAM 2 FA23</b></Link>
                <p> 
                  <b>
                    Not available until
                    </b> Dec 15 at 10:30am
                    | <b>Due</b> Dec 15 at 1pm | 104 pts | 18 Questions
                    </p>
              </div>
              {/* Replace with QuizControlButtons later(publish and unpublished state dealt in there) */}
              <div className="float-end ms-auto">
                              <FaBan style={{ color: 'red' }}/>
                              <div onClick={closeMenu} className = "float-end ms-auto">
                              <IoEllipsisVertical className="fs-4" size={22}
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
                            Edit
                          </div>
                          <div style={{ padding: "4px 8px", cursor: "pointer" }}>
                            Delete
                          </div>
                          <div style={{ padding: "4px 8px", cursor: "pointer" }}>
                            Publish
                          </div>
                        </div>
                      )}
                              </div>
                            </div>
              </ListGroupItem>
              
            </ListGroup>
            </ListGroupItem>
      </ListGroup>
    </div>
  )
}
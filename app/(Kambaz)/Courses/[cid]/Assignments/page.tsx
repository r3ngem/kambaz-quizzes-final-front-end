/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/jsx-key */
"use client"
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "next/navigation";
import * as db from "../../../Database";
import Link from 'next/link';
import AssignmentsControls from './AssignmentsControls';
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import { BsGripVertical } from 'react-icons/bs';
import { FaCaretDown, FaTrash } from "react-icons/fa";
import { LuNotebookPen } from "react-icons/lu";
import AssignmentControlButtons from './AssignmentControlButtons';
import LessonControlButtons from './LessonControlButtons';
import { setAssignments, deleteAssignment } from "./reducer";
import { useState, useEffect } from "react";
import AssignmentDelete from "./AssignmentDelete";
import { RootState } from "../../../store";
import * as client from "./client";
export default function Assignments() {
  const { cid } = useParams();
  const { assignments } = useSelector((state: RootState) => state.assignmentsReducer);
  const dispatch = useDispatch();

  const [showDelete, setShowDelete] = useState(false);
  const [selectedAssignment, setSelectedAssignment] = useState<any>(null);

  const onRemoveAssignment = async (assignmentId: string) => {
    await client.deleteAssignment(assignmentId);
    dispatch(setAssignments(assignments.filter((m: any) => m._id !== assignmentId)));
  };
  
  const handleOpenDelete = (assignment: any) => {
    setSelectedAssignment(assignment);
    setShowDelete(true);
  };

  const handleDeleteAssignment = async () => {
    if (selectedAssignment) {
      await onRemoveAssignment(selectedAssignment._id);
      setSelectedAssignment(null);
    }
  };

   const fetchAssignments = async () => {
    const assignments = await client.findAssignmentsForCourse(cid as string);
    dispatch(setAssignments(assignments));
  };
  useEffect(() => {
    fetchAssignments();
  }, []);

  
  return (
    <div id="wd-assignments"> 
    <AssignmentsControls /><br /><br />
    <ListGroup className="rounded-0" id="wd-assignments">
        <ListGroupItem className="wd-assignments p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary d-flex align-items-center">
            <BsGripVertical className="me-2 fs-3" /><FaCaretDown className="me-2"/>
            <b>ASSIGNMENTS</b>
            <div className="d-flex align-items-center ms-auto">
            <p className="percent-total me-4">40% of Total</p>
                <AssignmentControlButtons />
              </div>
            </div>
          <ListGroup className="wd-assignments rounded-0">
            {assignments
          .map((assignment: any) => (
            <ListGroupItem key={assignment._id} className="wd-assignment p-3 ps-1 d-flex align-items-center flex-nowrap">
              <BsGripVertical className="me-2 fs-3" /> 
              <LuNotebookPen className="me-2 fs-4" style={{color: 'green'}}/>
              <div className="assignment-subtext">
                <Link href={`/Courses/${cid}/Assignments/${assignment._id}`}
             className="wd-assignment-link border-0 text-dark" ><b className="fs-3">{assignment.title}</b></Link>
                <p> 
                  <span className="red-module">
                    Multiple Modules
                    </span>
                    | <b>Not available until</b> {assignment.release} | <b>Due</b> {assignment.due} | 100pts
                    </p>
              </div>
          
              <div className="ms-auto">
                <FaTrash
                      className="text-danger me-2 mb-1"
                      onClick={() => handleOpenDelete(assignment)}
                    />
              <LessonControlButtons />
              </div>
              </ListGroupItem>))}
              </ListGroup>
            </ListGroupItem>
            </ListGroup>


            <ListGroup className="rounded-0" id="wd-assignments">
        <ListGroupItem className="wd-assignments p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary d-flex align-items-center">
            <BsGripVertical className="me-2 fs-3" /><FaCaretDown className="me-2"/>
            <b>QUIZZES</b>
            <div className="d-flex align-items-center ms-auto">
            <p className="percent-total me-4">10% of Total</p>
                <AssignmentControlButtons />
              </div>
            </div>
            </ListGroupItem>
            </ListGroup>


            <ListGroup className="rounded-0" id="wd-assignments">
        <ListGroupItem className="wd-assignments p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary d-flex align-items-center">
            <BsGripVertical className="me-2 fs-3" /><FaCaretDown className="me-2"/>
            <b>EXAMS</b>
            <div className="d-flex align-items-center ms-auto">
            <p className="percent-total me-4">20% of Total</p>
                <AssignmentControlButtons />
              </div>
            </div>
            </ListGroupItem>
            </ListGroup>


            <ListGroup className="rounded-0" id="wd-assignments">
        <ListGroupItem className="wd-assignments p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary d-flex align-items-center">
            <BsGripVertical className="me-2 fs-3" /><FaCaretDown className="me-2"/>
            <b>PROJECT</b>
            <div className="d-flex align-items-center ms-auto">
            <p className="percent-total me-4">30% of Total</p>
                <AssignmentControlButtons />
              </div>
            </div>
            </ListGroupItem>
            </ListGroup>
            <AssignmentDelete
        show={showDelete}
        handleClose={() => setShowDelete(false)}
        handleDelete={handleDeleteAssignment}
        assignmentTitle={selectedAssignment?.title || ''}
      />
    </div>
);}

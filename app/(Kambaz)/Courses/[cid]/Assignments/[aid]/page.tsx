/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import { useRouter, useParams } from "next/navigation";
import { assignments } from "../../../../Database";
import { Button, Col, Form, FormControl, FormLabel, FormSelect, InputGroup, Row } from "react-bootstrap";
import InputGroupText from "react-bootstrap/esm/InputGroupText";
import { FaRegCalendarAlt } from "react-icons/fa";
import { addAssignment, setAssignments, updateAssignment } from "../reducer";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { RootState } from "../../../../store";
import * as client from "../client";

export default function AssignmentEditor() {
  const { cid, aid } = useParams();
  const router = useRouter();
  const { assignments } = useSelector((state: RootState) => state.assignmentsReducer);
  const current = assignments.find((a: any) => a._id === aid);
  const dispatch = useDispatch();

  const[assignment, setAssignment] = useState(
    current || {
      title: "",
      description: "",
      points: "",
      due: "",
      release: "",
      course: cid
    }
  );

  const onCreateAssignmentForCourse = async () => {
    if (!cid) return;
    const newAssignment = { ...assignment, course: cid };
    const created = await client.createAssignmentForCourse(cid as string, newAssignment);
    dispatch(setAssignments([...assignments, created]));
  };

   const onUpdateAssignment = async (assignment: any) => {
    await client.updateAssignment(assignment);
    const newAssignments = assignments.map((m: any) => m._id === assignment._id ? assignment : m );
    dispatch(setAssignments(newAssignments));
  };



  const handleSave = async () => {
    if (current) {
     await onUpdateAssignment(assignment);
    } else {
      await onCreateAssignmentForCourse();
    }
    router.push(`/Courses/${cid}/Assignments`)
  }

  return (
    <div id="wd-assignments-editor">
      <Form>
        <div className="form-group">
      <FormLabel htmlFor="wd-name">Assignment Name</FormLabel><br />
      <FormControl id="wd-name" value={assignment.title} 
      onChange={(e) => setAssignment({ ...assignment, title: e.target.value})} /><br />
      </div>
      <div className="form-group">
      <FormControl as="textarea" id="wd-description" value=""
      onChange={(e) => setAssignment({ ...assignment, description: e.target.value})} /> 
      <br />
      </div>
        <Row>
          <Col className="ms-5" xs={2}>
            <FormLabel htmlFor="wd-points" className="me-3">Points</FormLabel>
          </Col>
          <Col>
            <FormControl id="wd-points" value="100"
            onChange={(e) => setAssignment({ ...assignment, points: e.target.value})}/><br />
          </Col>
        </Row>
        <Row>
          <Col className="ms-5" xs={2}>
            <FormLabel htmlFor="wd-group" className="me-3">Assignment Group</FormLabel>
          </Col>
          <Col>
            <FormSelect id="wd-group">
            <option defaultChecked>
            ASSIGNMENTS</option>
            <option>
            QUIZZES</option>
            <option>
            EXAMS</option>
            <option>
            PROJECT</option>
            </FormSelect><br />
          </Col>
        </Row>
        <Row>
          <Col className="ms-5" xs={2}>
            <FormLabel htmlFor="wd-display-grade-as" className="me-3">Display Grade as</FormLabel>
          </Col> 
          <Col>
            <FormSelect id="wd-display-grade-as">
            <option defaultChecked>
            Percentage</option>
            </FormSelect><br />
          </Col>
        </Row>
        <Row>
          <Col className="ms-5" xs={2}>
            <FormLabel htmlFor="wd-submission-type" className="me-3">Submission Type</FormLabel>
          </Col>
          <Col>
            <FormSelect id="wd-submission-type">
            <option defaultChecked>
            Online</option>
            </FormSelect><br />
            <FormLabel><b>Online Entry Options</b></FormLabel><br/>
            <input type="checkbox" name="check-sub-type" id="wd-text-entry" className="me-2"/>
            <FormLabel htmlFor="wd-text-entry">Text Entry</FormLabel><br/>
            <input type="checkbox" name="check-sub-type" id="wd-website-url" className="me-2"/>
            <FormLabel htmlFor="wd-website-url">Website URL</FormLabel><br/>
            <input type="checkbox" name="check-sub-type" id="wd-media-recordings" className="me-2"/>
            <FormLabel htmlFor="wd-media-recordings">Media Recordings</FormLabel><br/>
            <input type="checkbox" name="check-sub-type" id="wd-student-annotation" className="me-2"/>
            <FormLabel htmlFor="wd-student-annotation">Student Annotation</FormLabel><br/>
            <input type="checkbox" name="check-sub-type" id="wd-file-upload" className="me-2"/>
            <FormLabel htmlFor="wd-file-upload">File Upload</FormLabel><br /><br />
          </Col>
        </Row>
        <Row>
          <Col className="ms-5" xs={2}>
            <FormLabel htmlFor="wd-assign-to" className="me-3">Assign</FormLabel>
          </Col>
          <Col>
            <Row>
              <FormLabel htmlFor="wd-assign-to"><b>Assign To</b></FormLabel>
            </Row>
            <Row className="me-1 ms-1">
                <input id="wd-assign-to" placeholder='Everyone' />
            </Row><br/>
            <Col>
            <FormLabel htmlFor="wd-due-date"><b>Due</b></FormLabel><br/>
            <InputGroup>
            <FormControl id="wd-due-date" value={assignment.due} 
            onChange={(e) => setAssignment({ ...assignment, due: e.target.value})}/>
            <InputGroupText><FaRegCalendarAlt /></InputGroupText>
            </InputGroup>
            </Col><br/>
            <Row>
            <Col>
            <FormLabel htmlFor="wd-available-from"><b>Available from</b></FormLabel><br/>
            <InputGroup>
            <FormControl id="wd-due-date" value={assignment.release} 
            onChange={(e) => setAssignment({ ...assignment, release: e.target.value})}/>
            <InputGroupText><FaRegCalendarAlt /></InputGroupText>
            </InputGroup>
            </Col>
            <Col>
                <FormLabel htmlFor="wd-available-until"><b>Until</b></FormLabel><br/>
                <InputGroup>
            <FormControl id="wd-due-date" value={assignment.due}
            onChange={(e) => setAssignment({ ...assignment, due: e.target.value})} />
            <InputGroupText><FaRegCalendarAlt /></InputGroupText>
            </InputGroup>
            </Col>
            </Row>
          </Col>
        </Row>
      </Form>< br />
      <div className="float-end" id="assignment-editor-buttons">
        <Button variant="danger" size="lg" className="me-1 float-end" id="wd-view-progress"
        onClick={handleSave}>Save</Button>
        <Button variant="secondary" size="lg" className="me-1 float-end" id="wd-collapse-all"
        href={`/Courses/${cid}/Assignments`}>Cancel</Button>
      </div>
    </div>
);}

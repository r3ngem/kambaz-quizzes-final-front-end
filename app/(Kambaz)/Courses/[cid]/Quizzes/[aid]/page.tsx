"use client"
import { useParams } from "next/navigation";
import { Button, Col, Row } from "react-bootstrap";
import { LuPencil } from "react-icons/lu";

export default function QuizDetails() {
    const { cid, aid } = useParams();
    return (
        <div>
            <h1> Quiz Details
            </h1><hr />
            <div id="quiz-detail-button">
                {/*start button only for STUDENT view */}
                <Button variant="danger" size="lg" className="me-1 float-start" id="wd-view-progress" 
                    href={`/Courses/${cid}/Quizzes/new/Preview`}>Start Quiz
                </Button>
                {/*preview and edit button only for FACULTY view */}
                <Button variant="secondary" 
                size="lg" className="me-1 float-start" id="wd-collapse-all"
                href={`/Courses/${cid}/Quizzes/new/Preview`}>
                    Preview
                </Button>
                <Button variant="secondary" 
                size="lg" className="me-1 float-start" id="wd-collapse-all"
                href={`/Courses/${cid}/Quizzes/new/DetailsEditor`}>
                    <LuPencil className="position-relative me-2" style={{ bottom: "1px" }} />
                    Edit
                </Button>
            </div><br /><br /><hr />

            <div>
                <h1>Q1 - HTML</h1><br />
                <Row>
                    <Col className="ms-5 col text-end" xs={2}>
                        <p><b>Quiz Type</b></p>
                    </Col>
                    <Col>
                        <p>Graded Quiz</p>
                    </Col>
                </Row>
                <Row>
                    <Col className="ms-5 col text-end" xs={2}>
                    <p><b>Points</b></p>
                    </Col>
                    <Col>
                        <p>29</p>
                    </Col>
                </Row>
                <Row>
                    <Col className="ms-5 col text-end" xs={2}>
                    <p><b>Assignment Group</b></p>
                    </Col>
                    <Col>
                        <p>QUIZZES</p>
                    </Col>
                </Row>
                <Row>
                    <Col className="ms-5 col text-end" xs={2}>
                    <p><b>Shuffle Answers</b></p>
                    </Col>
                    <Col>
                        <p>No</p>
                    </Col>
                </Row>
                <Row>
                    <Col className="ms-5 col text-end" xs={2}>
                    <p><b>Time Limit</b></p>
                    </Col>
                    <Col>
                        <p>30 Minutes</p>
                    </Col>
                </Row>
                <Row>
                    <Col className="ms-5 col text-end" xs={2}>
                    <p><b>Multiple Attempts</b></p>
                    </Col>
                    <Col>
                        <p>No</p>
                    </Col>
                </Row>
                <Row>
                    <Col className="ms-5 col text-end" xs={2}>
                    <p><b>How Many Attempts</b></p>
                    </Col>
                    <Col>
                        <p>1</p>
                    </Col>
                </Row>
                <Row>
                    <Col className="ms-5 col text-end" xs={2}>
                    <p><b>Show Correct Answers</b></p>
                    </Col>
                    <Col>
                        <p>Immediately</p>
                    </Col>
                </Row>
                <Row>
                    <Col className="ms-5 col text-end" xs={2}>
                    <p><b>Access Code</b></p>
                    </Col>
                    <Col>
                        <p></p>
                    </Col>
                </Row>
                <Row>
                    <Col className="ms-5 col text-end" xs={2}>
                    <p><b>One Question at a Time</b></p>
                    </Col>
                    <Col>
                        <p>Yes</p>
                    </Col>
                </Row>
                <Row>
                    <Col className="ms-5 col text-end" xs={2}>
                    <p><b>Webcam Required</b></p>
                    </Col>
                    <Col>
                        <p>No</p>
                    </Col>
                </Row>
                <Row>
                    <Col className="ms-5 col text-end" xs={2}>
                    <p><b>Lock Questions After Answering</b></p>
                    </Col>
                    <Col>
                        <p>No</p>
                    </Col>
                </Row>
                <br /><br />
                <Row>
                    <Col className="ms-5" xs={2}>
                    <p><b>Due</b></p>
                    </Col>
                    <Col>
                        <p><b>Available From</b></p>
                    </Col>
                    <Col>
                        <p><b>Until</b></p>
                    </Col>
                </Row>
                <hr />
                <Row>
                    <Col className="ms-5" xs={2}>
                    <p>Sep 21 at 1pm</p>
                    </Col>
                    <Col>
                        <p>Sep 21 at 11:40am</p>
                    </Col>
                    <Col>
                        <p>Sep 21 at 1pm</p>
                    </Col>
                </Row>
            </div>

        </div>
    )
}
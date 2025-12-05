import { useParams } from "next/navigation";
import { Button, FormControl, InputGroup } from "react-bootstrap";
import InputGroupText from "react-bootstrap/esm/InputGroupText";
import { FaPlus } from "react-icons/fa6";
import { SlMagnifier } from "react-icons/sl";

export default function AssignmentsControls() {
  const { cid } = useParams();
    return (
        <div id="wd-assignments-controls" className="text-nowrap d-flex">
            <InputGroup className="me-5 float-start">
            <InputGroupText><SlMagnifier /></InputGroupText>
            <FormControl placeholder="Search..."
             id="wd-search-assignment" /> 
            </InputGroup>
     <Button variant="secondary" 
     size="lg" className="me-1 float-end" id="wd-collapse-all">
       <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
       Group
     </Button>
     <Button variant="danger" size="lg" className="me-1 float-end" id="wd-view-progress" 
     href={`/Courses/${cid}/Assignments/new`}>
       <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
       Assignment
     </Button>
        </div>

    )
}
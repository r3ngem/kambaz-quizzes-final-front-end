import { Modal, Button } from "react-bootstrap";

export default function ModuleEditor({ show, handleClose, handleDelete,assignmentTitle}: {
 show: boolean; handleClose: () => void; handleDelete: () => void; assignmentTitle: string; }) {
 return ( 
    <Modal show={show} onHide={handleClose}>
   <Modal.Header closeButton>
    <Modal.Title>Delete Assignment</Modal.Title>
   </Modal.Header>
   <Modal.Body>
    Are you sure you want to delete the following assignment:
    <b>{assignmentTitle}</b>
   </Modal.Body>
   <Modal.Footer>
    <Button variant="secondary" onClick={handleClose}> Cancel </Button>
    <Button variant="danger"
     onClick={() => {
      handleDelete();
      handleClose();
     }} > Delete </Button>
   </Modal.Footer>
  </Modal>
 )}
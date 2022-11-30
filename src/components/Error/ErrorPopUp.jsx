import React, { useState } from 'react';
import { Modal, Button, Image } from 'react-bootstrap';

const ErrorPopUp = ({ title, body, onClick, showAlert }) => {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);

    return <Modal show={showAlert} onHide={handleClose}>
    <Modal.Header closeButton>
      <Modal.Title>{title}</Modal.Title>
    </Modal.Header>
    <Modal.Body>
        {body}
    </Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={onClick}>
        Ok
      </Button>
    </Modal.Footer>
  </Modal>
}

export default ErrorPopUp;
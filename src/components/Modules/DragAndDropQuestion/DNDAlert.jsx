import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

const DNDAlert = (props) => {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);

    return <Modal show={props.showDNDAlert} onHide={handleClose}>
    <Modal.Header closeButton>
      <Modal.Title>Almost!</Modal.Title>
    </Modal.Header>
    <Modal.Body>
        You got {props.correct} out of {props.total} questions correct! Give this another try
    </Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={props.reset}>
        Try Again
      </Button>
    </Modal.Footer>
  </Modal>
}

export default DNDAlert;
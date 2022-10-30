import React, { useState } from 'react';
import { Modal, Button, Image } from 'react-bootstrap';

const LostAlert = (props) => {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);

    return <Modal show={props.showLostAlert} onHide={handleClose}>
    <Modal.Header closeButton>
      <Modal.Title>You Lost!</Modal.Title>
    </Modal.Header>
    <Modal.Body>
        Click "Try Again" to give this another try!
        <Image src={require("../../../assets/common/bernietryagain.png")} width={250} />
    </Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={props.reset}>
        Try Again
      </Button>
      <Button variant="primary" onClick={handleClose} href="/modules">
        Modules
      </Button>
    </Modal.Footer>
  </Modal>
}

export default LostAlert;
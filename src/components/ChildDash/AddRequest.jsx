import React from "react";
import { useState, useContext } from "react";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { addToUserArray } from "../../services/firebase/db";
import fields from "../../services/firebase/fields"

function AddRequest(props) {

    const [validated, setValidated] = useState(false);
    const [values, setValues] = useState({});

    const onFormChange = (e, updatedAt) => {
        const name = e.target.name;
        const value = e.target.value;
        setValues({ ...values, [name]: value });
    };

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
        event.preventDefault();
        event.persist();

        const added = addToUserArray(props.id, fields.REQUESTS, values)
        console.log(added);

    };

    return(
        <Card style={{ width: '18rem'}}>
        <Card.Header>
          <Card.Title>New Withdrawal Request </Card.Title>
        </Card.Header>   
        <Card.Body>  
          <ListGroup variant="flush">
                <ListGroup.Item>
                    <Form noValidate validated={validated} onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="requestBody">
                            <Form.Label>Request</Form.Label>
                            <Form.Control required type="text" placeholder="Enter request description." name="requestBody" onChange={onFormChange}/>
                            <Form.Control.Feedback type="invalid">Please enter a request description.</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="amount">
                            <Form.Label>Amount</Form.Label>
                            <Form.Control required type="number" placeholder="$0.00" name="price" onChange={onFormChange}/>
                            <Form.Control.Feedback type="invalid">Please enter a valid price.</Form.Control.Feedback>
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </ListGroup.Item>
          </ListGroup>
        </Card.Body>
      </Card> 
    )

}
export default AddRequest;
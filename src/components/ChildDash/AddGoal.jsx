import React from "react";
import { useState, useContext } from "react";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { addToUserArray } from "../../services/firebase/db";
import fields from "../../services/firebase/fields"

function AddGoal(props) {

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
        } else {
            setValidated(true);
            event.preventDefault();
            event.persist();

            const added = addToUserArray(props.id, fields.GOALS, values)
            console.log(added);
        }

    };

    return(
        <Card style={{ width: '18rem'}}>
        <Card.Header>
          <Card.Title>New Goal </Card.Title>
        </Card.Header>   
        <Card.Body>  
          <ListGroup variant="flush">
                <ListGroup.Item>
                    <Form noValidate validated={validated} onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="GoalBody">
                            <Form.Label>Goal</Form.Label>
                            <Form.Control required type="text" placeholder="Enter goal description." name="GoalBody" onChange={onFormChange}/>
                            <Form.Control.Feedback type="invalid">Please enter a goal description.</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="amount">
                            <Form.Label>Amount</Form.Label>
                            <Form.Control required type="number" placeholder="$0.00" name="price" min="0" onChange={onFormChange}/>
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
export default AddGoal;
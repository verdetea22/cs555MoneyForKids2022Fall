import React from "react";
import { useState, useContext } from "react";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function AddGoal(props) {

    return(
        <Card style={{ width: '18rem'}}>
        <Card.Header>
          <Card.Title>New Goal</Card.Title>
        </Card.Header>   
        <Card.Body>  
          <ListGroup variant="flush">
                <ListGroup.Item>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Goal</Form.Label>
                            <Form.Control type="text" placeholder="Enter goal name." />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Amount</Form.Label>
                            <Form.Control type="number" placeholder="$0.00" />
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
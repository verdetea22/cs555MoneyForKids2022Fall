import React from "react";
import { useState, useContext } from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import Form from 'react-bootstrap/Form';

function ControlPanel() {
    //replace props with database call where props is child name
    //child holds child object from db

    return(
        <Card style={{ width: '18rem'}}>
        <Card.Header>
          <Card.Title>Control Panel</Card.Title>
        </Card.Header>   
        <Card.Body>
            <ListGroup variant="flush">
                <ListGroup.Item><Button size="sm">Add New Child Account</Button></ListGroup.Item>
                <ListGroup.Item><Button size="sm">Remove Child Account</Button></ListGroup.Item>
                <ListGroup.Item>
                    <Form>
                        <Form.Group className="mb-3" >
                            <Form.Label>Interest Rate</Form.Label>
                            <Form.Control  placeholder="Interest Rate" />
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
export default ControlPanel;
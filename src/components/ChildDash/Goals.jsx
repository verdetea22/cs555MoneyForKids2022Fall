import React from "react";
import { useState } from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import { ListGroupItem } from "react-bootstrap";
import Form from 'react-bootstrap/Form';

function Goals(props) {
    //replace props with database call where props is child name
    //child holds child object from db
    let goalList = [
        {"name": "Nintendo Switch", "price": 300},
        {"name": "Airpods", "price": 179}
    ];

    const [goals, setGoals] = useState(goalList);

    function addGoal(title, price) {
        goalList.push({"name":title, "price": price});
        setGoals(goalList);
    }

    return(
        <Card style={{ width: '18rem'}}>
        <Card.Header>
          <Card.Title>{props.childName}</Card.Title>
          <Card.Subtitle>Savings Goals</Card.Subtitle>
        </Card.Header>   
        <Card.Body>  
          <ListGroup variant="flush">
            {goals.map((goal)=>(
                <ListGroupItem>{goal.name}: ${goal.price}</ListGroupItem>
            ))}
          </ListGroup>
          <Form>
                <Form.Group className="mb-3" >
                    <Form.Label>Add Goal</Form.Label>
                    <Form.Control  placeholder="Name" controlId="name"/>
                    <Form.Control  placeholder="Price" controlId="price"/>
                </Form.Group>
                <Button variant="primary" onClick={addGoal(props.name, props.price)}>
                    Add
                </Button>
            </Form>
        </Card.Body>
      </Card> 
    )

}
export default Goals;
import React from "react";
import { useState, useContext } from "react";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

function ChildGoals(props) {
    
    let children = [
        {"childName": "Example Child 1", "name": "Bike", "progess": 150, "goal": 200},
        {"childName": "Example Child 2", "name": "PS5", "progess": 275, "goal": 300}
    ]

    let goalslist2 = [

    ]

    return(
        <Card style={{ width: '18rem' }}>
        <Card.Header>
          <Card.Title>Childrens Goals</Card.Title>
        </Card.Header>   
        <Card.Body>  
          <ListGroup variant="flush">
            <ListGroup.Item>{children[0].childName}</ListGroup.Item>
            <ListGroup.Item>{children[0].name}: ${children[0].progess}/{children[0].goal}</ListGroup.Item>
            <ListGroup.Item>{children[1].childName}</ListGroup.Item>
            <ListGroup.Item>{children[1].name}: ${children[1].progess}/{children[1].goal}</ListGroup.Item>
          </ListGroup>
        </Card.Body>
      </Card>
    )
    
}
export default ChildGoals;
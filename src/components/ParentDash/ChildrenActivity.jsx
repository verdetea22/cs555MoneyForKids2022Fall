import React from "react";
import { useState, useContext } from "react";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

function ChildrenActivity(props) {
    //replace props with db call
    //want list of all children belonging to parent

    let children = [
        {"childName": "Example Child 1", "diff": -27},
        {"childName": "Example Child 2", "diff": 90}
    ]  

    return(
        <Card style={{ width: '18rem' }}>
        <Card.Header>
          <Card.Title>Recent Activity</Card.Title>
        </Card.Header>   
        <Card.Body>  
          <ListGroup variant="flush">
            <ListGroup.Item>{children[0].childName}: ${children[0].diff}</ListGroup.Item>
            <ListGroup.Item>{children[1].childName}: ${(children[1].diff > 0)? '+':''}{children[1].diff}</ListGroup.Item>
          </ListGroup>
        </Card.Body>
      </Card>
    )
}
export default ChildrenActivity;
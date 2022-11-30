import React from "react";
import { useEffect, useState } from "react";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

function CurrentGoals(props) {

    let goals = [];
    console.log(props.child.goals);
    if(props.child.goals != undefined){
       goals = (props.child.goals); 
    }
    

    if(goals.length == 0){
        return(
            <Card style={{ width: '18rem'}}>
            <Card.Header>
            <Card.Title>Goals</Card.Title>
            </Card.Header>   
            <Card.Body>  
            <ListGroup variant="flush">
                <ListGroup.Item>
                    <p>No goals! Go add some!</p>       
                </ListGroup.Item>
            </ListGroup>
            </Card.Body>
        </Card> 
        )
    }
    else{
       return(
        <Card style={{ width: '18rem'}}>
        <Card.Header>
          <Card.Title>Goals</Card.Title>
        </Card.Header>   
        <Card.Body>  
          <ListGroup variant="flush">
          {goals.map((goal)=>(
                    <ListGroup.Item>
                        
                    </ListGroup.Item>
                ))}
          </ListGroup>
        </Card.Body>
      </Card> 
    ) 
    }
}
export default CurrentGoals;
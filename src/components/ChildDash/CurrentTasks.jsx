import React from "react";
import { useEffect, useState } from "react";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

function CurrentTasks(props) {

    let tasks = [];
    console.log(props.child.tasks);
    if(props.child.tasks != undefined){
       tasks = (props.child.tasks); 
    }
    

    if(tasks.length == 0){
        return(
            <Card style={{ width: '18rem'}}>
            <Card.Header>
            <Card.Title>Tasks</Card.Title>
            </Card.Header>   
            <Card.Body>  
            <ListGroup variant="flush">
                <ListGroup.Item>
                    <p>No tasks!</p>       
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
          <Card.Title>Tasks</Card.Title>
        </Card.Header>   
        <Card.Body>  
          <ListGroup variant="flush">
          {tasks.map((task)=>(
                    <ListGroup.Item>
                        {task.requestBody}
                        {task.price}
                    </ListGroup.Item>
                ))}
          </ListGroup>
        </Card.Body>
      </Card> 
    ) 
    }
}
export default CurrentTasks;
import React from "react";
import { useState, useEffect } from "react";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import fields from "../../services/firebase/fields"

import { getChildAccounts, getCurrentUserData } from "../../services/firebase/db";

function tasks(props) {
    //props is array list of children ids
    //children is the array of child objects
    const [children, setChildren] = useState([]);

    useEffect(() => {
      const getCurrentUser = async () => {
  
          try {
              const childrenData = await getChildAccounts(props.children);
              console.log(childrenData)
              setChildren(childrenData);
              
          } catch (error) {
              console.log(error);
          }
          
        };
        getCurrentUser();
    }, []);

    return(
        <Card style={{ width: '18rem'}}>
        <Card.Header>
          <Card.Title>Tasks</Card.Title>
        </Card.Header>   
        <Card.Body>  
          <ListGroup variant="flush">
          {
          (children && children.length > 0) ? 
            children.map((child)=>(
                (child.tasks && child.tasks.length > 0) ? 
                    child.tasks.map((task)=>(
                        <ListGroup.Item>
                            <p>Name: {child.name}</p>
                            <p>Description: {task.taskBody}</p>
                            <p>Amount: ${task.price}</p>
                        </ListGroup.Item>
                    ))
                    :
                    <ListGroup.Item>No tasks!</ListGroup.Item>
                ))
                :
                <ListGroup.Item>
                    <p>No tasks!</p>       
                </ListGroup.Item>
          }
          </ListGroup>
        </Card.Body>
      </Card> 
)

}
export default tasks;
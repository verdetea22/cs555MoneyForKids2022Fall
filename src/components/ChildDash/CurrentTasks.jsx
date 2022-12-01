import React from "react";
import { useEffect, useState } from "react";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import {getChildAccounts} from "../../services/firebase/db";

function CurrentTasks(props) {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
      const getCurrentUser = async () => {
  
          try {
              const user = await getChildAccounts([props.id]);
              console.log(user)
              setTasks(user[0].tasks);
              
          } catch (error) {
              console.log(error);
          }
          
      };
      getCurrentUser();
  }, []);
    
      console.log(tasks)
      return(
      <Card style={{ width: '18rem'}}>
      <Card.Header>
        <Card.Title>Pending Tasks</Card.Title>
      </Card.Header>   
      <Card.Body>  
        <ListGroup variant="flush">
        {
        (tasks && tasks.length > 0) ? 
          tasks.map((request)=>(
                  <ListGroup.Item>
                      <p>{tasks.taskBody}</p>
                      <p>${tasks.price}</p>
                  </ListGroup.Item>
              ))
              :
              <ListGroup.Item>
                  <p>No tasks! Go add some!</p>       
              </ListGroup.Item>
        }
        </ListGroup>
      </Card.Body>
    </Card> 
  ) 
}
export default CurrentTasks;
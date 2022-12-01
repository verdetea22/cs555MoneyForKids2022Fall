import React from "react";
import { useEffect, useState } from "react";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { removeFromUserArray, addToUserArray, getChildAccounts} from "../../services/firebase/db";
import fields from "../../services/firebase/fields"

function CurrentTasks(props) {
    const [tasks, setTasks] = useState([]);
    const [name, setName] = useState("")

    useEffect(() => {
      const getCurrentUser = async () => {
  
          try {
              const user = await getChildAccounts([props.id]);
              console.log(user)
              setName(user[0].name);
              setTasks(user[0].tasks);
              
          } catch (error) {
              console.log(error);
          }
          
      };
      getCurrentUser();
  }, []);

  const handleSubmit = (event) => {
      
    event.preventDefault();
    event.persist();

    let valuesToAdd = {
      ["requestBody"]: event.target[0].value,
      ["price"]: event.target[1].value,
    }

    let valuesToDelete = {
      "childName": name,
      [event.target[0].name]: event.target[0].value,
      [event.target[1].name]: event.target[1].value,
    }

    const added = addToUserArray(props.id, fields.REQUESTS, valuesToAdd);
    console.log(added);
    const removed = removeFromUserArray(props.id, fields.TASKS, valuesToDelete);
    console.log(removed);

  };
    
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
          tasks.map((task)=>(
                  <ListGroup.Item>
                      <p>{task.taskBody}</p>
                      <p>${task.price}</p>
                      <Form onSubmit={handleSubmit}>
                          <Form.Control hidden readOnly value={task.taskBody} name="taskBody"/>
                          <Form.Control hidden readOnly value={task.price} name="price"/>
                          <Button variant="primary" type="submit">Done</Button>
                        </Form>
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
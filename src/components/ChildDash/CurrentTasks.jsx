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
    const [balance, setBalance] = useState("");

    useEffect(() => {
      const getCurrentUser = async () => {
  
          try {
              const user = await getChildAccounts([props.id]);
              console.log(user)
              setName(user[0].name);
              setTasks(user[0].tasks);
              setBalance(user[0].balance);
              
          } catch (error) {
              console.log(error);
          }
          
      };
      getCurrentUser();
  }, []);

  const completeTask = (task) => {
    let valuesToAdd = {
      ["requestBody"]: (task.requestBody ? task.requestBody : ""),
      ["price"]: task.price,
    }

    let valuesToDelete = {
      "childName": name,
      "requestBody": (task.requestBody ? task.requestBody : ""),
      "price": task.price,
    }

    addToUserArray(props.id, fields.REQUESTS, valuesToAdd);
    removeFromUserArray(props.id, fields.TASKS, valuesToDelete).then((error) => {
      if(!error){
        setTasks(tasks.filter(t => t != task));
      }
    });
  }
    
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
                      <Button variant="primary" type="submit" onClick={() => completeTask(task)}>Done</Button>
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

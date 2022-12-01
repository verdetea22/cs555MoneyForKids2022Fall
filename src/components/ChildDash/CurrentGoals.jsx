import React from "react";
import { useEffect, useState } from "react";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { removeFromUserArray, addToUserArray, getChildAccounts} from "../../services/firebase/db";
import fields from "../../services/firebase/fields"


function CurrentGoals(props) {
    const [goals, setGoals] = useState([]);

    useEffect(() => {
      const getCurrentUser = async () => {

          try {
              const user = await getChildAccounts([props.id]);

              setGoals(user[0].goals);
              
          } catch (error) {
              console.log(error);
          }
          
      };
      getCurrentUser();
  }, []);
    
    //when goal complete, delete goal from goal list and create a withdraw request
    const handleSubmit = (event) => {
      
      event.preventDefault();
      event.persist();

      let valuesToAdd = {
        [event.target[0].name]: event.target[0].value,
        [event.target[1].name]: event.target[1].value,
      }

      let valuesToDelete = {
        "GoalBody": event.target[0].value,
        "price": event.target[1].value,
      }

      const added = addToUserArray(props.id, fields.REQUESTS, valuesToAdd);
      console.log(added);
      const removed = removeFromUserArray(props.id, fields.GOALS, valuesToDelete);
      console.log(removed);

    };

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
          {
          (goals && goals.length > 0) ?
            goals.map((goal)=>(
                    <ListGroup.Item>
                        <p>{goal.GoalBody}</p>
                        <p>${goal.price}</p>
                        <Form onSubmit={handleSubmit}>
                          <Form.Control hidden readonly value={goal.GoalBody} name="requestBody"/>
                          <Form.Control hidden readonly value={goal.price} name="price"/>
                          <Button variant="primary" type="submit">Redeem</Button>
                        </Form>
                    </ListGroup.Item>
            )):
                    <ListGroup.Item>
                    <p>No goals! Go add some!</p>       
                    </ListGroup.Item>
                }
          </ListGroup>
        </Card.Body>
      </Card> 
    ) 
    }
}
export default CurrentGoals;
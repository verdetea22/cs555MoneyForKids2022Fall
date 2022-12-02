import React from "react";
import { useEffect, useState } from "react";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { removeFromUserArray, addToUserArray, getChildAccounts} from "../../services/firebase/db";
import fields from "../../services/firebase/fields"
import ErrorPopUp from "../Error/ErrorPopUp";


function CurrentGoals(props) {

    const [goals, setGoals] = useState([]);
    const [showError, setShowError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [errorTitle, setErrorTitle] = useState("");
    const [errorCompletion, setErrorCompletion] = useState(dismissError);

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
    const redeemGoal = (goal) => {

      let valuesToAdd = {
        "requestBody" : (goal.GoalBody ? goal.GoalBody : ""),
        "price" : goal.price,
      }

      let valuesToDelete = {
        "GoalBody": (goal.GoalBody ? goal.GoalBody : ""),
        "price": goal.price,
      }

      const added = addToUserArray(props.id, fields.REQUESTS, valuesToAdd);
      const removed = removeFromUserArray(props.id, fields.GOALS, valuesToDelete).then((error) => {
        if (!error) {
          const newGoals = goals.filter(item => item != goal);
          setGoals(goals.filter(item => item != goal));
        }
        else{
          setShowError(true);
          setErrorMessage("There was an issue redeeming the goal");
          setErrorTitle("Redeem Issue");
          setErrorCompletion(dismissError);
        }
      });
    }

    const dismissError = () => {
      setShowError(false);
    }

       return(
        <Card style={{ width: '18rem'}}>
      <ErrorPopUp showAlert={showError} title={errorTitle} body={errorMessage} onClick={errorCompletion} />
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
                        <Button variant="primary" type="submit" onClick={() => redeemGoal(goal)}>Redeem</Button>
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
export default CurrentGoals;
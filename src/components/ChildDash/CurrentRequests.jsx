import React from "react";
import { useEffect, useState } from "react";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { getChildAccounts } from "../../services/firebase/db";
import { useAuth } from "../../contexts/AuthContext";
import { getCurrentUserData } from "../../services/firebase/db";
import Button from 'react-bootstrap/Button';
import { updateUserData } from "../../services/firebase/db";
import fields from "../../services/firebase/fields";
import ErrorPopUp from "../../components/Error/ErrorPopUp";


function CurrentRequests(props) {

  const [requests, setRequests] = useState([]);
  const [balance, setBalance] = useState(0);
  const [showError, setShowError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [errorTitle, setErrorTitle] = useState("");
  const [errorCompletion, setErrorCompletion] = useState(dismissError);
  const {user} = useAuth();
  const [isParent, setIsParent] = useState(false)

  useEffect(() => {
    const getCurrentUser = async () => {

        try {
            console.log(user)
            const { balance, requests } = await getCurrentUserData();
            setRequests(requests)
            setBalance(balance)
            if(role === "child") {
              setIsParent(false)
            }
            else {
              setIsParent(true)
            }
        } catch (error) {
            console.log(error);
        }

    };
    getCurrentUser();
}, [user]);

const deleteTask = ()

const submitTask = (balance, price) => {
  console.log("Blah")
  if(balance < price) {
    setShowError(true);
    setErrorMessage("");
    setErrorTitle("No Access");
    setErrorCompletion(() => dismissError)
  }
  else {
    const newBalance = balance - price
    updateUserData(user.uid, fields.BALANCE, newBalance)
    window.location.reload();
  }
  };

const denyTask = 

const dismissError = () => {
  setShowError(() => false);
}

  
    console.log(requests)
    return(
    <Card style={{ width: '18rem'}}>
    <ErrorPopUp showAlert={showError} title={errorTitle} body={errorMessage} onClick={errorCompletion} />
    <Card.Header>
      <Card.Title>Pending Requests</Card.Title>
    </Card.Header>   
    <Card.Body>  
      <ListGroup variant="flush">
      {
      (requests && requests.length > 0) ? 
        requests.map((request)=>(
                <ListGroup.Item>
                    <p>{request.requestBody}</p>
                    <p>${request.price}</p>
                {isParent ? <>
                  <Button onClick={ () => submitTask(balance, request.price) }>
                    Approve
                  </Button>
                  <Button onClick={}>
                    Deny
                  </Button>
                </> : <></>}
                </ListGroup.Item>
            ))
            :
            <ListGroup.Item>
                <p>No requests! Go add some!</p>       
            </ListGroup.Item>
      }
      </ListGroup>
    </Card.Body>
  </Card> 
) 
}
export default CurrentRequests;
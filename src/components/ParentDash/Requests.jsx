import React from "react";
import { useState, useEffect } from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import Form from 'react-bootstrap/Form';
import { addToUserArray, removeFromUserArray, updateUserData } from "../../services/firebase/db";
import fields from "../../services/firebase/fields"
import ErrorPopUp from "../Error/ErrorPopUp";

import { getChildAccounts, getCurrentUserData } from "../../services/firebase/db";
import { updateCurrentUser } from "firebase/auth";

function Requests(props) {
    //props is array list of children ids
    //children is the array of child objects
    const [children, setChildren] = useState([]);
    const [showError, setShowError] = useState(false);

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

    const rejectEvent = (id, price, body) => {
      
        const remove = {
            requestBody: body,
            price: price
        }
        removeFromUserArray(id, fields.REQUESTS, remove);
    };

    const withdraw = (balance, price, id, body) => {
        if(price > balance){
            setShowError(true);
        }else{
            const remove = {
                requestBody: body,
                price: price
            }
            removeFromUserArray(id, fields.REQUESTS, remove);
            updateUserData(id, fields.BALANCE, (balance - price));
        }
    }

    const dismissError = () => {
        setShowError(false);
    }

    return(
            <Card style={{ width: '18rem'}}>
            <ErrorPopUp showAlert={showError} title={"Not enough money"} body={"Child does not have enough money to complete request"} onClick={dismissError} />
            <Card.Header>
              <Card.Title>Pending Requests</Card.Title>
            </Card.Header>   
            <Card.Body>  
              <ListGroup variant="flush">
              {
              (children && children.length > 0) ? 
                children.map((child)=>(
                    (child.requests && child.requests.length > 0) ? 
                        child.requests.map((request)=>(
                            <ListGroup.Item key={child.name}>
                                <p>Name: {child.name}</p>
                                <p>Description: {request.requestBody}</p>
                                <p>Amount: ${request.price}</p>
                                <Button variant="success" type="submit" onClick={() => withdraw(child.balance, request.price, child.id, request.requestBody)}>Approve</Button>
                                <Button variant="danger" type="submit" onClick={() => rejectEvent(child.id, request.price, request.requestBody)}>Reject</Button>
                            </ListGroup.Item>
                        ))
                        :
                        <ListGroup.Item>No requests!</ListGroup.Item>
                    ))
                    :
                    <ListGroup.Item>
                        <p>No requests!</p>       
                    </ListGroup.Item>
              }
              </ListGroup>
            </Card.Body>
          </Card> 
    )

}
export default Requests;
import React from "react";
import { useState, useEffect } from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import Form from 'react-bootstrap/Form';
import { addToUserArray, removeFromUserArray } from "../../services/firebase/db";
import fields from "../../services/firebase/fields"

import { getChildAccounts, getCurrentUserData } from "../../services/firebase/db";

function Requests(props) {
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

    const handleAccept = (event) => {
      
        event.preventDefault();
        event.persist();

        let valuesToDelete = {
        [event.target[0].name]: event.target[0].value,
        [event.target[1].name]: event.target[1].value,
        }
        let id = event.target[2].value;
        const removed = removeFromUserArray(id, fields.REQUESTS, valuesToDelete);
        //add call to function to remove amount here
        console.log(removed);

    };

    const handleReject = (event) => {
      
        event.preventDefault();
        event.persist();

        let valuesToDelete = {
        [event.target[0].name]: event.target[0].value,
        [event.target[1].name]: event.target[1].value,
        }
        let id = event.target[2].value;
        const removed = removeFromUserArray(id, fields.REQUESTS, valuesToDelete);
        //add call to function to remove amount here
        console.log(removed);

    };


    return(
            <Card style={{ width: '18rem'}}>
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
                            <ListGroup.Item>
                                <p>Name: {child.name}</p>
                                <p>Description: {request.requestBody}</p>
                                <p>Amount: ${request.price}</p>
                                <Form onSubmit={handleAccept}>
                                <Form.Control hidden readOnly value={request.requestBody} name="requestBody"/>
                                <Form.Control hidden readOnly value={request.price} name="price"/>
                                <Form.Control hidden readOnly value={child.id} name="id"/>
                                <Button variant="success" type="submit">Approve</Button>
                                </Form>
                                <Form onSubmit={handleReject}>
                                <Form.Control hidden readOnly value={request.requestBody} name="requestBody"/>
                                <Form.Control hidden readOnly value={request.price} name="price"/>
                                <Form.Control hidden readOnly value={child.id} name="id"/>
                                <Button variant="danger" type="submit">Reject</Button>
                                </Form>
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
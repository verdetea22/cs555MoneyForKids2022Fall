import React from "react";
import { useEffect, useState } from "react";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

function CurrentRequests(props) {

    let requests = [];
    console.log(props.child.requests);
    if(props.child.requests != undefined){
       requests = (props.child.requests); 
    }
    

    if(requests.length == 0){
        return(
            <Card style={{ width: '18rem'}}>
            <Card.Header>
            <Card.Title>Pending Requests</Card.Title>
            </Card.Header>   
            <Card.Body>  
            <ListGroup variant="flush">
                <ListGroup.Item>
                    <p>No requests! Go add some!</p>       
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
          <Card.Title>Pending Requests</Card.Title>
        </Card.Header>   
        <Card.Body>  
          <ListGroup variant="flush">
          {requests.map((request)=>(
                    <ListGroup.Item>
                        
                    </ListGroup.Item>
                ))}
          </ListGroup>
        </Card.Body>
      </Card> 
    ) 
    }
}
export default CurrentRequests;
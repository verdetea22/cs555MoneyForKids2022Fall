import React from "react";
import { useEffect, useState } from "react";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import {getChildAccounts} from "../../services/firebase/db";

function CurrentRequests(props) {

  const [requests, setRequests] = useState([]);

  useEffect(() => {
    const getCurrentUser = async () => {

        try {
            const user = await getChildAccounts(props.id);
            console.log(user)

            setRequests(user.requests);
            
        } catch (error) {
            console.log(error);
        }
        
    };
    getCurrentUser();
}, []);
  
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
                        <p>{request.requestBody}</p>
                        <p>${request.price}</p>
                    </ListGroup.Item>
                ))}
          </ListGroup>
        </Card.Body>
      </Card> 
    ) 
    }
}
export default CurrentRequests;
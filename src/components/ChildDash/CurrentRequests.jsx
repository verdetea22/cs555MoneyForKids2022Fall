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
            const user = await getChildAccounts([props.id]);
            console.log(user)
            setRequests(user[0].requests);
            
        } catch (error) {
            console.log(error);
        }
        
    };
    getCurrentUser();
}, []);
  
    console.log(requests)
    return(
    <Card style={{ width: '18rem'}}>
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
import React from "react";
import { useEffect, useState } from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import {getChildAccounts} from "../../services/firebase/db";


function Balance(props) {
  const [balance, setBalance] = useState("");

  useEffect(() => {
    const getCurrentUser = async () => {

        try {
            const user = await getChildAccounts([props.id]);

            setBalance(user[0].balance);
            
        } catch (error) {
            console.log(error);
        }
        
    };
    getCurrentUser();
}, []);

    return(
        <Card style={{ width: '18rem'}}>
        <Card.Header>
          <Card.Title>Balance:</Card.Title>
        </Card.Header>   
        <Card.Body>  
          <ListGroup variant="flush">
            <ListGroup.Item>${balance}</ListGroup.Item>
          </ListGroup>
        </Card.Body>
      </Card> 
    )

}

export default Balance;
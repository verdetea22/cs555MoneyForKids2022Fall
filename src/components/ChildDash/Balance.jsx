import React from "react";
import { useEffect, useState } from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';


function Balance(props) {
    //replace props with database call where props is child name
    //child holds child object from db

    return(
        <Card style={{ width: '18rem'}}>
        <Card.Header>
          <Card.Title>Balance:</Card.Title>
        </Card.Header>   
        <Card.Body>  
          <ListGroup variant="flush">
            <ListGroup.Item>${props.balance}</ListGroup.Item>
          </ListGroup>
        </Card.Body>
      </Card> 
    )

}

export default Balance;
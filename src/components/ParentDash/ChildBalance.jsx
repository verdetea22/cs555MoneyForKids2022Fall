import React from "react";
import { useEffect, useState } from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import { getChildAccounts } from "../../services/firebase/db";


function ChildBalance(props) {
    //replace props with database call where props is child name
    //child holds child object from db

    const child = props.child;

    return(
        <Card style={{ width: '18rem'}}>
        <Card.Header>
          <Card.Title>{child.name}</Card.Title>
          <Card.Subtitle>Account Snapshot</Card.Subtitle>
        </Card.Header>   
        <Card.Body>  
          <ListGroup variant="flush">
            <ListGroup.Item>Current Balance: ${child.balance}</ListGroup.Item>
          </ListGroup>
        </Card.Body>
        <Card.Body className="text-center">
          {/* How to pass props here?*/}
          <Button variant="primary" childName = {props.childName} href="./ChildDetails">Details</Button>
        </Card.Body>
      </Card> 
    )

}
/*<ListGroup.Item>{(child.difference > 0)? '+':''}{child.difference}% difference compared to last month</ListGroup.Item>
            <ListGroup.Item>Deposits this month: ${child.in}</ListGroup.Item>
            <ListGroup.Item>Withdrawals this month: ${child.out}</ListGroup.Item>
*/
export default ChildBalance;
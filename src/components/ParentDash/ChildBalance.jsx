import React from "react";
import { useState, useContext } from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import { getChildAccounts } from "../../services/firebase/db";

function ChildBalance(props) {
    //replace props with database call where props is child name
    //child holds child object from db

    let children = getChildAccounts();

    let child = children.filter(children => children.name == props.name);


    if(props.balance < child.prevBalance){
      let decrease = props.balance - child.prevBalance;
      child.out = child.out - decrease;
      child.difference = decrease/child.prevBalance * 100;
    }
    else if(props.balance > child.prevBalance){
      let increase =  props.balance - child.prevBalance;
      child.in = child.in + increase
      child.difference = increase/child.prevBalance * 100;
    }

    return(
        <Card style={{ width: '18rem'}}>
        <Card.Header>
          <Card.Title>{props.childName}</Card.Title>
          <Card.Subtitle>Account Snapshot</Card.Subtitle>
        </Card.Header>   
        <Card.Body>  
          <ListGroup variant="flush">
            <ListGroup.Item>Current Balance: ${props.balance}</ListGroup.Item>
            <ListGroup.Item>{(child.difference > 0)? '+':''}{child.difference}% difference compared to last month</ListGroup.Item>
            <ListGroup.Item>Deposits this month: ${child.in}</ListGroup.Item>
            <ListGroup.Item>Withdrawals this month: ${child.out}</ListGroup.Item>
          </ListGroup>
        </Card.Body>
        <Card.Body className="text-center">
          {/* How to pass props here?*/}
          <Button variant="primary" childName = {props.childName} href="./ChildDetails">Details</Button>
        </Card.Body>
      </Card> 
    )

}
export default ChildBalance;
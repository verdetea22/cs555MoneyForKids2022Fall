import React from "react";
import { useState, useContext } from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function ChildBalance(props) {
    //replace props with database call

    return(
        <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>{props.childName}</Card.Title>
          <Card.Text>
            Balance: ${props.balance}
          </Card.Text>
          <Button variant="primary">Details</Button>
        </Card.Body>
      </Card>
        
    )

}
export default ChildBalance;
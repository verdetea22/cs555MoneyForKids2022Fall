import React from "react";
import { useState, useContext } from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';

function Requests(props) {
    //replace props with database call where props is child name
    //child holds child object from db

    return(
        <Card style={{ width: '18rem'}}>
        <Card.Header>
          <Card.Title>Pending Requests</Card.Title>
        </Card.Header>   
        <Card.Body>  
          <ListGroup variant="flush">
                {props.children.map((child)=>(
                    <ListGroup.Item>
                        <div>
                            {child.childName}
                        </div>
                        <div>
                            Request Body
                        </div>
                        <div className="text-center">
                            <Button variant="success" size="sm">Approve</Button>
                            <Button variant="danger" size="sm">Decline</Button>
                        </div>
                    </ListGroup.Item>
                ))} 
          </ListGroup>
        </Card.Body>
      </Card> 
    )

}
export default Requests;
import React from "react";
import { useEffect, useState } from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import { getChildAccounts } from "../../services/firebase/db";


function ChildBalance(props) {
    //replace props with database call where props is child name
    //child holds child object from db
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

      console.log(children)

      return(
      <Card style={{ width: '18rem'}}>
      <Card.Header>
        <Card.Title>Account Balances</Card.Title>
      </Card.Header>   
      <Card.Body>  
        <ListGroup variant="flush">
        {
        (children && children.length > 0) ? 
          children.map((child)=>(
                  <ListGroup.Item>
                      <p>{child.name}'s Account</p>
                      <p>Current Balance: ${child.balance}</p>
                  </ListGroup.Item>
              ))
              :
              <ListGroup.Item>
                
              </ListGroup.Item>
        }
        </ListGroup>
      </Card.Body>
    </Card> 
  ) 

}
export default ChildBalance;
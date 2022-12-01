import React from "react";
import { useState, useEffect } from "react";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { updateUserData, getChildAccounts } from "../../services/firebase/db";
import fields from "../../services/firebase/fields"

function AddTasks(props) {

    const [validated, setValidated] = useState(false);
    const [values, setValues] = useState({});
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


    const onFormChange = (e, updatedAt) => {
        const name = e.target.name;
        const value = e.target.value;
        setValues({ ...values, [name]: value });
    };

    const onSelectChange = (e, updatedAt) => {
        const id = e.target.value;
        setValues({ ...values, ["childId"]: id });
    };

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
        event.preventDefault();
        event.persist();

        let id = (event.target[0].value)
        let child = children.filter(child => child.id == id)
        let balance = child[0].balance;

        let newBalance = parseInt(balance) + parseInt(values.price);

        //console.log(newBalance);
        //console.log(values);

        const added = updateUserData(id, fields.BALANCE, newBalance)
        console.log(added);

    };

    return(
        <Card style={{ width: '18rem'}}>
        <Card.Header>
          <Card.Title>Deposit Funds</Card.Title>
        </Card.Header>   
        <Card.Body>  
          <ListGroup variant="flush">
                <ListGroup.Item>
                    <Form noValidate validated={validated} onSubmit={handleSubmit}>
                        <Form.Group className="mb-3">
                            <Form.Label>Select a Child</Form.Label>
                            <Form.Select onChange={onSelectChange}>
                                <option>Select...</option>
                                {children.map((child)=>(
                                    <option value={child.id}>{child.name}</option>
                                ))}
                            </Form.Select>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="amount">
                            <Form.Label>Amount</Form.Label>
                            <Form.Control required type="number" placeholder="$0.00" name="price" onChange={onFormChange}/>
                            <Form.Control.Feedback type="invalid">Please enter a valid amount.</Form.Control.Feedback>
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Deposit
                        </Button>
                    </Form>
                </ListGroup.Item>
          </ListGroup>
        </Card.Body>
      </Card> 
    )

}
export default AddTasks;
import React from "react";

import { Card, Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { reauthenticate } from "../../services/firebase/auth";
function Reauthenticate() {

    const { handleSubmit, register } = useForm();

    const { redirectLink } = useParams();

    const navigate = useNavigate();
 

    const submit = async ({ password }) => {


        try {
            await reauthenticate(password);
            
            navigate(`/${redirectLink}`);
            
        } catch (error) {
            console.log(error);
        }
    };
    return ( 
        <Card className="w-50 mx-auto">
            <Card.Header>
                <h1>Type password to go forward</h1>
            </Card.Header>
            <Card.Body>
                <Form className="mx-auto" onSubmit={handleSubmit(submit)}>
                    <Form.Group controlId="passwordControl">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Enter password..." required minLength="6" {...register("password")}></Form.Control>
                    </Form.Group>
                    <Form.Group>
                        <Button type="submit">Submit</Button>
                    </Form.Group>
                </Form>
            </Card.Body>
        </Card>
    );
}

export default Reauthenticate;
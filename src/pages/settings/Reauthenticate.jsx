import React, { useState } from "react";

import { Card, Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import ErrorLabel from "../../components/Error/ErrorLabel";
import { reauthenticate } from "../../services/firebase/auth";
function Reauthenticate() {

    const { handleSubmit, register } = useForm();

    const { redirectLink } = useParams();

    const navigate = useNavigate();

    const [show, setShow] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
 

    const submit = async ({ password }) => {


        try {
            await reauthenticate(password);
            
            navigate(`/${redirectLink}`);
            
        } catch (error) {
            
            if (error.code === "auth/wrong-password") {
                setErrorMessage("Wrong Password! Please type password again.")
            } else {
                setErrorMessage("Something wrong with reauthentication!");
            }

            console.log(error);

            setShow(true);
        }
    };
    return ( 
        <Card className="w-50 mx-auto">
            <Card.Header>
                <h1>Type password to go forward</h1>
            </Card.Header>
            <Card.Body>
                <Form className="mx-auto" onSubmit={handleSubmit(submit)}>
                    <Form.Group className="mb-3" controlId="passwordControl">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Enter password..." required minLength="6" {...register("password")}></Form.Control>
                        <Form.Text muted>The password must be at least six characters long</Form.Text>
                    </Form.Group>
                    <ErrorLabel show={show} message={errorMessage} onClick={() => setShow(false) }/>
                    <Form.Group>
                        <Button type="submit">Submit</Button>
                    </Form.Group>
                </Form>
            </Card.Body>
        </Card>
    );
}

export default Reauthenticate;
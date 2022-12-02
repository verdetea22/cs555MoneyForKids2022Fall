import React, { useEffect, useState } from "react";

import { Card, Form, Button } from "react-bootstrap";

import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import ErrorLabel from "../../components/Error/ErrorLabel";
import { useAuth } from "../../contexts/AuthContext";
import { getEmail } from "../../services/firebase/db";

function ChangeEmail() {

    const { handleSubmit, register } = useForm();
    const { changeEmail } = useAuth();

    const [email, setEmail] = useState("");

    const naviagte = useNavigate();

    const [show, setShow] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    
    useEffect(() => {
        const getUserData = async () => {
            const email  = await getEmail();
            setEmail(email);
        };
        getUserData(); 
    }, []);

    const submit = async ({ oldEmail, newEmail }) => {
        
        if (newEmail === newEmail.toLowerCase()) {

            try {

                if (oldEmail === email) {
                    await changeEmail(newEmail);
                    naviagte("/");
                } else {
                    setErrorMessage("Incorrect email! Please type email again!");
                    setShow(true);
                }

            
            } catch (error) {
                setErrorMessage("Something went wrong when trying to change your email! Please try again!");
                setShow(true);
            }
        } else {
            setErrorMessage("Invalid Email! The email must not have any uppercase letters!");
            setShow(true);
        }
    }

    return (
        <Card className="w-50 mx-auto">
            <Card.Header>
                <h1>Change Email</h1>
            </Card.Header>
            <Card.Body>
                <Form className="mx-auto" onSubmit={handleSubmit(submit)}>
                    <Form.Group className="mb-3" controlId="oldEmailControl">
                        <Form.Label>Old Email</Form.Label>
                        <Form.Control type="email" placeholder="Enter old email..." required {...register("oldEmail")}></Form.Control>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="newEmailControl">
                        <Form.Label>New Email</Form.Label>
                        <Form.Control type="email" placeholder="Enter new email..." required {...register("newEmail")}></Form.Control>
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
export default ChangeEmail;
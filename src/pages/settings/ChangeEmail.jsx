import React, { useEffect, useState } from "react";

import { Card, Form, Button } from "react-bootstrap";

import { useForm } from "react-hook-form";
import { changeEmail } from "../../services/firebase/auth";
import { getEmail } from "../../services/firebase/db";

function ChangeEmail() {

    const { handleSubmit, register } = useForm();

    const [email, setEmail] = useState("");
    
    useEffect(() => {
        const getUserData = async () => {
            const email  = await getEmail();
            console.log(email);
            setEmail(email);
        };
        getUserData(); 
    }, []);

    const submit = async ({ oldEmail, newEmail }) => {
        try {
            if (oldEmail === email) {
                await changeEmail(newEmail);
                window.location.href = "/";
            } else {
    
            }
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <Card className="w-50 mx-auto">
            <Card.Header>
                <h1>Change Email</h1>
            </Card.Header>
            <Card.Body>
                <Form className="mx-auto" onSubmit={handleSubmit(submit)}>
                    <Form.Group controlId="oldEmailControl">
                        <Form.Label>Old Email</Form.Label>
                        <Form.Control type="email" placeholder="Enter old email..." required {...register("oldEmail")}></Form.Control>
                    </Form.Group>
                    <Form.Group controlId="newEmailControl">
                        <Form.Label>New Email</Form.Label>
                        <Form.Control type="email" placeholder="Enter new email..." required {...register("newEmail")}></Form.Control>
                    </Form.Group>
                    <Form.Group>
                        <Button type="submit">Submit</Button>
                    </Form.Group>
                </Form>
            </Card.Body>
        </Card>
    );
}
export default ChangeEmail;
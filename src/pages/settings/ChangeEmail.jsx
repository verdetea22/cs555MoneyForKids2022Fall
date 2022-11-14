import React from "react";
import { Button, Card, Form } from "react-bootstrap";

import { useForm } from "react-hook-form";

function ChangeEmail() {

    const { handleSubmit, register } = useForm();

    const submit = async ({}) => {
        try {
            alert("email has been changed")
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <Card>
            <Card.Header>
                <h1>Change Email</h1>
            </Card.Header>
            <Card.Body>
                <Form onSubmit={handleSubmit(submit)}>
                    <Form.Group controlId="newEmailControl">
                        <Form.Label>New Email</Form.Label>
                        <Form.Control type="email" placeholder="Enter new email..." {...register("email")}></Form.Control>
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
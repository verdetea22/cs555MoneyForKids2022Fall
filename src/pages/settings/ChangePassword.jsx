import React from "react";
import { Card, Form } from "react-bootstrap";

import { useForm } from "react-hook-form";
import { changePassword } from "../../services/firebase/auth";

function ChangePassword() {

    const { handleSubmit, register } = useForm();

    const submit = async ({ password, newPassword }) => {
        if (password === newPassword) {
            try {
                await changePassword(password);
                
            } catch (error) {
                console.log(error);
            }
        }
    };

    return (
        <Card>
            <Card.Header>
                <h1>Change Password</h1>
            </Card.Header>
            <Card.Body>
                <Form onSubmit={handleSubmit(submit)}>
                    <Form.Group controlId="newPasswordControl">
                        <Form.Label>New Password</Form.Label>
                        <Form.Control type="password" placeholder="Enter new password..." {...register("password")}></Form.Control>
                    </Form.Group>
                    <Form.Group controlId="newPasswordAgainControl">
                        <Form.Label>New Password Again</Form.Label>
                        <Form.Control type="password" placeholder="Enter new password again..." {...register("newPassword")}></Form.Control>
                    </Form.Group>
                </Form>
            </Card.Body>
        </Card>
    );
}

export default ChangePassword;
import React from "react";
import { Button, Card, Form } from "react-bootstrap";

import { useForm } from "react-hook-form";
import { useAuth } from "../../contexts/AuthContext";
import { changePassword } from "../../services/firebase/auth";

function ChangePassword() {

    const { handleSubmit, register } = useForm();

    const { changePassword } = useAuth();

    const submit = async ({ password, newPassword }) => {
        if (password === newPassword) {
            try {
                await changePassword(password);
                window.location.href = "/";
            } catch (error) {
                console.log(error);
            }
        }
    };

    return (
        <Card className="w-50 mx-auto">
            <Card.Header>
                <h1>Change Password</h1>
            </Card.Header>
            <Card.Body>
                <Form className="mx-auto" onSubmit={handleSubmit(submit)}>
                    <Form.Group controlId="newPasswordControl">
                        <Form.Label>New Password</Form.Label>
                        <Form.Control type="password" placeholder="Enter new password..." {...register("password")}></Form.Control>
                    </Form.Group>
                    <Form.Group controlId="newPasswordAgainControl">
                        <Form.Label>New Password Again</Form.Label>
                        <Form.Control type="password" placeholder="Enter new password again..." {...register("newPassword")}></Form.Control>
                    </Form.Group>
                    <Form.Group>
                        <Button type="submit">Submit</Button>
                    </Form.Group>
                </Form>
            </Card.Body>
        </Card>
    );
}

export default ChangePassword;
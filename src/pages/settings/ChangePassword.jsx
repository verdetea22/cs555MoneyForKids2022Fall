import React, { useState } from "react";
import { Button, Card, Form } from "react-bootstrap";

import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import ErrorLabel from "../../components/Error/ErrorLabel";
import { useAuth } from "../../contexts/AuthContext";

function ChangePassword() {

    const { handleSubmit, register } = useForm();

    const { changePassword } = useAuth();

    const navigate = useNavigate();

    const [show, setShow] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    const submit = async ({ password, newPassword }) => {
        if (password === newPassword) {
            try {
                await changePassword(password);
                navigate("/");
            } catch (error) {
                if (error.code === "auth/requires-recent-login") {
                    setErrorMessage("Stayed on page too long! Please go to settings again!");
                } else {
                    setErrorMessage("Something went wrong when trying to change password! Try again!");
                }

                console.log(error);

                setShow(true);
            }
        } else {
            setErrorMessage("Passwords are not the same!");
            setShow(true);
        }
    };

    return (
        <Card className="w-50 mx-auto">
            <Card.Header>
                <h1>Change Password</h1>
            </Card.Header>
            <Card.Body>
                <Form className="mx-auto" onSubmit={handleSubmit(submit)}>
                    <Form.Group className="mb-3" controlId="newPasswordControl">
                        <Form.Label>New Password</Form.Label>
                        <Form.Control type="password" placeholder="Enter new password..." required minLength="6" {...register("password")}></Form.Control>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="newPasswordAgainControl">
                        <Form.Label>New Password Again</Form.Label>
                        <Form.Control type="password" placeholder="Enter new password again..." required minLength="6" {...register("newPassword")}></Form.Control>
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

export default ChangePassword;
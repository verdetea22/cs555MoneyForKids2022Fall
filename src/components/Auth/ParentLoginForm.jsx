import React from "react";
import { useForm } from "react-hook-form";
import { Form, Button } from "react-bootstrap";

function ParentLoginForm({ onSubmit }) {

    const { register, handleSubmit } = useForm();

    return (
    <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group className="mb-3 mx-5 mt-5" controlId="emailControl">
            <Form.Label>Email</Form.Label>
            <Form.Control type="text" placeholder="Enter email..." {...register("email")} />
        </Form.Group>
        <Form.Group className="mb-3 mx-5 mt-3" controlId="passwordControl">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Enter password..." {...register("password")} />
        </Form.Group>
            <Form.Group class="mx-5">
            <Button type="submit">Login</Button>
        </Form.Group>
    </Form>
  );
};

export default ParentLoginForm;

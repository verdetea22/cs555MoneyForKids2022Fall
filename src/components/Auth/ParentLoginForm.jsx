import React from "react";
import { useForm } from "react-hook-form";
import { Form, Button } from "react-bootstrap";

function ParentLoginForm({ onSubmit }) {

    const { register, handleSubmit } = useForm();

    return (
    <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group className="mb-3 mx-5 mt-5" controlId="emailControl">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Enter email..." required {...register("email")} />
        </Form.Group>
        <Form.Group className="mb-3 mx-5 mt-3" controlId="passwordControl">
            <Form.Label>Password (Must be at least six characters long)</Form.Label>
            <Form.Control type="password" placeholder="Enter password..." required minLength="6" {...register("password")} />
        </Form.Group>
            <Form.Group className="mx-5">
            <Button type="submit">Login</Button>
        </Form.Group>
    </Form>
  );
};

export default ParentLoginForm;

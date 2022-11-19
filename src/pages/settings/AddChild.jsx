import React from "react";
import { Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { createChildAccount } from "../../services/firebase/db";

function AddChild() {

    const { register, handleSubmit } = useForm();

    const submit = async ({ childName, username, balance, password }) => {
        try {
            await createChildAccount({ childName, username, balance, password });
            window.location.href = "/";
        } catch (error) {
            console.log(error);
        }
       
    }

    return (
        <Form onSubmit={handleSubmit(submit)}>
            <Form.Group>
                <Form.Label>Child's Name</Form.Label>
                <Form.Control type="text" placeholder="Enter child's name" {...register("childName")}></Form.Control>
            </Form.Group>
            <Form.Group>
                <Form.Label>Username</Form.Label>
                <Form.Control type="text" placeholder="Enter child's username" {...register("username")}></Form.Control>
            </Form.Group>
            <Form.Group>
                <Form.Label>Starting Balance</Form.Label>
                <Form.Control type="number" placeholder={0} min="0" {...register("balance")}></Form.Control>
            </Form.Group>
            <Form.Group>
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Enter child's password" {...register("password")}></Form.Control>
            </Form.Group>
            <Form.Group>
                <Button type="submit">Submit</Button>
            </Form.Group>
        </Form>
    );
}

export default AddChild;
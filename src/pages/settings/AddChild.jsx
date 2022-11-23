import React from "react";
import { Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { createChildAccount, requestChildAccountCreation } from "../../services/firebase/db";

function AddChild() {

    const { register, handleSubmit } = useForm();

    const navigate = useNavigate();

    const submit = async ({ name, username, balance, password }) => {
        try {
            await requestChildAccountCreation({ name, username, balance: parseFloat(balance), password });
            navigate("/");
        } catch (error) {
            console.log(error);
        }
       
    }

    return (
        <Form className="w-50 mx-auto mt-4 border rounded-4" onSubmit={handleSubmit(submit)}>
            <Form.Group className="mx-5 mb-2">
                <Form.Label>Child's Name</Form.Label>
                <Form.Control type="text" placeholder="Enter child's name" required {...register("name")}></Form.Control>
            </Form.Group>
            <Form.Group className="mx-5 mb-2">
                <Form.Label>Username</Form.Label>
                <Form.Control type="text" placeholder="Enter child's username" required {...register("username")}></Form.Control>
            </Form.Group>
            <Form.Group className="mx-5 mb-2">
                <Form.Label>Starting Balance</Form.Label>
                <Form.Control type="number" placeholder={0} min="0" required {...register("balance")}></Form.Control>
            </Form.Group>
            <Form.Group className="mx-5 mb-3">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Enter child's password" required minLength="6" {...register("password")}></Form.Control>
            </Form.Group>
            <Form.Group className="mx-5 mb-2">
                <Button type="submit">Submit</Button>
            </Form.Group>
        </Form>
    );
}

export default AddChild;
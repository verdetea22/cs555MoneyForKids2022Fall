import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import ErrorLabel from "../../components/Error/ErrorLabel";
import { requestChildAccountCreation } from "../../services/firebase/db";

function AddChild() {

    const { register, handleSubmit } = useForm();

    const navigate = useNavigate();

    const [show, setShow] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    const submit = async ({ name, username, balance, password }) => {

        if (username === username.toLowerCase()) {
            try {
                await requestChildAccountCreation({ name, username, balance: parseFloat(balance), password });
                navigate("/");
            } catch (error) {
                console.log(error);
                setErrorMessage("Something went wrong when creating the child's account!");
                setShow(true);
            }
        } else {
            setErrorMessage("Username has some uppercase letters!");
            setShow(true);
        }
        
       
    }

    return (
        <Form className="w-50 mx-auto mt-4 border rounded-4" onSubmit={handleSubmit(submit)}>
            <Form.Group className="mx-5 my-2">
                <Form.Label>Child's Name</Form.Label>
                <Form.Control type="text" placeholder="Enter child's name" required {...register("name")}></Form.Control>
            </Form.Group>
            <Form.Group className="mx-5 mb-2">
                <Form.Label>Username</Form.Label>
                <Form.Control type="text" placeholder="Enter child's username" required minLength="5" {...register("username")}></Form.Control>
                <Form.Text muted>The username must <strong>not</strong> have any uppercase letters and must be at least five characters long</Form.Text>
            </Form.Group>
            <Form.Group className="mx-5 mb-2">
                <Form.Label>Starting Balance</Form.Label>
                <Form.Control type="number" placeholder={0} min="0" required {...register("balance")}></Form.Control>
            </Form.Group>
            <Form.Group className="mx-5 mb-3">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Enter child's password" required minLength="6" {...register("password")}></Form.Control>
                <Form.Text muted>The password must be at least 6 characters long</Form.Text>
            </Form.Group>
            <ErrorLabel className="mx-5" show={show} message={errorMessage} onClick={() => setShow(false)} />
            <Form.Group className="mx-5 mb-2">
                <Button type="submit">Submit</Button>
            </Form.Group>
        </Form>
    );
}

export default AddChild;
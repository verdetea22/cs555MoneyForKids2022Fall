import React from "react";
import { Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { createChildAccount } from "../../services/firebase/db";

function AddChild() {

    const { register, handleSubmit } = useForm();

    const submit = async ({ childName }) => {
        try {
            await createChildAccount({ childName });
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
                <Button type="submit">Submit</Button>
            </Form.Group>
        </Form>
    );
}

export default AddChild;
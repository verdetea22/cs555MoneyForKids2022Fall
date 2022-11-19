import React from "react";
import { Button, Card, Form} from "react-bootstrap";
import { useForm } from "react-hook-form";

import { createParentAccount } from "./../../services/firebase/db";
import "./SignUp.css";

function SignUp() {

  const { handleSubmit, register } = useForm(); 

  const onSubmit = async ({ name, email, password }) => {
    
    try {
      await createParentAccount({ name, email, password });
      window.location.href = "/";
    } catch(error) {
      console.log(error);
    }
    
  };
  
  return (
    <div className="mt-5">
      <Card className="w-50 m-auto">
        <Card.Header>
          <div className="ms-5 row">
            <p className="col-8 m-auto">Are you a returning user?</p>
            <a className="col-4 m-auto" href="/Login" target="_blank"><Button >Login</Button></a>
          </div>
        </Card.Header>
        <Card.Body>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group className="mb-3 mx-5 mt-3" controlId="name">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Enter name..." {...register("name")} />
            </Form.Group>
            <Form.Group className="mb-3 mx-5 mt-3" controlId="email">
              <Form.Label>Caregiver's Email</Form.Label>
              <Form.Control type="text" placeholder="Enter email..." {...register("email")} />
            </Form.Group>
            <Form.Group className="mb-3 mx-5 mt-3" controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Enter password..." {...register("password")} />
            </Form.Group>
            <Form.Group className="mx-5">
              <Button type="submit">Submit</Button>
            </Form.Group>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
}

export default SignUp;
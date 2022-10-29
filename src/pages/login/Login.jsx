import React from "react";
import { Card, Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { login } from "../../services/firebase/auth";

const Login = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = ({ email, password }) => {
    login({ email, password }).then((res) => {
      window.location.href = "/";
    }).catch((error) => {
        console.log(error);
    });
  };

  return (
    <div className="mt-5">
      <Card className="w-50 m-auto">
        <Card.Header>

        </Card.Header>
        <Card.Body>
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
        </Card.Body>
      </Card>
    </div>
  );
}

export default Login;

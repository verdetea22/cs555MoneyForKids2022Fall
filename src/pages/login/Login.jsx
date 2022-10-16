import React from "react";
import { Card, Form, Button } from "react-bootstrap";

const Login = () => {
  return (
    <div className="mt-5">
      <Card className="w-50 m-auto">
        <Card.Header>

        </Card.Header>
        <Card.Body>
          <Form>
            <Form.Group className="mb-3 mx-5 mt-5" controlId="emailControl">
              <Form.Label>Email</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
            <Form.Group className="mb-3 mx-5 mt-3" controlId="passwordControl">
              <Form.Label>Password</Form.Label>
              <Form.Control type="text" />
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

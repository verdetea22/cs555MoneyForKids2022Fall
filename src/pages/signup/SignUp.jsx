import React, { useState } from "react";
import { Button, Card, Form} from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import ErrorLabel from "../../components/Error/ErrorLabel";
import { useAuth } from "../../contexts/AuthContext";

import { createParentAccount } from "./../../services/firebase/db";
import "./SignUp.css";

function SignUp() {

  const { handleSubmit, register } = useForm(); 

  const { signUp } = useAuth();

  const [show, setShow] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  const onSubmit = async ({ name, email, password }) => {

    if (email === email.toLowerCase()) {
        try {

        const { uid } = await signUp(email, password);
      
        await createParentAccount(name, uid);
        navigate("/");
      } catch(error) {

        if (error.code === "auth/email-already-in-use") {
          setErrorMessage("Email is already in use!");
          setShow(true);
        } else {
          setErrorMessage("Seomthing went wrong when trying to sign up! Please try again!");
          setShow(true);
        }
        
        console.log(error);

        

      }
    } else {
      setErrorMessage("Invalid Email! The email must not have any uppercase letters!");
      setShow(true);
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
              <Form.Control type="text" placeholder="Enter name..." required {...register("name")} />
            </Form.Group>
            <Form.Group className="mb-3 mx-5 mt-3" controlId="email">
              <Form.Label>Caregiver's Email</Form.Label>
              <Form.Control type="email" placeholder="Enter email..." required {...register("email")} />
              <Form.Text muted>The email must <strong>not</strong> contain any uppercase letters</Form.Text>
            </Form.Group>
            <Form.Group className="mb-3 mx-5 mt-3" controlId="password">
              <Form.Label>Password (Must be at least six characters long)</Form.Label>
              <Form.Control type="password" placeholder="Enter password..." minLength="6" required {...register("password")} />
              <Form.Text muted>The password must be at least six characters long</Form.Text>
            </Form.Group>
            <ErrorLabel className="mx-5" show={show} message={errorMessage} onClick={() => setShow(false)} />
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
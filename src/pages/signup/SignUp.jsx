import React from "react";
import { Button, Card, Form} from "react-bootstrap";
import { useForm } from "react-hook-form";

import { createUser } from "./../../services/firebase/auth";
import { createParentAccount } from "./../../services/firebase/db";
import "./SignUp.css";

function SignUp() {

  const { handleSubmit, register } = useForm(); 

  const onSubmit = async ({ name, email, username, password }) => {
    const createUserResponse = await createUser({ email, password });

    if (createUserResponse.error || !createUserResponse.uid ) {
      alert("Error with sign up!");
    } else {
      await createParentAccount({ name, email, username, uid: createUserResponse.uid });
      window.location.href = "/";
    }
  };
  
  return (
    <div className="mt-5">
      <Card className="w-50 m-auto">
        <Card.Header>
          <div className="row">
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
            <Form.Group className="mb-3 mx-5 mt-3" controlId="username">
              <Form.Label>Username</Form.Label>
              <Form.Control type="text" placeholder="Enter username..." {...register("username")} />
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

//<div>
    //   <div id="box">
    //     <a id="text"> Are you a returning user ? </a>{" "}
    //     <a href="/Login" target="_blank">
    //       <Button id="button"> Login </Button>{" "}
    //     </a>{" "}
    //   </div>
    //   <div id="box">
    //     <a id="header">
    //       <br />
    //       <h2> Create an Account </h2> <br />
    //       {/* Form Start */}{" "}
    //       <form onSubmit={handleSubmit(onSubmit)}>
    //         {" "}
    //         {/* Name */}
    //         <label id="text" className="form__label" for="name">
    //           {" "}
    //           Name :{" "}
    //         </label>
    //         <input
    //           type="text"
    //           name=""
    //           id="name"
    //           value={name}
    //           className="form__input"
    //           onChange={(e) => handleInputChange(e)}
    //           placeholder="Name"
    //           {...register("name", { required: true })}
    //         />
    //         <br />
    //         {/* Caregiver Email */}{" "}
    //         <label id="text" className="form__label" for="email">
    //           {" "}
    //           Caregiver's Email :
    //         </label>{" "}
    //         <input
    //           className="form__input"
    //           id="email"
    //           type="email"
    //           placeholder="Email"
    //           value={email}
    //           onChange={(e) => handleInputChange(e)}
    //           {...register("email", { required: true })}
    //         />
    //         {/* Username */}{" "}
    //         <label id="text" className="form__label" for="username">
    //           {" "}
    //           Username :{" "}
    //         </label>{" "}
    //         <input
    //           className="form__input"
    //           type="text"
    //           id="username"
    //           value={username}
    //           onChange={(e) => handleInputChange(e)}
    //           placeholder="Username"
    //           {...register("username", { required: true })}
    //         />
    //         <br />
    //         {/* Password */}{" "}
    //         <label className="form__label" for="password">
    //           {" "}
    //           Password :{" "}
    //         </label>{" "}
    //         <input
    //           className="form__input"
    //           type="password"
    //           id="password"
    //           placeholder="Password"
    //           value={password}
    //           onChange={(e) => handleInputChange(e)}
    //           {...register("password", { required: true })}
    //         />{" "}
    //         <br />
    //         <br />
    //         {/* Submit */}{" "}
    //         <a target="_blank">
    //           <Button
    //             onClick={() => handleSubmit()}
    //             ß
    //             type="submit"
    //             id="button"
    //           >
    //             {" "}
    //             Submit{" "}
    //           </Button>{" "}
    //           <br />
    //         </a>
    //         {/* End of Form */}{" "}
    //       </form>{" "}
    //     </a>{" "}
    //   </div>{" "}
    // </div>
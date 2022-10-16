import React, { Component, useState } from "react";
import { Image, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import "./SignUp.css";

function SignUp() {
  const {
    register,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  {
    /* Setting Form Variables */
  }
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);

  {
    /* Handle State */
  }
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    if (id === "name") {
      setName(value);
    }

    if (id === "email") {
      setEmail(value);
    }

    if (id === "username") {
      setUsername(value);
    }
    if (id === "password") {
      setPassword(value);
    }
  };

  const handleSubmit = () => {
    console.log(name, email, username, password);
  };

  {
    /* Button Confirmation */
  }
  function confirmation() {
    alert("Your account has been created!");
  }

  return (
    <div>
      <div id="box">
        <a id="text"> Are you a returning user ? </a>{" "}
        <a href="/Login" target="_blank">
          <Button id="button"> Login </Button>{" "}
        </a>{" "}
      </div>
      <div id="box">
        <a id="header">
          <br />
          <h2> Create an Account </h2> <br />
          {/* Form Start */}{" "}
          <form onSubmit={handleSubmit(onSubmit)}>
            {" "}
            {/* Name */}
            <label id="text" className="form__label" for="name">
              {" "}
              Name :{" "}
            </label>
            <input
              type="text"
              name=""
              id="name"
              value={name}
              className="form__input"
              onChange={(e) => handleInputChange(e)}
              placeholder="Name"
              {...register("name", { required: true })}
            />
            <br />
            {/* Caregiver Email */}{" "}
            <label id="text" className="form__label" for="email">
              {" "}
              Caregiver's Email :
            </label>{" "}
            <input
              className="form__input"
              id="email"
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => handleInputChange(e)}
              {...register("email", { required: true })}
            />
            {/* Username */}{" "}
            <label id="text" className="form__label" for="username">
              {" "}
              Username :{" "}
            </label>{" "}
            <input
              className="form__input"
              type="text"
              id="username"
              value={username}
              onChange={(e) => handleInputChange(e)}
              placeholder="Username"
              {...register("username", { required: true })}
            />
            <br />
            {/* Password */}{" "}
            <label className="form__label" for="password">
              {" "}
              Password :{" "}
            </label>{" "}
            <input
              className="form__input"
              type="password"
              id="password"
              placeholder="Password"
              value={password}
              onChange={(e) => handleInputChange(e)}
              {...register("password", { required: true })}
            />{" "}
            <br />
            <br />
            {/* Submit */}{" "}
            <a target="_blank">
              <Button
                onClick={() => handleSubmit()}
                ß
                type="submit"
                id="button"
              >
                {" "}
                Submit{" "}
              </Button>{" "}
              <br />
            </a>
            {/* End of Form */}{" "}
          </form>{" "}
        </a>{" "}
      </div>{" "}
    </div>
  );
}

export default SignUp;

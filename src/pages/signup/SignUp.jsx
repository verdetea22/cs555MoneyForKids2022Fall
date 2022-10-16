import React, { Component } from "react";
import { Image, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import "./login.css";

function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  function confirmation() {
    alert("Your account has been created!");
  }

  return (
    <div>
      <div id="box">
        <a id="text"> Are you a returning user? </a>
        <a href="/Login" target="_blank">
          <Button id="button"> Login </Button>{" "}
        </a>
      </div>

      <div id="box">
        <a id="header">
          <br />
          <h2> Create an Account </h2>
          <br />
          {/* Form Start */}
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* Name */}
            <a id="text">Name:</a>
            <input
              id="input"
              type="Name"
              {...register("name", { required: true })}
            />

            {/* Age */}
            <a id="text">Age:</a>
            <input
              id="input"
              type="Age"
              {...register("age", { required: true })}
            />
            <br />

            {/* Caregiver Email */}
            <a id="text">Caregiver's Email:</a>
            <input
              id="input"
              type="Email"
              {...register("email", { required: true })}
            />

            {/* Username */}
            <a id="text">Username:</a>
            <input
              id="input"
              type="Username"
              {...register("username", { required: true })}
            />

            {/* Password */}
            <a id="text">Password:</a>
            <input
              id="input"
              type="Password"
              {...register("password", { required: true })}
            />
            <br />
            <br />

            {/* Submit */}
            <a target="_blank">
              <Button id="button" type={"submit"} onClick={confirmation}>
                {" "}
                Submit{" "}
              </Button>{" "}
              <br />
            </a>

            {/* End of Form */}
          </form>
        </a>
      </div>
    </div>
  );
}

export default SignUp;

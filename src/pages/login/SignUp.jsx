import React from "react";
import { Image, Button } from "react-bootstrap";
import "./login.css";

function SignUp() {
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
          <form>
            {/* Name */}
            <a id="text">Name:</a>
            <input id="input" type="Name" />

            {/* Age */}
            <a id="text">Age:</a>
            <input id="input" type="Age" />
            <br />

            {/* Caregiver Email */}
            <a id="text">Caregiver's Email:</a>
            <input id="input" type="Email" />

            {/* Username */}
            <a id="text">Username:</a>
            <input id="input" type="Username" />

            {/* Password */}
            <a id="text">Password:</a>
            <input id="input" type="Password" />
          </form>
        </a>
      </div>
    </div>
  );
}

export default SignUp;

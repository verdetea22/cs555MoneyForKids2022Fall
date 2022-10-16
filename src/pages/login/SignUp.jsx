import React from "react";
import { Image, Button } from "react-bootstrap";
import "./login.css";

function SignUp() {
  return (
    <div id="box">
      <a id="text"> Are you a returning user? </a>
      <a href="/Login" target="_blank">
        <Button id="button"> Login </Button>{" "}
      </a>
    </div>
  );
}

export default SignUp;

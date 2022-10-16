import React from "react";
import { Image, Button } from "react-bootstrap";
import "./login.css";

function SignUp() {
  return (
    <div id="box">
      <a> Are you a returning user? </a>
      <br />
      <a href="https://react.school" target="_blank">
        <Button id="button"> Login </Button>{" "}
      </a>
    </div>
  );
}

export default SignUp;

import React from "react";
import { Button } from "react-bootstrap";
import "./formsMod.css";
import image from "../../../images/salestax.jpeg";

function FormsMod() {
  return (
    <div>
      <br />
      <h2>Bank Forms Learning Module</h2>
      <br />
      <a>
        <img id="image" src={image} />
      </a>
      <br />
      <br />
      <div id="description_box">
        <a id="description">
          <br />
          Banks are a great resource to help manage our money, but we need to
          know how to interact with their systems.
          <br />
          <br />
          Learn about the different kinds of bank forms, gain confidence from
          some practice exercises
          <br />
          <br />
          Click the button to learn more!
          <br />
          <Button id="button">Start Module</Button>
        </a>
      </div>
    </div>
  );
}

export default FormsMod;

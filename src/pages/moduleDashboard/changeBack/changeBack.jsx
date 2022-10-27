import React from "react";
import { Button } from "react-bootstrap";
import "./changeBack.css";
import image from "../../../images/salestax.jpeg";

function ChangeBackMod() {
  return (
    <div>
      <br />
      <h2>Change Back Learning Module</h2>
      <br />
      <a>
        <img id="image" src={image} />
      </a>
      <br />
      <br />
      <div id="description_box">
        <a id="description">
          <br />
          Money sense is very important !<br />
          <br />
          Sharpen your skills and learn how to quickly
          <br /> calculate change with some exercises
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

export default ChangeBackMod;

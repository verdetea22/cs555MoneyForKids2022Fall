import React from "react";
import { Button } from "react-bootstrap";
import "./salesTax.css";
import image from "../../../images/salestax.jpeg";

function SalesTaxMod() {
  return (
    <div>
      <br />
      <h2>Sales Tax Learning Module</h2>
      <br />
      <a>
        <img id="image" src={image} />
      </a>
      <br />
      <br />
      <div id="sales_tax_description_box">
        <a id="sales_tax_description">
          <br />
          One way that governments raise money is through sales tax. <br />
          <br />A sales tax is a fee that is added to the price of an item. When
          you buy an item that is taxed, you pay the cost of the item plus the
          sales tax.
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

export default SalesTaxMod;

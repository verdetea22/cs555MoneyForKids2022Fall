import React from "react";
import "./About.css"
import { Image } from "react-bootstrap";

function About() {
    return <div class="splash">
        <h1 id="about-title" class="splash-head">About Us</h1>
            <h2 id="about-subtitle" class="splash-subhead">A Better Way to Imagine Allowance</h2>
            <p id="about-body" class="body">
                Money4Kids was inspired by the idea to make managing money more accessabile to kids. Our goal is to make sure children understand
                how to manage their own bank account and funds when they get one. To do this, we simulate a real life bank account, but one that was managed at
                home and with you, their parent or guardian. 

                As a parent, you will be able to create an account for yourself and for your children. From there, the parent account will be able to add and deduct
                funds from the children's accounts. Kids will be able to do chores for allowance or deposit their gift money with you, the parent, and have it reflect in their
                own accounts to withdraw when needed or save up for something they want. 
            </p>
    </div>
}

export default About;
import React from "react";
import "./Home.css";
import { Image, Card } from "react-bootstrap";
import piggybank from "../../images/piggybank.jpeg"
import adultBalance from "../../components/Balance/AdultBalance";

function Home() {
    return <div>
        <div>
            <img src={piggybank} alt="piggybank" id="home-image"/>
        </div>
        <div class="splash">
            <h1 id="Home-Header" class="splash-head">Teach Your Child How to Manage Money</h1>

            <h2 id="Home-subtitle" class="splash-subhead">Get Started With a Virtual Piggy Bank Today</h2>
            <p>Money4Kids is a way for parents to teach their children how to manage money in an interactive way where everyone is involved!</p>
            <button id="Home-Redirect" href="/signUp" class="pure-button pure-button-primary">Create an Account</button>
        </div>
        <div class="card">
            <h5 class="card-header">Balance</h5>
            <div class="card-body">
                <p class="card-text">$1800.00</p>
            </div>
        </div>
    </div>  
}

export default Home;
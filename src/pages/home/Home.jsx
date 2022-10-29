import React from "react";
import "./Home.css";
import { Image } from "react-bootstrap";
import piggybank from "../../images/piggybank.jpeg"

function Home() {


    
    
    return (<div>
        <div className="splash">
            <h1 id="Home-Header" className="splash-head">Teach Your Child How to Manage Money</h1>

            <h2 id="Home-subtitle" className="splash-subhead">Get Started With a Virtual Piggy Bank Today</h2>
            <p className="body">Money4Kids is a way for parents to teach their children how to manage money in an interactive way where everyone is involved!</p>
            <a id="Home-Redirect" href="/SignUp" className="pure-button pure-button-primary">Create an Account</a>     
        </div>
    </div>);
}

export default Home;
import React, { useEffect, useState } from "react";
import "./Home.css";
import Container from 'react-bootstrap/Container';
import Stack from 'react-bootstrap/Stack';
import Button from 'react-bootstrap/Button';
import { Image } from "react-bootstrap";
import piggybank from "../../images/piggybank.jpeg"
import { getUser } from "./../../services/firebase/db";

function Home() {

    var name = "exampleName"
    var email = "example@email.com"
    var pword = "example"

    const [user, setUser] = useState({
        "name": name,
        "email": email,
        "password": pword
    });
    
    useEffect(() => {
        const getCurrentUser = async () => {
            try {
                const u = await getUser();
                setUser(u);
            } catch (error) {
                console.log(error);
            }
            
        };

        getCurrentUser();
    }, []);
    
    const [isLoggedIn, setIsLoggedIn] = useState(true);

    if(!isLoggedIn){
        setIsLoggedIn(true);
        return (<div>
            <div className="splash">
                <h1 id="Home-Header" className="splash-head">Teach Your Child How to Manage Money</h1>
    
                <h2 id="Home-subtitle" className="splash-subhead">Get Started With a Virtual Piggy Bank Today</h2>
                <p className="body">Money4Kids is a way for parents to teach their children how to manage money in an interactive way where everyone is involved!</p>
                <a id="Home-Redirect" href="/SignUp" className="pure-button pure-button-primary">Create an Account</a>     
            </div>
        </div>);
    }
    else{
        return(
            <Container>
                <h1>Account Information</h1>
                <br></br>
                <Container>
                    <Stack gap={3}>
                        <div className="bg-light border">{user.name}</div>
                        <div className="bg-light border">{user.email}</div>
                        <div className="bg-light border">{user.password}</div>
                    </Stack>
                </Container>
                <br></br>
                <Container>
                    <Button variant="secondary">Edit User Information</Button>
                </Container>
            </Container>
        )

    }

}

export default Home;
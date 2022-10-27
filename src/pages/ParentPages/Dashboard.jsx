import React from "react";
import "./Dashboard.css";
//import { auth } from "../firebase/firebase-config";
import { Navigate } from "react-router-dom";
import { useState } from "react";
import Container from 'react-bootstrap/Container';
import CardDeck from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import ChildBalance from "../../components/ParentDash/ChildBalance"
import ChildrenActivity from "../../components/ParentDash/ChildrenActivity"
import Requests from "../../components/ParentDash/Requests"
import { propTypes } from "react-bootstrap/esm/Image";


//if auth, show dash

function Dashboard() {
    //do we want a sperate check logged in function then call?
    //var user = auth.currentUser;
    // auth().onAuthStateChanged(function(user) {
    //     if (user) {
    //       // User is signed in.
    //       setIsLoggedIn(true);
    //     } else {
    //       // No user is signed in.
    //       setIsLoggedIn(false);
    //     }
    // });

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    //where user is from db
    let user = {
        "name": "Example Parent",
        "children": [
            {"childName": "Example Child 1", "balance": 123},
            {"childName": "Example Child 2", "balance": 240}
        ]
        
    }

    if(!isLoggedIn){
        setIsLoggedIn(true);
        return(<Navigate to="/Login" />);
    }
    else{
        return(
            //load components, pass child name as props from user
                //for each child in user, return child balance
                //activity for each child (list most recent deposit and withdrawal across all children)?
                //show pending requests
            <Container>
                <h1>Welcome, {user.name}</h1>
                <Container>
                    <CardDeck style={{flexDirection: 'row'}}> 
                        {user.children.map((child)=>(
                            <ChildBalance  childName={child.childName} balance={child.balance}/>
                        ))}
                        <ChildrenActivity/>
                        <Requests children={user.children}/> 
                    </CardDeck>
                </Container>
            </Container>
        )

    }
    
}

export default Dashboard;
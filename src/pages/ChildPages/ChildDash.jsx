import React, { useEffect, useState } from "react";
//import { auth } from "../firebase/firebase-config";
import { Navigate } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import CardDeck from 'react-bootstrap/Card';

import Balance from '../../components/ChildDash/Balance'
import Goals from '../../components/ChildDash/Goals'

import { getUser } from "../../services/firebase/db";


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

    const [user, setUser] = useState({
        "name": "Example Parent",
        "children": [
            {"childName": "Example Child 1", "balance": 123},
            {"childName": "Example Child 2", "balance": 240}
        ]
        
    });

    useEffect(() => {
        const getCurrentUser = async () => {

            try {
                const userData = await getUser();
                setUser(userData);
            } catch (error) {
                console.log(error);
            }
            
        };

        getCurrentUser();
    });

    const [isLoggedIn, setIsLoggedIn] = useState(true);


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
                        <Balance></Balance>
                        <Goals></Goals>
                    </CardDeck>
                </Container>
            </Container>
        )

    }
    
}

export default Dashboard;
import React, { useEffect, useState } from "react";
import "./Dashboard.css";
//import { auth } from "../firebase/firebase-config";
import { Navigate } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import CardDeck from 'react-bootstrap/Card';

import ChildBalance from "../../components/ParentDash/ChildBalance"
import ChildrenActivity from "../../components/ParentDash/ChildrenActivity"
import Requests from "../../components/ParentDash/Requests"

import { getCurrentUserData } from "../../services/firebase/db";


//if auth, show dash

function Dashboard() {

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
                const { name, childIds } = await getCurrentUserData();
                console.log(name, childIds);
            } catch (error) {
                console.log(error);
            }
            
        };

        getCurrentUser();
    }, []);

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
import React, { useEffect, useState } from "react";
import "./Dashboard.css";
//import { auth } from "../firebase/firebase-config";
import { Navigate } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import CardDeck from 'react-bootstrap/Card';

import ChildBalance from "../../components/ParentDash/ChildBalance"
import ChildrenActivity from "../../components/ParentDash/ChildrenActivity"
import Requests from "../../components/ParentDash/Requests"

import { getChildAccounts, getCurrentUserData } from "../../services/firebase/db";


//if auth, show dash

function Dashboard() {

    const [name, setName] = useState("");
    const [children, setChildren] = useState([]);
    

    useEffect(() => {
        const getCurrentUser = async () => {

            try {
                const { name, childIds } = await getCurrentUserData();
                const childrenData = await getChildAccounts(childIds);
                setName(name);
                setChildren(childrenData);
            } catch (error) {
                console.log(error);
            }
            
        };
        getCurrentUser();
    }, []);

    console.log(children);
    if(children.length === 0){
        return(
            <Container>
                <h1>Welcome, {name}</h1>
                <Container>
                    <CardDeck style={{flexDirection: 'row'}}> 
                        <p>To get started, go to account settings and add a child account.</p>
                    </CardDeck>
                </Container>
            </Container>

        )
    }
    else{
       return(
        <Container>
            <h1>Welcome, {name}</h1>
            <Container>
                <CardDeck style={{flexDirection: 'row'}}> 
                    {children.map((child)=>(
                        <ChildBalance child={child}/>
                    ))}
                    <Requests children={children}/>
                </CardDeck>
            </Container>
        </Container>
    ) 
    }
       
}

//<ChildrenActivity/>
export default Dashboard;
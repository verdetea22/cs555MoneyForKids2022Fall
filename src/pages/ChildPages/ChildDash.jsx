import React, { useEffect, useState } from "react";
//import { auth } from "../firebase/firebase-config";
import { Navigate } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import CardDeck from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Balance from "../../components/ChildDash/Balance"
import AddRequest from "../../components/ChildDash/AddRequest"
import CurrentRequests from "../../components/ChildDash/CurrentRequests"
import CurrentTasks from "../../components/ChildDash/CurrentTasks"
import CurrentGoals from "../../components/ChildDash/CurrentGoals"
import AddGoal from "../../components/ChildDash/AddGoal"

import { getCurrentUserData } from "../../services/firebase/db";
import { useAuth } from "../../contexts/AuthContext";

//if auth, show dash

function ChildDash() {

    const [child, setChild] = useState("");
    const { user } = useAuth();

    let id = user.uid;

    useEffect(() => {
        const getCurrentUser = async () => {

            try {
                const user = await getCurrentUserData();
                if(user.role === "parent"){
                    window.location.href="/dashboard";
                }
                console.log(user)
                setChild(user);
                
            } catch (error) {
                console.log(error);
            }    
        };
        getCurrentUser();
    }, []);


    return(
        <Container>
            <h1>Welcome, {child.name}</h1>
            <Container>
            <Row xs={1} md={1} className="g-4">
                <Col>
                    <CardDeck style={{flexDirection: 'row'}}> 
                        <Balance id={id} ></Balance>
                        <CurrentRequests id={id}></CurrentRequests>
                        <CurrentTasks id={id}></CurrentTasks>
                        <CurrentGoals id={id}></CurrentGoals>
                    </CardDeck>
                </Col>
                <Col>
                    <CardDeck style={{flexDirection: 'row'}}> 
                        <AddRequest id={id}></AddRequest>
                        <AddGoal id={id}></AddGoal>
                    </CardDeck>
                </Col>
            </Row>
            </Container>
        </Container>
    ) 
    
       
}
//
export default ChildDash;
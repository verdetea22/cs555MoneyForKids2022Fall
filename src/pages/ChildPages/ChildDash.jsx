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

//if auth, show dash

function ChildDash() {

    const [child, setChild] = useState("");

    useEffect(() => {
        const getCurrentUser = async () => {

            try {
                const user = await getCurrentUserData();
                console.log(user)
                setChild(user);
                
            } catch (error) {
                console.log(error);
            }
            
        };
        getCurrentUser();
    }, []);

    console.log(child);

    return(
        <Container>
            <h1>Welcome, {child.name}</h1>
            <Container>
            <Row xs={1} md={1} className="g-4">
                <Col>
                    <CardDeck style={{flexDirection: 'row'}}> 
                        <Balance balance={child.balance} ></Balance>
                        <CurrentRequests child={child}></CurrentRequests>
                        <CurrentTasks child={child}></CurrentTasks>
                        <CurrentGoals child={child}></CurrentGoals>
                    </CardDeck>
                </Col>
                <Col>
                    <CardDeck style={{flexDirection: 'row'}}> 
                        <AddRequest></AddRequest>
                        <AddGoal></AddGoal>
                    </CardDeck>
                </Col>
            </Row>
            </Container>
        </Container>
    ) 
    
       
}
//
export default ChildDash;
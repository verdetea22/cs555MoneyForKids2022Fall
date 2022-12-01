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
import { Stack } from "react-bootstrap";

//if auth, show dash

function ChildDash() {

    const [child, setChild] = useState("");
    const { user } = useAuth();

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
            <Stack>
                <h1>Welcome, {child.name}</h1>
                {
                    user ?
                    <Row>
                        <Col>
                            <CardDeck style={{flexDirection: 'row'}}> 
                                <Balance id={user.uid} ></Balance>
                                <CurrentRequests id={user.uid}></CurrentRequests>
                                <CurrentTasks id={user.uid}></CurrentTasks>
                                <CurrentGoals id={user.uid}></CurrentGoals>
                            </CardDeck>
                        </Col>
                        <Col>
                            <CardDeck style={{flexDirection: 'row'}}> 
                                <AddRequest id={user.uid}></AddRequest>
                                <AddGoal id={user.uid}></AddGoal>
                            </CardDeck>
                        </Col>
                    </Row>
                    :
                    <></>
                }
            </Stack>
        </Container>
    )     
}
//
export default ChildDash;
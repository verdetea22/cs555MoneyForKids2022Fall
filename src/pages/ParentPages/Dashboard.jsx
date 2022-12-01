import React, { useEffect, useState } from "react";
import "./Dashboard.css";
import { useAuth } from "../../contexts/AuthContext";
import { Navigate } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import CardDeck from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import ChildBalance from "../../components/ParentDash/ChildBalance"
import Requests from "../../components/ParentDash/Requests"
import Tasks from "../../components/ParentDash/Tasks"
import AddTasks from "../../components/ParentDash/AddTasks"
import Deposit from "../../components/ParentDash/Deposit"

import { getChildAccounts, getCurrentUserData } from "../../services/firebase/db";


//if auth, show dash

function Dashboard() {

    const [name, setName] = useState("");
    const [children, setChildren] = useState([]);

    const { user } = useAuth();

    let id = user.uid;

    useEffect(() => {
        const getCurrentUser = async () => {

            try {
                const { name, childIds } = await getCurrentUserData();
                setName(name);
                setChildren(childIds);
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
            {
            (user && children.length > 0) ?
                <Row xs={1} md={1} className="g-4">
                    <Col>
                        <CardDeck style={{flexDirection: 'row'}}> 
                            <ChildBalance children={children} ></ChildBalance>
                            <Requests children={children}></Requests>
                            <Tasks children={children}></Tasks>
                            <AddTasks children={children}></AddTasks>
                        </CardDeck>
                    </Col>
                    <Col>
                        <CardDeck style={{flexDirection: 'row'}}> 
                            <Deposit children={children}></Deposit>
                        </CardDeck>
                    </Col>
                </Row>
                :
                <CardDeck style={{flexDirection: 'row'}}> 
                        <p>To get started, go to account settings and add a child account.</p>
                </CardDeck>
            }
            </Container>
        </Container>
    ) 
    }
       
}

export default Dashboard;
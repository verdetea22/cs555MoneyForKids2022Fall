import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import { useAuth } from "../../contexts/AuthContext";
import { getCurrentUserData } from "../../services/firebase/db";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Home() {

    const { user } = useAuth();

    const [role, setRole] = useState("")

    useEffect(() => {
        const getCurrentUser = async () => {

            try {
                const {role} = await getCurrentUserData();
                console.log(role)
                setRole(role);
                
            } catch (error) {
                console.log(error);
            }    
        };
        getCurrentUser();
    }, []);
    
    return (<Container>
            <Row>
                <Col>
                <div>
                    <h1 id="Home-Header" className="splash-head">Teach Your Child How to Manage Money</h1>

                    <h2 id="Home-subtitle" className="splash-subhead">Get Started With a Virtual Piggy Bank Today</h2>
                    <p className="body">Money4Kids is a way for parents to teach their children how to manage money in an interactive way where everyone is involved!</p>

                    <Link id="About-Redirect" to="/about"><p className="splash-subhead">Learn More About Us Here!</p></Link>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col>
                    <h3 className="splash-subhead">Ready to get Started?</h3>
                    {
                        user ?
                            (role === "parent") ? <Link id="Home-Redirect" to="/dashboard" className="pure-button pure-button-primary">Go to Dashboard</Link>
                            : 
                            <Link id="Home-Redirect" to="/childDash" className="pure-button pure-button-primary">Go to Dashboard</Link>
                        :
                        <Row>
                            <Col>
                                <p class="body">Parents and guardians sign up first!</p>
                                <Link id="Home-Redirect" to="/signup" className="pure-button pure-button-primary">Create an Account</Link>
                            </Col>
                            <Col>
                                <p class="body">Already have an Account? Log in here!</p>
                                <Link id="Home-Redirect" to="/login" className="pure-button pure-button-primary">Log In</Link>
                            </Col>
                        </Row>
                    }
                
                </Col>
             </Row>
    </Container>);
}

export default Home;
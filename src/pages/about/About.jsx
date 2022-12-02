import React from "react";
import "./About.css"
import { Image } from "react-bootstrap";
import image1 from "../../assets/common/about-1.jpg"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function About() {
    return <div>
            <Container class="container">
                <Row>
                    <Col>
                    <div>
                        <h1 id="about-title" class="splash-head">About Us</h1>
                        <h2 id="about-subtitle" class="splash-subhead">A Better Way to Imagine Allowance</h2>
                            <div>
                                <p id="about-body" class="body">
                                    Money4Kids was inspired by the idea to make managing money more accessabile to kids. Our goal is to make sure children understand
                                    how to manage their own bank account and funds when they get one. To do this, we simulate a real life bank account, but one that was managed at
                                    home and with you, their parent or guardian. 
                                </p>
                            </div>
                    </div> 
                    </Col>
                    
                </Row>
                <Row>
                    <div>
                        <img src={image1}  size="small"></img>
                        <p class="body">
                            As a parent, you will be able to create an account for yourself and for your children. From there, the parent account will be able to add and deduct
                            funds from the children's accounts. Kids will be able to do chores for allowance or deposit their gift money with you, the parent, and have it reflect in their
                            own accounts to withdraw when needed or save up for something they want. Money4Kids is only here to help kids gain a better understanding and a visual aspect
                            to their savings. Its up to you, the parent or guardian, to handle the transactions in real life! 
                        </p>   
                        <p class="body">
                            As a child, you will be able to see how much money you've save up and manage it in using your own account! You can set up goals to save for or request some pocket money
                            to go to the movies! It also helps prepare you for a real bank account! There are also learning modules ot help you better understand some concept surrounding money, such as taxes.
                        </p> 
                    </div>
                </Row>
            </Container>
        </div>    
                
}

export default About;
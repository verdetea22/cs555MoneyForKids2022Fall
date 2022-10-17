import React from "react";
import { Row, Col, Button, Container, Image } from "react-bootstrap";

const MCQuestion = () => {
    return <Container fluid>
        <Row className="question-div">
            Question 
        </Row>
        <Row className="image-div">
            <Image src="https://www.stearnsbank.com/hubfs/EquipmentFinancingQuestionsBlog.png"/>
        </Row>
        <Row className="answers-div">
            <Col>
                <Row xs={1} md={2}>
                    <Button variant="light">Answer 1</Button>{' '}
                    <Button variant="light">Answer 2</Button>{' '}
                    <Button variant="light">Answer 3</Button>{' '}
                    <Button variant="light">Answer 4</Button>{' '}
                </Row>
            </Col>
        </Row>
    </Container>
}

export default MCQuestion;
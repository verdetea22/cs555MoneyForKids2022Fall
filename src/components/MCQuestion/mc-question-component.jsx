import React from 'react'
import { Row, Col, Button, Image, Stack } from "react-bootstrap";
import './mc-question.css'

const MCQuestionComponent = (props) => {
    const question = props.question;

    const checkAnswer = (question, answer) => {
        return answer == question.correctAnswer;
    }

    return <Stack className='col-md-8 mx-auto' gap={3} direction='vertical'>
            <Row className="image-div">
                <Image src={question.imageSrc}/>
            </Row>
            <Row className="answers-div">
                <Col>
                    <Row xs={1} md={2}>
                        {question.answerChoices.map(option => <Button variant="light" onClick={() => props.sendAnswer(checkAnswer(question, option))} key={option}>{option}</Button>)}
                    </Row>
                </Col>
            </Row>
    </Stack>
}

export default MCQuestionComponent;
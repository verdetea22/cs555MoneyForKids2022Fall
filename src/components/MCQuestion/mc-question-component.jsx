import React from 'react'
import { Row, Col, Button, Image, Stack } from "react-bootstrap";
import './mc-question.css'

const MCQuestionComponent = (props) => {

    let checkAnswer = (answer) => {
        return answer === props.question.correctAnswer;
    }

    return  <Stack className='col-md-8 mx-auto' gap={3} direction='vertical'>
                <Row className="image-div">
                    <Image src={require("../../assets/modules/"+props.question.imageSrc)}/>
                </Row>
                <Row className="answers-div">
                    <Col>
                        <Row xs={1} md={2}>
                            {props.question.answerChoices.map(option => <Button className=" mt-1 ml-1 border border-dark" variant="light" onClick={() => props.sendAnswer(checkAnswer(option))} key={option}>{option}</Button>)}
                        </Row>
                    </Col>
                </Row>
            </Stack>
}

export default MCQuestionComponent;
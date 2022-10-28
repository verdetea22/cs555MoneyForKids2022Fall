import React, {useState, useEffect} from "react";
import MCQuestionComponent from "../../components/MCQuestion/mc-question-component";
import MCQuestion from "../../library/Question";
import {Row, Col, Stack, Container} from "react-bootstrap";
import { useParams } from "react-router-dom";

const Module = () => {
    const [index, setIndex] = useState(0);
    const {num} = useParams();

    const sendIsCorrect = (correct) => {
        if(correct){
            setIndex(index + 1);
        }
    }

    let questionComponents = [];

    try{
        const moduleOne = require("../../assets/modules/module1/module" + num + ".json");
        const raw = JSON.parse(JSON.stringify(moduleOne));
        let questions = raw.map(q => new MCQuestion(q.question, q.answerChoices, q.correctAnswer, q.imageSrc));
        questionComponents = questions.map(q => <MCQuestionComponent key={q.toString()} question={q} sendAnswer={sendIsCorrect} />);
    }catch{
        window.location.href = "/modules/not-found";
    }

    return <Container>
        <Stack className='col-md-8 mx-auto' gap={3} direction='vertical'>
            <Row xs={1} md={2}>
                <h1 className="question-number">{"Question: " + (index + 1)}</h1>
            </Row>
            <Row>
                {index < questionComponents.length ? questionComponents[index] : <h1>done</h1>}
            </Row>
        </Stack>
    </Container>
}

export default Module;
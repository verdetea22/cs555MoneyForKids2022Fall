import React, {useState, useEffect} from "react";
import MCQuestionComponent from "../../components/MCQuestion/mc-question-component";
import MCQuestion from "../../library/Question";
import {Row, Stack, Container, Image} from "react-bootstrap";
import { useParams } from "react-router-dom";

const Module = () => {
    let heartComponent = null;

    try{
        heartComponent = <Image src={require("../../assets/common/heart.png")} height={25}/>;
    }
    catch{
        console.error("Could not find heart image");
    }

    const [lives, setLives] = useState(3);
    const [index, setIndex] = useState(0);
    const { name } = useParams();

    const sendIsCorrect = (correct) => {
        if(correct){
            setIndex(index + 1);
        }else{
            if(lives === 1){
                //need to show user they lost
            }else{
                setLives(lives - 1);
            }
        }
    }

    let questionComponents = [];

    try{
        const moduleOne = require("../../assets/modules/" + name + "/questions.json");
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
                <Stack direction='horizontal' className="flex-row-reverse">
                    {Array(lives).fill(heartComponent)}
                </Stack>
            </Row>
            <Row>
                {index < questionComponents.length ? questionComponents[index] : <h1>done</h1>}
            </Row>
        </Stack>
    </Container>
}

export default Module;
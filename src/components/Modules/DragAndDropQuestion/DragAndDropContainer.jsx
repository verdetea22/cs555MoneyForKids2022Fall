import React, { useState } from "react";
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import AnswerHost from "./AnswerHost/AnswerHost";
import AnswerOrigin from "./AnswerOrigin/AnswerOrigin";
import { Col, Row, Stack } from "react-bootstrap";

const DragAndDropContainer = (props) => {
    const [currCorrect, setCurrCorrect] = useState(0);

    //Keep a tally of the amount of questions currently correct.
    //If increment is true, add 1 to total correct answers
    //If false, it means answer was correct, is no longer correct. So decrement by 1
    const changeCurrCorrect = (increment) => {
        if(increment && currCorrect < amtQuestions){
            setCurrCorrect(currCorrect + 1);
            console.log("current correct: "+(currCorrect + 1));
        }else if(!increment && currCorrect > 0){
            setCurrCorrect(currCorrect - 1);
            console.log("current correct: "+(currCorrect - 1));
        }
        console.log(currCorrect);
    }

    const answerCards = ["2", "3", "4", "5"];
    const origHostCards =  ["1+1:2", "1+2:3", "2+2:4", "2+3:5"];
    const answerHostCards = origHostCards.map(value => ({ value, sort: Math.random() }))
        .sort((a, b) => a.sort - b.sort)
        .map(({ value }) => value);
    const amtQuestions = answerCards.length;

    const answerOrigins = answerCards.map(a => <AnswerOrigin answerChoice={a}/>);
    const answerHosts = answerHostCards.map(a => {
        const label = a.split(":")[0];
        const correct = a.split(":")[1];
        return <AnswerHost label={label} correctAnswer={correct} isCorrect={changeCurrCorrect}/>
    })

    let qARows = [];
    for(let i = 0; i < amtQuestions; i++){
        if(i < answerOrigins.length && i < answerHosts.length){
            qARows.push(
            <Row className="align-items-end">
                <Col className="justify-content-center">
                    {answerOrigins[i]}
                </Col>
                <Col className="justify-content-center">
                    {answerHosts[i]}
                </Col>
            </Row>
            );
        }
    }

    return <DndProvider backend={HTML5Backend}>
            <Stack className='col-md-8 mx-auto' gap={3} direction='vertical'>
                {qARows ? qARows : <div></div>}
            </Stack>
        </DndProvider>
}

export default DragAndDropContainer;
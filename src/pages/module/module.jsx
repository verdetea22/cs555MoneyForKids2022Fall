import React, { useState } from "react";
import MCQuestionComponent from "../../components/Modules/MCQuestion/mc-question-component";
import MCQuestion from "../../library/Question";
import LostAlert from "../../components/Modules/Common/LostAlert";
import { Row, Stack, Container, Image } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Finished from "../../components/Modules/Common/Finised";
import DNDAlert from "../../components/Modules/DragAndDropQuestion/DNDAlert";
import DragAndDropContainer from "../../components/Modules/DragAndDropQuestion/DragAndDropContainer";
import "../../pages/module/module.css";

const Module = () => {
  let heartComponent = null;
  const [hasLost, setHasLost] = useState(false);
  const [showDNDAlert, setShowDNDAlert] = useState(false);
  const [correctQuestions, setCorrectQuestions] = useState(0);
  const [totalQuestions, setTotalQuestions] = useState(0);
  const [lives, setLives] = useState(3);
  const [index, setIndex] = useState(0);
  const { name } = useParams();

  try {
    heartComponent = (
      <Image src={require("../../assets/common/heart.png")} height={25} />
    );
  } catch {
    console.error("Could not find heart image");
  }

  const reset = () => {
    setIndex(0);
    setLives(3);
    setHasLost(() => false);
  };

  const resetDND = () => {
    setShowDNDAlert(() => false);
  }

  const sendIsCorrect = (correct) => {
    if (correct) {
      setIndex(index + 1);
    } else {
      setLives(lives - 1);
      if (lives === 1) {
        setHasLost(() => true);
      }
    }
  };

  const checkCorrect = (numCorrect, numQuestions) => {
    if(numCorrect === numQuestions){
      sendIsCorrect(true);
    }else{
      sendIsCorrect(false);
      if(lives !== 1){
        setCorrectQuestions(numCorrect);
        setTotalQuestions(numQuestions);
        setShowDNDAlert(true);
      }
    }
  }

  let questionComponents = [];

  try {
    const module = require("../../assets/modules/" + name + "/questions.json");
    const raw = JSON.parse(JSON.stringify(module));

    questionComponents = raw.map((q) => {
      if(q.type == "MC"){
        let mcQ = new MCQuestion(q.question, q.answerChoices, q.correctAnswer, q.imageSrc)
        return (<MCQuestionComponent
          key={mcQ.toString()}
          question={mcQ}
          sendAnswer={sendIsCorrect}
        />)
      }else if(q.type == "DND"){
        return (<DragAndDropContainer 
          key={q.toString()}
          answerChoices={q.answerChoices}
          answerTargets={q.answerTargets.map(value => ({ value, sort: Math.random() }))
            .sort((a, b) => a.sort - b.sort)
            .map(({ value }) => value)}
          checkCorrect={checkCorrect}
        />)
      }
    });
  } catch {
    window.location.href = "/modules/not-found";
  }

  return (
    <Container className="mh-50">
      <DNDAlert correct={correctQuestions} showDNDAlert={showDNDAlert} total={totalQuestions} key={Date.now().now} reset={resetDND} />
      <LostAlert key={Date().now} showLostAlert={hasLost} reset={reset} />
      <Stack className="col-md-8 mx-auto" gap={3} direction="vertical">
        <Row xs={1} md={2}>
          <h1 className="question-number"> {"Question: " + (index + 1)} </h1>
          <Stack direction="horizontal" gap={1} className="flex-row-reverse">
            {Array(lives).fill(heartComponent)}
          </Stack>
        </Row>
        {index < questionComponents.length ? (
          questionComponents[index]
        ) : (
          <Finished name={name} />
        )}
      </Stack>
    </Container>
  );
};

export default Module;

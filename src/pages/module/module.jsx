import React, { useState, useEffect } from "react";
import MCQuestionComponent from "../../components/Modules/MCQuestion/mc-question-component";
import MCQuestion from "../../library/Question";
import LostAlert from "../../components/Modules/Common/LostAlert";
import { Row, Stack, Container, Image } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Finished from "../../components/Modules/Common/Finised";

const Module = () => {
  let heartComponent = null;
  const [hasLost, setHasLost] = useState(false);
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

  let questionComponents = [];

  try {
    const module = require("../../assets/modules/" + name + "/questions.json");
    const raw = JSON.parse(JSON.stringify(module));
    let questions = raw.map(
      (q) =>
        new MCQuestion(q.question, q.answerChoices, q.correctAnswer, q.imageSrc)
    );
    questionComponents = questions.map((q) => (
      <MCQuestionComponent
        key={q.toString()}
        question={q}
        sendAnswer={sendIsCorrect}
      />
    ));
  } catch {
    //window.location.href = "/modules/not-found";
  }

  return (
    <Container>
      <LostAlert key={Date().now} showLostAlert={hasLost} reset={reset} />{" "}
      <Stack className="col-md-8 mx-auto" gap={3} direction="vertical">
        <Row xs={1} md={2}>
          <h1 className="question-number"> {"Question: " + (index + 1)} </h1>{" "}
          <Stack direction="horizontal" gap={1} className="flex-row-reverse">
            {" "}
            {Array(lives).fill(heartComponent)}{" "}
          </Stack>{" "}
        </Row>{" "}
        <Row>
          {" "}
          {index < questionComponents.length ? (
            questionComponents[index]
          ) : (
            <Finished name={name} />
          )}{" "}
        </Row>{" "}
      </Stack>{" "}
    </Container>
  );
};

export default Module;

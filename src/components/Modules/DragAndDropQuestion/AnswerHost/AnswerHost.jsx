import React, { useState } from "react";
import { useDrop } from 'react-dnd'
import AnswerOption from "../AnswerOption/AnswerOption";
import "./AnswerHost.css";
import { Row } from "react-bootstrap";

const style = {
    border: '1px dashed gray',
    backgroundColor: 'yellow',
    height: '90px',
    width: '150px'
}

const AnswerHost = ({label, correctAnswer, isCorrect}) => {
    const [currentAnswer, setCurrentAnswer] = useState("");
    const [canShowAnswer, setCanShowAnswer] = useState(false);
    const [wasCorrect, setWasCorrect] = useState(false);

    const setShow = (canShow) => {
      if(!canShow){
        if(wasCorrect){
          setWasCorrect(false);
          isCorrect(false);
        }
        setCurrentAnswer("");
      }
      setCanShowAnswer(canShow);
    };

    const [{ isOver, canDrop }, drop] = useDrop({
        accept: "answerOption",
        canDrop: () => currentAnswer === "",
        drop: (item) => {
          console.log("dropped");
          setCurrentAnswer(item.answer);
          setCanShowAnswer(true);
          if(wasCorrect && !answerIsCorrect(item.answer)){
            setWasCorrect(false);
            isCorrect(false);
          }else if(!wasCorrect && answerIsCorrect(item.answer)){
            setWasCorrect(true);
            isCorrect(true);
          }
        },
        collect: (monitor) => ({
          isOver: monitor.isOver(),
          canDrop: monitor.canDrop(),
        }),
      });

    const reset = () => {
      setCurrentAnswer("");
      setCanShowAnswer(false);
    }

    const answerIsCorrect = (answer) => {
      return correctAnswer === answer;
    }

    return <Row className="justify-content-md-center">
            <h2>{label}</h2>
            <div ref={drop} style={style}>
              {(currentAnswer && canShowAnswer) ? <AnswerOption answer={currentAnswer} showAnswer={setShow} /> : null}
            </div>
          </Row>
     
}

export default AnswerHost;
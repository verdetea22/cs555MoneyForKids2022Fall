import React, { useState } from "react";
import { useDrop } from 'react-dnd'
import AnswerOption from "../AnswerOption/AnswerOption";
import "./AnswerOrigin.css";
import { Row } from "react-bootstrap";

const style = {
    border: '1px dashed gray',
    backgroundColor: 'yellow',
    height: '90px',
    width: '150px',
}

const AnswerOrigin = ({answerChoice}) => {
    const origionalAnswer = answerChoice;
    const [currentAnswer, setCurrentAnswer] = useState(answerChoice);
    const [canShowAnswer, setCanShowAnswer] = useState(true);

    const setShow = (canShow) => {
      setCanShowAnswer(canShow);
    };

    const [{ isOver, canDrop }, drop] = useDrop({
      accept: "answerOption",
      canDrop: (item, monitor) => item.answer === origionalAnswer,
      drop: (item) => {
          setCurrentAnswer(item.answer);
          setCanShowAnswer(true);
      },
      collect: (monitor) => ({
        isOver: monitor.isOver(),
        canDrop: monitor.canDrop(),
      }),
    });

    const reset = () => {
      setCurrentAnswer(origionalAnswer);
      setCanShowAnswer(true);
    }

    return <Row className="justify-content-md-center">
            <div  ref={drop} style={style}>
              {(currentAnswer && canShowAnswer) ? <AnswerOption answer={currentAnswer} showAnswer={setShow} /> : null}
            </div>
           </Row>
}

export default AnswerOrigin;
import React, { useState } from "react";
import { useDrop } from 'react-dnd'
import AnswerOption from "../AnswerOption/AnswerOption";
import "./AnswerOrigin.css";

const style = {
    border: '1px dashed gray',
    backgroundColor: 'yellow',
    height: '75px',
    width: '125px'
}

const AnswerOrigin = ({answerChoice}) => {
    const [currentAnswer, setCurrentAnswer] = useState(answerChoice);
    const [canShowAnswer, setCanShowAnswer] = useState(true);

    const setShow = (canShow) => {
      setCanShowAnswer(canShow);
    };

    const [{ isOver, canDrop }, drop] = useDrop({
        accept: "answerOption",
        drop: (item) => {
            console.log(item);
            console.log(item.asnwer);
            setCurrentAnswer(item.answer);
            setCanShowAnswer(true);
            console.log(currentAnswer);
        },
        collect: (monitor) => ({
          isOver: monitor.isOver(),
          canDrop: monitor.canDrop(),
        }),
      })

    return <div ref={drop} style={style}>
        {(currentAnswer && canShowAnswer) ? <AnswerOption answer={currentAnswer} showAnswer={setShow} /> : null}
        </div>
}

export default AnswerOrigin;
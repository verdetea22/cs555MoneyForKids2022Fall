import React, { useState } from "react";
import { useDrop } from 'react-dnd'
import AnswerOption from "../AnswerOption/AnswerOption";
import "./AnswerHost.css";

const style = {
    border: '1px dashed gray',
    backgroundColor: 'yellow',
    height: '75px',
    width: '125px'
}

const AnswerHost = () => {
    const [currentAnswer, setCurrentAnswer] = useState(<AnswerOption answer={""} />);

    const [{ isOver, canDrop }, drop] = useDrop({
        accept: "answerOption",
        drop: (item) => setCurrentAnswer(item),
        collect: (monitor) => ({
          isOver: monitor.isOver(),
          canDrop: monitor.canDrop(),
        }),
      })

    return <div ref={drop} style={style}>{currentAnswer.answer ? currentAnswer.answer : ""}</div>
}

export default AnswerHost;
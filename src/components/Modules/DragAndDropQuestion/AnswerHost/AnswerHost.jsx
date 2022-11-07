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
    const [currentAnswer, setCurrentAnswer] = useState("");
    const [canShowAnswer, setCanShowAnswer] = useState(false);

    const setShow = (canShow) => {
      setCanShowAnswer(canShow);
    };

    const [{ isOver, canDrop }, drop] = useDrop({
        accept: "answerOption",
        drop: (item) => {
          console.log(item);
          console.log(item.asnwer);
          setCurrentAnswer(item);
          setCanShowAnswer(true);
          console.log(currentAnswer);
        },
        collect: (monitor) => ({
          isOver: monitor.isOver(),
          canDrop: monitor.canDrop(),
        }),
      })

    return <div ref={drop} style={style}>
        {(currentAnswer && canShowAnswer) ? <AnswerOption asnwer={currentAnswer} showAnswer={setShow} /> : null}
      </div>
}

export default AnswerHost;
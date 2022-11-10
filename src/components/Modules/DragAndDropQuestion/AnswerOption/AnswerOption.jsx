import React from "react";
import { useDrag } from 'react-dnd'
import "./AnswerOption.css";

const style = {
    border: '1px dashed gray',
    backgroundColor: 'white',
    padding: '0.5rem 1rem',
    margin: 'auto',
    cursor: 'move',
    float: 'left',
    height: '70px',
    width: '120px',
    fontSize: '20px'
}


const AnswerOption = ({answer, showAnswer}) => {
    const [{ opacity, isOver }, drag] = useDrag(
        () => ({
          type: "answerOption",
          item: {answer},
          collect: (monitor) => ({
            opacity: monitor.isDragging() ? 0.4 : 1,
          }),
          end: (item, monitor) => {
            monitor.didDrop() ? showAnswer(false) : showAnswer(true);
          }
        })
      )

    return <div ref={drag} style={{ ...style, opacity }}>
            {answer}
        </div>
}

export default AnswerOption;
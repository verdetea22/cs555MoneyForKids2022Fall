import React from "react";
import { useDrag } from 'react-dnd'
import "./AnswerOption.css";

const style = {
    border: '1px dashed gray',
    backgroundColor: 'white',
    padding: '0.5rem 1rem',
    marginRight: '1.5rem',
    marginBottom: '1.5rem',
    cursor: 'move',
    float: 'left',
    height: '70px',
    width: '120px',
    fontSize: '5px'
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
            console.log(item);
            monitor.didDrop() ? showAnswer(false) : showAnswer(true);
          }
        })
      )

    return <div ref={drag} style={{ ...style, opacity }}>
            {answer}
        </div>
}

export default AnswerOption;
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
}


const AnswerOption = ({answer}) => {
    const [{ opacity }, drag] = useDrag(
        () => ({
          type: "answerOption",
          item: {answer},
          collect: (monitor) => ({
            opacity: monitor.isDragging() ? 0.4 : 1,
          }),
        })
      )

    return <div ref={drag} style={{ ...style, opacity }}>
            <h1>{answer}</h1>
        </div>
}

export default AnswerOption;
import React from "react";
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import AnswerHost from "./AnswerHost/AnswerHost";
import AnswerOption from "./AnswerOption/AnswerOption";
import { Row } from "react-bootstrap";

const DragAndDropContainer = () => {
    

    return <DndProvider backend={HTML5Backend}>
            <Row xs={1} md={2}>
                <AnswerOption answer={"Possible answer"} />
                <AnswerHost />
            </Row>
        </DndProvider>
}

export default DragAndDropContainer;
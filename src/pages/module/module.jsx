import React, {useState} from "react";
import MCQuestionComponent from "../../components/MCQuestion/mc-question-component";
import MCQuestion from "../../library/Question";

const Module = () => {
    const question = "Here is the question";
    const answerOptions = ["Iotuon", "Option2", "Option 3"];
    const correctAnswer = "Option2";
    const imageSrc = "https://www.stearnsbank.com/hubfs/EquipmentFinancingQuestionsBlog.png";
    const q = new MCQuestion(question, answerOptions, correctAnswer, imageSrc);

    const [isCorrect, setIsCorrect] = useState('');

    const sendIsCorrect = (correct) => {
        setIsCorrect(correct);
        console.log(correct);
    }

    return <MCQuestionComponent question={q} sendAnswer={sendIsCorrect} />
}

export default Module;
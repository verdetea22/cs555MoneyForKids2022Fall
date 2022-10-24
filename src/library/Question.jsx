export default class MCQuestion {
    question = "";
    answerChoices = [];
    correctAnswer = "";
    imageSrc = "";

    constructor(question, answerChoices, correctAnswer, imageSrc){
        this.question = question;
        this.answerChoices = answerChoices;
        this.imageSrc = imageSrc;
        this.correctAnswer = correctAnswer;
    }

    isCorrect = (answer) => {
        if(answer == this.correctAnswer){
            return true;
        }else{
            return false;
        }
    }
}
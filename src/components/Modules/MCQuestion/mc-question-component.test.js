import React from "react";
import {render, screen, getByText, fireEvent} from '@testing-library/react'
import MCQuestion from '../../../library/Question';
import MCQuestionComponent from './mc-question-component';

it('shows the correct information', () => {
    const question = "What is 2 + 2?";
    const answerOptions = ["2", "3", "4", "5"];
    const correctAnswer = 2;
    const q = new MCQuestion(question, answerOptions, correctAnswer, "");
    render(
        <MCQuestionComponent question={q} />
    );
    
    //Check if buttons render with correct text
    const button1 = screen.getByText("2");
    expect(button1).toBeTruthy();
    const button2 = screen.getByText("3");
    expect(button2).toBeTruthy();
    const button3 = screen.getByText("4");
    expect(button3).toBeTruthy();
    const button4 = screen.getByText("5");
    expect(button4).toBeTruthy();

    //Check if question renders with correct text
    const questionText = screen.getByText("What is 2 + 2?");
    expect(questionText).toBeTruthy();
})

it(('selects the correct answer choice'), async () => {
    const question = "What is 2 + 2?";
    const answerOptions = ["2", "3", "4", "5"];
    const correctAnswer = 2;
    const q = new MCQuestion(question, answerOptions, correctAnswer, "");

    const checkCorrect = (isCorrect) => {
        expect(isCorrect).toBeTruthy();
    }

    render(
        <MCQuestionComponent question={q} sendAnswer={checkCorrect}/>
    );

    fireEvent(
        screen.getByText("4"),
        new MouseEvent('click', {
          bubbles: true,
          cancelable: true,
        }),
      )
})
import React from "react";
import './AnswerChoices.css';

//Function for the answer choices for each question
function AnswerChoices(props) {
    return (
        <li className='answerChoices'>
            <input
            type = 'radio'
            className='answerBtn'
            //Checking to see if the answer clicked is equal to answer type, returns boolean
            checked = {props.answerType === props.answer}
            //The id for the answer will be equal to the type
            id={props.answerType}
            //Value of answer will be equal to the type
            value={props.answerType}
            onChange = {props.onAnswerSelected}
            />

            {/*Labeling of the answer choices
            Making the content equal to the content in the quizQuesttions.js
            and referencing the id associated with the label with html for*/}
            <label className='answerBtnContent' for={props.answerType}>
                {props.answerContent}
            </label>
        </li>
    );
}

    export default AnswerChoices;
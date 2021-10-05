import React from "react";
//import './Question.css';

//Function for displaying the questions
function Questions(props) {
    return (
        //set the value of the question to the content of the quizQuestions.js
        <h2 className='questions'>{props.content}</h2>
    );
}


export default Questions;
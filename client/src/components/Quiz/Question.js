import React from "react";
import PropTypes from 'prop-types';
import './Question.css';

//Function for displaying the questions
function Questions(props) {
    return (
        //set the value of the question to the content of the quizQuestions.js
        <h2 className='questions'>{props.content}</h2>
    );
}

//Using PropTypes to validate data
//Content is required for the question
Questions.propTypes = {
    content: PropTypes.string.isRequired
};

export default Questions;
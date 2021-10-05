import React from 'react';
import PropTypes, { func } from 'prop-types';
import Questions from './Question';
import AnswerChoices from './AnswerChoices';

//Function for how the quiz is displayed
function Quiz(props) {
  function renderAnswerChoices(key) {
    //Funciton to render the answer choices with the proper data
    return (
      <AnswerChoices
        key={key.content}
        answerContent={key.content}
        answerType={key.type}
        answer={props.answer}
        questionId={props.questionId}
        onAnswerSelected={props.onAnswerSelected}
      />
    );
  }

  return (
    //Rendering the questions with the answer choices as unordered list 
      <div key={props.questionId}>
             <Questions content={props.question} />
        <ul className="answerChoice">
          {props.answerChoices.map(renderAnswerChoices)}
        </ul>
      </div>
  );
}

//Using PropTypes to validate data
//Anser Choices is an array of the different choices the user can pick from 
Quiz.propTypes = {
  answer: PropTypes.string.isRequired,
  answerChoices: PropTypes.array.isRequired,
  question: PropTypes.string.isRequired,
  questionId: PropTypes.number.isRequired,
  questionTotal: PropTypes.number.isRequired,
  onAnswerSelected: PropTypes.func.isRequired
};

export default Quiz;


import React from 'react';
import Questions from './Question';
import AnswerChoices from './AnswerChoices';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
  quizBody: {
    backgroundColor: 'red'
  }

}))

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
  
  const classes = useStyles();
  return (
    //Rendering the questions with the answer choices as unordered list 
      <div key={props.questionId} className={classes.quizBody}>
             <Questions content={props.question} />
        <ul className="answerChoice">
          {props.answerChoices.map(renderAnswerChoices)}
        </ul>
      </div>
  );
}


export default Quiz;


import React, { Component } from 'react';
import './MainQuiz.css';
import Quiz from './Quiz';
import quizQuestions from '../components/Quiz/api/quizQuestions';
import Results from './Results';

//Main quiz code to render all the parts of the quiz
class MainQuiz extends Component {
  constructor(props) {
    super(props);
    //Setting the state variables
    this.state = {
      counter: 0,
      questionId: 1,
      question: '',
      answerChoices: [],
      answer: '',
      answerCount: {},
      result: ''
    };

    //Binding to pass the data to the handleAnswerSelected funciton
    this.handleAnswerSelected = this.handleAnswerSelected.bind(this);
  }


  //Using componentDidMount to render and update the page with new questions and answers
  //depending what question index the user is on
  componentDidMount() {
    this.setState({
      question: quizQuestions[0].question,
      answerChoices: quizQuestions[0].answers
    });
  }

  //Event handling function for when an answer is clicked
  //Grabbing the value of the answer that the user clicked 
  handleAnswerSelected(event) {
    this.userAnswer(event.currentTarget.value);
    //If the question the user is on is LESS than the lenght of the total questions
    if (this.state.questionId < quizQuestions.length) {
      //then the next question is rendered using the nextQuestion function
      this.nextQuestion();
    } else {
      //Else If the user is at the last question of the quiz then the users results are determine with the setResults function and is shown with the getResults function
      this.setResults(this.getSkinResults());
    }

  }

  //Keeping track of the answers the user chooses and keeping count of the ids the 
  //answers correlate too 
  userAnswer(answer) {
    this.setState((state, props) => ({
      answerCount: {
        ...state.answerCount,
        [answer]: (state.answerCount[answer] || 0) + 1
      },
      answer: answer
    }));
  }

  //Function to show the next question, incresing the questionId by one and the counter (keeps track of what question user is on) increases by 1
  nextQuestion() {
    const counter = this.state.counter + 1;
    const questionId = this.state.questionId + 1;
    //Setting the questionId, question and answerChoices to the data that is equal to what number question the user is on
    //Answer is blank until user clicks an answer, value will be that of what the user chooses
    this.setState({
      counter: counter,
      questionId: questionId,
      question: quizQuestions[counter].question,
      answerChoices: quizQuestions[counter].answers,
      answer: ''
    });
  }


  //Function to get results
  getSkinResults() {
    //Keeping track of the answers and ids the user is choosing
    const answerCount = this.state.answerCount;
    const answerCountKeys = Object.keys(answerCount);
    const answerCountValues = answerCountKeys.map(key => answerCount[key]);
    const maxAnswerCount = Math.max.apply(null, answerCountValues);

    return answerCountKeys.filter(key => answerCount[key] === maxAnswerCount);
  }

  //Determing the results the user with get
  setResults(result) {
    //If the results it equal to one of the ids then the result is that of the id
    if (result.length === 1) {
      this.setState({ result: result[0] });
      //Else the result is undetermined
    } else {
      this.setState({ result: 'Undetermined' });
    }
  }


  //Functino to render the quiz with the answerChoices, the questions, calling the handleAnswerSelected when an answer is clicked
  renderQuiz() {
    return (
      <Quiz
        answer={this.state.answer}
        answerChoices={this.state.answerChoices}
        questionId={this.state.questionId}
        question={this.state.question}
        questionTotal={quizQuestions.length}
        onAnswerSelected={this.handleAnswerSelected}
      />
    );
  }

  //Function to render the results as the results the user gets from the ids of the answers they chose
  renderResult() {
    return <Results quizResult={this.state.result} />;
  }

  //Rendering the whole quiz
  render() {
    return (
      
      <div className="mainContainer">
          <div className="header">
            <br />
          {/* If the user has chosen answers render the results page otherwise render the quiz*/}

          {this.state.result ? 
          (
            <div>
              {this.renderResult()}
            </div>
          )
          : 
          (
            <div className='content'>
              {this.renderQuiz()}
            </div>
          )
          
          }
          </div>
        </div>
    );
  }
}

export default MainQuiz;

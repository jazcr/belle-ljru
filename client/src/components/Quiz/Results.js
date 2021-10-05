import React from "react";
import PropTypes from 'prop-types';
import './MainQuiz.css';

//Funciton for displaying the results
function Results(props) {
    return (
        <>
        <div style={{textAlign: 'center'}}>
          <h1>  You have <span style={{color:'#3AC4B2 '}}>{props.quizResult}</span> skin!  </h1>
            <br/>
            </div>
            <div>
                {/*Button for the user to go to the routine page when they find out their results*/}
            <button className='resultBtn' style={{fontSize: '100%', color: 'white', borderRadius: '5px', background: '#3AC4B2'}} variant='info'>Check out your routine!</button>
        </div>
        </>

    );
}

//results is required to show the results
Results.propTypes = {
    quizResult: PropTypes.string.isRequired
};



export default Results;
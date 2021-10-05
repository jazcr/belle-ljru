import React, { Component } from "react";
import SkinTypes from "./Result/SkinType";
import './MainQuiz.css';

//Results page
class Results extends Component {
    constructor(props) {
        super(props)
        this.state = {
            showSkinTypeResults: true
        }

    }
    //Result = value of the answers id's the user chose
    //renderSkinTypeResults returns the SkinTypes.js with the users result
    renderSkinTypeResults() {
        return <SkinTypes result={this.props.quizResult} />
    }
    //call function to render the results and info cards 
    render() {
        return this.renderSkinTypeResults()
    }
    
}



export default Results;
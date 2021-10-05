import React, { Component } from "react";
import SkinTypes from '../components/Quiz/Result/SkinType';
import './MainQuiz.css';

class Results extends Component {
    constructor(props) {
        super(props)
        this.state = {
            showSkinTypeResults: true
        }

    }
    renderSkinTypeResults() {
        return <SkinTypes result={this.props.quizResult} nextClick={this.nextClick} />
    }
    render() {
        return this.renderSkinTypeResults()
    }
    
}



export default Results;
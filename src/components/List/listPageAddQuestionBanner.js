import React, { Component } from "react";

import interview from "../../assets/images/interview2.png";

class listPageAddQuestionBanner extends Component {
    state = {
        questionText: ""
    }

    updateQuestionText = (e) => {
        this.setState({
            questionText: e.target.value
        });
    }

    handleKeyDown = (e) => {
        if (e.key === "Enter") {
            this.handleStartAddQuestion();
        }
    }

    handleStartAddQuestion = () => {
        if (this.state.questionText.length > 0) {
            let question = {
                question: this.state.questionText,
                answer: ""
            }
            this.props.startAddQuestion(this.props.id, question);
            this.setState({questionText: ""});
            document.getElementById("questionInput").value =  "";
        }
    }

    render() {
        return (
            <div className="listPage__addQuestion">
                <div className="container-s">
                    <img src={interview} alt="people being interviewed" />
                    <h1>Add a question</h1>
                    <p>Add a question below and add it to your list</p>
                    <input 
                        id="questionInput"
                        type="text" 
                        placeholder="What weaknesses do you have?" 
                        onChange={(e) => this.updateQuestionText(e)} 
                        onKeyDown={(e) => this.handleKeyDown(e)} />
                    <button 
                        className="btn" 
                        onClick={(e) => this.handleStartAddQuestion()}>Add Question</button>
                </div>
            </div>
        );
    }
}

export default listPageAddQuestionBanner;


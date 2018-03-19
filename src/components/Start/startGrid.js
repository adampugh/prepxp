import React, { Component } from "react";

class startGrid extends Component {
    state = {
        currentIndex: 0,
        showAnswer: false
    }

    showAnswer = () => {
        this.setState({
            showAnswer: !this.state.showAnswer
        })
    }

    nextQuestion = () => {
        if (this.state.currentIndex + 1 === this.props.questions.length) {
            this.props.finishQuestions();
        } else {
            document.querySelector("textarea").value = "";
            // window.scrollTo(0, 0);
            this.setState({
                currentIndex: this.state.currentIndex + 1,
                showAnswer: false
            });
        }
    }

    render() {
        return (
            <section className="start">
                <div className="container-s">
                    <div className="start__box">
                        <div className="start__questionBox">
                            <h2>
                                <span>{`Q${this.state.currentIndex + 1} `}</span> 
                                {this.props.questions[this.state.currentIndex].question}
                            </h2>
                            <button className="btn" onClick={this.showAnswer}>
                                {this.state.showAnswer ? "Hide answer" : "Show answer"}
                            </button>
                        </div>
                        <div className="start__previousAnswer">
                            {
                                this.state.showAnswer ? <p>{this.props.questions[this.state.currentIndex].answer}</p> :
                                <p>Answer hidden</p>
                            }
                        </div>
                        <div className="start__answerBox">
                            <textarea />
                        </div>
                        <div className="start__button__div">
                            <button className="btn">Save</button>
                            <button className="btn" onClick={this.nextQuestion}>Next</button>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default startGrid;
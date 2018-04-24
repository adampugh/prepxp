import React, { Component } from "react";

class startGrid extends Component {
    state = {
        currentIndex: 0,
        showAnswer: false,
        answer: ""
    }

    updateAnswer = (e) => {
        if (e.target.value.length > 0) {
            this.setState({
                answer: e.target.value
            })
        }
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

    handleStartSaveAnswer = () => {
        if (this.state.answer.length > 0) {
            this.props.startSaveAnswer(
                this.props.id, 
                this.state.currentIndex, 
                this.state.answer, 
                this.props.questions[this.state.currentIndex].id
            );
        }
        document.getElementById("answer__textarea").value = "";
        this.setState({answer: ""});
        this.showSavedModal();
    }

    showSavedModal = () => {
        this.props.openModal();
        setTimeout(() => {
            this.props.closeModal();
            this.nextQuestion();
        }, 1000);
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
                        <div className={this.state.showAnswer 
                                ? "start__previousAnswer start__previousAnswer--purple"
                                : "start__previousAnswer start__previousAnswer--black" }>
                            {
                                this.state.showAnswer 
                                    ? this.props.questions[this.state.currentIndex].answer === "" 
                                    || this.props.questions[this.state.currentIndex].answer === undefined
                                        ? <p>You haven't added an answer yet</p>
                                        : <p>{this.props.questions[this.state.currentIndex].answer}</p> 
                                    : <p>Answer hidden</p>
                            }
                        </div>
                        <div className="start__answerBox">
                            <textarea 
                                id="answer__textarea"
                                onChange={(e) => this.updateAnswer(e)}/>
                        </div>
                        <div className="start__button__div">
                            <button 
                                className="btn"
                                onClick={this.handleStartSaveAnswer} >Save</button>
                            <button 
                                className="btn" 
                                onClick={this.nextQuestion}>Next</button>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default startGrid;
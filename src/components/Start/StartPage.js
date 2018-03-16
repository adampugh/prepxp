import React, { Component } from "react";

import Navbar from "../UI/navbarLoggedIn";
import StartGrid from "./startGrid";
import StartComplete from "./startComplete";
import Footer from "../UI/footer";

class StartPage extends Component {
    state = {
        title: "Java Developer",
        questions: [
            {
                question: "What are your best strengths?",
                answer: "I am good with my arms and I can life six chairs with my legs.",
            }, {
                question: "what?",
                answer: "hmm"
            }
        ],
        questionsComplete: false
    }

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    finishQuestions = () => {
        window.scrollTo(0, 0);
        this.setState({
            questionsComplete: true
        })
    }


    render() {
        return (
            <div>
                <Navbar />
                {this.state.questionsComplete ? 
                    <StartComplete /> :
                    <StartGrid 
                        finishQuestions={this.finishQuestions}
                        questions={this.state.questions}
                    />
                }
                <Footer />
            </div>
        )
    } 
}


export default StartPage;
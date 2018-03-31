import React, { Component } from "react";

import Navbar from "../UI/navbarLoggedIn";
import StartGrid from "./startGrid";
import StartComplete from "./startComplete";
import Footer from "../UI/footer";

class StartPage extends Component {
    state = {
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


    render(props) {
        return (
            <div>
                <Navbar />
                {this.state.questionsComplete ? 
                    <StartComplete /> :
                    <StartGrid 
                        finishQuestions={this.finishQuestions}
                        questions={this.props.location.state.list.questions}
                    />
                }
                <Footer />
            </div>
        )
    } 
}

export default StartPage;
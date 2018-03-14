import React, { Component } from "react";

import Navbar from "../UI/navbarLoggedIn";
import ListPageHeader from "./listPageHeader";
import ListPageAddQuestionBanner from "./listPageAddQuestionBanner";
import ListPageQuestions from "./listPageQuestions";
import Footer from "../UI/footer";

class ListPage extends Component {
    state = {
        title: "JavaScript Developer",
        questions: [
            {
                question: "What is it?",
                answer: "You're the best"
            },
            {
                question: "I'm not sure that is",
                answer: "Only what no"
            }
        ]
    }

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render() {
        return (
            <div>
                <Navbar />
                <ListPageAddQuestionBanner />
                <ListPageHeader title={this.state.title} />
                <ListPageQuestions questions={this.state.questions} />
                <Footer />
            </div>
        )
    }
}

export default ListPage;


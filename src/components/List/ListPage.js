import React, { Component } from "react";
import { connect } from "react-redux";

import * as actions from "../../store/actions/actions";
import Navbar from "../UI/navbarLoggedIn";
import ListPageHeader from "./listPageHeader";
import ListPageAddQuestionBanner from "./listPageAddQuestionBanner";
import ListPageQuestions from "./listPageQuestions";
import Footer from "../UI/footer";

export class ListPage extends Component {

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render() {
        return (
            <div>
                <Navbar />
                <ListPageAddQuestionBanner 
                    startAddQuestion={this.props.startAddQuestion}
                    id={this.props.location.state.list.id} />
                <ListPageHeader 
                    title={this.props.lists[this.props.location.state.listIndex].title} />
                <ListPageQuestions 
                    questions={this.props.lists[this.props.location.state.listIndex].questions} 
                    startDeleteQuestion={this.props.startDeleteQuestion} 
                    id={this.props.location.state.list.id} />
                <Footer />
            </div>
        )
    }
}




// <ListPageQuestions questions={this.state.questions} />

const mapStateToProps = state => {
    return {
        lists: state.lists
    }
}

const mapDispatchToProps = dispatch => {
    return {
        startAddQuestion: (id, question) => dispatch(actions.addQuestion(id, question)),
        startDeleteQuestion: (id, index) => dispatch(actions.deleteQuestion(id, index))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListPage);


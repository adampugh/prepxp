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
                    id={this.props.list.id} />
                <ListPageHeader 
                    title={this.props.list.title} 
                    startEditListTitle={this.props.startEditListTitle}
                    id={this.props.list.id} />
                <ListPageQuestions 
                    questions={this.props.list.questions} 
                    startDeleteQuestion={this.props.startDeleteQuestion} 
                    id={this.props.list.id} />
                <Footer />
            </div>
        )
    }
}




// <ListPageQuestions questions={this.state.questions} />

const mapStateToProps = (state, ownProps) => {
    return {
        list: state.lists.filter(list => list.id === ownProps.location.state.list.id)[0]
    }
}

const mapDispatchToProps = dispatch => {
    return {
        startAddQuestion: (id, question) => dispatch(actions.addQuestion(id, question)),
        startDeleteQuestion: (id, index) => dispatch(actions.deleteQuestion(id, index)),
        startEditListTitle: (id, title) => dispatch(actions.editListTitle(id, title))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListPage);

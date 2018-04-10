import React, { Component } from "react";
import { Redirect } from "react-router-dom";
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
            {
                this.props.list !== null 
                    ? <div> 
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
                            // questions={this.props.lists[this.props.location.state.listIndex].questions}
                            startDeleteQuestion={this.props.startDeleteQuestion} 
                            id={this.props.list.id} />
                        <Footer />
                        </div>
                    : <Redirect to="/dashboard" />
            }
                
            </div>
        )
    }
}


// <ListPageQuestions questions={this.state.questions} />

const mapStateToProps = (state, ownProps) => {
    return {
        list: ownProps.location.state ? state.lists.filter(list => list.id === ownProps.location.state.list.id)[0] : null
    }
}

const mapDispatchToProps = dispatch => {
    return {
        startAddQuestion: (id, question) => dispatch(actions.startAddQuestion(id, question)),
        startDeleteQuestion: (id, index, questionId) => dispatch(actions.startDeleteQuestion(id, index, questionId)),
        startEditListTitle: (id, title) => dispatch(actions.startEditListTitle(id, title))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListPage);






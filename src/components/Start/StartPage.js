import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
 
import * as actions from "../../store/actions/actions";
import Navbar from "../UI/navbarLoggedIn";
import StartGrid from "./startGrid";
import StartComplete from "./startComplete";
import StartSavedModal from "./startSavedModal";
import Footer from "../UI/footer";

export class StartPage extends Component {
    state = {
        questionsComplete: false,
        modalIsOpen: false
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

    openModal = () => {
        this.setState({
            modalIsOpen: true
        });
    }

    closeModal = () => {
        this.setState({
            modalIsOpen: false
        })
    }

    render(props) {
        return (
            <div>
                {
                    this.props.list === null 
                        ? <Redirect to="/prepxp/dashboard" />
                        : <div>
                            <StartSavedModal 
                                isOpen={this.state.modalIsOpen}
                                closeModal={this.closeModal} />
                            <Navbar />
                            {this.state.questionsComplete ? 
                                <StartComplete 
                                    list={this.props.list}
                                    startCompleteList={this.props.startCompleteList} />
                                    :
                                <StartGrid 
                                    finishQuestions={this.finishQuestions}
                                    questions={this.props.list.questions}
                                    id={this.props.list.id}
                                    startSaveAnswer={this.props.startSaveAnswer}
                                    closeModal={this.closeModal}
                                    openModal={this.openModal}
                                />
                            }
                            <Footer />
                        </div>
                }
            </div>
        )
    } 
}


const mapStateToProps = (state, ownProps) => {
    return {
        list: ownProps.location.state ? state.reducer.lists.filter(list => list.id === ownProps.location.state.list.id)[0] : null
    }
}

const mapDispatchToProps = dispatch => {
    return {
        startSaveAnswer: (id, index, answer, questionId) => dispatch(actions.startSaveAnswer(id, index, answer, questionId)),
        startCompleteList: (id, timesCompleted) => dispatch(actions.startCompleteList(id, timesCompleted))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(StartPage);
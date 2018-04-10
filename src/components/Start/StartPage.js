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
        // let content =  this.props.list === null ?  : startPage;
        // let startPage = (
            
        // );
        // let redirect = <Redirect to="/dashboard" />;
        
        return (
            <div>
                {
                    this.props.list === null 
                        ? <Redirect to="/dashboard" />
                        : <div>
                            <StartSavedModal 
                                isOpen={this.state.modalIsOpen}
                                closeModal={this.closeModal} />
                            <Navbar />
                            {this.state.questionsComplete ? 
                                <StartComplete /> :
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
        list: ownProps.location.state ? state.lists.filter(list => list.id === ownProps.location.state.list.id)[0] : null
    }
}

const mapDispatchToProps = dispatch => {
    return {
        startSaveAnswer: (id, index, answer, questionId) => dispatch(actions.startSaveAnswer(id, index, answer, questionId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(StartPage);
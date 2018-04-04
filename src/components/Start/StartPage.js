import React, { Component } from "react";
import { connect } from "react-redux";
 
import * as actions from "../../store/actions/actions";
import Navbar from "../UI/navbarLoggedIn";
import StartGrid from "./startGrid";
import StartComplete from "./startComplete";
import Footer from "../UI/footer";

export class StartPage extends Component {
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
                        questions={this.props.list.questions}
                        id={this.props.list.id}
                        startSaveAnswer={this.props.startSaveAnswer}
                    />
                }
                <Footer />
            </div>
        )
    } 
}

// questions={this.props.location.state.list.questions}
// id={this.props.location.state.list.id}


const mapStateToProps = (state, ownProps) => {
    return {
        list: state.lists.filter(list => list.id === ownProps.location.state.list.id)[0]
    }
}

const mapDispatchToProps = dispatch => {
    return {
        startSaveAnswer: (id, index, answer) => dispatch(actions.saveAnswer(id, index, answer))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(StartPage);
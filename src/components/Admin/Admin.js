import React, { Component } from "react";
import { connect } from "react-redux";
import uuid from "uuid/v1";

import * as actions from "../../store/actions/search";
import Navbar from "../UI/navbarLoggedIn";


class Admin extends Component {
    state = {
        title: "",
        tag: "",
        questions: {},
        questionsArr: []
    }

    handleSaveTitle = () => {
        if (this.refs.title.value.length > 1) {
            this.setState({
                title: this.refs.title.value
            });
        }
    }

    handleSaveTag = () => {
        if (this.refs.tag.value.length > 1) {
            this.setState({
                tag: this.refs.tag.value
            });
        }
    }

    handleSaveQuestion = () => {
        // instead of saving an array
        // save an obj with unique keys for each question
        // will make it easier to intergrate with fb
        // and other actions
        if (this.refs.questions.value.length > 1) {
            const key = "a" + uuid();
            this.setState({
                questionsArr: [...this.state.questionsArr, this.refs.questions.value],
                questions: {
                    [key]: {
                        question: this.refs.questions.value
                    },
                    ...this.state.questions
                }
            });
            this.refs.questions.value = "";
        }
    }

    handleStartSaveSearchList = () => {
        const searchList = {
            title: this.state.title,
            tag: this.state.tag,
            list: {
                title: this.state.title,
                questions: this.state.questions
            }
        }
        this.props.startSaveSearchList(searchList);
        alert("list saved");
        console.log(searchList);
    }

    render() {
        return (
            <div>
                <Navbar />
                <div className="container adminSearchPage">
                    <h1>Admin Search List Page</h1>
                    <input type="text" ref="title" />
                    <button onClick={this.handleSaveTitle} className="btn">Save Title</button>

                    <input type="text" ref="tag" />
                    <button onClick={this.handleSaveTag} className="btn">Save Tag</button>

                    <input type="text" ref="questions" />
                    <button onClick={this.handleSaveQuestion} className="btn">Save Question</button>

                    <div>
                        <h1>Preview</h1>
                        <div>
                            <h2>{this.state.title}</h2>
                            <p>{this.state.tag}</p>
                            {this.state.questionsArr.map((q => <p key={q}>{q}</p>))}
                        </div>
                        
                        <button onClick={this.handleStartSaveSearchList} className="btn">Save List</button>
                    </div>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        startSaveSearchList: (searchList) => dispatch(actions.startSaveSearchList(searchList))
    }
}



export default connect(null, mapDispatchToProps)(Admin);
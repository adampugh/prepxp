import React, { Component } from "react";
import Modal from "react-modal";

import Navbar from "../UI/navbarLoggedIn";
import DashboardGrid from "./DashboardGrid";

import Footer from "../UI/footer";

class Dashboard extends Component {
    state = {
        name: "Bob",
        lists: [
            {
                title: "JavaScript Developer",
                questions: [
                    {
                        question: "What is the difference between let and var?",
                        answer: "JavaScript is a language for the web."
                    },
                    {
                        question: "Who created JavaScript?",
                        answer: "Brendan Eich"
                    }
                ]
            },
            {
                title: "PHP Developer",
                questions: [
                    {
                        question: "What is PHP exactly?",
                        answer: "No-one really knows."
                    }
                ]
            }
        ],
        modalIsOpen: false
    }

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    closeModal = () => {
        this.setState({
            modalIsOpen: false
        })
    }

    openModal = () => {
        this.setState({
            modalIsOpen: true
        })
    }

    render() {
        return (
            <div>
                <Modal 
                    isOpen={this.state.modalIsOpen}
                    onRequestClose={this.closeModal}
                />
                <Navbar />
                <DashboardGrid 
                    name={this.state.name} 
                    lists={this.state.lists}
                    openModal={this.openModal}
                    closeModal={this.closeModal} />
                <Footer />
            </div>
        );
    }
}

export default Dashboard;
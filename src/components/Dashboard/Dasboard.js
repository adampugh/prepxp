import React, { Component } from "react";
import { connect } from "react-redux";

import Navbar from "../UI/navbarLoggedIn";
import DashboardGrid from "./DashboardGrid";
import DashboardDeleteModal from "./dashboardDeleteModal";
import Footer from "../UI/footer";

export class Dashboard extends Component {
    state = {
        deleteModalIsOpen: false
    }

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    closeModal = () => {
        this.setState({
            deleteModalIsOpen: false
        })
    }

    openModal = () => {
        this.setState({
            deleteModalIsOpen: true
        })
    }

    render() {
        return (
            <div>
                <DashboardDeleteModal
                    isOpen={this.state.deleteModalIsOpen}
                    closeModal={this.closeModal}
                />
                <Navbar />
                <DashboardGrid 
                    name={this.props.name} 
                    lists={this.props.lists}
                    openModal={this.openModal}
                    closeModal={this.closeModal} />
                <Footer />
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        name: state.name,
        lists: state.lists
    }
}

export default connect(mapStateToProps)(Dashboard);
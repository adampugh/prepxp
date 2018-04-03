import React, { Component } from "react";
import { connect } from "react-redux";


import * as actions from "../../store/actions/actions";
import Navbar from "../UI/navbarLoggedIn";
import DashboardBanner from "./dashboardBanner";
import DashboardGrid from "./DashboardGrid";
import DashboardDeleteModal from "./dashboardDeleteModal";
import DashboardCreateModal from "./dashboardCreateModal";
import Footer from "../UI/footer";

export class Dashboard extends Component {
    state = {
        deleteModalIsOpen: false,
        createModalIsOpen: false,
        selectedListId: ""
    }

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    selectList = (id) => {
        this.setState({
            selectedListId: id
        });
    }

    closeDeleteModal = () => {
        this.setState({
            deleteModalIsOpen: false
        })
    }

    openDeleteModal = () => {
        this.setState({
            deleteModalIsOpen: true
        })
    }

    closeCreateModal = () => {
        this.setState({
            createModalIsOpen: false
        })
    }

    openCreateModal = () => {
        this.setState({
            createModalIsOpen: true
        })
    }

    render() {
        return (
            <div>
                <DashboardDeleteModal
                    isOpen={this.state.deleteModalIsOpen}
                    closeModal={this.closeDeleteModal}
                    startDeleteList={this.props.startDeleteList}
                    selectedListId={this.state.selectedListId}
                />
                <DashboardCreateModal
                    isOpen={this.state.createModalIsOpen}
                    closeModal={this.closeCreateModal}
                    startAddList={this.props.startAddList}
                />
                <Navbar />
                <DashboardBanner 
                    openCreateModal={this.openCreateModal}
                />
                <DashboardGrid 
                    name={this.props.name} 
                    lists={this.props.lists}
                    openDeleteModal={this.openDeleteModal}
                    closeDeleteModal={this.closeDeleteModal} 
                    openCreateModal={this.openCreateModal}
                    closeCreateModal={this.closeCreateModal} 
                    selectList={this.selectList} 
                />
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

const mapDispatchToProps = dispatch => {
    return {
        startAddList: (list) => dispatch(actions.addList(list)),
        startDeleteList: (id) => dispatch(actions.deleteList(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
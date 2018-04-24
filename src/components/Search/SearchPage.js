import React, { Component } from "react";
import { connect } from "react-redux";

import Navbar from "../UI/navbarLoggedIn";
import Footer from "../UI/footer";
import SearchBanner from "./searchBanner";
import SearchGrid from "./searchGrid";
import SearchAddedListModal from "./searchAddedListModal";

import * as searchActions from "../../store/actions/search";
import * as actions from "../../store/actions/actions";

class SearchPage extends Component {
    state = {
        modalIsOpen: false,
        loading: true
    }

    componentDidMount() {
        window.scrollTo(0, 0);
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

    handleAddSearchList = (list) => {
        this.setState({
            loading: true
        })
        this.openModal();
        this.props.addSearchList(list).then(() => {
            return this.props.startFetchLists();
        }).then(() => {
            this.setState({
                loading: false
            })
            setTimeout(() => {
                this.closeModal();
            }, 3000);
        });
    }


    render() {
        return (
            <div>
                <SearchAddedListModal 
                    isOpen={this.state.modalIsOpen}
                    closeModal={this.closeModal} 
                    loading={this.state.loading} />
                <Navbar />
                <SearchBanner />
                <SearchGrid 
                    searchLists={this.props.searchLists} 
                    handleAddSearchList={this.handleAddSearchList} />
                <Footer />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        searchLists: state.searchReducer.searchList,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addSearchList: (list) => dispatch(searchActions.addSearchList(list)),
        startFetchLists: () => dispatch(actions.startFetchLists())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchPage);
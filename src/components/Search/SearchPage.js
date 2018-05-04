import React, { Component } from "react";
import { connect } from "react-redux";

import Navbar from "../UI/navbarLoggedIn";
import Footer from "../UI/footer";
import SearchBanner from "./searchBanner";
import SearchContent from "./searchContent";
import SearchAddedListModal from "./searchAddedListModal";

import * as searchActions from "../../store/actions/search";
import * as actions from "../../store/actions/actions";

export class SearchPage extends Component {
    state = {
        modalIsOpen: false,
        loading: true,
        filteredList: []
    }

    componentDidMount() {
        window.scrollTo(0, 0);
        this.clearFilter();
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

    filterByTag = (tag) => {
        let filteredList = this.props.searchLists.filter(list => list.tag === tag);
        this.setState({
            filteredList
        });
    }

    filterByText = (text) => {
        let filteredList = this.props.searchLists.filter(list => list.title.toLowerCase().includes(text));
        this.setState({
            filteredList
        })
    }

    clearFilter = () => {
        this.setState({
            filteredList: this.props.searchLists
        });
    }


    handleAddSearchList = (list) => {
        // show spinner to user while list is added
        this.setState({
            loading: true
        })
        this.openModal();
        // add list to fb and return promise
        this.props.addSearchList(list).then(() => {
            return this.props.startFetchLists();
        }).then(() => {
            // show confirmation to user when promise is returned
            this.setState({
                loading: false
            })
            setTimeout(() => {
                this.closeModal();
            }, 1000);
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
                <SearchBanner 
                    filterByText={this.filterByText} />
                <SearchContent 
                    searchLists={this.props.searchLists} 
                    filteredList={this.state.filteredList}
                    filterByTag={this.filterByTag}
                    clearFilter={this.clearFilter}
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
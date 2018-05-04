import React, { Component } from "react";

class SearchBanner extends Component {
    handleOnChange = (e) => {
        this.props.filterByText(e.target.value.toLowerCase());
    }


    render() {
        return (
            <div className="searchBanner__wrapper">
                <div className="container-s searchBanner__content">
                    <h1>Search lists</h1>
                    <div className="searchBanner__content__searchBar">
                        <input type="text" placeholder="Back-End Developer" onChange={(e) => this.handleOnChange(e)}/>
                        <button className="btn"><i className="fas fa-search"></i> Search  </button>
                    </div>
                </div>
                <div className="searchBanner__whiteElipse"></div>
            </div>
        )
    }
}

export default SearchBanner;

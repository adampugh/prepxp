import React, { Component } from "react";

class SearchBanner extends Component {
    render() {
        return (
            <div className="searchBanner__wrapper">
                <div className="container-s">
                    <h1>Search lists</h1>
                    <p>Search job titles for curated lists of interview questions.
                    Click the + symbol to add to your own lists and practise on your 
                    dashboard.</p>
                    <input type="text" placeholder="Back-End Developer"/>
                    <button className="btn">Search</button>
                </div>
            </div>
        )
    }
}

export default SearchBanner;
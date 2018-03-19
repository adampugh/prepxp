import React, { Component } from "react";

import Navbar from "../UI/navbarLoggedIn";
import Footer from "../UI/footer";
import SearchBanner from "./searchBanner";
import SearchGrid from "./searchGrid";

class SearchPage extends Component {
    state = {
        filteredLists: [
            {
                title: "Angular Developer",
                questions: [1, 2, 3, 4]
            }, {
                title: "Node JS Developer",
                questions: [1, 2, 5]
            }, {
                title: "General Interview Questions 1",
                questions: [1,1,1,1,1,1,1]
            }
        ]
    }


    render() {
        return (
            <div>
                <Navbar />
                <SearchBanner />
                <SearchGrid filteredLists={this.state.filteredLists}/>
                <Footer />
            </div>
        )
    }
}

export default SearchPage;
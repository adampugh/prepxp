import React, { Component } from "react";

class SearchSidebar extends Component {
    state = {
        numOfLists: {},
        tagsArr: []
    }

    componentWillMount() {
        this.getNumOfLists();     
    }

    getNumOfLists = () => {
        // creates object with list totals by sector e.g. {sales: 3, health: 4}
        let numOfLists = {}
        this.props.searchLists.forEach(list => {
            numOfLists[list.tag] === undefined 
                ? numOfLists[list.tag] = 1
                : numOfLists[list.tag] += 1;
        });
        this.setState({
            numOfLists
        })
        this.getListTags(numOfLists);
    }

    getListTags = (obj) => {
        // creates an arr of tags e.g. ["health", "sales"]
        let tagsArr = [];
        for (let key in obj) {
            tagsArr.push(key);
        }
        this.setState({
            tagsArr
        });
    }

    render() {
        let icons = {
            Tech: "fas fa-mobile-alt",
            Sales: "fas fa-suitcase",
            Construction: "fas fa-building",
            Transport: "fas fa-truck",
            HR: "fas fa-users",
            Finance: "fas fa-dollar-sign",
            General: "fas fa-plus"
        }

        return (
            <div className="search__sidebar__container">
                <div className="search__sidebar">
                    <h1>Sector</h1>
                    <hr />
                    {this.state.tagsArr.map(tag => (
                        <div key={tag} className="search__sidebar__item" onClick={() => this.props.filterByTag(tag)}>
                            <h2><i className={icons[tag]}></i></h2>
                            <div>
                                <h2>{tag}</h2><p>{`(${this.state.numOfLists[tag]})`}</p>
                            </div>
                        </div>
                    ))}
                    <hr />
                    <div className="search__sidebar__item" onClick={this.props.clearFilter}>
                        <h2><i className="fas fa-times"></i></h2><h2> Clear filter</h2>
                    </div>
                </div>
            </div>
        )
    }
}

export default SearchSidebar;

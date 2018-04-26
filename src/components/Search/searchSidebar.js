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
        // creates object with list totals by sector
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
                            <h2><i className={icons[tag]}></i> {tag}</h2><p>{`(${this.state.numOfLists[tag]})`}</p>
                        </div>
                    ))}
                    <hr />
                    <div className="search__sidebar__item" onClick={this.props.clearFilter}>
                        <h2><i class="fas fa-times"></i> Clear filter</h2>
                    </div>
                </div>
            </div>
        )
    }
}

export default SearchSidebar;



// <div className="search__sidebar__item">
// <h2>General</h2><p>{`(${this.state.numOfLists.general})`}</p>
// </div>
// <div className="search__sidebar__item">
// <h2>Tech</h2><p>{`(${this.state.numOfLists.tech})`}</p>
// </div>
// <div className="search__sidebar__item">
// <h2>Sales</h2><p>{`(${this.state.numOfLists.sales})`}</p>
// </div>
// <div className="search__sidebar__item">
// <h2>Construction</h2><p>{`(${this.state.numOfLists.construction})`}</p>
// </div>
// <div className="search__sidebar__item">
// <h2>Human Resources</h2><p>{`(${this.state.numOfLists.humanResources})`}</p>
// </div>
// <div className="search__sidebar__item">
// <h2>Transport</h2><p>{`(${this.state.numOfLists.transport})`}</p>
// </div>
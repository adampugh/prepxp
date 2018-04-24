import React, { Component } from "react";

class SearchSidebar extends Component {
    state = {
        general: 0,
        tech: 0,
        sales: 0,
        construction: 0,
        humanResources: 0,
        transport: 0
    }

    // work out total fn
    // filter each searchList item and return total - then set the state


    componentDidMount() {
        this.props.searchLists.map(list => {
            console.log(list.tag);
            this.setState({
                [list.tag]: this.state[list.tag] + 1
            });
        })
    }

    render() {
        return (
            <div className="search__sidebar">
                <h2>{`General (${this.state.general})`}</h2>
                <h2>{`Tech (${this.state.tech})`}</h2>
                <h2>{`Sales (${this.state.sales})`}</h2>
                <h2>{`Contruction (${this.state.construction})`}</h2>
                <h2>{`Human Resources (${this.state.humanResources})`}</h2>
                <h2>{`Transport (${this.state.transport})`}</h2>
            </div>
        )
    }
}

export default SearchSidebar;
import React, { Component } from "react";

import DashboardSidebar from "./DashboardSidebar";
import DashboardList from "./dashboardList";

class DashboardGrid extends Component {
    render(props) {
        return (
            <section className="container">
                <div className="dashboard__grid">
                    <DashboardSidebar />
                    <div className="dashboard__grid__lists">
                        <h1>Hello, {this.props.name}!</h1>
                        {this.props.lists.length > 0 ? this.props.lists.map((list, index) => <DashboardList key={`${list.title + index}`} list={list} />)
                            : 
                            <div className="dashboard__empty">
                                <h2>You don't have any lists yet, add or create some!</h2>
                                <button className="btn">Lists</button>
                            </div> 
                        }
                    </div>
                </div>
            </section>
        );
    }
}

export default DashboardGrid;
import React, { Component } from "react";
import { Link } from "react-router-dom";

import DashboardSidebar from "./DashboardSidebar";
import DashboardList from "./dashboardList";

class DashboardGrid extends Component {
    render(props) {
        return (
            <div className="dashboard__wrapper">
                <section className="container">
                    <div className="dashboard__grid">
                        <DashboardSidebar 
                            openCreateModal={this.props.openCreateModal}
                            closeCreateModal={this.props.closeCreateModal}
                        />
                        <div className="dashboard__grid__lists">
                            <h1>Hello, {this.props.name}!</h1>
                            {this.props.lists.length > 0 ? 
                                this.props.lists.map((list, index) => <DashboardList 
                                    key={`${list.title + index}`} 
                                    id={list.id}
                                    listIndex={index}
                                    list={list}
                                    openModal={this.props.openDeleteModal}
                                    closeModal={this.props.closeDeleteModal} 
                                    selectList={this.props.selectList} />)
                                : 
                                <div className="dashboard__empty">
                                    <h2>You don't have any lists yet, search and add or create a list!</h2>
                                    <button 
                                        className="btn"
                                        onClick={this.props.openCreateModal} >Create</button>
                                    <Link to="/search">
                                        <button className="btn">Search</button>
                                    </Link>
                                </div> 
                            }
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default DashboardGrid;
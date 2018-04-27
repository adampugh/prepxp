import React, { Component } from "react";
import { Link } from "react-router-dom";

import DashboardSidebar from "./DashboardSidebar";
import DashboardList from "./dashboardList";

class DashboardGrid extends Component {
    render(props) {
        return (
            <div className="dashboard__wrapper">
                <section className="">
                    <div className="dashboard__grid">
                        <DashboardSidebar 
                            openCreateModal={this.props.openCreateModal}
                            closeCreateModal={this.props.closeCreateModal}
                            name={this.props.name}
                            startLogout={this.props.startLogout}
                        />
                        <div>
                            <div className="dashboard__grid__panel">
                                <div className="dashboard__grid__panel__box">
                                    <div>
                                        <h2>Total Answered</h2>
                                        <p>231/232</p>
                                    </div>
                                    <div>
                                        <h2>Total Lists</h2>
                                        <p>6/8</p>
                                    </div>
                                    <div className="dashboard__grid__panel__box__mostCompleted">
                                        <h2>Most Completed</h2>
                                        <p>1. PHP Developer</p>
                                        <p>2. IT Manager</p>
                                        <p>3. General Questions</p>
                                    </div>
                                </div>
                            
                            </div>


                            <div className="dashboard__grid__lists">
                                
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
                    </div>
                </section>
            </div>
        );
    }
}

export default DashboardGrid;
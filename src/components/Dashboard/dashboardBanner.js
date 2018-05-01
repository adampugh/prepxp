import React from "react";

 
const dashboardBanner = (props) => (
    <section className="dashboard__banner">
        <div className="container">
            <p>Create a new list of interview questions</p>
            <button className="btn" onClick={props.openCreateModal}>Create</button>
            
        </div>
    </section>
);

export default dashboardBanner;
import React from "react";

const dashboardList = (props) => (
    <div className="dashboard__grid__lists__item">
        <div>
            <h2>{props.list.title}</h2>
            <p>{props.list.questions.length} Questions</p>
        </div>
        <div>
            <h2><i className="fas fa-edit"></i></h2>
            <h2 onClick={props.openModal}><i className="fas fa-trash-alt"></i></h2>
        </div>
    </div>
);

export default dashboardList;
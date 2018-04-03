import React from "react";
import { Link } from "react-router-dom";

const dashboardList = (props) => (
    <div className="dashboard__grid__lists__item">
        <div>
            <Link to={{pathname:"/list/start", state: {list: props.list}}}>
                <h2>{props.list.title}</h2>
            </Link>
            <p>{props.list.questions.length} Questions</p>
        </div>
        <div>
            <Link to={{pathname:"/list/edit", state: {list: props.list, listIndex: props.listIndex}}}>
                <h2><i className="fas fa-edit"></i></h2>
            </Link>
            <h2 onClick={() => {
                props.selectList(props.id);
                props.openModal();
            }}><i className="fas fa-trash-alt"></i></h2>
        </div>
    </div>
);

export default dashboardList;
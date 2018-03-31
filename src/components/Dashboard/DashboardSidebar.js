import React from "react";
import { Link } from "react-router-dom";

import desk from "../../assets/images/deskimg.png";

const dashboardSidebar = () => (
    <div className="sidebar">
        <img src={desk} alt="man sitting at a desk" />
        <div className="sidebar__panel">
            
            <p>Create a new list of interview questions</p>
            <Link to="/list/edit">
                <button className="btn">Create</button>
            </Link>
        </div>
        <div className="sidebar__panel">
            <img src={desk} alt="man sitting at a desk" />
            <p>Add a list of interview questions for our seleted lists</p>
            <Link to="/search">
                <button className="btn">Lists</button>
            </Link>
        </div>
        <div className="sidebar__panel">
            <img src={desk} alt="man sitting at a desk" />
            <p>Read the latest tips and get the job you deserve</p>
            <Link to="/blog">
                <button className="btn">Blog</button>
            </Link>
        </div>
    </div>
);

export default dashboardSidebar;
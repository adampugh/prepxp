import React from "react";

import desk from "../../assets/images/deskimg.png";

const dashboardSidebar = () => (
    <div className="sidebar">
        <img src={desk} alt="man sitting at a desk" />
        <div className="sidebar__panel">
            
            <p>Create a new list of interview questions</p>
            <button className="btn">Create</button>
        </div>
        <div className="sidebar__panel">
            <img src={desk} alt="man sitting at a desk" />
            <p>Add a list of interview questions for our seleted lists</p>
            <button className="btn">Lists</button>
        </div>
        <div className="sidebar__panel">
            <img src={desk} alt="man sitting at a desk" />
            <p>Read the latest tips and get the job you deserve</p>
            <button className="btn">Blog</button>
        </div>
    </div>
);

export default dashboardSidebar;
import React from "react";
import { Link } from "react-router-dom";

import user from "../../assets/images/default-user-image.png";

const dashboardSidebar = (props) => (
    <div className="sidebar">
        <div className="sidebar__img">
            <img src={user} alt="default user" />
            <h1>{props.name}</h1>
            <hr />
        </div>
        <div className="sidebar__grid">
            <h2><i className="fas fa-tachometer-alt"></i></h2>
            <Link to="/dashboard"><h2 className="sidebar__grid__link">Dashboard</h2></Link>
            <h2><i className="fas fa-pencil-alt"></i></h2>
            <h2 onClick={props.openCreateModal} className="sidebar__grid__link">Create</h2>
            <h2><i className="fas fa-search"></i></h2>
            <Link to="/search"><h2 className="sidebar__grid__link">Search</h2></Link>
            <h2><i className="fas fa-book"></i></h2>
            <Link to="/blog"><h2 className="sidebar__grid__link">Blog</h2></Link>
            <h2><i className="fas fa-user"></i></h2>
            <h2 onClick={props.startLogout} className="sidebar__grid__link">Logout</h2>
        </div>
        
    </div>
);

export default dashboardSidebar;



// <img src={desk} alt="man sitting at a desk" />
// <div className="sidebar__panel">
//     <p>Create a new list of interview questions</p>
//     <button onClick={props.openCreateModal} className="btn">Create</button>
// </div>
// <div className="sidebar__panel">
//     <img src={desk} alt="man sitting at a desk" />
//     <p>Add a list of interview questions for our seleted lists</p>
//     <Link to="/search">
//         <button className="btn">Search</button>
//     </Link>
// </div>
// <div className="sidebar__panel">
//     <img src={desk} alt="man sitting at a desk" />
//     <p>Read the latest tips and get the job you deserve</p>
//     <Link to="/blog">
//         <button className="btn">Blog</button>
//     </Link>
// </div>
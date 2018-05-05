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
            <Link to="/prepxp/dashboard"><h2 className="sidebar__grid__link">Dashboard</h2></Link>
            <h2><i className="fas fa-pencil-alt"></i></h2>
            <h2 onClick={props.openCreateModal} className="sidebar__grid__link">Create</h2>
            <h2><i className="fas fa-search"></i></h2>
            <Link to="/prepxp/search"><h2 className="sidebar__grid__link">Search</h2></Link>
            <h2><i className="fas fa-book"></i></h2>
            <Link to="/prepxp/blog"><h2 className="sidebar__grid__link">Blog</h2></Link>
            <h2><i className="fas fa-sign-out-alt"></i></h2>
            <h2 onClick={props.startLogout} className="sidebar__grid__link">Logout</h2>
        </div>
        
    </div>
);

export default dashboardSidebar;
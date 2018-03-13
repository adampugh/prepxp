import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
    state = {
        drawerOpen: false
    }

    openDrawer = () => {
        if (!this.state.drawerOpen === true) {
            document.getElementsByTagName("body")[0].setAttribute("style", "position:fixed;");
        } else {
            document.getElementsByTagName("body")[0].setAttribute("style", "position:absolute;");
        }
        this.setState({
            drawerOpen: !this.state.drawerOpen,
        });
        
    }

    render() {
        return (
            <div>
                <div id="drawer" className={this.state.drawerOpen ? 'slideIn' : 'slideOut'}>
                    <Link to="/dashboard"><h1>Dashboard</h1></Link>
                    <h1>Create</h1>
                    <h1>Lists</h1>
                    <h1>Blog</h1>
                    <h1>Logout</h1>
                    <p>
                        <i className="fab fa-twitter"></i>
                        <i className="fab fa-facebook-f"></i>
                        <i className="fab fa-youtube"></i>
                    </p>
                </div>
                <div className="navbar__loggedIn">
                    <div className="container-l"> 
                        <div className="navbar__loggedIn__div">
                            <h1 className="logo">PrepXP</h1>
                            <h1 onClick={this.openDrawer}>☰</h1>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};

export default Navbar;
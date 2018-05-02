import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import * as authActions from "../../store/actions/auth";

export class Navbar extends Component {
    state = {
        drawerOpen: false,
        transparentBg: false
    }

    componentDidMount() {
        document.addEventListener('scroll', () => {
            const transparentBg = window.scrollY > 81
            if (transparentBg !== this.state.transparentBg) {
                this.setState({ transparentBg });
            }
        });
    }

    openDrawer = () => {
        this.setState({
            drawerOpen: !this.state.drawerOpen,
        });
    }

    


    render() {
        return (
            <div>
                <div id="drawer" className={this.state.drawerOpen ? 'slideIn' : 'slideOut'}>
                    <Link to="/dashboard"><h1>Dashboard</h1></Link>
                    <Link to="/search"><h1>Search</h1></Link>
                    <Link to="/blog"><h1>Blog</h1></Link>
                    <h1 onClick={this.props.startLogout}>Logout</h1>
                    <p>
                        <i className="fab fa-twitter"></i>
                        <i className="fab fa-facebook-f"></i>
                        <i className="fab fa-youtube"></i>
                    </p>
                </div>
                <div className={`navbar__loggedIn ${ this.state.transparentBg ? "navbar__loggedIn--transparent" : ""}`}>
                    <div className="container-l"> 
                        <div className="navbar__loggedIn__div--mobile">
                            <h1 className="logo">PrepXP</h1>
                            <h1 onClick={this.openDrawer}>☰</h1>
                        </div>
                        <div className="navbar__loggedIn__div--desktop">
                            <h1 className="logo">PrepXP</h1>
                            <ul>
                                <Link to="/dashboard"><li>Dashboard</li></Link>
                                <span>•</span>
                                <Link to="/search"><li>Search</li></Link>
                                <span>•</span>
                                <Link to="/blog"><li>Blog</li></Link>
                            </ul>
                            <button onClick={this.props.startLogout} className="btn btn--black"><i className="fas fa-sign-out-alt"></i> Logout</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};

const mapDispatchToProps = dispatch => {
    return {
        startLogout: () => dispatch(authActions.startLogout())
    }
}


export default connect(null, mapDispatchToProps)(Navbar);
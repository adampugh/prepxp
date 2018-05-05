import React, { Component } from "react";
import { Link } from "react-router-dom";
import isMobile from "is-mobile";


class Navbar extends Component {
    state = {
        isOnWhite: false,
        onMobile: false,
        drawerOpen: false,
        hamburgerIconWhite: false
    }
    
    componentDidMount() {
        const onMobile = isMobile();
        this.setState({
            onMobile: onMobile
        });

        if (onMobile === false) {
            document.addEventListener('scroll', () => {
                const isOnWhite = window.scrollY > 1381 && window.scrollY < 2650;
                if (isOnWhite !== this.state.isOnWhite) {
                    this.setState({ isOnWhite });
                }
            });
        } else {
            document.addEventListener('scroll', () => {
                const isOnWhite = window.scrollY > 2000 && window.scrollY < 4500;
                if (isOnWhite !== this.state.isOnWhite) {
                    this.setState({ isOnWhite });
                }
            });
        }
    }

    openDrawer = () => {
        this.setState({
            drawerOpen: !this.state.drawerOpen,
            hamburgerIconWhite: !this.state.hamburgerIconWhite
        });
    }

    render() {
        return (
            <div>
                <div id="drawer" className={this.state.drawerOpen ? 'slideIn' : 'slideOut'}>
                    <Link to="/prepxp/dashboard"><h1>Home</h1></Link>
                    <Link to="/prepxp/"><h1>About</h1></Link>
                    <Link to="/prepxp/blog"><h1>Blog</h1></Link>
                    <Link to="/prepxp/login"><h1>Login</h1></Link>
                    <p>
                        <i className="fab fa-twitter"></i>
                        <i className="fab fa-facebook-f"></i>
                        <i className="fab fa-youtube"></i>
                    </p>
                </div>
                <div className="navbar">
                    <div className="container-l"> 
                        <div className={this.state.isOnWhite ? "navbar__loggedOut navbar__loggedOut--black" : "navbar__loggedOut"}>
                            <h1 className={this.state.onMobile && this.state.hamburgerIconWhite ? "logo navbar__white" : "logo"}>PrepXP</h1>
                            <h1 onClick={this.openDrawer} 
                                className={this.state.hamburgerIconWhite ? "navbar__white" : ""}>
                                ☰
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Navbar;
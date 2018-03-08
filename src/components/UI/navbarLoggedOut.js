import React, { Component } from "react";

// add modal in ui for menu - might need loggedin / not logged in versions

class Navbar extends Component {
    render() {
        return (
            <div className="navbar">
                <div className="container"> 
                    <div className="navbar__loggedOut">
                    
                        <h1>PrepXP</h1>
                        <h1>☰</h1>
                    </div>
                </div>
            </div>
        )
    }
}

export default Navbar;
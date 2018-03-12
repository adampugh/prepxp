import React, { Component } from "react";

import Footer from "../UI/footer";

class Login extends Component {
    componentDidMount () {
        window.scrollTo(0, 0);
    }


    render() {
        return (
            <div>
            <div className="login">
                <h1 className="logo">PrepXP</h1>
                <div className="login__box">
                    <h2>Log in to your account</h2>
                    <div className="login__box__input">
                        <input type="email" placeholder="email"/>
                        <i className="fas fa-user"></i>
                    </div>
                    <div className="login__box__input">
                        <input type="password" placeholder="password" />
                        <i className="fas fa-lock"></i>
                    </div>
                    <button className="btn">Log In</button>
                </div>
                <div className="login__bottomBox">
                    <p>New to PrepXP? Sign up</p>
                </div>
            </div>
            <Footer />
        </div>
            
        )
    }
}

export default Login;
import React, { Component } from "react";

class loginBox extends Component {
    state = {
        error: false, 
        errorMessage: ""
    }

    handleLogin = () => {
        const email = this.refs.emailLogin.value;
        const password = this.refs.passwordLogin.value;

        // validate user input
        if (!this.props.validateEmail(email)) {
            this.setState({
                error: true,
                errorMessage: "Please enter a valid email address"
            })
        } else if (password.length < 6) {
            this.setState({
                error: true,
                errorMessage: "Please enter a password with more than 6 characters"
            })
        } else {
            this.props.startLogin(email, password)
            .catch((e) => {
                this.setState({
                    error: true,
                    errorMessage: e.message
                })
            })
        } 
    }

    render() {
        return (
            <div>
                <div className="login__box">
                    <h2>Log in to your account</h2>
                    <p className="error">{this.state.error ? this.state.errorMessage : null}</p>
                    <div className="login__box__input">
                        <input type="email" placeholder="email" ref="emailLogin"/>
                        <i className="fas fa-envelope"></i>
                    </div>
                    <div className="login__box__input">
                        <input type="password" placeholder="password" ref="passwordLogin" />
                        <i className="fas fa-lock"></i>
                    </div>
                    <button 
                        onClick={this.handleLogin}
                        className="btn">Log In</button>
                </div>
                <div className="login__bottomBox">
                    <p>New to PrepXP? <span onClick={this.props.switchToLogin}>Sign up</span></p>
                </div>
            </div>
        );
    }
}

export default loginBox;
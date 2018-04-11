import React, { Component } from "react";

class loginBox extends Component {
    state = {
        error: false
    }

    handleLogin = () => {
        const email = this.refs.emailLogin.value;
        const password = this.refs.passwordLogin.value;
        this.props.startLogin(email, password)
            .catch((e) => {
                this.setState({
                    error: true
                })
            })
    }

    render() {
        return (
            <div>
                <div className="login__box">
                    <h2>Log in to your account</h2>
                    <p>{this.state.error ? "Sorry there was an error" : null}</p>
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
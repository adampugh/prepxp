import React, { Component } from "react";

class signupBox extends Component {
    state = {
        error: false,
        errorMessage: ""
    }

    handleStartSignUp = () => {
        const name = this.refs.nameInput.value;
        const email = this.refs.emailInput.value;
        const password = this.refs.passwordInput.value;

        // validate user input
        if (name.length < 1) {
            this.setState({
                error: true,
                errorMessage: "Please enter a name"
            });
        } else if (!this.props.validateEmail(email)) {
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
            this.props.startSignUp(email, password, name).catch((e) => {
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
                    <h2>Sign up for an account</h2>
                    <p className="error">{this.state.error ? this.state.errorMessage : null}</p>
                    <div className="login__box__input">
                        <input type="text" placeholder="name" ref="nameInput"/>
                        <i className="fas fa-user"></i>
                    </div>
                    <div className="login__box__input">
                        <input type="email" placeholder="email" ref="emailInput"/>
                        <i className="fas fa-envelope"></i>
                    </div>
                    <div className="login__box__input">
                        <input type="password" placeholder="password" ref="passwordInput"/>
                        <i className="fas fa-lock"></i>
                    </div>
                    <button
                        onClick={this.handleStartSignUp} 
                        className="btn">
                            Sign Up
                    </button>
                </div>
                <div className="login__bottomBox">
                    <p>Already have an account? <span onClick={this.props.switchToLogin}>Log in</span></p>
                </div>
            </div>
        );
    }
} 

export default signupBox;
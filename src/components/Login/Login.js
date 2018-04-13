import React, { Component } from "react";
import { connect } from "react-redux";

import LoginBox from "./loginBox";
import SignupBox from "./signupBox";
import Footer from "../UI/footer";
import * as actions from "../../store/actions/auth";

export class Login extends Component {
    state = {
        login: true
    }

    componentDidMount () {
        window.scrollTo(0, 0);
    }

    switchToLogin = () => {
        this.setState({
            login: !this.state.login
        });
    }

    validateEmail = (email) => {
        var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    render() {
        return (
            <div>
            <div className="login">
                <h1 className="logo">PrepXP</h1>
                {this.state.login 
                    ? <LoginBox 
                        switchToLogin={this.switchToLogin}
                        startLogin={this.props.startLogin} 
                        validateEmail={this.validateEmail} /> 
                    : <SignupBox 
                        switchToLogin={this.switchToLogin} 
                        startSignUp={this.props.startSignUp} 
                        validateEmail={this.validateEmail} />}
            </div>
            <h1 onClick={this.props.startLogout}>Logout</h1>
            <Footer />
        </div>
            
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        startSignUp: (email, password, name) => dispatch(actions.startSignUp(email, password, name)),
        startLogin: (email, password) => dispatch(actions.startLogin(email, password)),
        startLogout: () => dispatch(actions.startLogout())
    }
}

export default connect(null, mapDispatchToProps)(Login);
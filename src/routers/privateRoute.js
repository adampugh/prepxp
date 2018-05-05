import React from "react";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";

export const PrivateRoute = ({ 
    isAuthenticated, 
    component: Component,
    ...rest
}) => (
    <Route {...rest} component={(props) => (
        isAuthenticated ? (
            <Component {...props} />
        ) : (
            <Redirect to="/prexp/login" />
        )
    )} />
);

const mapStateToProps = state => ({
    isAuthenticated: !!state.authReducer.uid
});

export default connect(mapStateToProps)(PrivateRoute);
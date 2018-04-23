import React from "react";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";

export const AdminRoute = ({ 
    isAuthenticated, 
    isAdmin,
    component: Component,
    ...rest
}) => (
    <Route {...rest} component={(props) => (
        isAdmin ? (
            <Component {...props} />
        ) :
            isAuthenticated ? (
                <Redirect to="/dashboard" />
            ) : (
                <Redirect to="/login" />
            )
    )} />
);

const mapStateToProps = state => ({
    isAuthenticated: !!state.authReducer.uid,
    isAdmin: state.reducer.admin
});

export default connect(mapStateToProps)(AdminRoute);
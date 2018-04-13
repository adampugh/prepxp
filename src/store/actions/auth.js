import * as actionTypes from "./actionTypes";
import { firebase } from "../../firebase/firebase";
import database from "../../firebase/firebase";

import history from "../../history";

// SIGN UP
export const startSignUp = (email, password, name) => {
    return (dispatch) => {
        return firebase.auth().createUserWithEmailAndPassword(email, password).then((user) => {
            return dispatch(startSetUsername(name, user.uid)).then(() => {
                history.push({
                    pathname: "/dashboard",
                    state: {
                        name
                    }
                })
            })
            // user.updateProfile({
            //     displayName: name
            // })
            // .then(() => {
            //     history.push({
            //         pathname: "/dashboard",
            //         state: {
            //             name
            //         }
            //     })
            // })
        })
    }
}

// START SET USERNAME
export const startSetUsername = (name, uid) => {
    return (dispatch) => {
        return database.ref(`users/${uid}/name`).set(name)
    }
}




// START LOGIN
export const startLogin = (email, password) => {
    return () => {
        return firebase.auth().signInWithEmailAndPassword(email, password);
    }
}

// LOGIN
export const login = (uid) => ({
    type: actionTypes.LOGIN,
    uid
});

// START LOGOUT
export const startLogout = () => {
    return () => {
        return firebase.auth().signOut();
    };
};

// LOGOUT
export const logout = () => ({
    type: actionTypes.LOGOUT
});
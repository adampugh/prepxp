import * as actionTypes from "./actionTypes";
import { firebase } from "../../firebase/firebase";

// SIGN UP
export const startSignUp = (email, password) => {
    return () => {
        return firebase.auth().createUserWithEmailAndPassword(email, password);
    }
}

// START LOGIN
export const startLogin = (email, password) => {
    return () => {
        return firebase.auth().signInWithEmailAndPassword(email, password);
    }
}

// LOGIN


// START LOGOUT
export const startLogout = () => {
    return () => {
        return firebase.auth().signOut();
    };
};

// LOGOUT
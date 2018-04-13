import React from 'react';
import ReactDOM from 'react-dom';
import thunk from "redux-thunk";
import { Router } from "react-router-dom";
import { createStore, compose, applyMiddleware, combineReducers } from "redux";
import { Provider } from "react-redux";


import "normalize.css";
import "./styles/styles.scss";
import "./firebase/firebase";
import { firebase } from "./firebase/firebase";
 
import App from './App';
import Loader from "./components/UI/loader";
import reducer from "./store/reducers/reducer";
import authReducer from "./store/reducers/auth";
import registerServiceWorker from './registerServiceWorker';
import history from "./history";
import * as actions from "./store/actions/actions";
import * as authActions from "./store/actions/auth";


let composeEnhancers = process.env.NODE_ENV === "production" ? compose : window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const store = createStore(
    combineReducers({reducer, authReducer}), 
    composeEnhancers(applyMiddleware(thunk))
);



const app = (
    <Provider store={store}>
        <Router history={history}>
            <App />
        </Router>
    </Provider>
);


let hasRendered = false;
const renderApp = () => {
    if (!hasRendered) {
        ReactDOM.render(app, document.getElementById('root'));
        registerServiceWorker();
        hasRendered = true;
    }
}


ReactDOM.render(<Loader />, document.getElementById('root'));

store.dispatch(actions.startFetchLists()).then(() => {
    
});



firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        console.log("logged in");
        
        store.dispatch(authActions.login(user.uid));

        // pass displayName
        // store.dispatch(actions.startFetchLists(user.displayName)).then(() => {
        store.dispatch(actions.startFetchLists()).then(() => {
            renderApp();
            // check user is not signing up as authActions will handle redirect
            if (history.location.pathname === "/login" && user.displayName !== null) {
                history.push("/dashboard");
            }
        });
    } else {
        console.log("logged out");
        store.dispatch(authActions.logout());
        renderApp();
        // history.push("/login");
    }
});


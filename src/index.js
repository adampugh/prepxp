import React from 'react';
import ReactDOM from 'react-dom';
import thunk from "redux-thunk";
import { Router } from "react-router-dom";
import { createStore, compose, applyMiddleware } from "redux";
import { Provider } from "react-redux";


import "normalize.css";
import "./styles/styles.scss";
import "./firebase/firebase";
import { firebase } from "./firebase/firebase";
 
import App from './App';
import Loader from "./components/UI/loader";
import reducer from "./store/reducers/reducer";
import registerServiceWorker from './registerServiceWorker';
import history from "./history";
import * as actions from "./store/actions/actions";


let composeEnhancers = process.env.NODE_ENV === "production" ? compose : window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const store = createStore(
    reducer, 
    composeEnhancers(applyMiddleware(thunk))
);



const app = (
    <Provider store={store}>
        <Router history={history}>
            <App />
        </Router>
    </Provider>
);

ReactDOM.render(<Loader />, document.getElementById('root'));

store.dispatch(actions.startFetchLists()).then(() => {
    ReactDOM.render(app, document.getElementById('root'));
});

registerServiceWorker();

firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        console.log(user);
    } else {
        console.log("logged out");
    }
});


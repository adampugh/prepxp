import React from 'react';
import ReactDOM from 'react-dom';
import thunk from "redux-thunk";
import { BrowserRouter } from "react-router-dom";
import { createStore, compose, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import "normalize.css";
import "./styles/styles.scss";

import App from './App';
import reducer from "./store/reducers/reducer";
import registerServiceWorker from './registerServiceWorker';


let composeEnhancers = process.env.NODE_ENV === "production" ? compose : window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    reducer, 
    composeEnhancers(applyMiddleware(thunk))
);



const app = (
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
)

ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();

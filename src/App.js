import React, { Component } from 'react';
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";

class App extends Component {
  render() {
    return (
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/login" exact component={Login} />
        <Redirect to="/" />
      </Switch>
    );
  }
}

export default App;

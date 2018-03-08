import React, { Component } from 'react';
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "./components/Home/Home";

class App extends Component {
  render() {
    return (
      <Switch>
        <Route path="/" exact component={Home} />
        <Redirect to="/" />
      </Switch>
    );
  }
}

export default App;

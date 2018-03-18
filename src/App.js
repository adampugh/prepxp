import React, { Component } from 'react';
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Dashboard from "./components/Dashboard/Dasboard";
import ListPage from "./components/List/ListPage";
import StartPage from "./components/Start/StartPage";
import BlogPage from "./components/Blog/BlogPage";
import SearchPage from "./components/Search/SearchPage";


class App extends Component {
  render() {
    return (
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/login" exact component={Login} />
        <Route path="/dashboard" exact component={Dashboard} />
        <Route path="/list/edit" component={ListPage} />
        <Route path="/list/start" component={StartPage} />
        <Route path="/blog" component={BlogPage} />
        <Route path="/search" component={SearchPage} />
        <Redirect to="/" />
      </Switch>
    );
  }
}

export default App;

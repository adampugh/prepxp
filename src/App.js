import React, { Component } from 'react';
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Dashboard from "./components/Dashboard/Dasboard";
import ListPage from "./components/List/ListPage";
import StartPage from "./components/Start/StartPage";
import BlogPage from "./components/Blog/BlogPage";
import BlogPost from "./components/BlogPost/blogPost";
import SearchPage from "./components/Search/SearchPage";
import PrivateRoute from "./routers/privateRoute";
import PublicRoute from "./routers/publicRoute";

class App extends Component {
  render() {
    return (
      <Switch>
        <Route path="/" exact component={Home} />
        <PublicRoute path="/login" exact component={Login} />
        <PrivateRoute path="/dashboard" exact component={Dashboard} />
        <PrivateRoute path="/list/edit" component={ListPage} />
        <PrivateRoute path="/list/start" component={StartPage} />
        <PrivateRoute path="/blog" exact component={BlogPage} />
        <PrivateRoute path="/blog/:id" component={BlogPost} />
        <PrivateRoute path="/search" component={SearchPage} />
        <Redirect to="/" />
      </Switch>
    );
  }
}

export default App;

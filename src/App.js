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
import AdminPage from "./components/Admin/Admin";
import PrivateRoute from "./routers/privateRoute";
import PublicRoute from "./routers/publicRoute";
import AdminRoute from "./routers/adminRoute";

class App extends Component {
  render() {
    return (
      <Switch>
        <Route path="/prexp/" exact component={Home} />
        <PublicRoute path="/prexp/login" exact component={Login} />
        <PrivateRoute path="/prexp/dashboard" exact component={Dashboard} />
        <PrivateRoute path="/prexp/list/edit" component={ListPage} />
        <PrivateRoute path="/prexp/list/start" component={StartPage} />
        <PrivateRoute path="/prexp/blog" exact component={BlogPage} />
        <PrivateRoute path="/prexp/blog/:id" component={BlogPost} />
        <PrivateRoute path="/prexp/search" component={SearchPage} />
        <AdminRoute path="/prexp/admin" component={AdminPage} />
        <Redirect to="/prexp/" />
      </Switch>
    );
  }
}

export default App;

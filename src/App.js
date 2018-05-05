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
        <Route path="/prepxp/" exact component={Home} />
        <PublicRoute path="/prepxp/login" exact component={Login} />
        <PrivateRoute path="/prepxp/dashboard" exact component={Dashboard} />
        <PrivateRoute path="/prepxp/list/edit" component={ListPage} />
        <PrivateRoute path="/prepxp/list/start" component={StartPage} />
        <PrivateRoute path="/prepxp/blog" exact component={BlogPage} />
        <PrivateRoute path="/prepxp/blog/:id" component={BlogPost} />
        <PrivateRoute path="/prepxp/search" component={SearchPage} />
        <AdminRoute path="/prepxp/admin" component={AdminPage} />
        <Redirect to="/prepxp/" />
      </Switch>
    );
  }
}

export default App;

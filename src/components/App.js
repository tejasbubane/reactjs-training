import React from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import PrivateRoute from "./PrivateRoute"
import Login from "./Login"
import Layout from "./Layout"
import UsersList from "./UsersList"
import ProductsList from "./ProductsList"

import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => (
  <Router>
    <Layout>
      <Switch>
        <PrivateRoute exact path="/" render={() => (
          <div>Welcome to My Store!</div>
        )} />
        <Route path="/login" component={Login} />
        <PrivateRoute path="/users" component={UsersList}/>
        <PrivateRoute path="/products" component={ProductsList}/>
      </Switch>
    </Layout>
  </Router>
);

export default App;

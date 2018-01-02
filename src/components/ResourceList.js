import React, { Component } from "react";
import { Link, BrowserRouter as Router, Route, Switch } from "react-router-dom";

import UsersList from "./UsersList"
import ProductsList from "./ProductsList"

class ResourceList extends Component {
  render() {
    return (
      <Router>
        <div>
          <ul>
            <li><Link to="/users">Users</Link></li>
            <li><Link to="/products">Products</Link></li>
          </ul>

          <Switch>
            <Route exact path="/" component={UsersList}/>
            <Route path="/users" component={UsersList}/>
            <Route path="/products" component={ProductsList}/>
          </Switch>
        </div>
      </Router>
    )
  }
}

export default ResourceList;

import React, { Component } from "react";
import { Link, Switch, Redirect } from "react-router-dom";
import PrivateRoute from "./PrivateRoute"
import UsersList from "./UsersList"

const Links = () => (
  <ul>
    <li><Link to="/users">Users</Link></li>
    <li><Link to="/products">Products</Link></li>
    {window.localStorage.getItem("authToken") &&
      <li><Link to="/logout">Logout</Link></li>}
  </ul>
)

export default Links;

import React from "react";
import { Link } from "react-router-dom";
import Links from "./Links"

const Layout = props => (
  <div>
    <header>
      <Link to="/">
        <h1 style={{"textAlign": "center"}}>My Store</h1>
      </Link>
    </header>
    <div className="container-fluid">
      <Links/>
      {props.children}
    </div>
  </div>
)

export default Layout;

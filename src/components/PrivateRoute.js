import React from "react";
import { Route, Redirect } from "react-router";

const PrivateRoute = ({ component: Component, render, ...rest }) => (
  <Route
    {...rest}
    render={() =>
      window.localStorage.getItem("authToken") ? (
        Component ? <Component {...rest} /> : render(rest)
      ) : (
        <Redirect
          to={{
            pathname: "/login"
          }}
        />
      )
    }
  />
);

export default PrivateRoute;

import React from "react";
import { Redirect } from "react-router-dom";

class Logout extends React.Component {
  componentDidMount() {
    window.localStorage.removeItem("authToken")
  }

  render() {
    return <Redirect to="/login" />;
  }
}

export default Logout;

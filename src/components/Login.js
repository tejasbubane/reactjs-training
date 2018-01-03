import React, { Component } from "react";
import axios from "axios"
import { Redirect } from "react-router-dom"

export default class Login extends Component {
  state = {
    email: "",
    password: "",
    authToken: ""
  }

  loginSuccess = response => {
    let authToken = response.headers.authorization
    window.localStorage.setItem("authToken", authToken)
    this.setState({ authToken })
  }

  performLogin = e => {
    e.preventDefault()
    axios.post("/api/login", this.state).then(this.loginSuccess)
  }

  render() {
    if(this.state.authToken) {
      return <Redirect to="/" />
    }
    else {
      return (
        <form className="col-md-6 offset-md-3" onSubmit={this.performLogin}>
          <div className="form-group">
            <label htmlFor="email">Email address</label>
            <input type="email" className="form-control"
                   id="email" placeholder="Enter email"
                   value={this.state.email}
                   onChange={e => this.setState({email: e.target.value})} />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" className="form-control"
                   id="password" placeholder="Password"
                   value={this.state.password}
                   onChange={e => this.setState({password: e.target.value})} />
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      )
    }
  }
};

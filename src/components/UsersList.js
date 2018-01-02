import React, { Component } from "react";
import { fetch } from "services/fetcher"

class UsersList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      users: []
    }
  }

  componentDidMount() {
    fetch("users", (users) => { this.setState({users})})
  }

  renderUsers() {
    return this.state.users.map((user, index) => {
      return(
        <tr key={index}>
          <td>{index + 1}</td>
          <td>{user.first_name}</td>
          <td>{user.last_name}</td>
        </tr>
      );
    })
  }

  render() {
    return(
      <table>
        <thead>
          <tr>
            <th>Sr. No</th>
            <th>First Name</th>
            <th>Last Name</th>
          </tr>
        </thead>
        <tbody>
          {this.renderUsers()}
        </tbody>
      </table>
    );
  }
}

export default UsersList;

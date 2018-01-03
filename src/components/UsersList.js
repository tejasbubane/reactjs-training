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
          <th scope="row">{index + 1}</th>
          <td>{user.first_name}</td>
          <td>{user.last_name}</td>
        </tr>
      );
    })
  }

  render() {
    return(
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Sr. No</th>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
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

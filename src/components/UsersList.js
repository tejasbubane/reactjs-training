import React, { Component } from "react";
import {fetch} from "services/fetcher"

const renderUsers = (users) => {
  return users.map((user, index) => {
    return(
      <tr key={index}>
        <td>{index + 1}</td>
        <td>{user.first_name}</td>
        <td>{user.last_name}</td>
      </tr>
    );
  })
}

const UsersList = ({users}) => {
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
        {renderUsers(users)}
      </tbody>
    </table>
  );
}

export default UsersList;

import React from "react";

export class UserRow extends React.Component {
    render() {
      const user = this.props.user;
  
      return (
        <tr>
          <td>{user.id}</td>
          <td>{user.first_name}</td>
          <td>{user.last_name}</td>
        </tr>
      );
    }
  }
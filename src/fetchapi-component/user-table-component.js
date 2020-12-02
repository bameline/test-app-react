import React from "react";
import { UserRow } from "./user-row-component";

export class UserTable extends React.Component {
    render() {
      const filterText = this.props.filterText;
      const isEvenId = this.props.isEvenId;
  
      const rows = [];
  
      this.props.users.forEach((user) => {
        if (user.last_name.indexOf(filterText) === -1 && user.first_name.indexOf(filterText) === -1) {
          return;
        }
        if (isEvenId && user.id %2 != 0) {
          return;
        }
        rows.push(
          <UserRow
            user={user}
            key={user.id}
          />
        );
      });
  
      return (
        <table>
          <thead>
            <tr>
                <th>Id</th>
              <th>First name</th>
              <th>Last name</th>
            </tr>
          </thead>
          <tbody>{rows}</tbody>
        </table>
      );
    }
  }
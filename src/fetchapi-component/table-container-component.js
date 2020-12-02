import React from "react";
import { SearchBar } from "./search-bar-component";
import { UserTable } from "./user-table-component";

export class TableContainer extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        filterText: '',
        isEvenId: false
      };
      
      this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
      this.handleEvenIdChange = this.handleEvenIdChange.bind(this);
    }
  
    handleFilterTextChange(filterText) {
      this.setState({
        filterText: filterText
      });
    }
    
    handleEvenIdChange(isEvenId) {
      this.setState({
        isEvenId: isEvenId
      })
    }
  
    render() {
      return (
        <div>
          <SearchBar
            filterText={this.state.filterText}
            isEvenId={this.state.isEvenId}
            onFilterTextChange={this.handleFilterTextChange}
            onisEvenIdChange={this.handleEvenIdChange}
          />
          <UserTable
            users={this.props.users}
            filterText={this.state.filterText}
            isEvenId={this.state.isEvenId}
          />
        </div>
      );
    }
  }
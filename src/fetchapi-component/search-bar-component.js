import React from "react";


export class SearchBar extends React.Component {
    constructor(props) {
      super(props);
      this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
      this.handleisEvenIdChange = this.handleisEvenIdChange.bind(this);
    }
    
    handleFilterTextChange(e) {
      this.props.onFilterTextChange(e.target.value);
    }
    
    handleisEvenIdChange(e) {
      this.props.onisEvenIdChange(e.target.checked);
    }
    
    render() {
      return (
        <form>
          <input
            type="text"
            placeholder="Search..."
            value={this.props.filterText}
            onChange={this.handleFilterTextChange}
          />
          <p>
            <input
              type="checkbox"
              checked={this.props.isEvenId}
              onChange={this.handleisEvenIdChange}
            />
            {' '}
            Only show even ids
          </p>
        </form>
      );
    }
  }
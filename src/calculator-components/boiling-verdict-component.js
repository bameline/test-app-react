import React from "react";


export class BoilingVerdict extends React.Component {
    constructor(props){
        super(props);
    }
    
    render() {
        const tempCelsius = this.props.celsius;
        if (tempCelsius >= 100) {
            return <p>The water would boil.</p>;
        }
        return <p>The water would not boil.</p>;
    }
  }
import React from "react";
import { FancyBorder } from "./fancyborder-component";

export class Dialog extends React.Component {
    
    constructor(props){
        super(props);
    }
    render(){
        return (
            <FancyBorder color="blue">
                <h1 className="Dialog-title">
                {this.props.title}
                </h1>
                <p className="Dialog-message">
                {this.props.message}
                </p>
                {this.props.children}    
            </FancyBorder>
        );
    }
}
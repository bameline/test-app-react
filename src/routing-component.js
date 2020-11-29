import Calculator from "calculator-components/calculator-component";
import { WelcomeDialog } from "composition-components/welcome-dialo-component";
import React from "react";
import { Link, Route } from "react-router-dom";

export class Routing extends React.Component{
    constructor(props) {
        super(props);
    }
    render(){
        return (
        <div>
            <ul>
              <li><Link to="/welcome">WelcomeDialog</Link></li>
              <li><Link to="/calculator">Calculator</Link></li>
            </ul>
            <Route path="/welcome" component={WelcomeDialog}/>
            <Route path="/calculator" component={Calculator}/>
        </div>
        );
    }
}
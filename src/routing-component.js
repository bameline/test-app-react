import Calculator from "calculator-components/calculator-component";
import { WelcomeDialog } from "composition-components/welcome-dialo-component";
import { NavigationBar } from "navbar-components/navbar-component";
import { TestNotification } from "notification-component/test-notifications";
import React from "react";
import { Link, Route } from "react-router-dom";

export class Routing extends React.Component{
    constructor(props) {
        super(props);
    }
    render(){
        return (
        <div>
            <NavigationBar />
            <Route path="/welcome" component={WelcomeDialog}/>
            <Route path="/calculator" component={Calculator}/>
            <Route path="/testNotification" component={TestNotification}/>
        </div>
        );
    }
}
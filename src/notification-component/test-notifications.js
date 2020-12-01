import React from "react";  
import { displayMessage } from "services/notifier-servicet";
export class TestNotification extends React.Component{

    constructor(props){
        super(props);
    }

    displaySuccessMessage(){
        //toast.success('Hey, this is a Success Message')
        displayMessage('Hey, this is a Success Message', "success");
    }

    displayErrorMessage(){
        displayMessage('Hey, this is a Success Message', "error");
    }

    displayWarningMessage(){
        displayMessage('Hey, this is a Success Message', "warning");
    }

    render (){
        return  (
        <div>
            <h1>This is the notification test component</h1>
            <button onClick={this.displaySuccessMessage}>Success message</button>
            <button onClick={this.displayErrorMessage}>Error message</button>
            <button onClick={this.displayWarningMessage}>Warning message</button>
        </div>
        );
        }
}
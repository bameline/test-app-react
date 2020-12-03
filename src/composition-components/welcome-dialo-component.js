import Example from "hooks-components.js/hooks-example-component";
import React from "react";
import { Dialog } from "./dialog-component";

export class WelcomeDialog extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        return (
            <Dialog
            title="Bienvenue"      
            message="Merci de visiter notre cette appli de test">
            <div> this is the welcome dialog content :) </div>
            <div>This dialog is inserted in a compostion component</div>
            <Example />
            </Dialog>
        );
    }
}
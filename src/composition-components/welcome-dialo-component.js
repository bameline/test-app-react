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
            message="Merci de visiter notre vaisseau spatial !">
            <div> this is the welcome dialog content :) </div>

            </Dialog>
        );
    }
}
import { usePromiseTracker } from "react-promise-tracker";
import React from "react";

export class LoadingIndicator extends React.Component{

    constructor(props){
        super(props);
    }

    render(){
        return ( usePromiseTracker &&
               <h1>Hey some async call in progress ! </h1>
          );
    }
}
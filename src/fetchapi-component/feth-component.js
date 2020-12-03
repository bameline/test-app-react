import React from "react";
import { trackPromise } from "react-promise-tracker";
import { fetchApi } from "services/api-service";
import { displayMessage } from "services/notifier-servicet";
import { TableContainer } from "./table-container-component";

const API_URL = "https://reqres.in/api/users?page=";
export class FetchComponent extends React.Component{

    state = {
        users: []
    }

    constructor(props){
        super(props);
    }

    componentDidMount() {
        for( var i=1; i<3; i++){
            this.fetchAPage( API_URL + i);
        }
    }

    fetchAPage(url){
        trackPromise(
            fetchApi(url)
            .then(res => res.json())
            .then((data) => {
                displayMessage("Success retrieving users", "success");
                //this.setState({users : data.data})
                this.setState(state => {
                    const users = state.users.concat( data.data );
            
                    return {
                    users
                    };
                });
                console.log('This is your data', data)
                return data.data;
                }
            )
            .catch((error) => {
                displayMessage("Error retrieving users", "error");
                console.log(error)
                return[];
            })
        )
    }

    render(){
        return (
            <div>
                <TableContainer users={this.state.users} />
            </div>
        )
    }
}
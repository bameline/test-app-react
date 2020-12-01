import { toast } from "react-toastify"

function displaySuccessMessage(message){
    toast.success(message)
}

function displayErrorMessage(message){
    toast.error(message)
}

function displayWarningMessage(message){
    toast.warning(message)
}

export function displayMessage(message, type){
    switch(type){
        case "success":
            displaySuccessMessage(message);
            break;
        case "error":
            displayErrorMessage(message);
            break;
        case "warning":
            displayWarningMessage(message);
            break;
    }
}

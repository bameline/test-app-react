import { displayMessage } from "./notifier-servicet"

export const fetchApi = (url ) => {
    return fetch( url );
}
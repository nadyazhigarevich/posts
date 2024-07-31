import axios from "axios";

export const instantce = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
})
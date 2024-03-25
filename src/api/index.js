import axios from "axios";

export const api_key = "7a890ae0109da6851aa87ea9fd5a7b74";

export const api = axios.create({
    baseURL: "https://api.themoviedb.org/3"
})
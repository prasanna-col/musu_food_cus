
import axios from "axios";

var header_data = global.auth != null ?
    {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Authorization": global.auth
    } :
    {
        "Content-Type": "application/json",
        Accept: "application/json",
    }

export const axiosInstance = axios.create({
    baseURL: "Base_url", // process.env.API_URL,
    headers: header_data
});

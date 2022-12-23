import axios from "axios";

const http = axios.create({
    baseURL: "http://laravel.pv016.com",
    headers: {
        "Content-type": "application/json"
    }
});

export default http;
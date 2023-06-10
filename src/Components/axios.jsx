import axios from "axios";

const API = axios.create({
    // baseURL:"http://10.248.1.75:8085/api/v1/charge"
     baseURL:"http://localhost:3008"

})

export default API;


//http://10.248.1.75:8085/api/v1/calls/findAll
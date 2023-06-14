import axios from "axios";

const API = axios.create({
    // baseURL:"http://10.248.1.75:8085/api/v1"
    baseURL:"http://165.22.214.153:8085/api/v1/"
    // baseURL:"http://192.168.203.46:8085/api/v1/"
})

export default API;


//http://10.248.1.75:8085/api/v1/calls/findAll
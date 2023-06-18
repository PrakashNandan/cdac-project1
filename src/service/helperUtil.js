import axios from 'axios';

const BASE_URL="http://165.22.214.153:8085/api/v1";
// export const BASE_URL="http://10.248.1.198:8085/account/";

 const myAxios=axios.create({
     baseURL:BASE_URL,
});

export default myAxios;

export const privateAxios = axios.create({
     baseURL: BASE_URL,
   });
   
   privateAxios.interceptors.request.use(
     (config) => {
       const token = localStorage.getItem('accessToken');
       console.log(" token ----"+token)
       if (token) {

          config.headers.Authorization = `Bearer ${token}`;
          console.log("dfgdfgdfgdfg   "+config);
       }
   
       return config;
     },
     (error) => Promise.reject(error)
   );


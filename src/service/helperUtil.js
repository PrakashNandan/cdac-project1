import axios from 'axios';

export const BASE_URL="http://10.248.1.198:8085/api/v1/";

export const myAxios=axios.create({
     baseURL:BASE_URL,
});

// export const privateAxios = axios.create({
//      baseURL: BASE_URL,
//    });
   
//    privateAxios.interceptors.request.use(
//      (config) => {
//        const token = getToken();
//        console.log(" token ----"+token)
//        if (token) {

//           config.headers.Authorization = `Bearer ${token}`;
//           console.log("dfgdfgdfgdfg   "+config);
//        }
   
//        return config;
//      },
//      (error) => Promise.reject(error)
//    );


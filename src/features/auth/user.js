import  myAxios  from "../../service/helperUtil";


export const signUp=(user)=>{
    return myAxios
    .post('/auth/register', user)
    .then((response)=>response.data)
};

// export const loginUser=(loginDetail)=>{
//     return myAxios
//     .post('/auth/authenticate', loginDetail)
//     .then((response)=>response.data)
// };

// export const getUser = (userId) => {
//     return myAxios.get(`/users/${userId}`).then((resp) => resp.data);
// };
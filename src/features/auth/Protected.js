import { Navigate } from "react-router-dom";


export default function Protected({children}){
   const token =localStorage.getItem('accessToken');
    
        if(token){
            return children;
        }
        else{
           return  <Navigate to="/login" replace='true'></Navigate>
        }
        
    
}
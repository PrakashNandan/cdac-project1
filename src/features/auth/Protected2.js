import { Navigate } from "react-router-dom";


export default function Protected2({children}){
   const token =localStorage.getItem('accessToken');
    
        if(token){
            return  <Navigate to="/loggedin" replace='true'></Navigate>
        }
        else{
            return children;
        }
        
    
}
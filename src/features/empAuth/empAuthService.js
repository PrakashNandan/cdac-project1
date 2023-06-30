import axios from '../../service/helperUtil'
import { privateAxios } from '../../service/helperUtil';


// Register user
const register1 = async (userData) => {
  const response = await privateAxios.post('/charge/newUser', userData)
  console.log(response);

  if (response.data) {
    localStorage.setItem('empUser', JSON.stringify(response.data))
  }

  return response.data
}

// Login user
const login1 = async (userData) => {
  const response = await axios.post('/charge/newUser', userData)
  
  console.log(response);
  console.log(response.data+"hello");

  const token = response.data.accessToken ; 
  localStorage.setItem("empAccessToken", token);
  

  

  if (response.data) {
    localStorage.setItem('empUser', JSON.stringify(response.data))
  }

  return response.data
}


// Logout user
const logout1 = () => {
  localStorage.removeItem('empUser');
  localStorage.removeItem('empAccessToken')
}

const authService = {
  register1,
  logout1,
  login1,
}

export default authService
import axios from '../../service/helperUtil'


// Register user
const register = async (userData) => {
  const response = await axios.post('/auth/register', userData)

  if (response.data) {
    localStorage.setItem('user', JSON.stringify(response.data))
  }

  return response.data
}

// Login user
const login = async (userData) => {
  const response = await axios.post('/auth/login', userData)
  
  console.log(response);
  console.log(response.data+"hello");

  const token = response.data.accessToken ; 
  localStorage.setItem("accessToken", token);
  

  if (response.data) {
    localStorage.setItem('user', JSON.stringify(response.data))
  }

  return response.data
}


// Logout user
const logout = () => {
  localStorage.removeItem('user');
  localStorage.removeItem('accessToken')
}

const authService = {
  register,
  logout,
  login,
}

export default authService
import React from 'react'
import { useState, useEffect } from 'react'
import { FaSignInAlt } from 'react-icons/fa'
import { FaUser } from 'react-icons/fa'
import { login, logout, register, reset } from '../features/auth/authSlice'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import Spinner from '../Components/Spinner'
import UserDetail from '../Components/UserDetail'



function Login() {

  const [formData, setFormData] = useState({
    username: '',
    password: '',

  })


  const { username, password } = formData
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  )

  //****************************************/


  const handleClick = () => {
    navigate('/loggedin');
  };

  //****************************************/

  useEffect(() => {
    if (isError) {
      toast.error(message)
    }

    if (isSuccess || user) {
      navigate('/loggedin')
    }

       

          const handleClick = () => {
           
            navigate('/loggedin');

          };



  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  const onSubmit = (e) => {
    e.preventDefault()

        const userData={
            username : formData.username,
            password : formData.password
        }
        console.log(userData)

    dispatch(login(userData));

  }

  if (isLoading) {
    return <Spinner />
  }




  return (
    <>
      <section className='heading'>
        <h1>
          <FaSignInAlt /> Log In
        </h1>
        <p>Please Log In</p>
      </section>

      <section className='form'>
        <form onSubmit={onSubmit}>

          <div className='form-group'>
            <input
              type='text'
              className='form-control'
              id='username'
              name='username'
              value={username}
              placeholder='Enter your username'
              onChange={onChange}
            />
          </div>

          <div className='form-group'>
            <input
              type='password'
              className='form-control'
              id='password'
              name='password'
              value={password}
              placeholder='Enter password'
              onChange={onChange}
            />
          </div>
          <div className='form-group'>
            <button type='submit' className='btn1 btn-block' onClick={handleClick}>
              Log In
            </button>

          </div>
        </form>
      </section>
    </>
  )

  

}

export default Login;
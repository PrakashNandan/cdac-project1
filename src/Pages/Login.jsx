import React from 'react'
import { useState, useEffect } from 'react'
import { FaSignInAlt } from 'react-icons/fa'
import { FaUser } from 'react-icons/fa'
import { login, logout, register, reset } from '../features/auth/authSlice'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import Spinner from '../Components/Spinner'
import UserDetail from '../Components/UserDetail'



function Login() {

    const [formData, setFormData] = useState({
        email: '',
        password: '',
       
      })

      //***************************** */


      //***************************/


      const {email,password } = formData

      const navigate = useNavigate()
      const dispatch = useDispatch()

      const { user, isLoading, isError, isSuccess, message} = useSelector(
        (state) => state.auth
      )

      //*************************************** */

       

          const handleClick = () => {
           
            navigate('/loggedin');

          };

      //*************************************** */

      useEffect(() => {
        if (isError) {
          toast.error(message)
        }
    
        if (isSuccess || user) {
          navigate('/login')
        }
    
        dispatch(reset())
      }, [user, isError, isSuccess, message, navigate, dispatch])


      const onChange = (e) => {
        setFormData((prevState) => ({
          ...prevState,
          [e.target.name]: e.target.value,
        }))
      }

      const onSubmit = (e) => {
        e.preventDefault()

        const userData={
            email,
            password
        }

        dispatch(login(userData));

      }

      if (isLoading) {
        return <Spinner />
      }




  return (
    <>
    <section className='heading'>
      <h1>
        <FaSignInAlt /> LogIn
      </h1>
      <p>Please Log In</p>
    </section>

    <section className='form'>
      <form onSubmit={onSubmit}>
       
        <div className='form-group'>
          <input
            type='email'
            className='form-control'
            id='email'
            name='email'
            value={email}
            placeholder='Enter your email'
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
            LogIn
          </button>
          
        </div>
      </form>
    </section>
  </>
  )
  
}

export default Login
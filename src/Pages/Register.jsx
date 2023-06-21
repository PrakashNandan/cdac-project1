import React from 'react'
import { useState, useEffect } from 'react'
import { FaUser } from 'react-icons/fa'
import { register, reset } from '../features/auth/authSlice'
import { ToastContainer, toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import { signUp } from '../features/auth/user'
import Spinner from '../Components/Spinner'
import RegisterForm from './RegisterForm'




function Register() {

    const [formData, setFormData] = useState({
        username: '',
        // username:'',
        email: '',
        mobileNo: '',
        // role:'',
        password: '',
        // password2: '',
        // about:''
      })

      const [error, setError]=useState({
        error:{},
        isError:false
      })


      const { username, email, mobileNo, password} = formData

      const navigate = useNavigate()
      const dispatch = useDispatch()

      const { user, isLoading, isError, isSuccess, message } = useSelector(
        (state) => state.auth
      )

      useEffect(() => {
        if (isError) {
          toast.error(message)
        }
    
        if (isSuccess || user) {
          navigate('/')
          toast.success("Register Successfully")

        }
    
        dispatch(reset())
      }, [user, isError, isSuccess, message])
    


      const onChange = (e) => {
        setFormData((prevState) => ({
          ...prevState,
          [e.target.name]: e.target.value,
        }))
      }

      const onSubmit = (e) => {
        e.preventDefault()

            console.log(formData);
        //data validate

        //call server api for sending data
        //   signUp(formData).then((response)=>{ 
        //   console.log(response)
        //   console.log('success log')
        //   toast.success('User is registered successfully !! user id' +response.id)
        //   setFormData({
        //     Username:'',
        //     email:'',
        //     password:'',
        //     mobileNo:'',
        //   })
        // }).catch((error)=>{
        //   console.log(error)
        //   console.log("Error log")
        //   //handle errors in proper way
        //   setError({
        //     errors:error,
        //     isError:true
        //   })
        // });

        const userData = {
          username,
          email,
          password,
          mobileNo,
        }

        dispatch(register(userData));
  };


    
    if(isLoading){
        return <Spinner/>
    }


  return (
    <>
    <section className='heading'>
      <h1>
        <FaUser /> Register
      </h1>
      <p>Please create an account</p>
    </section>

    <section className='form'>
      {/* <form onSubmit={onSubmit}>
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
            type='text'
            className='form-control'
            id='name'
            name='username'
            value={username}
            placeholder='Enter your username'
            onChange={onChange}
          />
        </div>
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
            type='number'
            className='form-control'
            id='mobileNo'
            name='mobileNo'
            value={mobileNo}
            placeholder='Enter your Mobile number'
            onChange={onChange}
          />
        </div>
        <div className='form-group'>
          <input
            type='text'
            className='form-control'
            id='role'
            name='role'
            value={role}
            placeholder='Enter your role'
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
          <input
            type='password'
            className='form-control'
            id='password2'
            name='password2'
            value={password2}
            placeholder='Confirm password'
            onChange={onChange}
          />
        </div>
        <div className='form-group'>
          <button type='submit' className='btn1 btn-block'>
            Submit
          </button>
        </div>
      </form> */}

      <RegisterForm username={username}
      email={email}
      mobileNo={mobileNo}
      password={password}
      onChange={onChange}
      onSubmit={onSubmit}
      />

    </section>
    <ToastContainer/>
  </>
  )
 }

export default Register
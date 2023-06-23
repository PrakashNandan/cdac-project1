import React from 'react'
import { useState, useEffect } from 'react'
import { FaSignInAlt } from 'react-icons/fa'
import { FaUser } from 'react-icons/fa'
import { login, logout, register, reset } from '../features/auth/authSlice'
import { toast, ToastContainer } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import Spinner from '../Components/Spinner'
import UserDetail from '../Components/UserDetail'
import { Link } from 'react-router-dom';
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBInput,
  MDBIcon,
  MDBCheckbox
}
  from 'mdb-react-ui-kit';

function Login() {

  const [showPassword, setShowPassword] = useState(false);
  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

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

  useEffect(() => {
    if (isError) {
      toast.error(message)
    }

    if (isSuccess || user) {
      navigate('/loggedin')
      toast.success("You are successfully loggedin")
    }


  }, [user, isError, isSuccess, message])


  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  const onSubmit = (e) => {
    e.preventDefault()

    const userData = {
      username: formData.username,
      password: formData.password
    }
    console.log(userData)
    dispatch(login(userData));

  }

  if (isLoading) {
    return <Spinner />
  }


  return (
    <>
      <MDBContainer fluid style={{ justifyContent: 'center' }}>
        <MDBCard className='text-black ml-auto mr-auto mt-5' style={{ borderRadius: '25px', width: '60%', minWidth: '300px' }}>
          <MDBCardBody>
            <h2 className="mb-3" style={{ paddingTop: '25px' }}>
              <MDBIcon icon="right-to-bracket" className="me-2" />
              Log In
            </h2>
            <MDBRow>
              <MDBCol md='10' lg='6' className='order-2 order-lg-1 d-flex align-items-center'>
                <MDBCardImage src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                  alt="Phone" fluid
                  style={{ maxHeight: '300px', paddingBottom: '5px' }}
                />
              </MDBCol>
              <MDBCol md='10' lg='6' className='order-1 order-lg-2 d-flex flex-column align-items-center' style={{ justifyContent: 'center' }}>

                <div className="d-flex flex-row align-items-center mb-4 mt-5">
                  <MDBIcon fas icon="user me-3" size='lg' />
                  <MDBInput label='username' id='form1' type='text' className='w-100' name='username'
                    value={username}
                    onChange={onChange} />
                </div>

                <div className="d-flex flex-row align-items-center mb-4 position-relative">
                  <MDBIcon fas icon="key me-3" size='lg' />

                  <MDBInput label='password' id='form4' name='password'
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={onChange}
                  />
                  <MDBIcon
                    icon={showPassword ? 'eye-slash' : 'eye'}
                    className="position-absolute end-0 top-50 translate-middle-y"
                    onClick={handleTogglePassword}
                    style={{ cursor: 'pointer', marginRight: '0.5rem', marginBottom: '1rem' }}
                  />

                </div>

                {/* <div className='mb-4'>
                <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Subscribe to our newsletter' />
              </div> */}
                <MDBBtn className='mb-4 btn-rounded' onClick={onSubmit} style={{ width: '260px' }}>Log In</MDBBtn>

              </MDBCol>
            </MDBRow>
            <p className="text-center mb-2">
              Don't have an account? <Link to="/register" className="text-decoration-none text-danger">Register</Link>
            </p>
          </MDBCardBody>
        </MDBCard>
      </MDBContainer>
      <ToastContainer />
    </>
  )
}

export default Login;
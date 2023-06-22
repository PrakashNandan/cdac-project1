import React from 'react';
import { Link } from 'react-router-dom';
import { login } from '../features/auth/authSlice';
import { useState } from 'react';
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

function RegisterForm({username,mobileNo,email,password,onChange,onSubmit}) {


  const [showPassword, setShowPassword]= useState(false);

   const handleTogglePassword=()=>{
    setShowPassword(!showPassword)
   }



  return (
    <MDBContainer fluid>
      <MDBCard className='text-black m-4' style={{ borderRadius: '25px' }}>
        <MDBCardBody>
        <h2 className="mb-5" style={{paddingTop: '25px'}}>
          <MDBIcon icon="user-plus" className="me-2" />
          Sign Up
        </h2>
          <MDBRow>
            <MDBCol md='10' lg='6' className='order-2 order-lg-1 d-flex flex-column align-items-center'>
              <div className="d-flex flex-row align-items-center mb-4 ">
                <MDBIcon fas icon="user me-3" size='lg' />
                <MDBInput label='username' id='form1' type='text' className='w-100' name='username'
                  value={username}
                  onChange={onChange} />
              </div>

              <div className="d-flex flex-row align-items-center mb-4">
                <MDBIcon fas icon="envelope me-3" size='lg' />
                <MDBInput label='email' id='form2' type='email' name='email'
                  value={email}
                  onChange={onChange} />
              </div>

              <div className="d-flex flex-row align-items-center mb-4">
                {/* <MDBIcon fas icon="lock me-3" size='lg'/> */}
                {/* <FontAwesomeIcon icon="fa-solid fa-phone" shake /> */}
                <MDBIcon fas icon="phone me-3" size='lg' />
                <MDBInput label='mobileNo' id='form3' type='number' name='mobileNo'
                  value={mobileNo}
                  onChange={onChange} />
              </div>

              <div className="d-flex flex-row align-items-center mb-4 position-relative">
                <MDBIcon fas icon="key me-3" size='lg'/>

                <MDBInput label='password' id='form4' name='password'
                      type={showPassword ? 'text' : 'password'} 
                      value={password}
                      onChange={onChange}
                 />

                <MDBIcon
                    icon={showPassword ? 'eye-slash' : 'eye'}
                    className="position-absolute end-0 top-50 translate-middle-y"
                    onClick={handleTogglePassword}
                    style={{ cursor: 'pointer', marginRight: '0.5rem', marginBottom:'1rem' }}
                />

              </div>

              {/* <div className='mb-4'>
                <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Subscribe to our newsletter' />
              </div> */}

              <MDBBtn className='mb-4' size='lg' onClick={onSubmit}>Register</MDBBtn>

            </MDBCol>

            <MDBCol md='10' lg='6' className='order-1 order-lg-2 d-flex align-items-center'>
              <MDBCardImage src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp' fluid />

            </MDBCol>

          </MDBRow>
          <p className="small fw-bold mt-2 pt-1 mb-2">Already have an account? <Link to='/login' className='link-success'><login>Login</login></Link></p>
        </MDBCardBody>
      </MDBCard>

    </MDBContainer>
  );
}

export default RegisterForm;
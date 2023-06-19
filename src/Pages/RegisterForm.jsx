import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import { login } from '../features/auth/authSlice';
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
  return (
    <MDBContainer fluid>

      <MDBCard className='text-black m-5' style={{borderRadius: '25px'}}>
        <MDBCardBody>
          <MDBRow>
            <MDBCol md='10' lg='6' className='order-2 order-lg-1 d-flex flex-column align-items-center'>

              <p classNAme="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>

              <div className="d-flex flex-row align-items-center mb-4 ">
                <MDBIcon fas icon="user me-3" size='lg'/>
                <MDBInput label='username' id='form1' type='text' className='w-100'name='username'
            value={username}
            onChange={onChange} />
              </div>

              <div className="d-flex flex-row align-items-center mb-4">
                <MDBIcon fas icon="envelope me-3" size='lg'/>
                <MDBInput label='email' id='form2' type='email'name='email'
            value={email}
            onChange={onChange}/>
              </div>

              
              <div className="d-flex flex-row align-items-center mb-4">
                {/* <MDBIcon fas icon="lock me-3" size='lg'/> */}
                {/* <FontAwesomeIcon icon="fa-solid fa-phone" shake /> */}
                <FontAwesomeIcon icon={faPhone}  size="lg" style={{padding:'0.5rem'}}/>
                <MDBInput label='mobileNo' id='form3' type='number'name='mobileNo'
            value={mobileNo}
            onChange={onChange}/>
              </div>

              <div className="d-flex flex-row align-items-center mb-4">
                <MDBIcon fas icon="key me-3" size='lg'/>
                <MDBInput label='password' id='form4' type='password'name='password'
            value={password}
            onChange={onChange}/>
              </div>

              {/* <div className='mb-4'>
                <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Subscribe to our newsletter' />
              </div> */}

              <MDBBtn className='mb-4' size='lg'onClick={onSubmit}>Register</MDBBtn>

            </MDBCol>

            <MDBCol md='10' lg='6' className='order-1 order-lg-2 d-flex align-items-center'>
              <MDBCardImage src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp' fluid/>
              
            </MDBCol>
           
          </MDBRow>
          <p className="small fw-bold mt-2 pt-1 mb-2">Already have an account? <Link to='/login' className='link-success'><login>login</login></Link></p>
        </MDBCardBody>
      </MDBCard>

    </MDBContainer>
  );
}

export default RegisterForm;
import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import { MDBContainer, MDBCol, MDBRow, MDBBtn, MDBIcon, MDBInput, MDBCheckbox } from 'mdb-react-ui-kit';

function LoginFormPage({ onChange, username, password, onSubmit }) {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <MDBContainer fluid className="p-3 my-5">
      <MDBRow>
        <MDBCol col='10' md='6'>
          <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp" className="img-fluid" alt="Phone image" />
        </MDBCol>

        <MDBCol col='4' md='6' style={{ marginTop: '0.56rem' }}>
          <MDBInput
            wrapperClass='mb-4'
            label='username'
            id='username'
            type='text'
            name='username'
            size="lg"
            value={username}
            onChange={onChange}
          />
          <div className="position-relative">
            <MDBInput
              label='Password'
              id='password'
              type={showPassword ? 'text' : 'password'}
              name='password'
              size="lg"
              value={password}
              onChange={onChange}
            />
            <MDBIcon
              icon={showPassword ? 'eye-slash' : 'eye'}
              className="position-absolute end-0 top-50 translate-middle-y"
              onClick={handleTogglePassword}
              style={{ cursor: 'pointer', marginRight: '0.5rem' }}
            />
          </div>

          <MDBBtn className="mb-4 w-100" size="lg" onClick={onSubmit}>Sign in</MDBBtn>

          <p className="small fw-bold mt-2 pt-1 mb-2">
            Don't have an account? <Link to='/register' className='link-danger'>Register</Link>
          </p>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default LoginFormPage;

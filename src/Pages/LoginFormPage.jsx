import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { MDBContainer, MDBCol, MDBRow, MDBBtn, MDBIcon, MDBInput } from 'mdb-react-ui-kit';

function LoginFormPage({ onChange, username, password, onSubmit }) {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (



















    <MDBContainer fluid className="py-5">
      <MDBRow className="justify-content-center">
        <h2 className="mb-5" style={{ paddingTop: '0' }}>
          <MDBIcon icon="right-to-bracket" className="me-2" />
          Login
        </h2>
        <MDBCol md="8" lg="6" xl="4">
          <div className="mb-6">
            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp" alt="Phone" className="img-fluid" />
          </div>
        </MDBCol>

        <MDBCol md="8" lg="6" xl="4" className="my-auto">
          <MDBInput
            label="Username"
            id="username"
            type="text"
            name="username"
            size="lg"
            value={username}
            onChange={onChange}
            className="mb-4"
          />

          <div className="position-relative">
            <MDBInput
              label="Password"
              id="password"
              type={showPassword ? 'text' : 'password'}
              name="password"
              size="lg"
              value={password}
              onChange={onChange}
              className="mb-4"
            />
            <MDBIcon
              icon={showPassword ? 'eye-slash' : 'eye'}
              className="position-absolute end-0 top-50 translate-middle-y"
              onClick={handleTogglePassword}
              style={{ cursor: 'pointer', marginRight: '0.5rem' }}
            />
          </div>

          <MDBBtn className="mb-4 w-100" size="lg" onClick={onSubmit}>
            Sign in
          </MDBBtn>

          <p className="text-center mb-2">
            Don't have an account? <Link to="/register" className="text-decoration-none">Register</Link>
          </p>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default LoginFormPage;

import React from 'react'
import { FaSignInAlt, FaSignOutAlt, FaUser } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { ToastContainer , toast } from 'react-toastify'
import { logout, reset } from '../features/auth/authSlice'
import Logo from '../img/Logo.svg'


function Header() {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth)

  const onLogout = () => {
    dispatch(logout())
    dispatch(reset())
    navigate('/') 
    toast.success("Successfully Logged out");
  }

  return (
 <>
    <header className='header'>
      <div className='logo'>
      <Link to='/'><img src={Logo} alt="Logo"></img></Link>
      </div>
      <ul>
        {user ? (
          <li>
            <Link to='/login' onClick={onLogout}>
                <FaSignOutAlt /> Log Out
              </Link>
          </li>
        ) : (
          <>
            <li>
              <Link to='/login'>
                <FaSignInAlt /> Log In
              </Link>
            </li>
            <li>
              <Link to='/register'>
                <FaUser /> Sign Up
              </Link>
            </li>
          </>
        )}
      </ul>
    </header>
     <ToastContainer/>
     </>
  )
}

export default Header

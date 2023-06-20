// import '../style/styles.css';
// import React, { useEffect } from 'react';

// import { FaSignInAlt, FaSignOutAlt, FaUser } from 'react-icons/fa'
// import { Link, useNavigate } from 'react-router-dom'
// import { useSelector, useDispatch } from 'react-redux'
// import { logout, reset } from '../features/auth/authSlice'
// import Logo from '../img/Logo.svg'
// function Header() {
//     const dispatch = useDispatch();
//     const navigate = useNavigate();
//     const { user } = useSelector((state) => state.auth)
  
//     const onLogout = () => {
//       dispatch(logout())
//       dispatch(reset())
//       navigate('/')
//     }
//     // useEffect(() => {
//     //     const showMenu = (headerToggle, navbarId) => {
//     //         const toggleBtn = document.getElementById(headerToggle);
//     //         const nav = document.getElementById(navbarId);

//     //         if (headerToggle && navbarId) {
//     //             toggleBtn.addEventListener('click', () => {
//     //                 nav.classList.toggle('show-menu');
//     //                 toggleBtn.classList.toggle('bx-x');
//     //             });
//     //         }
//     //     };

//     //     showMenu('header-toggle', 'navbar');

//     //     return () => {
//     //         const toggleBtn = document.getElementById('header-toggle');
//     //         toggleBtn.removeEventListener('click', () => { });
//     //     };
//     // }, []);

//     return (
//         <header class="header">
//             <div class="header__container">
//                 <div class="header__img">
//                     <i class='bx bxs-user-circle bx-md nav__icon'></i>
//                 </div>

            

//                 {/* <div class="header__search">
//                     <input type="search" placeholder="Search" class="header__input" />
//                     <i class='bx bx-search header__icon'></i>
//                 </div> */}

//                 <div class="header__toggle">
//                     <i class='bx bx-menu' id="header-toggle"></i>
//                 </div>
//                 <div className='logo'>
//       <Link to='/'><img src={Logo} alt="Logo"></img></Link>
//       </div>
//       <ul>
//         {user ? (
//           <li>
//             <button className='btn' onClick={onLogout}>
//               <FaSignOutAlt /> Logout
//             </button>
//           </li>
//         ) : (
//           <>
//             <li>
//               <Link to='/login'>
//                 <FaSignInAlt /> Login
//               </Link>
//             </li>
//             <li>
//               <Link to='/register'>
//                 <FaUser /> Register
//               </Link>
//             </li>
//           </>
//         )}
//       </ul>
//             </div>
//         </header>
//     )

// }

// export default Header;
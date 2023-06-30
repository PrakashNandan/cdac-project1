
import React, { useState, useEffect } from 'react'
import '../../style/chargeList.css'
import axios from '../axios.jsx'

import { ToastContainer, toast } from 'react-toastify'
import { privateAxios } from '../../service/helperUtil'
import Pagination from '../Pagination'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import Mymodal from '../ShowModal.jsx';
import '../../style/modal.css'
import Spinner from '../Spinner'

import '../../style/UserData.css'
import { MDBContainer, MDBCol, MDBRow, MDBBtn, MDBIcon, MDBInput, MDBCheckbox } from 'mdb-react-ui-kit';
import FindAllEmployees from './FindAllEmployees'

import { reset1 } from '../../features/empAuth/empAuthSlice'
import { register1 } from '../../features/empAuth/empAuthSlice'




function AddEmployee() {

    const [empData, setEmpData] = useState({
        username: '',
        email: '',
        mobileNo: '',
        role:'',
        password:''
      }, []);
    
      const [error, setError] = useState(false);
      const [roleList, setRoleList] = useState([]);
      const [isSubmitting, setIsSubmitting] = useState(false);
       
    
    
    
      const { username, email, mobileNo, password, role} = empData
      const navigate = useNavigate()
      const dispatch = useDispatch()
      const { user, isLoading, isError, isSuccess, message } = useSelector(
        (state) => state.empAuth
      )
    
      useEffect(() => {
        if (isError) {
          toast.error(message)
        }
        if (isSuccess && user) {
          // navigate('/')
          toast.success("Register Successfully for Employee");
          navigate('/loggedin');
        }
        dispatch(reset1())
      }, [user, isError, isSuccess, message, dispatch])


      useEffect(()=>{
        privateAxios.get(`/charge/getUserList`)
        .then((res) => {
            console.log(res);
            setRoleList(res.data.roleList);
        })
        .catch((err)=>{
            console.log(err);
            toast.error("error in role list");
        })
      },[])




    
    
      const [AllEmpData, setAllEmpData] = useState([]);
    
    
     
    
    
      const handleInputChange = (event) => {
        const { name, value } = event.target;
    
        setEmpData((prevUser) => ({ ...prevUser, [name]: value }));
      };
    
    
    
      
      const onSubmit = (e) => {
        e.preventDefault()
    
        console.log(empData);
    
        const userData = {
          username,
          email,
          password,
          mobileNo,
          role
        }
        dispatch(register1(userData));
      };
    
      if (isLoading) {
        return 
         <div class="spinner-border m-10rem" role="status">
        <span class="sr-only">Loading...</span>
      </div>
      }


      
  function handleSelect(event) {
    console.log(event.target);
    const { name, value } = event.target;
    setEmpData((prevUser) => ({ ...prevUser, [name]: value }))

  }

   const handleNaviagte =()=>{
      navigate('/loggedin');
   }





  return (
    <>
  <Mymodal>
    <button id='close-btn' onClick={handleNaviagte}>close</button>
      <MDBIcon icon="user-plus" size="3x"/>
      <h3 style={{padding: "10px"}}>Add Employee</h3>
      <form onSubmit={onSubmit} className='modalForm' id='modalForm'>
        <div className="d-flex flex-row align-items-center mb-3 mt-3">
          <MDBIcon fas icon="user-pen" size='lg' style={{ marginRight: '5px' }} />
          <MDBInput
            label="User name"
            type="text"
            name="username"
            id="username"
            value={empData.username}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="d-flex flex-row align-items-center mb-3">
          <MDBIcon class="fas fa-mobile fa-lg" size='lg' style={{ marginRight: '13px', marginLeft: '2px' }} />
          <MDBInput
            label="Mobile No"
            type="string"
            name="mobileNo"
            id="mobileNo"
            value={empData.mobileNo}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="d-flex flex-row align-items-center mb-3">
          <MDBIcon class="far fa-envelope fa-lg" size='lg' style={{ marginRight: '10px' }} />
          <MDBInput
            label="Email Id"
            type="email"
            name="email"
            id="email"
            value={empData.email}
            onChange={handleInputChange}
             required
          />
        </div>
        <div className="d-flex flex-row align-items-center mb-3">
          <MDBIcon class="far fa-envelope fa-lg" size='lg' style={{ marginRight: '10px' }} />
          <MDBInput
            label="Password"
            type="password"
            name="password"
            id="password"
            value={empData.password}
            onChange={handleInputChange}
            required
          />
        </div>




        <div className="d-flex flex-row align-items-center mb-3">
          <MDBIcon fas icon="pen-to-square" size='lg' style={{ marginRight: '10px' }} />
          <select className="form-select custom-select-width" style={{ height: '40px' }} name='role' value={empData.role} onChange={handleSelect}>
            <option>Role List</option>
            {roleList.map((role) => (
              <option key={role.id} value={role.roleName}>{role.roleName}</option>
            ))}


          </select>

        </div>



         

        {isLoading ? (
          <MDBBtn className='btn-rounded mt-3 btn-lg' style={{ width: '100%' }} disabled>
            <span class="spinner-border" style={{ margin: '0 0.3rem', height: '1.2rem', width: '1.2rem' }} role="status" aria-hidden="true"></span>
            Submitting...
          </MDBBtn>
        ) : (
          <MDBBtn className='btn-rounded mt-3 btn-lg' style={{ width: '100%' }} >Submit</MDBBtn>
        )}

      </form>
      </Mymodal>
    {/* <ToastContainer/> */}
    </>
  )
}

export default AddEmployee
import axios from '../axios.jsx'
import React, {useEffect, useState}from 'react'
import ShowModal from '../ShowModal.jsx'
import Mymodal from '../ShowModal.jsx';
import '../../style/modal.css'
import UserData from '../AccountCharge/UserData.jsx';
import '../../style/UserData.css'
import {ToastContainer, toast} from 'react-toastify'
import Pagination from '../Pagination.js';
import DeptData from './DeptData.jsx';
// const API="https://jsonplaceholder.typicode.com"

function AddDept() {

    const [ShowModal, setShowModal]=useState(false);
    const [currentPage, setCurrentPage]=useState(1);
    const [userPerPage, setUserPerPage] = useState(3);
    const [isError, setIsError] =useState('');

    const [dept, setDept] = useState({
      deptName : '',
      deptCode:'',
    },[] );
    
      const [allDept, setAllDept] = useState([]);



    if(userPerPage<1){
      setUserPerPage(3);
    }

    const closeModal = ()=>{
        return setShowModal(false);
    }


    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setDept((prevDept) => ({ ...prevDept, [name]: value }));
    };


      const  handleSubmit = async (event) => {
        
        event.preventDefault();
        
        
        console.log(dept);  
        
        
        try{
          const res = await axios.post("/save", dept);
          toast.success('Submit Successfully')
          setAllDept([...allDept, dept]);
          console.log(res);

        }catch(error){
          toast.error("Form not Submitted !! , please try again")
          console.log(error);
        }

      };

      
      // const postFormData=async(url)=>{

      //     try{
      //             const res = await axios.post(url,{user});
      //             console.log(res);

      //     }catch(error){
      //       setIsError(error.message);
      //       console.log(error.message);
      //     }
      // }

    const handleUserPerPage=({e,target,value})=>{
      return setUserPerPage(e.target.value)
    }


    const showToast=()=>{
      if(isError!=="")
      {
        toast.error("Error !! form not submittd, pleae try again")
      }else{
        toast.success('Submit Successfully')
      }
    }

    const lastIndex = currentPage*userPerPage;
    const firstIndex = lastIndex - userPerPage;
    const slicedAllDept=allDept.slice(firstIndex, lastIndex);



    const mainModal =(

        <Mymodal closeModal={closeModal} handleSubmit={handleSubmit} handleInputChange={handleInputChange} >

              <button id='close-btn' onClick={closeModal}>close</button>
                <h2>Form</h2>

              <form onSubmit={handleSubmit}  className='form'>

              <div >
                  <label htmlFor="deptName">Department Name:</label>
                  <input
                    type="text"
                    name="deptName"
                    id="deptName"
                    value={dept.deptName}
                    onChange={handleInputChange}
                    placeholder="Enter deptName"
                    required
                  />
              </div>
              <div >
                  <label htmlFor="deptCode">Department code:</label>
                  <input
                    type="text"
                    name="deptCode"
                    id="deptCode"
                    value={dept.deptCode}
                    onChange={handleInputChange}
                    placeholder="Enter deptCode"
                    required
                  />
              </div>
     
      
        
                        
              {/* onClick={closeModal} */}
                <button className='modal-btn' type='submit' >Submit</button>
              </form>

        </Mymodal>
    )


  return (
   <>

   <button className='modal-btn' onClick={()=>setShowModal(true)}>Add Department</button>
   {ShowModal && mainModal}

   <div className="user-list">
        <h3>Department List Added</h3>

          <input type="number" className='userPerPageClass' name='userPerPage' value={userPerPage} onChange={(e)=>{setUserPerPage(e.target.value)}} />

        {allDept.length > 0 ?
        <div className='table-responsive'>
         <table className='table userTable'>
            <thead>
            <tr>
                {/* <th>ID</th> */}
                <th>Department Name</th>
                <th>Department code</th>
               
            </tr>
            </thead>
            <tbody>
            <DeptData slicedAllDept={slicedAllDept}/>
            </tbody>
            {/* <Pagination totalUsers={users.length} userPerPage={userPerPage} setCurrentPage={setCurrentPage} currPage={currentPage}/> */}
        </table> 
        <Pagination totalUsers={allDept.length} userPerPage={userPerPage} setCurrentPage={setCurrentPage} currPage={currentPage}/>
        </div>: (
          <p>No Department added yet.</p>
        )}
      </div>
  
 
    <ToastContainer/>
   
   </>

    
  )
}

export default AddDept;
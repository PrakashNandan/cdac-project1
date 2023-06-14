import axios from '../axios.jsx'
import React, {useEffect, useState}from 'react'

import Mymodal from '../ShowModal.jsx'
import '../../style/modal.css'
import BillTypeData from './BillTypeData.jsx'
import '../../style/UserData.css'
import {ToastContainer, toast} from 'react-toastify'
import Pagination from '../Pagination.js';
// const API="https://jsonplaceholder.typicode.com"

function AddBillType() {

    const [ShowModal, setShowModal]=useState(false);
    const [currentPage, setCurrentPage]=useState(1);
    const [billTypePerPage, setBillTypePerPage] = useState(3)
    const [isError, setIsError] =useState('');

    const [billType, setBillType] = useState({
        billTypeName: '',
        entryDate: ''
 
      },[]);
    
      const [billTypes, setBillTypes] = useState([]);



    if(billTypePerPage<1){
      setBillTypePerPage(3);
    }

    const closeModal = ()=>{
        return setShowModal(false);
    }


    const handleInputChange = (event) => {
        const { name, value, type, checked } = event.target;
        const inputValue = type === 'checkbox' ? checked : value;
        setBillType((prevBillType) => ({ ...prevBillType, [name]: inputValue }));
    };


      const  handleSubmit = async (event) => {
        
        event.preventDefault();
        
        
        console.log(billType);  
        
        
        try{
          const res = await axios.post("/billType/save", billType);
          toast.success('Submit Successfully')
          setBillTypes([...billTypes, billType]);
          console.log(res);

        }catch(error){
          toast.error("Form not Submitted !! , please try again")
          console.log(error);
        }
        closeModal();

      };

      
      const postFormData=async(url)=>{

          try{
                  const res = await axios.post(url,{billType});
                  console.log(res);

          }catch(error){
            setIsError(error.message);
            console.log(error.message);
          }
      }

    // const handleBillTypePerPage=({e,target,value})=>{
    //   return setBillTypePerPage(e.target.value)
    // }


    const showToast=()=>{
      if(isError!=="")
      {
        toast.error("Error !! form not submittd, pleae try again")
      }else{
        toast.success('Submit Successfully')
      }
    }

    const lastIndex = currentPage*billTypePerPage;
    const firstIndex = lastIndex - billTypePerPage;
    const currBillType=billTypes.slice(firstIndex, lastIndex);



    const mainModal =(

        <Mymodal closeModal={closeModal} handleSubmit={handleSubmit} handleInputChange={handleInputChange} >

              <button id='close-btn' onClick={closeModal}>close</button>
              <h2>Form</h2>

              <form onSubmit={handleSubmit}  className='form'>

              <div >
                  {/* <label htmlFor="chargeName">Charge Name:</label> */}
                  <input
                    type="text"
                    name="billTypeName"
                    id="billTypeName"
                    value={billType.billTypeName}
                    onChange={handleInputChange}
                    placeholder="Enter Bill Type"
                    required
                  />
              </div>
              <div >
                  <label htmlFor="entryDate">Entry Date: &nbsp;</label>
                  <input
                    type="date"
                    name="entryDate"
                    id="entryDate"
                    value={billType.entryDate}
                    onChange={handleInputChange}
                    placeholder="Enter entryDate"
                    // required
                  />
              </div>
              {/* onClick={closeModal} */}
                <button className='modal-btn' type='submit' >Submit</button>
              </form>

        </Mymodal>
    )


  return (
   <>

   <button className='modal-btn' onClick={()=>setShowModal(true)}>Add Bill Type</button>
   {ShowModal && mainModal}

   <div className="user-list">
        <h3>Bill Type List</h3>

          <input type="number" className='userPerPageClass' name='billTypePerPage' value={billTypePerPage} onChange={(e)=>{setBillTypePerPage(e.target.value)}} />

        {billTypes.length > 0 ?
        <div className='table-responsive'>
         <table className='table userTable'>
            <thead>
            <tr>
                {/* <th>ID</th> */}
                <th>BillTypeName</th>
                <th>entryDate</th>
                
            </tr>
            </thead>
            <tbody>
            <BillTypeData billTypes={currBillType}/>
            </tbody>
            {/* <Pagination totalUsers={users.length} userPerPage={userPerPage} setCurrentPage={setCurrentPage} currPage={currentPage}/> */}
        </table> 
        <Pagination totalUsers={billTypes.length} userPerPage={billTypePerPage} setCurrentPage={setCurrentPage} currPage={currentPage}/>
        </div>: (
          <p>No bill types added yet.</p>
        )}
      </div>
  
 
    <ToastContainer/>
   
   </>

    
  )
}

export default AddBillType;
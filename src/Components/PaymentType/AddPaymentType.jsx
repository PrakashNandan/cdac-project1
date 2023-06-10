import axios from '../axios.jsx'
import React, {useEffect, useState}from 'react'

import Mymodal from '../ShowModal.jsx'
import '../../style/modal.css'
import PaymentTypeData from './PaymentTypeData.jsx'
import '../../style/UserData.css'
import {ToastContainer, toast} from 'react-toastify'
import Pagination from '../Pagination.js';
// const API="https://jsonplaceholder.typicode.com"

function AddPaymentType() {

    const [ShowModal, setShowModal]=useState(false);
    const [currentPage, setCurrentPage]=useState(1);
    const [paymentTypePerPage, setPaymentTypePerPage] = useState(3);
    const [isError, setIsError] =useState('');

    const [paymentType, setPaymentType] = useState({
        paymentTypeName: '',
        entryDate: ''
        

        
      },[]);
    
      const [paymentTypes, setPaymentTypes] = useState([]);



    if(paymentTypePerPage<1){
      setPaymentTypePerPage(3);
    }

    const closeModal = ()=>{
        return setShowModal(false);
    }


    const handleInputChange = (event) => {
        const { name, value, type, checked } = event.target;
        const inputValue = type === 'checkbox' ? checked : value;
        setPaymentType((prevpaymentType) => ({ ...prevpaymentType, [name]: inputValue }));
    };


      const  handleSubmit = async (event) => {
        
        event.preventDefault();
        
        
        console.log(paymentType);  
        
        
        try{
          const res = await axios.post("/paymentType/save", paymentType);
          toast.success('Submit Successfully')
          setPaymentTypes([...paymentTypes, paymentType]);
          console.log(res);

        }catch(error){
          toast.error("Form not Submitted !! , please try again")
          console.log(error);
        }

      };

      
      const postFormData=async(url)=>{

          try{
                  const res = await axios.post(url,{paymentType});
                  console.log(res);

          }catch(error){
            setIsError(error.message);
            console.log(error.message);
          }
      }

    // const handlepaymentTypePerPage=({e,target,value})=>{
    //   return setpaymentTypePerPage(e.target.value)
    // }


    const showToast=()=>{
      if(isError!=="")
      {
        toast.error("Error !! form not submittd, pleae try again")
      }else{
        toast.success('Submit Successfully')
      }
    }

    const lastIndex = currentPage*paymentTypePerPage;
    const firstIndex = lastIndex - paymentTypePerPage;
    const currPaymentType=paymentTypes.slice(firstIndex, lastIndex);



    const mainModal =(

        <Mymodal closeModal={closeModal} handleSubmit={handleSubmit} handleInputChange={handleInputChange} >

              <button id='close-btn' onClick={closeModal}>close</button>
              <h2>Form</h2>

              <form onSubmit={handleSubmit}  className='form'>

              <div >
                  {/* <label htmlFor="chargeName">Charge Name:</label> */}
                  <input
                    type="text"
                    name="paymentTypeName"
                    id="paymentTypeName"
                    value={paymentType.paymentTypeName}
                    onChange={handleInputChange}
                    placeholder="Enter payment Type"
                    required
                  />
              </div>
              <div >
                  <label htmlFor="entryDate">Entry Date:</label>
                  <input
                    type="date"
                    name="entryDate"
                    id="entryDate"
                    value={paymentType.entryDate}
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

   <button className='modal-btn' onClick={()=>setShowModal(true)}>Add payment Type</button>
   {ShowModal && mainModal}

   <div className="user-list">
        <h3>Payment Type List</h3>

          <input type="number" className='userPerPageClass' name='paymentTypePerPage' value={paymentTypePerPage} onChange={(e)=>{setPaymentTypePerPage(e.target.value)}} />

        {paymentTypes.length > 0 ?
        <div className='table-responsive'>
         <table className='table userTable'>
            <thead>
            <tr>
                {/* <th>ID</th> */}
                <th>PaymentType</th>
                
            </tr>
            </thead>
            <tbody>
            <PaymentTypeData paymentTypes={currPaymentType}/>
            </tbody>
            {/* <Pagination totalUsers={users.length} userPerPage={userPerPage} setCurrentPage={setCurrentPage} currPage={currentPage}/> */}
        </table> 
        <Pagination totalUsers={paymentTypes.length} userPerPage={paymentTypePerPage} setCurrentPage={setCurrentPage} currPage={currentPage}/>
        </div>: (
          <p>No payment types added yet.</p>
        )}
      </div>
  
 
    <ToastContainer/>
   
   </>

    
  )
}

export default AddPaymentType;
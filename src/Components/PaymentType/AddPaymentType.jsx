import axios from '../axios.jsx'
import React, { useEffect, useState } from 'react'

import Mymodal from '../ShowModal.jsx'
import '../../style/modal.css'
import PaymentTypeData from './PaymentTypeData.jsx'
import '../../style/UserData.css'
import { ToastContainer, toast } from 'react-toastify'
import Pagination from '../Pagination.js';
import { MDBContainer, MDBCol, MDBRow, MDBBtn, MDBIcon, MDBInput, MDBCheckbox } from 'mdb-react-ui-kit';
import { privateAxios } from '../../service/helperUtil.js'
// const API="https://jsonplaceholder.typicode.com"

function AddPaymentType() {

  const [ShowModal, setShowModal] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [paymentTypePerPage, setPaymentTypePerPage] = useState(3);
  const [isError, setIsError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [paymentType, setPaymentType] = useState({
    paymentTypeName: '',
    entryDate: '',
    isValid: ''

  }, []);

  const [paymentTypes, setPaymentTypes] = useState([]);



  if (paymentTypePerPage < 1) {
    setPaymentTypePerPage(3);
  }

  const closeModal = () => {
    return setShowModal(false);
  }


  const handleInputChange = (event) => {
    const { name, value, type, checked } = event.target;
    const inputValue = type === 'checkbox' ? checked : value;
    setPaymentType((prevpaymentType) => ({ ...prevpaymentType, [name]: inputValue }));
  };


  const handleSubmit = async (event) => {

    event.preventDefault();
    setIsSubmitting(true);

    console.log(paymentType);


    try {
      const res = await axios.post("/paymentType/save", paymentType);
      toast.success('Submit Successfully')
      setPaymentTypes([...paymentTypes, paymentType]);
      console.log(res);

    } catch (error) {
      toast.error("Form not Submitted !! , please try again")
      console.log(error);
    }

    setIsSubmitting(false);
    closeModal();
  };


  const postFormData = async (url) => {

    try {
      const res = await axios.post(url, { paymentType });
      console.log(res);

    } catch (error) {
      setIsError(error.message);
      console.log(error.message);
    }
  }

  // const handlepaymentTypePerPage=({e,target,value})=>{
  //   return setpaymentTypePerPage(e.target.value)
  // }


  const showToast = () => {
    if (isError !== "") {
      toast.error("Error !! form not submittd, pleae try again")
    } else {
      toast.success('Submit Successfully')
    }
  }

  const lastIndex = currentPage * paymentTypePerPage;
  const firstIndex = lastIndex - paymentTypePerPage;
  const currPaymentType = paymentTypes.slice(firstIndex, lastIndex);



  const mainModal = (

    <Mymodal closeModal={closeModal} handleSubmit={handleSubmit} handleInputChange={handleInputChange} >

      <button id='close-btn' onClick={closeModal}>close</button>
      <h2>Form</h2>

      <form onSubmit={handleSubmit} className='form'>

        <div className="d-flex flex-row align-items-center mb-3 mt-3">
          <MDBIcon fas icon="pen-to-square" size='lg' style={{ marginRight: '10px' }} />
          <MDBInput
            label="Payment Type"
            type="text"
            name="paymentTypeName"
            id="paymentTypeName"
            value={paymentType.paymentTypeName}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="d-flex flex-row align-items-center mb-3">
          <MDBIcon fas icon="calendar" size='lg' style={{ marginRight: '13px' }} />
          <MDBInput
            label="Entry Date"
            type="date"
            name="entryDate"
            id="entryDate"
            value={paymentType.entryDate}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="d-flex flex-row align-items-center mb-3">
          <MDBIcon fas icon="pen-to-square" size='lg' style={{ marginRight: '13px' }} />
          <MDBInput
            label="Is Valid?"
            type="number"
            name="isValid"
            id="isValid"
            value={paymentType.isValid}
            onChange={handleInputChange}
            required
          />
        </div>

        {isSubmitting ? (
          <MDBBtn className='btn-rounded mt-3 btn-lg' style={{ width: '100%' }} disabled>
            <span class="spinner-border" style={{ margin: '0 0.3rem', height: '1.2rem', width: '1.2rem' }} role="status" aria-hidden="true"></span>
            Submitting...
          </MDBBtn>
        ) : (
          <MDBBtn className='btn-rounded mt-3 btn-lg' style={{ width: '100%' }} >Submit</MDBBtn>
        )}

      </form>

    </Mymodal>
  )


  return (
    <>

      <button className='modal-btn' id='addButton' onClick={() => setShowModal(true)}>Add payment Type</button>
      {ShowModal && mainModal}

      <div className="user-list">
        <h3>Payment Type List</h3>

        <input type="number" className='userPerPageClass' name='paymentTypePerPage' value={paymentTypePerPage} onChange={(e) => { setPaymentTypePerPage(e.target.value) }} />

        {paymentTypes.length > 0 ?
          <div className='table-responsive'>
            <table className='table userTable'>
              <thead>
                <tr>
                  {/* <th>ID</th> */}
                  <th>PaymentType Name</th>
                  <th>Entry Date</th>
                  <th>Is Valid</th>

                </tr>
              </thead>
              <tbody>
                <PaymentTypeData paymentTypes={currPaymentType} />
              </tbody>
              {/* <Pagination totalUsers={users.length} userPerPage={userPerPage} setCurrentPage={setCurrentPage} currPage={currentPage}/> */}
            </table>
            <Pagination totalUsers={paymentTypes.length} userPerPage={paymentTypePerPage} setCurrentPage={setCurrentPage} currPage={currentPage} />
          </div> : (
            <p>No payment types added yet.</p>
          )}
      </div>


      <ToastContainer />

    </>


  )
}

export default AddPaymentType;
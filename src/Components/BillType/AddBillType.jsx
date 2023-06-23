import axios from '../axios.jsx'
import React, { useEffect, useState } from 'react'

import Mymodal from '../ShowModal.jsx'
import '../../style/modal.css'
import BillTypeData from './BillTypeData.jsx'
import '../../style/UserData.css'
import { ToastContainer, toast } from 'react-toastify'
import Pagination from '../Pagination.js';
import { MDBContainer, MDBCol, MDBRow, MDBBtn, MDBIcon, MDBInput, MDBCheckbox } from 'mdb-react-ui-kit';
import { privateAxios } from '../../service/helperUtil.js'
// const API="https://jsonplaceholder.typicode.com"


function AddBillType() {

  const [ShowModal, setShowModal] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [billTypePerPage, setBillTypePerPage] = useState(3);
  const [isError, setIsError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [billType, setBillType] = useState({
    billTypeName: '',
    entryDate: ''

  }, []);

  const [billTypes, setBillTypes] = useState([]);



  if (billTypePerPage < 1) {
    setBillTypePerPage(3);
  }

  const closeModal = () => {
    return setShowModal(false);
  }


  const handleInputChange = (event) => {
    const { name, value, type, checked } = event.target;
    const inputValue = type === 'checkbox' ? checked : value;
    setBillType((prevBillType) => ({ ...prevBillType, [name]: inputValue }));
  };


  const handleSubmit = async (event) => {

    event.preventDefault();
    setIsSubmitting(true);


    console.log(billType);


    try {
      const res = await axios.post("/billType/save", billType);
      toast.success('Submit Successfully')
      setBillTypes([...billTypes, billType]);
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
      const res = await axios.post(url, { billType });
      console.log(res);

    } catch (error) {
      setIsError(error.message);
      console.log(error.message);
    }
  }

  // const handleBillTypePerPage=({e,target,value})=>{
  //   return setBillTypePerPage(e.target.value)
  // }


  const showToast = () => {
    if (isError !== "") {
      toast.error("Error !! form not submittd, pleae try again")
    } else {
      toast.success('Submit Successfully')
    }
  }

  const lastIndex = currentPage * billTypePerPage;
  const firstIndex = lastIndex - billTypePerPage;
  const currBillType = billTypes.slice(firstIndex, lastIndex);



  const mainModal = (

    <Mymodal closeModal={closeModal} handleSubmit={handleSubmit} handleInputChange={handleInputChange} >

      <button id='close-btn' onClick={closeModal}>close</button>
      <h2>Form</h2>

      <form onSubmit={handleSubmit} className='form'>

        <div className="d-flex flex-row align-items-center mb-3 mt-3">
          <MDBIcon fas icon="pen-to-square" size='lg' style={{ marginRight: '10px' }} />
          <MDBInput
            label="Bill Type Name"
            type="text"
            name="billTypeName"
            id="billTypeName"
            value={billType.billTypeName}
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
            value={billType.entryDate}
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

      <button className='modal-btn' id='addButton' onClick={() => setShowModal(true)}>Add Bill Type</button>
      {ShowModal && mainModal}

      <div className="user-list">
        <h3>Bill Type List</h3>

        <input type="number" className='userPerPageClass' name='billTypePerPage' value={billTypePerPage} onChange={(e) => { setBillTypePerPage(e.target.value) }} />

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
                <BillTypeData billTypes={currBillType} />
              </tbody>
              {/* <Pagination totalUsers={users.length} userPerPage={userPerPage} setCurrentPage={setCurrentPage} currPage={currentPage}/> */}
            </table>
            <Pagination totalUsers={billTypes.length} userPerPage={billTypePerPage} setCurrentPage={setCurrentPage} currPage={currentPage} />
          </div> : (
            <p>No bill types added yet.</p>
          )}
      </div>


      <ToastContainer />

    </>


  )
}

export default AddBillType;
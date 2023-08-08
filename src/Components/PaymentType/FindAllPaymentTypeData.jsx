import axios from '../axios.jsx';
import React, { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import Mymodal from '../ShowModal.jsx';
import { privateAxios } from '../../service/helperUtil.js';
import { MDBContainer, MDBCol, MDBRow, MDBBtn, MDBIcon, MDBInput, MDBCheckbox } from 'mdb-react-ui-kit';

function FindAllPaymentType({ allData, setAllData, handleFindALL }) {

  const [showModal, setShowModal] = useState(false);
  const [dataForUpdate, setDataForUpdate] = useState([]);
  const [uid, setUid] = useState();
  const [isSubmitting, setIsSubmitting] = useState(false);

  //  useEffect(async()=>{
  //     try{

  //       const res = await axios.get(`/users/${uid}`);
  //       setDataForUpdate(res.data);
  //     }catch(error){
  //       alert("error from useEffect")
  //       console.log(error.message)
  //     }
  //   },[uid])


  const handleDeleteData = async (id) => {

    const conf = window.confirm("Are you sure to delete the data with id: " + (+id))
    if (conf) {

      try {
        const res = await privateAxios.get(`/paymentType/delete/${id}`)
        toast.warn("The data has Deleted Successfully")
        setAllData(res.data);
        console.log(res);
        handleFindALL();

      } catch (error) {
        toast.error("Error in deletion")
        console.log(error.message);
      }

      // handleFindALL();
    }
  }
  const today = new Date();
  const date = today.setDate(today.getDate());
  const defaultValue = new Date(date).toISOString().split('T')[0] // yyyy-mm-dd

  const handleUpdateData = async (curData) => {
    setShowModal(true);
    // setDataForUpdate((prevUser) => ({ ...prevUser, id: id }));
    setUid(curData.paymentTypeId);
    

    setDataForUpdate({
      paymentTypeId: curData.paymentTypeId,
      entryDate: defaultValue,
      isValid: curData.isValid

    })


  }

  const closeModal = () => {
    return setShowModal(false);

  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    try {
      const res = await privateAxios.put(`/paymentType/update/${uid}`, dataForUpdate);
      console.log(res.data);
      toast.success("updated Successfully")
    } catch (error) {
      toast.error("Error !! Not updated");
      console.log(error.message);
    }
    setIsSubmitting(false);
    closeModal();
    handleFindALL();
  }

  const handleInputChange = (event) => {
    const { name, value, type, checked } = event.target;
    const inputValue = type === 'checkbox' ? checked : value;
    setDataForUpdate((prevpaymentType) => ({ ...prevpaymentType, [name]: inputValue }));
  }



  const mainModal = (

    <Mymodal closeModal={closeModal} handleSubmit={handleSubmit} handleInputChange={handleInputChange} >

      <button id='close-btn' onClick={closeModal}>close</button>
      <h2>Update ID: {dataForUpdate.paymentTypeId}</h2>

      <form onSubmit={handleSubmit} className='form'>

        <div className="d-flex flex-row align-items-center mt-3 mb-3">
          <MDBIcon fas icon="pen-to-square" size='lg' style={{ marginRight: '10px' }} />
          <MDBInput
            label="Payment Type"
            type="text"
            name="paymentTypeName"
            id="paymentTypeName"
            value={dataForUpdate.paymentTypeName}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="d-flex flex-row align-items-center mb-3">
          <MDBIcon fas icon="calendar" size='lg' style={{ marginRight: '10px' }} />
          <MDBInput
            label="Entry Date"
            type="date"
            name="entryDate"
            id="entryDate"
            value={dataForUpdate.entryDate}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="d-flex flex-row align-items-center mb-3">
          <MDBIcon fas icon="pen-to-square" size='lg' style={{ marginRight: '10px' }} />
          <MDBInput
            label="Is Valid?"
            type="number"
            name="isValid"
            id="isValid"
            value={dataForUpdate.isValid}
            onChange={handleInputChange}
            required
          />
        </div>

        {isSubmitting ? (
          <MDBBtn className='btn-rounded mt-3 btn-lg' style={{ width: '100%' }} disabled>
            <span class="spinner-border" style={{ margin: '0 0.3rem', height: '1.2rem', width: '1.2rem' }} role="status" aria-hidden="true"></span>
            Updating...
          </MDBBtn>
        ) : (
          <MDBBtn className='btn-rounded mt-3 btn-lg' style={{ width: '100%' }} >Update</MDBBtn>
        )}

      </form>

    </Mymodal>
  )


  return (
    <>


      {showModal && mainModal}


      {
        allData && allData.length > 0 &&
        allData.map((curData) => {
          const { paymentTypeId, paymentTypeName,
            entryDate, isValid
          } = curData;


          return (
            <tr >
              <td>{paymentTypeId}</td>
              <td>{paymentTypeName}</td>
              <td>{entryDate}</td>
              <td>{isValid}</td>

              {/* <td>{entryDate}</td> */}


              <td><button type="button" class="btn btn-danger btn-sm" onClick={() => handleDeleteData(paymentTypeId)}>Delete</button>
                <button type="button" class="btn ml-2 btn-secondary btn-sm" onClick={() => handleUpdateData(curData)}>Update</button>
              </td>
            </tr>
          )
        })

      }
      <ToastContainer />

    </>
  )
}

export default FindAllPaymentType;
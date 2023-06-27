import axios from '../axios.jsx';
import React, { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import Mymodal from '../ShowModal.jsx';
import { privateAxios } from '../../service/helperUtil.js';
import { MDBContainer, MDBCol, MDBRow, MDBBtn, MDBIcon, MDBInput, MDBCheckbox } from 'mdb-react-ui-kit';


function FindAllBillType({ allData, setAllData, handleFindALL }) {

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
        const res = await privateAxios.get(`/billType/delete/${id}`)
          .then((res) => {
            setAllData([res.data]);
            toast.warn("The data has Deleted Successfully")
            console.log(res);
            handleFindALL();
          }).catch((err) => { console.log(err) })


        // setAllData([res.data]);
        // toast.warn("The data has Deleted Successfully")
        // console.log(res);
        // handleFindALL();

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
    setUid(curData.billTypeId);

    // if(allData.length===1){
    //   console.log(allData[0]);
    //   const user1=allData[0];
    //   setDataForUpdate(user1);

    // }else{
    //   try{
    //       const res = await axios.get(`/billType/find/${id}`);
    //       setDataForUpdate(res.data);

    //       }catch(error){
    //         console.log(error.message);
    //         toast.error("NOT Found !!!")
    //       }

    // }



    setDataForUpdate({
      billTypeId: curData.billTypeId,
      billTypeName: curData.billTypeName,
      entryDate: defaultValue,
    })






  }

  const closeModal = () => {
    return setShowModal(false);

  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    try {
      const res = await privateAxios.put(`/billType/update/${uid}`, dataForUpdate);
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
    setDataForUpdate((prevBillType) => ({ ...prevBillType, [name]: inputValue }));
  }



  const mainModal = (

    <Mymodal closeModal={closeModal} handleSubmit={handleSubmit} handleInputChange={handleInputChange} >

      <button id='close-btn' onClick={closeModal}>close</button>
      {/* <h2>Form</h2> */}
      <h4 style={{ color: 'black', marginBottom: '1rem' }}> <strong>Update ID : {dataForUpdate.billTypeId}</strong> </h4>

      <form onSubmit={handleSubmit} className='form'>

        <div className="d-flex flex-row align-items-center mb-3 mt-3">
          <MDBIcon fas icon="address-card" size='lg' style={{ marginRight: '5px' }} />
          <MDBInput
            label="Bill Type ID"
            type="number"
            name="billTypeId"
            id="billTypeId"
            value={dataForUpdate.billTypeId}
            onChange={handleInputChange}
            disabled
          />
        </div>

        <div className="d-flex flex-row align-items-center mb-3">
          <MDBIcon fas icon="pen-to-square" size='lg' style={{ marginRight: '10px' }} />
          <MDBInput
            label="Bill Type Name"
            type="text"
            name="billTypeName"
            id="billTypeName"
            value={dataForUpdate.billTypeName}
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
            value={dataForUpdate.entryDate}
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
          const { billTypeId, billTypeName, entryDate
          } = curData;


          return (
            <tr >
              <td>{billTypeId}</td>
              <td>{billTypeName}</td>
              <td>{entryDate}</td>

              {/* <td>{entryDate}</td> */}


              <td><button type="button" class="btn btn-danger" onClick={() => handleDeleteData(billTypeId)}>Delete</button>
                <button type="button" class="btn m-1 btn-light" onClick={() => handleUpdateData(curData)}>Update</button>
              </td>
            </tr>
          )
        })

      }
      <ToastContainer />

    </>
  )
}

export default FindAllBillType;
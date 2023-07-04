import axios from '../axios.jsx';
import React, { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import Mymodal from '../ShowModal.jsx';
import { privateAxios } from '../../service/helperUtil.js';
import { MDBContainer, MDBCol, MDBRow, MDBBtn, MDBIcon, MDBInput, MDBCheckbox } from 'mdb-react-ui-kit';

function FindAllData({ allData, setAllData, handleFindALL }) {

  const [showModal, setShowModal] = useState(false);
  const [dataForUpdate, setDataForUpdate] = useState({
    chargeId: '',
    chargeName: '',
    chargeType: '',
    chargeRate: '',
    entryDate: '',
    chargeAmount: '',
    chargeApplyOnBaseAmount: '',
    roundingType: '',
    hoaPostingRequired: false,
    depositToGovt: false,
  });
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
        const res = await privateAxios.get(`/charge/delete/${id}`)
        toast.warn("The data has Deleted Successfully")
        setAllData(res.data);
        console.log(res);
        // runUseEffect();
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
    setUid(curData.chargeId);

    // if(allData.length===1){
    //   console.log(allData[0]);
    //   const user1=allData[0];
    //   setDataForUpdate(user1);

    // }else{
    //   try{
    //       const res = await privateAxios.get(`/charge/find/${id}`);
    //       console.log(res.data.pageList.content + "hello prakash");
    //       setDataForUpdate(res.data.pageList.content);

    //       }catch(error){
    //         console.log(error.message);
    //         toast.error("NOT Found !!!")
    //       }

    // }



    // const date = `${current.getFullYear()}-${current.getMonth()+1}-${current.getDate()}`;
    // console.log(date);



    setDataForUpdate({
      chargeId: curData.chargeId,
      chargeName: curData.chargeName,
      chargeType: curData.chargeType,
      chargeRate: curData.chargeRate,
      entryDate: defaultValue,
      chargeAmount: curData.chargeAmount,
      chargeApplyOnBaseAmount: curData.chargeApplyOnBaseAmount,
      roundingType: curData.roundingType,
      hoaPostingRequired: curData.hoaPostingRequired,
      depositToGovt: curData.depositToGovt,
    }
    )



  }

  const closeModal = () => {
    return setShowModal(false);

  }

  const handleUpdateSubmit = async (event) => {

    event.preventDefault();
    setIsSubmitting(true);

    try {
      const res = await privateAxios.put(`/charge/update/${uid}`, dataForUpdate).then((res) => console.log(res)).catch((err) => console.log(err))
      // console.log(res.data.pageList.content);
      toast.success("updated Successfully")
    } catch (error) {
      toast.error("Error !! Not updated");
      console.log(error);
    }

    setIsSubmitting(false);
    closeModal();
    // runUseEffect();
    handleFindALL();
  }

  const handleInputChange = (event) => {
    const { name, value, type, checked } = event.target;
    const inputValue = type === 'checkbox' ? checked : value;
    setDataForUpdate((prevUser) => ({ ...prevUser, [name]: inputValue }));
  }



  const mainModal = (

    <Mymodal closeModal={closeModal} handleSubmit={handleUpdateSubmit} handleInputChange={handleInputChange}  >

      <button id='close-btn' onClick={closeModal}>close</button>
      <h2>Form</h2>

      <form onSubmit={handleUpdateSubmit} className='modalForm' id='modalForm'>

        <div className="d-flex flex-row align-items-center mb-3 mt-3">
          <MDBIcon fas icon="address-card" size='lg' style={{ marginRight: '5px' }} />
          <MDBInput
            label="ID"
            type="number"
            name="id"
            id="id"
            value={dataForUpdate.id}
            onChange={handleInputChange}
            disabled
          />
        </div>

        <div className="d-flex flex-row align-items-center mb-3">
          <MDBIcon fas icon="user-pen" size='lg' style={{marginRight: '5px'}} />
          <MDBInput
            label="Charge Name"
            type="text"
            name="chargeName"
            id="chargeName"
            value={dataForUpdate.chargeName}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="d-flex flex-row align-items-center mb-3">
          <MDBIcon fas icon="pen-to-square" size='lg' style={{marginRight: '10px'}}/>
          <MDBInput
            label="Charge Type"
            type="number"
            name="chargeType"
            id="chargeType"
            value={dataForUpdate.chargeType}
            onChange={handleInputChange}
          // required
          />
        </div>

        <div className="d-flex flex-row align-items-center mb-3">
          <MDBIcon fas icon="pen-to-square" size='lg' style={{marginRight: '10px'}}/>
          <MDBInput
            label="Charge Rate"
            type="number"
            name="chargeRate"
            id="chargeRate"
            value={dataForUpdate.chargeRate}
            onChange={handleInputChange}
          // required
          />
        </div>

        <div className="d-flex flex-row align-items-center mb-3">
          <MDBIcon fas icon="calendar" size='lg' style={{marginRight: '13px'}}/>
          <MDBInput
            label="Entry Date"
            type="date"
            name="entryDate"
            id="entryDate"
            value={dataForUpdate.entryDate}
            onChange={handleInputChange}
          // required
          />
        </div>

        <div className="d-flex flex-row align-items-center mb-3">
          <MDBIcon fas icon="indian-rupee-sign" size='lg' style={{marginRight: '15px', marginLeft: '3px'}}/>
          <MDBInput
            label="Charge Amount"
            type="number"
            name="chargeAmount"
            id="chargeAmount"
            value={dataForUpdate.chargeAmount}
            onChange={handleInputChange}
          // required
          />
        </div>

        <div className="d-flex flex-row align-items-center mb-3">
          <MDBIcon fas icon="pen-to-square" size='lg' style={{marginRight: '10px'}}/>
          <MDBInput
            label="Charge Apply on Base Amt."
            type="number"
            name="chargeApplyOnBaseAmount"
            id="chargeApplyOnBaseAmount"
            value={dataForUpdate.chargeApplyOnBaseAmount}
            onChange={handleInputChange}
          // required
          />
        </div>

        <div className="d-flex flex-row align-items-center mb-3">
          <MDBIcon fas icon="pen-to-square" size='lg' style={{marginRight: '10px'}}/>
          <MDBInput
            label="Rounding Type"
            type="number"
            name="roundingType"
            id="roundingType"
            value={dataForUpdate.roundingType}
            onChange={handleInputChange}
          // required
          />
        </div>

        <div style={{paddingLeft: '30px', paddingTop: '5px'}}>
          <MDBCheckbox
            label="Hoa Posting Required?"
            type="checkbox"
            name="hoaPostingRequired"
            id="hoaPostingRequired"
            checked={dataForUpdate.hoaPostingRequired}
            onChange={handleInputChange}

          />
        </div>
        <div style={{paddingLeft: '30px', paddingTop: '3px'}}>
          <MDBCheckbox
            label="Deposit to Govt?"
            type="checkbox"
            name="depositToGovt"
            id="depositToGovt"
            checked={dataForUpdate.depositToGovt}
            onChange={handleInputChange}
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
          const { chargeId, chargeName,
            chargeType,
            chargeRate,
            entryDate,
            chargeAmount,
            chargeApplyOnBaseAmount,
            roundingType,
            hoaPostingRequired,
            depositToGovt, } = curData;


          return (
            <tr >
              <td>{chargeId}</td>
              <td>{chargeName}</td>
              <td>{chargeType}</td>
              <td>{chargeRate}</td>
              <td>{entryDate}</td>
              <td>{chargeAmount}</td>
              <td>{chargeApplyOnBaseAmount}</td>
              <td>{roundingType}</td>
              <td>{hoaPostingRequired === true ? "YES" : "NO"}</td>
              <td>{depositToGovt === true ? "YES" : "NO"}</td>

              <td><button type="button" class="btn btn-danger" onClick={() => handleDeleteData(chargeId)}>Delete</button>
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

export default FindAllData;

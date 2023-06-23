import axios from '../axios.jsx';
import React, { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import Mymodal from '../ShowModal.jsx';
import { privateAxios } from '../../service/helperUtil.js';


function FindAllFinYear({ allData, setAllData, handleFindALL }) {

  const [showModal, setShowModal] = useState(false);
  const [dataForUpdate, setDataForUpdate] = useState([]);
  const [uid, setUid] = useState();


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
        const res = await privateAxios.get(`finYear/delete/${id}`)
        toast.warn("The data has Deleted Successfully")
        setAllData([res.data]);
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
    setUid(curData.finYearId);

    // if (allData.length === 1) {
    //   console.log(allData[0]);
    //   const finYear1 = allData[0];
    //   setDataForUpdate(finYear1);

    // } else {
    //   try {
    //     const res = await axios.get(`finYear/find/${id}`);
    //     setDataForUpdate(res.data);

    //   } catch (error) {
    //     console.log(error.message);
    //     toast.error("NOT Found !!!")
    //   }

    // }

    setDataForUpdate({
      finYearId:curData.finYearId,
      finYearStartDate:curData.finYearStartDate,
      finYearEndDate:curData.finYearEndDate,
      finYearName:curData.finYearName,
      remarks:curData.remarks,
      entryDate:defaultValue

    })









  }

  const closeModal = () => {
    return setShowModal(false);

  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const res = await privateAxios.put(`finYear/update/${uid}`, dataForUpdate);
      console.log(res.data);
      toast.success("updated Successfully")
    } catch (error) {
      toast.error("Error !! Not updated");
      console.log(error.message);
    }

    closeModal();
    handleFindALL();
  }

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setDataForUpdate((prevFinYear) => ({ ...prevFinYear, [name]: value }));
  };

  const mainModal = (

    <Mymodal closeModal={closeModal} handleSubmit={handleSubmit} handleInputChange={handleInputChange} >

      <button id='close-btn' onClick={closeModal}>close</button>
      <h2>Form</h2>

      <form onSubmit={handleSubmit} className='form'>

        <div >
          <label htmlFor="finYearId">Financial Year ID:</label>
          <input
            type="number"
            name="finYearId"
            id="finYearId"
            value={dataForUpdate.finYearId}
            onChange={handleInputChange}
            placeholder="finYearId"
            disabled
          />
        </div>
        <div >
          <label htmlFor="finYearStartDate">Financial Year Start Date:</label>
          <input
            type="date"
            name="finYearStartDate"
            id="finYearStartDate"
            value={dataForUpdate.finYearStartDate}
            onChange={handleInputChange}
            placeholder="Enter finYearStartDate"
            required
          />
        </div>

        <div >
          <label htmlFor="finYearEndDate">Financial Year End Date:</label>
          <input
            type="date"
            name="finYearEndDate"
            id="finYearEndDate"
            value={dataForUpdate.finYearEndDate}
            onChange={handleInputChange}
            placeholder="Enter finYearEndDate"
            required
          />
        </div>
        <div >
          <label htmlFor="finYearName">Financial Year Name:</label>
          <input
            type="text"
            name="finYearName"
            id="finYearName"
            value={dataForUpdate.finYearName}
            onChange={handleInputChange}
            placeholder="Enter finYearName"
            required
          />
        </div>
        <div >
          <label htmlFor="remarks">Remarks :</label>
          <input
            type="text"
            name="remarks"
            id="remarks"
            value={dataForUpdate.remarks}
            onChange={handleInputChange}
            placeholder="Enter remarks"
            required
          />
        </div>
        <div >
          <label htmlFor="entryDate">Entry Date:</label>
          <input
            type="date"
            name="entryDate"
            id="entryDate"
            value={dataForUpdate.entryDate}
            onChange={handleInputChange}
            placeholder="Enter entryDate"
            required
          />
        </div>



        {/* onClick={closeModal} */}
        <button className='modal-btn' type='submit'>Submit</button>
      </form>

    </Mymodal>
  )


  return (
    <>


      {showModal && mainModal}


      {
        allData && allData.length > 0 &&
        allData.map((curData) => {
          const { finYearId, finYearStartDate, finYearEndDate, finYearName, remarks, entryDate } = curData;


          return (
            <tr >
              <td>{finYearId}</td>
              <td>{finYearStartDate}</td>
              <td>{finYearEndDate}</td>
              <td>{finYearName}</td>
              <td>{remarks}</td>
              <td>{entryDate}</td>


              <td><button type="button" class="btn btn-danger" onClick={() => handleDeleteData(finYearId)}>Delete</button>
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

export default FindAllFinYear;
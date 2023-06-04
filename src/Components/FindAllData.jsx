import axios from './axios.jsx';
import React, {useEffect, useState} from 'react'
import {ToastContainer, toast} from 'react-toastify'
import Mymodal from './ShowModal.jsx';


function FindAllData({allData, handleFindALL}) {

  const [showModal, setShowModal] = useState(false);
  const [dataForUpdate, setDataForUpdate] = useState([]);
  const [uid, setUid]= useState();

  

//  useEffect(async()=>{
//     try{

//       const res = await axios.get(`/users/${uid}`);
//       setDataForUpdate(res.data);
//     }catch(error){
//       alert("error from useEffect")
//       console.log(error.message)
//     }
//   },[uid])

 




  const handleDeleteData=async(id)=>{

    const conf = window.confirm("Are you sure to delete the data with id: "+id)
    if(conf){

        try{
            const res = await axios.delete(`/users/${id}`)
            toast.warn("The data has Deleted Successfully")
            console.log(res);
        }catch(error){
            toast.error("Error in deletion")
            console.log(error.message);
        }
    
        handleFindALL();
    }
  }

  const handleUpdateData=async(id)=>{
      setShowModal(true);
      // setDataForUpdate((prevUser) => ({ ...prevUser, id: id }));
      setUid(id);

      // try{
      //   const res = await axios.get(`/users/${uid}`);
      //   setDataForUpdate(res.data);

      //   }catch(error){
      //     console.log(error.message);
      //     alert("error........")
      //   }

  }

  const closeModal = ()=>{
    return setShowModal(false);
    
  }

  const handleSubmit=async(event)=>{
        event.preventDefault();
        try{
          const res = await axios.put(`/users/${uid}`, dataForUpdate );
          console.log(res);
          toast.success("updated Successfully")
        }catch(error){
          toast.error("Error !! Not updated");
          console.log(error.message);
        }
        
        closeModal();

  }

  const handleInputChange=(event)=>{
    const { name, value, type, checked } = event.target;
    const inputValue = type === 'checkbox' ? checked : value;
    setDataForUpdate((prevUser) => ({ ...prevUser, [name]: inputValue }));
  }



  const mainModal =(

    <Mymodal closeModal={closeModal} handleSubmit={handleSubmit} handleInputChange={handleInputChange} >

          <button id='close-btn' onClick={closeModal}>close</button>
          <h2>Form</h2>

          <form onSubmit={handleSubmit}  className='form'>

          <div >
              {/* <label htmlFor="chargeName">Charge Name:</label> */}
              <input
                type="number"
                name="id"
                id="id"
                value={dataForUpdate.id}
                onChange={handleInputChange}
                placeholder="ID"
                disabled
              />
          </div>
          <div >
              {/* <label htmlFor="chargeName">Charge Name:</label> */}
              <input
                type="text"
                name="chargeName"
                id="chargeName"
                value={dataForUpdate.chargeName}
                onChange={handleInputChange}
                placeholder="Enter chargeName"
                required
              />
          </div>
          <div >
              {/* <label htmlFor="chargeType">Charge Type:</label> */}
              <input
                type="number"
                name="chargeType"
                id="chargeType"
                value={dataForUpdate.chargeType}
                onChange={handleInputChange}
                placeholder="Enter chargeType"
                // required
              />
          </div>
          <div >
              {/* <label htmlFor="chargeRate">Charge Rate:</label> */}
              <input
                type="number"
                name="chargeRate"
                id="chargeRate"
                value={dataForUpdate.chargeRate}
                onChange={handleInputChange}
                placeholder="Enter chargeRate"
                // required
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
                // required
              />
          </div>
          <div >
              {/* <label htmlFor="chargeAmount">charge Amount:</label> */}
              <input
                type="number"
                name="chargeAmount"
                id="chargeAmount"
                value={dataForUpdate.chargeAmount}
                onChange={handleInputChange}
                placeholder="Enter chargeAmount"
                // required
              />
          </div>
          <div >
              {/* <label htmlFor="chargeApplyOnBaseAmount">chargeApplyOnBaseAmount:</label> */}
              <input
                type="number"
                name="chargeApplyOnBaseAmount"
                id="chargeApplyOnBaseAmount"
                value={dataForUpdate.chargeApplyOnBaseAmount}
                onChange={handleInputChange}
                placeholder="Enter chargeApplyOnBaseAmount"
                // required
              />
          </div>
          <div >
              {/* <label htmlFor="roundingType">Rounding Type:</label> */}
              <input
                type="number"
                name="roundingType"
                id="roundingType"
                value={dataForUpdate.roundingType}
                onChange={handleInputChange}
                placeholder="Enter roundingType"
                // required
              />
          </div>
          <div >
              <label htmlFor="hoaPostingRequired">hoaPostingRequired:</label>
              <input
                type="checkbox"
                name="hoaPostingRequired"
                id="hoaPostingRequired"
                checked={dataForUpdate.hoaPostingRequired}
                onChange={handleInputChange}
                placeholder="Enter hoaPostingRequired"
                
              />
          </div>
          <div >
              <label htmlFor="isDepositetoGovt">is Deposite to Govt ? </label>
              <input
                type="checkbox"
                name="isDepositetoGovt"
                id="isDepositetoGovt"
                checked={dataForUpdate.isDepositetoGovt}
                onChange={handleInputChange}
                placeholder="Enter isDepositetoGovt"
                
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
        allData.map((curData) => {
            const {id,chargeName,
            chargeType,
            chargeRate,
            entryDate,
            chargeAmount,
            chargeApplyOnBaseAmount,
            roundingType,
            hoaPostingRequired,
            isDepositetoGovt,} = curData;

            // const {id,name,username,email} = curData;
           

            return (
                <tr >
                    <td>{id}</td> 
                    <td>{chargeName}</td>
                    <td>{chargeType}</td>
                    <td>{chargeRate}</td>
                    <td>{entryDate}</td>
                    <td>{chargeAmount}</td>
                    <td>{chargeApplyOnBaseAmount}</td>
                    <td>{roundingType}</td>
                    <td>{hoaPostingRequired===true ? "YES" : "NO" }</td>
                    <td>{isDepositetoGovt===true ? "YES" : "NO"}</td>  

                    {/* <td>{id}</td>
                    <td>{name}</td>
                    <td>{username}</td>
                    <td>{email}</td> */}
                    <td><button type="button" class="btn btn-danger" onClick={()=>handleDeleteData(id)}>Delete</button>
                        <button type="button" class="btn m-1 btn-light" onClick={()=>handleUpdateData(id)}>Update</button>
                    </td>
                </tr>
            )
        })

    }
    <ToastContainer/>

    </>
  )
}

export default FindAllData;
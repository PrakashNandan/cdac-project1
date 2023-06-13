import axios from '../axios.jsx';
import React, {useEffect, useState} from 'react'
import {ToastContainer, toast} from 'react-toastify'
import Mymodal from '../ShowModal.jsx';


function FindBillBoxData({allData,setAllData, handleFindALL}) {

  const [showModal, setShowModal] = useState(false);
  const [dataForUpdate, setDataForUpdate] = useState([]);
  const [uid, setUid]= useState();


  const handleDeleteData=async(id)=>{

    const conf = window.confirm("Are you sure to delete the data with id: "+(+id))
    if(conf){

        try{
            const res = await axios.get(`/charge/delete/${id}`)
            toast.warn("The data has Deleted Successfully")
            setAllData(res.data);
            console.log(res);
            handleFindALL();

        }catch(error){
            toast.error("Error in deletion")
            console.log(error.message);
        }
    
        // handleFindALL();
    }
  }

  const handleUpdateData=async(id)=>{
      setShowModal(true);
      setUid(id);

      if(allData.length===1){
        console.log(allData[0]);
        const user1=allData[0];
        setDataForUpdate(user1);

      }else{
        try{
            const res = await axios.get(`/charge/find/${id}`);
            setDataForUpdate(res.data);
    
            }catch(error){
              console.log(error.message);
              toast.error("NOT Found !!!")
            }
    
      }
      
  }

  const closeModal = ()=>{
    return setShowModal(false);
    
  }

  const handleSubmit=async(event)=>{
        event.preventDefault();
        try{
          const res = await axios.put(`/charge/update/${uid}`, dataForUpdate );
          console.log(res.data);
          toast.success("updated Successfully")
        }catch(error){
          toast.error("Error !! Not updated");
          console.log(error.message);
        }
        
        closeModal();
        handleFindALL();
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
              <label htmlFor="depositToGovt">is Deposite to Govt ? </label>
              <input
                type="checkbox"
                name="depositToGovt"
                id="depositToGovt"
                checked={dataForUpdate.depositToGovt}
                onChange={handleInputChange}
               
                
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

        /*

                            <th>ID</th> 
                            <th>billSlNo</th>
                            <th>BillType</th>
                            <th>BillCategory</th>
                            <th>FundingSource</th>
                            <th>invoiceNo</th>
                            <th>invoiceDate</th>
                            <th>entryDate</th>
                            <th>baseAmount</th>
                            <th>billNetAmount</th>
                            <th>valid</th>
                            <th>remarks</th>
                            <th>Actions</th>
                            <th>Download</th>

        */
    {
      allData && allData.length > 0 &&
        allData.map((curData) => {
            const {billBoxId,billSlNo,BillType,BillCategory,FundingSource,invoiceNo,invoiceDate,entryDate,
                baseAmount,billNetAmount,valid,remarks,
                } = curData;

          
            return (
                <tr >
                    <td>{billBoxId}</td> 
                    <td>{billSlNo}</td>
                    <td>{BillType}</td>
                    <td>{BillCategory}</td>
                    <td>{FundingSource}</td>
                    <td>{invoiceNo}</td>
                    <td>{invoiceDate}</td>
                    <td>{entryDate}</td>
                    <td>{baseAmount}</td>
                    <td>{billNetAmount}</td>
                    <td>{valid===1 ? "YES" : "NO" }</td>
                    <td>{remarks}</td>
  
                    <td><button type="button" class="btn btn-danger" onClick={()=>handleDeleteData(chargeId)}>Delete</button>
                        <button type="button" class="btn m-1 btn-light" onClick={()=>handleUpdateData(chargeId)}>Update</button>
                    </td>
                    <td>Pdf</td>
                </tr>
            )
        })

    }
    <ToastContainer/>

    </>
  )
}

export default FindBillBoxData;
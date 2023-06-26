import axios from '../axios.jsx';
import React, {useEffect, useState} from 'react'
import {ToastContainer, toast} from 'react-toastify'
import Mymodal from '../ShowModal.jsx';
import { privateAxios } from '../../service/helperUtil.js';


function FindAllPaymentType({allData,setAllData, handleFindALL}) {

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

    const conf = window.confirm("Are you sure to delete the data with id: "+(+id))
    if(conf){

        try{
            const res = await privateAxios.get(`/paymentType/delete/${id}`)
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
  const today = new Date();
  const date = today.setDate(today.getDate()); 
  const defaultValue = new Date(date).toISOString().split('T')[0] // yyyy-mm-dd
  
  const handleUpdateData=async(curData)=>{
      setShowModal(true);
      // setDataForUpdate((prevUser) => ({ ...prevUser, id: id }));
      setUid(curData.paymentTypeId);
/*
      if(allData.length===1){
        console.log(allData[0]);
        const user1=allData[0];
        setDataForUpdate(user1);

      }else{
        try{
            const res = await axios.get(`/paymentType/find/${id}`);
            setDataForUpdate(res.data);
    
            }catch(error){
              console.log(error.message);
              toast.error("NOT Found !!!")
            }
    
      }
  */

      setDataForUpdate({
        paymentTypeId:curData.paymentTypeId,
        paymentTypeName:curData.paymentTypeName,
        entryDate:  defaultValue ,
        isValid:curData.isValid

      })

      
  }

  const closeModal = ()=>{
    return setShowModal(false);
    
  }

  const handleSubmit=async(event)=>{
        event.preventDefault();
        try{
          const res = await privateAxios.put(`/paymentType/update/${uid}`, dataForUpdate );
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
    setDataForUpdate((prevpaymentType) => ({ ...prevpaymentType, [name]: inputValue }));
  }



  const mainModal =(

    <Mymodal closeModal={closeModal} handleSubmit={handleSubmit} handleInputChange={handleInputChange} >

          <button id='close-btn' onClick={closeModal}>close</button>
          {/* <h2>Form</h2> */}
          <h4 style={{color:'black', marginBottom:'1rem'}}> <strong>Update ID : {dataForUpdate.paymentTypeId}</strong> </h4>


          <form onSubmit={handleSubmit}  className='form'>

          <div >
              {/* <label htmlFor="chargeName">Charge Name:</label> */}
              <input
                type="number"
                name="paymentTypeId"
                id="paymentTypeId"
                value={dataForUpdate.paymentTypeId}
                onChange={handleInputChange}
                placeholder="paymentTypeId"
                hidden
              />
          </div>
          <div >
              {/* <label htmlFor="chargeName">Charge Name:</label> */}
              <input
                type="text"
                name="paymentTypeName"
                id="paymentTypeName"
                value={dataForUpdate.paymentTypeName}
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
                value={dataForUpdate.entryDate}
                onChange={handleInputChange}
                placeholder="Enter entryDate"
                // required
              />
          </div>
          <div >
                  <input
                    type="isValid"
                    name="isValid"
                    id="isValid"
                    value={dataForUpdate.isValid}
                    onChange={handleInputChange}
                    placeholder="is Valid"
                    // required
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
            const {paymentTypeId,paymentTypeName,
              entryDate,isValid
            } = curData;

          
            return (
                <tr >
                    <td>{paymentTypeId}</td> 
                    <td>{paymentTypeName}</td>
                    <td>{entryDate}</td>
                    <td>{isValid}</td>
                    
                    {/* <td>{entryDate}</td> */}
                   

                    <td><button type="button" class="btn btn-danger" onClick={()=>handleDeleteData(paymentTypeId)}>Delete</button>
                        <button type="button" class="btn m-1 btn-light" onClick={()=>handleUpdateData(curData)}>Update</button>
                    </td>
                </tr>
            )
        })

    }
    <ToastContainer/>

    </>
  )
}

export default FindAllPaymentType;
import axios from '../axios.jsx';
import React, {useEffect, useState} from 'react'
import {ToastContainer, toast} from 'react-toastify'
import Mymodal from '../ShowModal.jsx';
import { privateAxios } from '../../service/helperUtil.js';

function FindAllData({allData,setAllData, handleFindALL}) {

  const [showModal, setShowModal] = useState(false);
  const [dataForUpdate, setDataForUpdate] = useState({
    chargeId:'',
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
            const res = await privateAxios.get(`/charge/delete/${id}`)
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
        chargeId:curData.chargeId,
    chargeName: curData.chargeName,
    chargeType: curData.chargeType,
    chargeRate: curData.chargeRate,
    entryDate:defaultValue,
    chargeAmount: curData.chargeAmount,
    chargeApplyOnBaseAmount: curData.chargeApplyOnBaseAmount,
    roundingType: curData.roundingType,
    hoaPostingRequired: curData.hoaPostingRequired,
    depositToGovt: curData.depositToGovt,
      }
      )


      
  }

  const closeModal = ()=>{
    return setShowModal(false);
    
  }

  const handleSubmit=async(event)=>{
        
        event.preventDefault();
        try{
          const res = await privateAxios.put(`/charge/update/${uid}`, dataForUpdate ).then((res)=>console.log(res)).catch((err)=>console.log(err))
          // console.log(res.data.pageList.content);
          toast.success("updated Successfully")
        }catch(error){
          toast.error("Error !! Not updated");
          console.log(error);
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

    <Mymodal closeModal={closeModal} handleSubmit={handleSubmit} handleInputChange={handleInputChange}  >

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
                hidden
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
                defaultValue={defaultValue}
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


    {
      allData && allData.length > 0 &&
        allData.map((curData) => {
            const {chargeId,chargeName,
            chargeType,
            chargeRate,
            entryDate,
            chargeAmount,
            chargeApplyOnBaseAmount,
            roundingType,
            hoaPostingRequired,
            depositToGovt,} = curData;

          
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
                    <td>{hoaPostingRequired===true ? "YES" : "NO" }</td>
                    <td>{depositToGovt===true ? "YES" : "NO"}</td>  

                    <td><button type="button" class="btn btn-danger" onClick={()=>handleDeleteData(chargeId)}>Delete</button>
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

export default FindAllData;
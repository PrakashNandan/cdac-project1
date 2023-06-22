import axios from '../axios.jsx';
import React, {useEffect, useState} from 'react'
import {ToastContainer, toast} from 'react-toastify'
import Mymodal from '../ShowModal.jsx';
import { privateAxios } from '../../service/helperUtil.js';


function FindAllBillCategory({allData,setAllData, handleFindALL}) {

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
            const res = await privateAxios.get(`/billCategory/delete/${id}`)
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

  const handleUpdateData=async(curData)=>{
      setShowModal(true);
      // setDataForUpdate((prevUser) => ({ ...prevUser, id: id }));
      setUid(curData.billCategoryId);

      // if(allData.length===1){
      //   console.log(allData[0]);
      //   const user1=allData[0];
      //   setDataForUpdate(user1);

      // }else{
      //   try{
      //       const res = await privateAxios.get(`/billCategory/find/${id}`);
      //       setDataForUpdate(res.data);
    
      //       }catch(error){
      //         console.log(error.message);
      //         toast.error("NOT Found !!!")
      //       }
    
      // }

  setDataForUpdate({
      billCategoryId:curData.billCategoryId,
      billCategoryName:curData.billCategoryName

    })
  


      
  }

  const closeModal = ()=>{
    return setShowModal(false);
    
  }

  const handleSubmit=async(event)=>{
        event.preventDefault();
        console.log(dataForUpdate);
        try{
          const res = await axios.put(`/billCategory/update/${uid}`, dataForUpdate );
          console.log(res.data);
          toast.success("updated Successfully")
          handleFindALL();
        }catch(error){
          toast.error("Error !! Not updated");
          console.log(error.message);
        }
        
        closeModal();
  }

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setDataForUpdate((prevBillCategory) => ({ ...prevBillCategory, [name]: value }));
};

  const mainModal =(

    <Mymodal closeModal={closeModal} handleSubmit={handleSubmit} handleInputChange={handleInputChange} >

          <button id='close-btn' onClick={closeModal}>close</button>
          <h2>Form</h2>

          <form onSubmit={handleSubmit}  className='form'>

          <div >
              <label htmlFor="billCategoryId">Bill Category ID:</label>
              <input
                type="number"
                name="billCategoryId"
                id="billCategoryId"
                value={dataForUpdate.billCategoryId}
                onChange={handleInputChange}
                placeholder="billCategoryId"
                disabled
              />
          </div>
          <div >
              <label htmlFor="billCategoryName">Bill Category Name:</label>
              <input
                type="text"
                name="billCategoryName"
                id="billCategoryName"
                value={dataForUpdate.billCategoryName}
                onChange={handleInputChange}
                placeholder="Enter billCategoryName"
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
            const {billCategoryId,billCategoryName,
           } = curData;

          
            return (
                <tr >
                    <td>{billCategoryId}</td> 
                    <td>{billCategoryName}</td>
                   
                    <td><button type="button" class="btn btn-danger btn-sm" onClick={()=>handleDeleteData(billCategoryId)}>Delete</button>
                        <button type="button" class="btn ml-2 btn-secondary btn-sm" onClick={()=>handleUpdateData(curData)}>Update</button>
                    </td>
                </tr>
            )
        })

    }
    <ToastContainer/>

    </>
  )
}

export default FindAllBillCategory;

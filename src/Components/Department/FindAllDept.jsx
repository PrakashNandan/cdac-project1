import axios from '../axios.jsx';
import React, {useEffect, useState} from 'react'
import {ToastContainer, toast} from 'react-toastify'
import Mymodal from '../ShowModal.jsx';
import { privateAxios } from '../../service/helperUtil.js';


function FindAllDept({allData,setAllData, handleFindALL}) {

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
            const res = await privateAxios.get(`dept/delete/${id}`)
            toast.warn("The data has Deleted Successfully")
            setAllData([res.data]);
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
      setUid(curData.deptId);

      // if(allData.length===1){
      //   console.log(allData[0]);
      //   const dept1=allData[0];
      //   setDataForUpdate(dept1);

      // }else{
      //   try{
      //       const res = await axios.get(`dept/find/${id}`);
      //       setDataForUpdate(res.data);
    
      //       }catch(error){
      //         console.log(error.message);
      //         toast.error("NOT Found !!!")
      //       }
    
      // }


      setDataForUpdate({
        deptId:curData.deptId,
        deptName:curData.deptName,
        deptCode:curData.deptCode,
        
      })


      
  }

  const closeModal = ()=>{
    return setShowModal(false);
    
  }

  const handleSubmit=async(event)=>{
        event.preventDefault();
        try{
          const res = await privateAxios.put(`dept/update/${uid}`, dataForUpdate );
          console.log(res.data);
          toast.success("updated Successfully")
        }catch(error){
          toast.error("Error !! Not updated");
          console.log(error.message);
        }
        
        closeModal();
        handleFindALL();
  }

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setDataForUpdate((prevDept) => ({ ...prevDept, [name]: value }));
};

  const mainModal =(

    <Mymodal closeModal={closeModal} handleSubmit={handleSubmit} handleInputChange={handleInputChange} >

          <button id='close-btn' onClick={closeModal}>close</button>
          {/* <h2>Form</h2> */}
          <h4 style={{color:'black', marginBottom:'1rem'}}> <strong>Update ID : {dataForUpdate.deptId}</strong> </h4>

          <form onSubmit={handleSubmit}  className='form'>

          <div >
              {/* <label htmlFor="chargeName">Department ID:</label> */}
              <input
                type="number"
                name="deptId"
                id="deptId"
                value={dataForUpdate.deptId}
                onChange={handleInputChange}
                placeholder="Department ID"
                hidden
              />
          </div>
          <div >
              <label htmlFor="chargeName">Department Name:</label>
              <input
                type="text"
                name="deptName"
                id="deptName"
                value={dataForUpdate.deptName}
                onChange={handleInputChange}
                placeholder="Enter deptName"
                required
              />
          </div>
     
          <div >
              <label htmlFor="chargeName">Department code :</label>
              <input
                type="text"
                name="deptCode"
                id="deptCode"
                value={dataForUpdate.deptCode}
                onChange={handleInputChange}
                placeholder="Enter deptCode"
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
            const {deptId,deptName,deptCode} = curData;

          
            return (
                <tr >
                    <td>{deptId}</td> 
                    <td>{deptName}</td>
                    <td>{deptCode}</td>
                   

                    <td><button type="button" class="btn btn-danger" onClick={()=>handleDeleteData(deptId)}>Delete</button>
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

export default FindAllDept;
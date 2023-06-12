import axios from '../axios.jsx';
import React, {useEffect, useState} from 'react'
import {ToastContainer, toast} from 'react-toastify'
import Mymodal from '../ShowModal.jsx';


function FindAllFundingSource({allData,setAllData, handleFindALL}) {

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
            const res = await axios.get(`/fundSource/delete/${id}`)
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
      // setDataForUpdate((prevUser) => ({ ...prevUser, id: id }));
      setUid(id);

      if(allData.length===1){
        console.log(allData[0]);
        const user1=allData[0];
        setDataForUpdate(user1);

      }else{
        try{
            const res = await axios.get(`/fundSource/find/${id}`);
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
          const res = await axios.put(`/fundSource/update/${uid}`, dataForUpdate );
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
    setAllData((prevFundingSource) => ({ ...prevFundingSource, [name]: value }));
};

  const mainModal =(

    <Mymodal closeModal={closeModal} handleSubmit={handleSubmit} handleInputChange={handleInputChange} >

          <button id='close-btn' onClick={closeModal}>close</button>
          <h2>Form</h2>

          <form onSubmit={handleSubmit}  className='form'>

          <div >
              {/* <label htmlFor="chargeName">Charge Name:</label> */}
              <input
                type="number"
                name="fundingSourceId"
                id="fundingSourceId"
                value={dataForUpdate.fundingSourceId}
                onChange={handleInputChange}
                placeholder="fundingSourceId"
                disabled
              />
          </div>
          <div >
              {/* <label htmlFor="chargeName">Charge Name:</label> */}
              <input
                type="text"
                name="fundingSourceName"
                id="fundingSourceName"
                value={dataForUpdate.fundingSourceName}
                onChange={handleInputChange}
                placeholder="Enter fundingSourceName"
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
            const {fundingSourceId,fundingSourceName,
           } = curData;

          
            return (
                <tr >
                    <td>{fundingSourceId}</td> 
                    <td>{fundingSourceName}</td>
                   

                    <td><button type="button" class="btn btn-danger" onClick={()=>handleDeleteData(fundingSourceId)}>Delete</button>
                        <button type="button" class="btn m-1 btn-light" onClick={()=>handleUpdateData(fundingSourceId)}>Update</button>
                    </td>
                </tr>
            )
        })

    }
    <ToastContainer/>

    </>
  )
}

export default FindAllFundingSource;
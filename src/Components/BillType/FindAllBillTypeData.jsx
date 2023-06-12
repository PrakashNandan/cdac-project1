import axios from '../axios.jsx';
import React, {useEffect, useState} from 'react'
import {ToastContainer, toast} from 'react-toastify'
import Mymodal from '../ShowModal.jsx';


function FindAllBillType({allData,setAllData, handleFindALL}) {

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
            const res = await axios.get(`/billType/delete/${id}`)
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
            const res = await axios.get(`/billType/find/${id}`);
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
          const res = await axios.put(`/billType/update/${uid}`, dataForUpdate );
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
    setDataForUpdate((prevBillType) => ({ ...prevBillType, [name]: inputValue }));
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
                name="billTypeId"
                id="billTypeId"
                value={dataForUpdate.billTypeId}
                onChange={handleInputChange}
                placeholder="billTypeId"
                disabled
              />
          </div>
          <div >
              {/* <label htmlFor="chargeName">Charge Name:</label> */}
              <input
                type="text"
                name="billTypeName"
                id="billTypeName"
                value={dataForUpdate.billTypeName}
                onChange={handleInputChange}
                placeholder="Enter Bill Type"
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
            const {billTypeId,billTypeName, entryDate
            } = curData;

          
            return (
                <tr >
                    <td>{billTypeId}</td> 
                    <td>{billTypeName}</td>
                    <td>{entryDate}</td>
                    
                    {/* <td>{entryDate}</td> */}
                   

                    <td><button type="button" class="btn btn-danger" onClick={()=>handleDeleteData(billTypeId)}>Delete</button>
                        <button type="button" class="btn m-1 btn-light" onClick={()=>handleUpdateData(billTypeId)}>Update</button>
                    </td>
                </tr>
            )
        })

    }
    <ToastContainer/>

    </>
  )
}

export default FindAllBillType;
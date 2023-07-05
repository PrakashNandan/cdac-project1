import axios from '../axios.jsx';
import React, {useEffect, useState} from 'react'
import {ToastContainer, toast} from 'react-toastify'
import Mymodal from '../ShowModal.jsx';
import { privateAxios } from '../../service/helperUtil.js';
import { MDBContainer, MDBCol, MDBRow, MDBBtn, MDBIcon, MDBInput, MDBCheckbox } from 'mdb-react-ui-kit';

function FindAllFundingSource({allData,setAllData, handleFindALL}) {

  const [showModal, setShowModal] = useState(false);
  const [dataForUpdate, setDataForUpdate] = useState([]);
  const [uid, setUid]= useState();
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


  const handleDeleteData=async(id)=>{

    const conf = window.confirm("Are you sure to delete the data with id: "+(+id))
    if(conf){

        try{
            const res = await privateAxios.get(`/fundSource/delete/${id}`)
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
      setUid(curData.fundingSourceId);
/*
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
*/

      setDataForUpdate({
        fundingSourceId:curData.fundingSourceId,
        fundingSourceName:curData.fundingSourceName
      })
      
  }

  const closeModal = ()=>{
    return setShowModal(false);
    
  }

  const handleSubmit=async(event)=>{
        event.preventDefault();
        setIsSubmitting(true);
        try{
          const res = await privateAxios.put(`/fundSource/update/${uid}`, dataForUpdate );
          console.log(res.data);
          toast.success("updated Successfully")
        }catch(error){
          toast.error("Error !! Not updated");
          console.log(error.message);
        }
        setIsSubmitting(false);
        closeModal();
        handleFindALL();
  }

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setDataForUpdate((prevFundingSource) => ({ ...prevFundingSource, [name]: value }));
};

  const mainModal =(

    <Mymodal closeModal={closeModal} handleSubmit={handleSubmit} handleInputChange={handleInputChange} >

          <button id='close-btn' onClick={closeModal}>close</button>
          {/* <h2>Form</h2> */}
          <h4 style={{color:'black', marginBottom:'1rem'}}> <strong>Update ID : {dataForUpdate.fundingSourceId}</strong> </h4>


          <form onSubmit={handleSubmit} className='form'>

          <div className="d-flex flex-row align-items-center mb-3 mt-3">
          <MDBIcon fas icon="address-card" size='lg' style={{ marginRight: '5px' }} />
          <MDBInput
            label="Funding Source ID"
            type="number"
            name="fundingSourceId"
            id="fundingSourceId"
            value={dataForUpdate.fundingSourceId}
            onChange={handleInputChange}
            disabled
          />
        </div>

        <div className="d-flex flex-row align-items-center mb-3">
          <MDBIcon fas icon="pen-to-square" size='lg' style={{ marginRight: '10px' }} />
          <MDBInput
            label="Funding Source Name"
            type="text"
            name="fundingSourceName"
            id="fundingSourceName"
            value={dataForUpdate.fundingSourceName}
            onChange={handleInputChange}
            required
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
            const {fundingSourceId,fundingSourceName,
           } = curData;

          
            return (
                <tr >
                    <td>{fundingSourceId}</td> 
                    <td>{fundingSourceName}</td>
                   

                    <td><button type="button" class="btn btn-danger btn-sm" onClick={()=>handleDeleteData(fundingSourceId)}>Delete</button>
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

export default FindAllFundingSource;
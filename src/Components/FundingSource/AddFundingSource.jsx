import axios from '../axios.jsx'
import React, {useEffect, useState}from 'react'
import Mymodal from '../ShowModal.jsx';
import '../../style/modal.css'
import FundingSourceData from './FundingSourceData.jsx';
import '../../style/UserData.css'
import {ToastContainer, toast} from 'react-toastify'
import Pagination from '../Pagination.js';
// const API="https://jsonplaceholder.typicode.com"

function AddFundingSource() {

    const [ShowModal, setShowModal]=useState(false);
    const [currentPage, setCurrentPage]=useState(1);
    const [userPerPage, setUserPerPage] = useState(3);
    const [isError, setIsError] =useState('');

    const [fundingSource, setFundingSource] = useState({
      fundingSourceName : '',
    },[] );
    
      const [allFundingSource, setAllFundingSource] = useState([]);



    if(userPerPage<1){
      setUserPerPage(3);
    }

    const closeModal = ()=>{
        return setShowModal(false);
    }


    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFundingSource((prevFundingSource) => ({ ...prevFundingSource, [name]: value }));
    };


      const  handleSubmit = async (event) => {
        
        event.preventDefault();
        
        
        console.log(fundingSource);  
        
        
        try{
          const res = await axios.post("/fundSource/save", fundingSource);
          toast.success('Submit Successfully')
          setAllFundingSource([...allFundingSource, fundingSource]);
          console.log(res);

        }catch(error){
          toast.error("Form not Submitted !! , please try again")
          console.log(error);
        }

        closeModal();

      };

      
      // const postFormData=async(url)=>{

      //     try{
      //             const res = await axios.post(url,{user});
      //             console.log(res);

      //     }catch(error){
      //       setIsError(error.message);
      //       console.log(error.message);
      //     }
      // }

    const handleUserPerPage=({e,target,value})=>{
      return setUserPerPage(e.target.value)
    }


    const showToast=()=>{
      if(isError!=="")
      {
        toast.error("Error !! form not submittd, pleae try again")
      }else{
        toast.success('Submit Successfully')
      }
    }

    const lastIndex = currentPage*userPerPage;
    const firstIndex = lastIndex - userPerPage;
    const currFundingSource=allFundingSource.slice(firstIndex, lastIndex);



    const mainModal =(

        <Mymodal closeModal={closeModal} handleSubmit={handleSubmit} handleInputChange={handleInputChange} >

              <button id='close-btn' onClick={closeModal}>close</button>
                <h2>Form</h2>

              <form onSubmit={handleSubmit}  className='form'>

              <div >
                  {/* <label htmlFor="chargeName">Charge Name:</label> */}
                  <input
                    type="text"
                    name="fundingSourceName"
                    id="fundingSourceName"
                    value={fundingSource.fundingSourceName}
                    onChange={handleInputChange}
                    placeholder="Enter fundingSourceName"
                    required
                  />
              </div>
     
      
        
                        
              {/* onClick={closeModal} */}
                <button className='modal-btn' type='submit' >Submit</button>
              </form>

        </Mymodal>
    )


  return (
   <>

   <button className='modal-btn' onClick={()=>setShowModal(true)}>Add Funding Source</button>
   {ShowModal && mainModal}

   <div className="user-list">
        <h3>Funding Source Name List</h3>

          <input type="number" className='userPerPageClass' name='userPerPage' value={userPerPage} onChange={(e)=>{setUserPerPage(e.target.value)}} />

        {allFundingSource.length > 0 ?
        <div className='table-responsive'>
         <table className='table userTable'>
            <thead>
            <tr>
                {/* <th>ID</th> */}
                <th>FundingSource Name</th>
               
            </tr>
            </thead>
            <tbody>
            <FundingSourceData allFundingSource={currFundingSource}/>
            </tbody>
            {/* <Pagination totalUsers={users.length} userPerPage={userPerPage} setCurrentPage={setCurrentPage} currPage={currentPage}/> */}
        </table> 
        <Pagination totalUsers={allFundingSource.length} userPerPage={userPerPage} setCurrentPage={setCurrentPage} currPage={currentPage}/>
        </div>: (
          <p>No funding Source added yet.</p>
        )}
      </div>
  
 
    <ToastContainer/>
   
   </>

    
  )
}

export default AddFundingSource;
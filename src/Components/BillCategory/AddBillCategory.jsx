import axios from '../axios.jsx'
import React, { useEffect, useState } from 'react'
import ShowModal from '../ShowModal.jsx'
import Mymodal from '../ShowModal.jsx';
import '../../style/modal.css'
import UserData from '../AccountCharge/UserData.jsx';
import '../../style/UserData.css'
import { ToastContainer, toast } from 'react-toastify'
import Pagination from '../Pagination.js';
import BillData from './BillData.jsx';
import { privateAxios } from '../../service/helperUtil.js';
import { MDBContainer, MDBCol, MDBRow, MDBBtn, MDBIcon, MDBInput, MDBCheckbox } from 'mdb-react-ui-kit';
// const API="https://jsonplaceholder.typicode.com"

function AddBillCategory() {

  const [ShowModal, setShowModal] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [userPerPage, setUserPerPage] = useState(3);
  const [isError, setIsError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [billCategory, setBillCategory] = useState({
    billCategoryName: '',
  }, []);

  const [allBillCategory, setAllBillcategory] = useState([]);



  if (userPerPage < 1) {
    setUserPerPage(3);
  }

  const closeModal = () => {
    return setShowModal(false);
  }


  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setBillCategory((prevBillCategory) => ({ ...prevBillCategory, [name]: value }));
  };


  const handleSubmit = async (event) => {

    event.preventDefault();
    setIsSubmitting(true);


    console.log(billCategory);


    try {
      const res = await privateAxios.post("billCategory/save", billCategory);
      toast.success('Submit Successfully')
      setAllBillcategory([...allBillCategory, billCategory]);
      console.log(res);

    } catch (error) {
      toast.error("Form not Submitted !! , please try again")
      console.log(error);
    }

    setIsSubmitting(false);
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

  const handleUserPerPage = ({ e, target, value }) => {
    return setUserPerPage(e.target.value)
  }


  const showToast = () => {
    if (isError !== "") {
      toast.error("Error !! form not submittd, pleae try again")
    } else {
      toast.success('Submit Successfully')
    }
  }

  const lastIndex = currentPage * userPerPage;
  const firstIndex = lastIndex - userPerPage;
  const currBillCategory = allBillCategory.slice(firstIndex, lastIndex);



  const mainModal = (



    <Mymodal closeModal={closeModal} handleSubmit={handleSubmit} handleInputChange={handleInputChange} >

      <button id='close-btn' onClick={closeModal}>close</button>
      <h2>Form</h2>

      <form onSubmit={handleSubmit} className='form'>
        <div className="d-flex flex-row align-items-center mb-3 mt-3">
          <MDBIcon fas icon="pen-to-square" size='lg' style={{ marginRight: '10px' }} />
          <MDBInput
            label="Bill Category Name"
            type="text"
            name="billCategoryName"
            id="billCategoryName"
            value={billCategory.billCategoryName}
            onChange={handleInputChange}
            required
          />
        </div>


        {isSubmitting ? (
          <MDBBtn className='btn-rounded mt-3 btn-lg' style={{ width: '100%' }} disabled>
            <span class="spinner-border" style={{ margin: '0 0.3rem', height: '1.2rem', width: '1.2rem' }} role="status" aria-hidden="true"></span>
            Submitting...
          </MDBBtn>
        ) : (
          <MDBBtn className='btn-rounded mt-3 btn-lg' style={{ width: '100%' }} >Submit</MDBBtn>
        )}
      </form>

    </Mymodal>
  )


  return (
    <>

      <button className='modal-btn' id='addButton' onClick={() => setShowModal(true)}>Add billCategoryName</button>
      {ShowModal && mainModal}

      <div className="user-list">
        <h3>Bill category Name List</h3>

        <input type="number" className='userPerPageClass' name='userPerPage' value={userPerPage} onChange={(e) => { setUserPerPage(e.target.value) }} />

        {allBillCategory.length > 0 ?
          <div className='table-responsive'>
            <table className='table userTable'>
              <thead>
                <tr>
                  {/* <th>ID</th> */}
                  <th>billCategoryName</th>

                </tr>
              </thead>
              <tbody>
                <BillData allBillCategory={currBillCategory} />
              </tbody>
              {/* <Pagination totalUsers={users.length} userPerPage={userPerPage} setCurrentPage={setCurrentPage} currPage={currentPage}/> */}
            </table>
            <Pagination totalUsers={allBillCategory.length} userPerPage={userPerPage} setCurrentPage={setCurrentPage} currPage={currentPage} />
          </div> : (
            <p>No billCategoryName added yet.</p>
          )}
      </div>


      <ToastContainer />

    </>


  )
}

export default AddBillCategory;
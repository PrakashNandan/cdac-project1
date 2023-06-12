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
// const API="https://jsonplaceholder.typicode.com"

function AddBillCategory() {

  const [ShowModal, setShowModal] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [userPerPage, setUserPerPage] = useState(3);
  const [isError, setIsError] = useState('');

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


    console.log(billCategory);


    try {
      const res = await axios.post("billCategory/save", billCategory);
      toast.success('Submit Successfully')
      setAllBillcategory([...allBillCategory, billCategory]);
      console.log(res);

    } catch (error) {
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

        <div >
          <label htmlFor="billCategoryName">Bill Category Name:</label>
          <input
            type="text"
            name="billCategoryName"
            id="billCategoryName"
            value={billCategory.billCategoryName}
            onChange={handleInputChange}
            placeholder="Enter billCategoryName"
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

      <button className='modal-btn' onClick={() => setShowModal(true)}>Add billCategoryName</button>
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
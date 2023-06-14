import axios from '../axios.jsx'
import React, { useEffect, useState } from 'react'
// import ShowModal from './ShowModal'
import Mymodal from '../ShowModal.jsx';
import '../../style/modal.css'
import UserData from './UserData';
import '../../style/UserData.css'
import { ToastContainer, toast } from 'react-toastify'
import Pagination from '../Pagination';
// const API="https://jsonplaceholder.typicode.com"

function Addcharges() {

  const [ShowModal, setShowModal] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [userPerPage, setUserPerPage] = useState(3);
  const [isError, setIsError] = useState('');

  const [user, setUser] = useState({
    chargeName: '',
    chargeType: '',
    chargeRate: '',
    entryDate: '',
    chargeAmount: '',
    chargeApplyOnBaseAmount: '',
    roundingType: '',
    hoaPostingRequired: false,
    depositToGovt: false,
  }, []);

  const [users, setUsers] = useState([]);



  if (userPerPage < 1) {
    setUserPerPage(3);
  }

  const closeModal = () => {
    return setShowModal(false);
  }


  const handleInputChange = (event) => {
    const { name, value, type, checked } = event.target;
    const inputValue = type === 'checkbox' ? checked : value;
    setUser((prevUser) => ({ ...prevUser, [name]: inputValue }));
  };


  const handleSubmit = async (event) => {

    event.preventDefault();


    console.log(user);


    try {
      const res = await axios.post("/charge/save", user);
      toast.success('Submit Successfully')
      setUsers([...users, user]);
      console.log(res);

    } catch (error) {
      toast.error("Form not Submitted !! , please try again")
      console.log(error);
    }

    closeModal();

  };


  const postFormData = async (url) => {

    try {
      const res = await axios.post(url, { user });
      console.log(res);

    } catch (error) {
      setIsError(error.message);
      console.log(error.message);
    }
  }

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
  const curruser = users.slice(firstIndex, lastIndex);



  const mainModal = (

    <Mymodal closeModal={closeModal} handleSubmit={handleSubmit} handleInputChange={handleInputChange}>

      <button id='close-btn' onClick={closeModal}>close</button>
      <h2>Form</h2>

      <form onSubmit={handleSubmit} className='form'>

        <div >
          {/* <label htmlFor="chargeName">Charge Name:</label> */}
          <input
            type="text"
            name="chargeName"
            id="chargeName"
            value={user.chargeName}
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
            value={user.chargeType}
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
            value={user.chargeRate}
            onChange={handleInputChange}
            placeholder="Enter chargeRate"
          // required
          />
        </div>
        <div>
          <label htmlFor="entryDate">Entry Date: &nbsp;</label>
          <input
            type="date"
            name="entryDate"
            id="entryDate"
            value={user.entryDate}
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
            value={user.chargeAmount}
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
            value={user.chargeApplyOnBaseAmount}
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
            value={user.roundingType}
            onChange={handleInputChange}
            placeholder="Enter roundingType"
          // required
          />
        </div>
        <div >
          <label htmlFor="hoaPostingRequired">hoaPostingRequired: &nbsp;</label>
          <input
            type="checkbox"
            name="hoaPostingRequired"
            id="hoaPostingRequired"

            checked={user.hoaPostingRequired}
            onChange={handleInputChange}
            placeholder="Enter hoaPostingRequired"

          />
        </div>
        <div >
          <label htmlFor="depositToGovt">is Deposit to Govt? &nbsp;</label>
          <input
            type="checkbox"
            name="depositToGovt"
            id="depositToGovt"
            checked={user.depositToGovt}
            onChange={handleInputChange}
            placeholder="Enter depositToGovt"

          />
        </div>

        {/* onClick={closeModal} */}
        <button className='modal-btn' type='submit' >Submit</button>
      </form>

    </Mymodal>
  )


  return (
    <>

      <button className='modal-btn' id='addButton' onClick={() => setShowModal(true)}>Add Charges</button>
      {ShowModal && mainModal}

      <div className="user-list">
        <h3>Charges List</h3>

        <input type="number" className='userPerPageClass' name='userPerPage' value={userPerPage} onChange={(e) => { setUserPerPage(e.target.value) }} />

        {users.length > 0 ?
          <div className='table-responsive'>
            <table className='table userTable'>
              <thead>
                <tr>
                  {/* <th>ID</th> */}
                  <th>ChargeName</th>
                  <th>ChargeType</th>
                  <th>ChargeRate</th>
                  <th>entryDate</th>
                  <th>chargeAmount</th>
                  <th>chargeApplyOnBaseAmount</th>
                  <th>roundingType</th>
                  <th>hoaPostingRequired</th>
                  <th>depositToGovt</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <UserData users={curruser} />
              </tbody>
              {/* <Pagination totalUsers={users.length} userPerPage={userPerPage} setCurrentPage={setCurrentPage} currPage={currentPage}/> */}
            </table>
            <Pagination totalUsers={users.length} userPerPage={userPerPage} setCurrentPage={setCurrentPage} currPage={currentPage} />
          </div> : (
            <p>No Charges added yet.</p>
          )}
      </div>


      <ToastContainer />

    </>


  )
}

export default Addcharges;
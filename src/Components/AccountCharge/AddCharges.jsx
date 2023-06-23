import axios from '../axios.jsx'
import React, { useEffect, useState } from 'react'
// import ShowModal from './ShowModal'
import Mymodal from '../ShowModal.jsx';
import '../../style/modal.css'
import UserData from './UserData';
import '../../style/UserData.css'
import { ToastContainer, toast } from 'react-toastify'
import Pagination from '../Pagination';
import { privateAxios } from '../../service/helperUtil.js';
import { MDBContainer, MDBCol, MDBRow, MDBBtn, MDBIcon, MDBInput, MDBCheckbox } from 'mdb-react-ui-kit';
// const API="https://jsonplaceholder.typicode.com"

function Addcharges() {

  const [ShowModal, setShowModal] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [userPerPage, setUserPerPage] = useState(3);
  const [isError, setIsError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

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

  const showSpinner = () => {
    <div class="spinner-border spinner-border-sm" role="status">
      <span class="sr-only">Loading...</span>
    </div>
  }


  const handleSubmit = async (event) => {

    event.preventDefault();
    setIsSubmitting(true);

    console.log(user);


    try {
      const res = await privateAxios.post("/charge/save", user)
        .then((Response) => console.log(Response))
        .catch((err) => console.log(err))

      toast.success('Submit Successfully')
      setUsers([...users, user]);
      console.log(res);

    } catch (error) {
      toast.error("Form not Submitted !! , please try again")
      console.log(error);
    }

    setIsSubmitting(false);
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



  const lastIndex = currentPage * userPerPage;
  const firstIndex = lastIndex - userPerPage;
  const curruser = users.slice(firstIndex, lastIndex);



  const mainModal = (

    <Mymodal closeModal={closeModal} handleSubmit={handleSubmit} handleInputChange={handleInputChange}>

      <button id='close-btn' onClick={closeModal}>close</button>
      <h2>Form</h2>

      <form onSubmit={handleSubmit} className='modalForm' id='modalForm'>

        <div className="d-flex flex-row align-items-center mb-3 mt-3">
          <MDBIcon fas icon="user-pen" size='lg' style={{marginRight: '5px'}} />
          <MDBInput
            label="Charge Name"
            type="text"
            name="chargeName"
            id="chargeName"
            value={user.chargeName}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="d-flex flex-row align-items-center mb-3">
          <MDBIcon fas icon="pen-to-square" size='lg' style={{marginRight: '10px'}}/>
          <MDBInput
            label="Charge Type"
            type="number"
            name="chargeType"
            id="chargeType"
            value={user.chargeType}
            onChange={handleInputChange}
          // required
          />
        </div>

        <div className="d-flex flex-row align-items-center mb-3">
          <MDBIcon fas icon="pen-to-square" size='lg' style={{marginRight: '10px'}}/>
          <MDBInput
            label="Charge Rate"
            type="number"
            name="chargeRate"
            id="chargeRate"
            value={user.chargeRate}
            onChange={handleInputChange}
          // required
          />
        </div>

        <div className="d-flex flex-row align-items-center mb-3">
          <MDBIcon fas icon="calendar" size='lg' style={{marginRight: '13px'}}/>
          <MDBInput
            label="Entry Date"
            type="date"
            name="entryDate"
            id="entryDate"
            value={user.entryDate}
            onChange={handleInputChange}
          // required
          />
        </div>

        <div className="d-flex flex-row align-items-center mb-3">
          <MDBIcon fas icon="indian-rupee-sign" size='lg' style={{marginRight: '15px', marginLeft: '3px'}}/>
          <MDBInput
            label="Charge Amount"
            type="number"
            name="chargeAmount"
            id="chargeAmount"
            value={user.chargeAmount}
            onChange={handleInputChange}
          // required
          />
        </div>

        <div className="d-flex flex-row align-items-center mb-3">
          <MDBIcon fas icon="pen-to-square" size='lg' style={{marginRight: '10px'}}/>
          <MDBInput
            label="Charge Apply on Base Amt."
            type="number"
            name="chargeApplyOnBaseAmount"
            id="chargeApplyOnBaseAmount"
            value={user.chargeApplyOnBaseAmount}
            onChange={handleInputChange}
          // required
          />
        </div>

        <div className="d-flex flex-row align-items-center mb-3">
          <MDBIcon fas icon="pen-to-square" size='lg' style={{marginRight: '10px'}}/>
          <MDBInput
            label="Rounding Type"
            type="number"
            name="roundingType"
            id="roundingType"
            value={user.roundingType}
            onChange={handleInputChange}
          // required
          />
        </div>

        <div >
          <MDBCheckbox
            label="Hoa Posting Required?"
            type="checkbox"
            name="hoaPostingRequired"
            id="hoaPostingRequired"
            checked={user.hoaPostingRequired}
            onChange={handleInputChange}

          />
        </div>
        <div >
          <MDBCheckbox
            label="Deposit to Govt?"
            type="checkbox"
            name="depositToGovt"
            id="depositToGovt"
            checked={user.depositToGovt}
            onChange={handleInputChange}
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

                </tr>
              </thead>
              <tbody>
                <UserData users={curruser} />
              </tbody>
              {/* <Pagination totalUsers={users.length} userPerPage={userPerPage} setCurrentPage={setCurrentPage} currPage={currentPage}/> */}
            </table>
            <Pagination totalUsers={users.length} userPerPage={userPerPage} setCurrentPage={setCurrentPage} setUserPerPage={setUserPerPage} currPage={currentPage} lastIndex={lastIndex} firstIndex={firstIndex} />
          </div>
          : (<p>No Charges added yet.</p>)
        }
      </div>
      <ToastContainer />

    </>

  )
}

export default Addcharges;


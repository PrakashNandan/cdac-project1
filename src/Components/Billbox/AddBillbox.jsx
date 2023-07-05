import axios from '../axios.jsx'
import React, { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import Pagination from '../Pagination';
import Mymodal from './showModal_bill.jsx';
import '../../style/formtemp.css'
import BillboxData from './BillboxData.jsx';


function AddBillbox() {

  const [ShowModal, setShowModal] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [billPerPage, setbillPerPage] = useState(3);
  const [isError, setIsError] = useState('');
  // states for fetch the data from other components
  // 1 for BillType,   2 for BillCategory , 3 for FundingSource
  const [select1Data, setSelect1Data] = useState([]);
  const [select2Data, setSelect2Data] = useState([]);
  const [select3Data, setSelect3Data] = useState([]);
  const [selectedOption1, setSelectedOption1] = useState('');
  const [selectedOption2, setSelectedOption2] = useState('');
  const [selectedOption3, setSelectedOption3] = useState('');


  const [billBox, setBillBox] = useState({
    billSlNo: '',
    BillType: '',
    BillCategory: '',
    FundingSource: '',
    invoiceNo: "",
    invoiceDate: '',
    entryDate: '',
    baseAmount: '',
    billNetAmount: '',
    valid: '',
    remarks: '',

  }, []);

  const [billBoxes, setBillBoxes] = useState([]);


  useEffect(() => {
    fetchDataForSelect1();
    fetchDataForSelect2();
    fetchDataForSelect3();
  }, []);

  const fetchDataForSelect1 = async () => {
    try {
      const response = await axios.get('select1-api-endpoint');
      setSelect1Data(response.data);
    } catch (error) {
      console.error('Error fetching data for Select 1:', error);
    }
  };

  const fetchDataForSelect2 = async () => {
    try {
      const response = await axios.get('select2-api-endpoint');
      setSelect2Data(response.data);
    } catch (error) {
      console.error('Error fetching data for Select 2:', error);
    }
  };

  const fetchDataForSelect3 = async () => {
    try {
      const response = await axios.get('select3-api-endpoint');
      setSelect3Data(response.data);
    } catch (error) {
      console.error('Error fetching data for Select 3:', error);
    }
  };

  const handleSelect1Change = event => {
    const selectedValue = event.target.value;
    setSelectedOption1(selectedValue);
  };

  const handleSelect2Change = event => {
    const selectedValue = event.target.value;
    setSelectedOption2(selectedValue);
  };

  const handleSelect3Change = event => {
    const selectedValue = event.target.value;
    setSelectedOption3(selectedValue);
  }


  if (billPerPage < 1) {
    setbillPerPage(3);
  }

  const closeModal = () => {
    return setShowModal(false);
  }


  const handleInputChange = (event) => {
    const { name, value, type, checked } = event.target;
    const inputValue = type === 'checkbox' ? checked : value;
    setBillBox((prevBillBox) => ({ ...prevBillBox, [name]: inputValue }));
  };


  const handleSubmit = async (event) => {

    event.preventDefault();
    console.log(billBox);

    try {
      const res = await axios.post("/charge/save", billBox);
      toast.success('Submit Successfully')
      setBillBoxes([...billBoxes, billBox]);
      console.log(res);

    } catch (error) {
      toast.error("Form not Submitted !! , please try again")
      console.log(error);
    }

    closeModal();
  };


  const lastIndex = currentPage * billPerPage;
  const firstIndex = lastIndex - billPerPage;
  const slicedBill = billBoxes.slice(firstIndex, lastIndex);


  const mainModal = (


    <Mymodal closeModal={closeModal} handleSubmit={handleSubmit} handleInputChange={handleInputChange}>

      <button id='close-btn-bb' onClick={closeModal}>close</button>

      <div className="cont">
        <form className="modalForm">
          <div className="row">
            <div className="col-half">
              <div className="invoice">
                <input type="string" id="input-box1" value={billBox.billSlNo} placeholder="Bill Sl No" onChange={handleInputChange} />
              </div>
            </div>
            <div className='col-half'>
              <div className="invoice">
                <input type="string" placeholder='Invoice no' name='invoiceNo' value={billBox.invoiceNo} onChange={handleInputChange} />
              </div>
            </div>
            <div className="input-group input-group-icon">
              {/* <input type="text" placeholder="Full Name" /> */}
              <div className="input-icon">
                <i class="fa fa-columns" aria-hidden="true"></i>
              </div>
              <select>
                <option id="op">Bill Type</option>
                <option className="op1">Bill Type 2</option>
              </select>
            </div>
            <div className="input-group input-group-icon">

              <div className="input-icon">
                <i class="fa fa-money" aria-hidden="true"></i>        </div>
              <select>
                <option >Bill Category</option>
                <option >Bill Category2</option>
              </select>
            </div>
            <div className="input-group input-group-icon">

              <div className="input-icon">
                <i className="fa fa-credit-card" />        </div>
              <select>
                <option>Funding Source</option>
                <option>Funding Source2</option>
              </select>
            </div>
          </div>
          <div className="row1">
            <div className="col-half">
              <h4>Invoice Date</h4>
              <div className="input-group">
                <input type="date" id="entry" placeholder='Invoice date' name='invoiceDate' value={billBox.invoiceDate} onChange={handleInputChange} />
              </div>
            </div>
            <div className="col-half">
              <h4>Entry Date</h4>
              <div className="input-group">
                <input type="date" id="entry" placeholder='entry date' name='entryDate' value={billBox.entryDate} onChange={handleInputChange} />     </div>

            </div>
          </div>
          <div className="row">
            <h4>Is Valid ?</h4>
            <div className="input-group">
              <input
                id="payment-method-card"
                type="radio"
                name="payment-method"
                defaultValue="card"
                defaultChecked="true"
              />
              <label htmlFor="payment-method-card">
                <span>
                  YES
                </span>
              </label>
              <input
                id="payment-method-paypal"
                type="radio"
                name="payment-method"
                defaultValue="paypal"
              />
              <label htmlFor="payment-method-paypal">
                {" "}
                <span>
                  NO
                </span>
              </label>
            </div>
            <div className='col-half'>
              <div className="input-group input-group-icon">

                <input type="number" id="yes" placeholder='Bill Net Amount' value={billBox.billNetAmount} name='billNetAmount' onChange={handleInputChange} />
                <div className="input-icon">
                  <i class="fa fa-inr" aria-hidden="true"></i>
                </div>
              </div>
            </div>
            <div className="col-half">
              <div className="input-group input-group-icon">
                <input type="number" id="no" placeholder='Base Amount' name='baseAmount' value={billBox.baseAmount} onChange={handleInputChange} />
                <div className="input-icon">
                  <i class="fa fa-inr" aria-hidden="true"></i>
                </div>
              </div>
            </div>
            {/* <div className="col-half">
        <div className="input-group">
          <select>
            <option>01 Jan</option>
            <option>02 Jan</option>
          </select>
          <select>
            <option>2015</option>
            <option>2016</option>
          </select>
        </div>
      </div> */}
          </div>
          <div className="row">
            <h4>Remarks</h4>
            {/* <div className="input-group">
        <input id="terms" type="checkbox" />
        <label htmlFor="terms">
          I accept the terms and conditions for signing up to this service, and
          hereby confirm I have read the privacy policy.
        </label>
      </div> */}
            <div className="input-group input-group-icon">
              <textarea id="w3review" name="w3review" rows="2" cols="100" />

            </div>

          </div>
          <button id='submitbtn' type='submit' onClick={handleSubmit} >Submit</button>
        </form>
      </div>


    </Mymodal>
  )


  return (
    <>

      <button className='modal-btn' id='addButton' onClick={() => setShowModal(true)}>Add BillBox</button>
      {ShowModal && mainModal}

      <div className="user-list">


        <input type="number" className='userPerPageClass' name='userPerPage' value={billPerPage} onChange={(e) => { setbillPerPage(e.target.value) }} />

        {billBoxes.length > 0 ?
          <div className='table-responsive'>
            <table className='table userTable'>
              <thead>
                <tr>
                  {/* <th>ID</th> */}
                  <th>Bill No</th>
                  <th>Bill Type</th>
                  <th>Bill Category</th>
                  <th>Funding Source</th>
                  <th>Invoice No</th>
                  <th>Invoice Date</th>
                  <th>Entry Date</th>
                  <th>Base Amount</th>
                  <th>Bill Net Amount</th>
                  <th>Valid</th>
                </tr>
              </thead>
              <tbody>
                <BillboxData slicedBill={slicedBill} />
              </tbody>
              {/* <Pagination totalUsers={users.length} userPerPage={userPerPage} setCurrentPage={setCurrentPage} currPage={currentPage}/> */}
            </table>
            <Pagination totalUsers={billBoxes.length} userPerPage={billPerPage} setCurrentPage={setCurrentPage} currPage={currentPage} />
          </div> : (
            <p>No Bill added yet.</p>
          )}
      </div>


      <ToastContainer />

    </>


  )
}

export default AddBillbox;
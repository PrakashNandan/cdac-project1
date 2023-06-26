import React, { useState, useEffect } from 'react'
import '../../style/chargeList.css'
import axios from '../axios.jsx'
import { ToastContainer, toast } from 'react-toastify'
import FindBillBoxData from './FindBillBoxData'
import Mymodal from './showModal_bill.jsx';
import '../../style/modal2.css'
import '../../style/formtemp.css'
import '../../style/chargeList.css'

function BillboxList() {

    const [allData, setAllData] = useState([]);
    const [isError, setisError] = useState('');
    const [inputId, setInputId] = useState('');
    const [showAllData, setShowAllData] = useState(true);
    const [ShowModal, setShowModal] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
  const [billPerPage, setbillPerPage] = useState(3);
//   const [isError, setIsError] = useState('');
  // states for fetch the data from other components
  // 1 for BillType,   2 for BillCategory , 3 for FundingSource
  const [select1Data, setSelect1Data] = useState([]);
  const [select2Data, setSelect2Data] = useState([]);
  const [select3Data, setSelect3Data] = useState([]);
  const [selectedOption1, setSelectedOption1] = useState('');
  const [selectedOption2, setSelectedOption2] = useState('');
  const [selectedOption3, setSelectedOption3] = useState('');

    useEffect(() => {
        handleFindALL();
    }, [])

   
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

    const handleFindALL = async () => {

        try {

            const res = await axios.get("/charge/findAll");
            setAllData(res.data);
            console.log(res.data);


        } catch (error) {
            setisError(error.message);
            console.log(error.message);
            showErrorToast();
        }
    }

    useEffect(() => {
        handleFindALL();
    }, [])



    const showErrorToast = () => {
        toast.error("Something went wrong, check your connection !!")
    }
    const showErrorNotFoundToast = () => {
        toast.error("Not Found!!")
    }



    const fetchData = async () => {

        try {
            const res = await axios.get(`/charge/find/${inputId}`)
            setAllData([res.data]);
            console.log([res.data]);
        } catch (error) {
            setisError(error.message);
            console.log(error.message);
            showErrorNotFoundToast();
        }

    }

    const mainModal = (


        <Mymodal closeModal={closeModal} handleSubmit={handleSubmit} handleInputChange={handleInputChange} >
    
          {/* <button id='close-btn' onClick={closeModal}>close</button> */}
    
          <div className="cont">
            <form className = "modalForm">
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
        
            <h2 id='chargeHeadID'>BillBox List</h2>


            <div className='find-container'>
                {/* <div className='findButtonClass'><button className='btn-find btn btn-primary' onClick={()=>handleFindALL()}>FindAll</button></div> */}
                
                <div className="parentSearchInput">
                <div> <button className='btn btn-primary' id='searchDataID' onClick={() => setShowModal(true)}>Add Billbox</button>
      {ShowModal && mainModal}</div>
                    <div className="spacer"></div>
                    <input type="number" placeholder='search by ID' id='searchInput' value={inputId} onChange={(e) => setInputId(e.target.value)} />
                    <button className='btn btn-primary' id='searchDataID' onClick={fetchData}>Search</button>
                </div>

                <div className='table-responsive'>
                    <table className='table userTable'>
                        <thead>
                            <tr>
                                <th>ID</th>
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
                                <th>Remarks</th>
                                <th>Actions</th>
                                <th>Download</th>
                            </tr>
                        </thead>
                        <tbody>
                            <FindBillBoxData allData={allData} setAllData={setAllData} handleFindALL={handleFindALL} />
                        </tbody>

                    </table>
                </div>
            </div>


            <ToastContainer />
        </>

    )
}

export default BillboxList
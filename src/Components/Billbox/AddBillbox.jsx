import axios from '../axios.jsx'
import React, { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import Pagination from '../Pagination';
import Mymodal from './showModal_bill.jsx';
import '../../style/modal_bill.css'
import '../../style/form.css'
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

        <Mymodal closeModal={closeModal} handleSubmit={handleSubmit} handleInputChange={handleInputChange} >

            <button id='close-btn' onClick={closeModal}>close</button>
            <h2>Form</h2>

            <form class="centered-form">
                <h2 class="text-center">Form</h2>
                <div class="div-element">
                    <div class="background-div">
                        <div className="container4">

                            {/* left part */}
                            <div id="sidebar">

                                <div class="div-element">
                                    <input type="number" class="input-box" value={billBox.billSlNo} placeholder="Bill Sl No" onChange={handleInputChange}/>
                                </div>


                                <div class="div-element">

                                    <select className="option2" value={selectedOption1} onChange={handleSelect1Change}>

                                        <option value="">BillType</option>
                                            {select1Data.map(item => (
                                            <option key={item.id} value={item.id}>
                                                {item.name}
                                         </option>
                                            ))}
                                    </select>
                                </div>

                                <div class="div-element">
                                    <select className="option11" value={selectedOption2} onChange={handleSelect2Change}>
                                    <option value="">BillCategory</option>
                                            {select2Data.map(item => (
                                            <option key={item.id} value={item.id}>
                                                {item.name}
                                         </option>
                                            ))}
                                        
                                    </select>
                                </div>

                                <div class="div-element">

                                    <select className="option33" value={selectedOption3} onChange={handleSelect3Change}>
                
                                        <option value="">Funding Source</option>
                                            {select3Data.map(item => (
                                            <option key={item.id} value={item.id}>
                                                {item.name}
                                         </option>
                                            ))}
                                        
                                        
                                    </select>

                                </div>

                                <div class="div-element1">
                                    <input type="number" placeholder='Bill Net Amount' value={billBox.billNetAmount}  name='billNetAmount' onChange={()=>handleInputChange}/>
                                </div>

                            </div>

                            {/* right part */}
                            <div id="page-wrap">
                                <div class="div-element">
                                    <input type="string" placeholder='Invoice no' name='invoiceNo' value={billBox.invoiceNo} onChange={handleInputChange}/>

                                </div>
                                <div class="div-element">
                                    <label htmlFor="date" class="date">Invoice Date</label>
                                    <input type="date" placeholder='Invoice date' name='invoiceDate' value={billBox.invoiceDate} onChange={handleInputChange} />
                                </div>
                                <div class="div-element">
                                    <label htmlFor="date" class="date">Entry Date</label>
                                    <input type="date" placeholder='entry date' name='entryDate' value={billBox.entryDate} onChange={handleInputChange} />

                                </div>
                                <div class="div-element">
                                    <input type="number" placeholder='Base Amount' name='baseAmount' value={billBox.baseAmount} onChange={handleInputChange}/>
                                </div>

                            </div>

                           {/* bottom part */}
                            <div class="bottom-div">
                                <div class="div-element">
                                    <p><b>Is Valid:</b></p>
                                    <input type="radio" name="preferred" value='1' /> Yes<br />
                                    <input type="radio" name="preferred" value='0' /> No<br />
                                </div>
                                <div class="div-element" >
                                    <p><b>Remarks</b></p>
                                    <textarea id="w3review" name="w3review" rows="4" cols="50" value={billBox.remarks} onChange={handleInputChange}></textarea>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>

        </Mymodal>
    )


    return (
        <>

            <button className='modal-btn' onClick={() => setShowModal(true)}>Add BillBox</button>
            {ShowModal && mainModal}

            <div className="user-list">
                <h3>BillBox List</h3>

                <input type="number" className='userPerPageClass' name='userPerPage' value={billPerPage} onChange={(e) => { setbillPerPage(e.target.value) }} />

                {billBoxes.length > 0 ?
                    <div className='table-responsive'>
                        <table className='table userTable'>
                            <thead>
                                <tr>
                                    {/* <th>ID</th> */}
                                    <th>billSlNo</th>
                                    <th>BillType</th>
                                    <th>BillCategory</th>
                                    <th>FundingSource</th>
                                    <th>invoiceNo</th>
                                    <th>invoiceDate</th>
                                    <th>entryDate</th>
                                    <th>baseAmount</th>
                                    <th>billNetAmount</th>
                                    <th>valid</th>
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
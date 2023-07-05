import React, { useState, useEffect } from 'react'
import '../../style/chargeList.css'
import axios from '../axios.jsx'
import FindAllPaymentType from './FindAllPaymentTypeData'
import { ToastContainer, toast } from 'react-toastify'
import { privateAxios } from '../../service/helperUtil'
import Pagination from '../Pagination'


import Mymodal from '../ShowModal.jsx'
import '../../style/modal.css'
import PaymentTypeData from './PaymentTypeData.jsx'
import '../../style/UserData.css'
import { MDBContainer, MDBCol, MDBRow, MDBBtn, MDBIcon, MDBInput, MDBCheckbox } from 'mdb-react-ui-kit';


function PaymentTypeList() {

    const [allData, setAllData] = useState([]);
    const [isError, setisError] = useState('');
    const [inputId, setInputId] = useState('');
    const [showAllData, setShowAllData] = useState(true);
    const [pageSize, setPageSize]=useState(5);
    const [pageNumber, setPageNumber]=useState(1);
    const [datafetching, setDataFetching]=useState(false);
    const [totalElements, setTotalElements]=useState();
    const [totalPages, setTotalPages]=useState();
    const [lastIndex, setLastIndex]=useState();
    const [firstIndex,setFirstIndex]=useState();
    const [slicedAllData,setSlicedAllData]=useState([]);
    const [isAllData, setIsAllData]=useState(false);
     const [isReady , setIsready] =useState(false);
     const [isSubmitting, setIsSubmitting] = useState(false);


    // useEffect(() => {
    //     handleFindALL();
    // }, [])

    const [ShowModal, setShowModal]=useState(false);
    const [paymentType, setPaymentType] = useState({
        paymentTypeName: '',
        entryDate: '',
        isValid:''
        
      },[]);
      const [paymentTypes, setPaymentTypes] = useState([]);
      const handleInputChange = (event) => {
        const { name, value, type, checked } = event.target;
        const inputValue = type === 'checkbox' ? checked : value;
        setPaymentType((prevpaymentType) => ({ ...prevpaymentType, [name]: inputValue }));
    };
    const  handleSubmit = async (event) => {
        
        event.preventDefault();
        
        
        console.log(paymentType);  
        
        
        try{
          const res = await privateAxios.post("/paymentType/save", paymentType);
          toast.success('Submit Successfully')
          setPaymentTypes([...paymentTypes, paymentType]);
          console.log(res);
          handleFindALL();

        }catch(error){
          toast.error("Form not Submitted !! , please try again")
          console.log(error);
        }
        
        closeModal();
      };
      const closeModal = ()=>{
        return setShowModal(false);
    }


    const handleFindALL = async () => {

        setDataFetching(true);        
        const res =  privateAxios.get(`/paymentType/findAll?pageNumber=${pageNumber-1}&pageSize=${pageSize}`)
        .then((res)=>{
             //alert("inside then")
            console.log(res);
            const {pageNumber} = res.data.pageList;
            
            
           
            if(pageNumber!==''){
            setIsAllData(true);
            setAllData(res.data.pageList.content);
            setTotalPages(res.data.pageList.totalPages);
            setTotalElements(res.data.pageList.totalElements);
             if(pageSize>res.data.pageList.content?.length){
                setLastIndex(Math.max(((pageNumber+1)*res.data.pageList.content?.length), res.data.pageList.totalElements))
             }
             else{
                 setLastIndex( (pageNumber+1)*pageSize);
             }
            // if(lastIndex){
            setFirstIndex(((pageNumber+1)*pageSize) - pageSize);
            // }
            // setFirstIndex(((pageNumber-1)*pageSize)+1);
            // setLastIndex(Math.min(firstIndex + pageSize-1, res.data.pageList.totalElements))
            // setSlicedAllData(res.data.pageList.content.slice(firstIndex, lastIndex));
            }
        }).catch((err)=>console.log(err))

    
       setDataFetching(false);
    }

    // pagination work
    if(pageSize<1){
        setPageSize(5);
    }

    useEffect(()=>{
        if(isReady){
        setDataFetching(true);        
        const res =  privateAxios.get(`/paymentType/findAll?pageNumber=${pageNumber-1}&pageSize=${pageSize}`)
        .then((res)=>{
             //alert("inside then")
            console.log(res);
            const {pageNumber} = res.data.pageList;
            
            
           
            if(pageNumber!==''){
            setIsAllData(true);
            setAllData(res.data.pageList.content);
            setTotalPages(res.data.pageList.totalPages);
            setTotalElements(res.data.pageList.totalElements);
             if(pageSize>res.data.pageList.content?.length){
                setLastIndex(Math.max(((pageNumber+1)*res.data.pageList.content?.length), res.data.pageList.totalElements))
             }
             else{
                 setLastIndex( (pageNumber+1)*pageSize);
             }
            // if(lastIndex){
            setFirstIndex(((pageNumber+1)*pageSize) - pageSize);
            // }
            // setFirstIndex(((pageNumber-1)*pageSize)+1);
            // setLastIndex(Math.min(firstIndex + pageSize-1, res.data.pageList.totalElements))
            // setSlicedAllData(res.data.pageList.content.slice(firstIndex, lastIndex));
            }
        }).catch((err)=>console.log(err))

       setDataFetching(false);
    }else{
        setIsready(true)
    }

    },[isReady ,pageNumber ,pageSize])



    const showErrorToast = () => {
        toast.error("Something went wrong, check your connection !!")
    }
    const showErrorNotFoundToast = () => {
        toast.error("Not Found!!")
    }


    // const findDataById = (id) => {
    //     return data.find((item) => item.id === id);
    // };

    const fetchData = async () => {

        try {
            const res = await privateAxios.get(`/paymentType/find/${inputId}`)
            setAllData([res.data]);
            console.log([res.data]);
        } catch (error) {
            setisError(error.message);
            console.log(error.message);
            showErrorNotFoundToast();
        }

    }


    // const findDataById = () => {
    //     return allData.find((item) => item.id === inputId);
    //   };
    const mainModal = (

        <Mymodal closeModal={closeModal} handleSubmit={handleSubmit} handleInputChange={handleInputChange} >
    
          <button id='close-btn' onClick={closeModal}>close</button>
          <h2>Form</h2>
    
          <form onSubmit={handleSubmit} className='form'>
    
            <div className="d-flex flex-row align-items-center mb-3 mt-3">
              <MDBIcon fas icon="pen-to-square" size='lg' style={{ marginRight: '10px' }} />
              <MDBInput
                label="Payment Type"
                type="text"
                name="paymentTypeName"
                id="paymentTypeName"
                value={paymentType.paymentTypeName}
                onChange={handleInputChange}
                required
              />
            </div>
    
            <div className="d-flex flex-row align-items-center mb-3">
              <MDBIcon fas icon="calendar" size='lg' style={{ marginRight: '13px' }} />
              <MDBInput
                label="Entry Date"
                type="date"
                name="entryDate"
                id="entryDate"
                value={paymentType.entryDate}
                onChange={handleInputChange}
                required
              />
            </div>
    
            <div className="d-flex flex-row align-items-center mb-3">
              <MDBIcon fas icon="pen-to-square" size='lg' style={{ marginRight: '10px' }} />
              <MDBInput
                label="Is Valid?"
                type="number"
                name="isValid"
                id="isValid"
                value={paymentType.isValid}
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
            <h2 id='chargeHeadID'>Payment Types</h2>
            <div className='find-container'>
           
                <div className="parentSearchInput">
                    <div > <button className='btn btn-primary' id='searchDataID' onClick={()=>setShowModal(true)}>Add payment Type</button>
   {ShowModal && mainModal}</div>
   <div className='spacer'></div>
                    <input type="number" placeholder='search by ID' id='searchInput' value={inputId} onChange={(e) => setInputId(e.target.value)} />
                    <button className='btn btn-primary' id='searchDataID' onClick={fetchData}>Search</button>
                </div>

                <div className='table-responsive'>
                    <table className='table userTable'>
                        <thead>
                            <tr>
                                <th>Payment Type ID</th>
                                <th>Payment Type</th>
                                <th>Entry Date</th>
                                <th>Is Valid</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <FindAllPaymentType allData={allData} setAllData={setAllData} handleFindALL={handleFindALL} />
                        </tbody>

                    </table>
                </div>
                { isAllData && <Pagination totalUsers={allData.length} pageSize={pageSize} setPageSize={setPageSize} setPageNumber={setPageNumber} pageNumber={pageNumber} lastIndex={lastIndex} firstIndex={firstIndex} totalPages={totalPages} totalElements={totalElements} />}
            </div>
            <ToastContainer />
        </>
    )
}

export default PaymentTypeList;
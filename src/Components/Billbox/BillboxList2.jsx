import React, { useState, useEffect } from 'react'
import '../../style/chargeList.css'
import axios from '../axios.jsx'
import { ToastContainer, toast } from 'react-toastify'
import Mymodal from './showModal_bill.jsx';

import '../../style/formtemp.css'
import '../../style/chargeList.css'
import { privateAxios } from '../../service/helperUtil'
import Pagination from '../Pagination'
import FindBillBoxData2 from './FindBillBoxData2'

function BillboxList2() {

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

  const [isAllData, setIsAllData]=useState(false);
  const [isReady , setIsready] =useState(false);
  const [totalElements, setTotalElements]=useState();
    const [totalPages, setTotalPages]=useState();
    const [lastIndex, setLastIndex]=useState();
    const [firstIndex,setFirstIndex]=useState();
    const [pageSize, setPageSize]=useState(5);
    const [pageNumber, setPageNumber]=useState(1);
    const [datafetching, setDataFetching]=useState(false);
 


   
  const [billBox, setBillBox] = useState({
    // billSlNo: '',
    BillType: '',
    Department: '',
    PaymentType: '',
    invoiceNo: '',
    invoiceDate: '',
    // entryDate: '',
    amount: '',
    // billNetAmount: '',
    valid:true ,
    remarks: '',

  }, []);

  const [billBoxes, setBillBoxes] = useState([]);


  // useEffect(() => {
  //   fetchDataForSelect1();
  //   fetchDataForSelect2();
  //   fetchDataForSelect3();
  // }, []);

  // const fetchDataForSelect1 = async () => {
    // try {
    //   const response = await privateAxios.get('/billType/findAll');
    //   console.log(response)
    //   setSelect1Data(response.data.pageList.content);
    // } catch (error) {
    //   console.error('Error fetching data for Select 1:', error);
    // }

  //   await privateAxios.get('/charge/getBillBoxDetail')
  //   .then((response)=>{
  //     console.log(response)
  //     setSelect1Data(response.data.billTypeList);
      
  //   })
  //   .catch((err)=>{console.log(err)})

  //   // console.log("select1Data --> " + select1Data);
  // };

  // useEffect(() => {
  //   console.log("select1Data --> " + select1Data);
  // }, [select1Data]);

  // const fetchDataForSelect2 = async () => {
  //   try {
  //     const response = await privateAxios.get('/charge/getBillBoxDetail');
  //     console.log(response)
  //     setSelect2Data(response.data.departmentList);
  //   } catch (error) {
  //     console.error('Error fetching data for Select 2:', error);
  //   }
  // };

  // const fetchDataForSelect3 = async () => {
  //   try {
  //     const response = await privateAxios.get('/charge/getBillBoxDetail');
  //     console.log(response)
  //     setSelect3Data(response.data.paymentType);
  //   } catch (error) {
  //     console.error('Error fetching data for Select 3:', error);
  //   }
  // };



  if (billPerPage < 1) {
    setbillPerPage(3);
  }

  const closeModal = () => {
    return setShowModal(false);
  }


  // const handleInputChange = (event) => {
  //   const { name, value } = event.target;
  //   console.log(event);
  
  //   setBillBox((prevBillBox) => ({ ...prevBillBox, [name]: value}));
  // };
  // const handleInputChange = (event) => {
  //   console.log(event);
  //   const { name, value, type, checked } = event.target;
  //   const inputValue = type === 'radio' ? checked : value;
  //   setBillBox((prevBillBox) => ({ ...prevBillBox, [name]: inputValue}));
  // };

  // const handleTextAreaChange = (event) => {
  //   const { value } = event.target;
  //   setBillBox({ ...billBox,remarks: value });
  //   // onClick={()=>{setBillBox({...billBox,valid:'1'})}}
  // };


  // const handleSubmit = async (event) => {

  //   event.preventDefault();
  //   console.log(billBox);

  //   try {
      
  //     const res = await privateAxios.post("/charge/saveBillBoxDetails", billBox);
  //     toast.success('Submit Successfully')
  //     setBillBoxes([...billBoxes, billBox]);
  //     console.log(res);

  //   } catch (error) {
  //     toast.error("Form not Submitted !! , please try again")
  //     console.log(error);
  //   }

  //   closeModal();
  // };


  

    // const handleFindALL = async () => {

    //     try {

    //         const res = await privateAxios.get("/charge/getBillBoxDetail");
    //         setAllData(res.data.pageList.content);
    //         console.log(res.data);


    //     } catch (error) {
    //         setisError(error.message); showErrorToast();
    //     }
    // }

  //   const handleFindALL = async () => {

  //     setDataFetching(true);        
  //     const res =  privateAxios.get(`/charge/getApprovalBillBoxList?pageNumber=${pageNumber-1}&pageSize=${pageSize}`)
  //     .then((res)=>{
  //          //alert("inside then")
  //         console.log(res);
  //         const {pageNumber} = res.data.pageList;
          
          
         
  //         if(pageNumber!==''){
  //         setIsAllData(true);
  //         setAllData(res.data.pageList.content);
  //         setTotalPages(res.data.pageList.totalPages);
  //         setTotalElements(res.data.pageList.totalElements);
  //          if(pageSize>res.data.pageList.content?.length){
  //             setLastIndex(Math.max(((pageNumber+1)*res.data.pageList.content?.length), res.data.pageList.totalElements))
  //          }
  //          else{
  //              setLastIndex( (pageNumber+1)*pageSize);
  //          }
  //         // if(lastIndex){
  //         setFirstIndex(((pageNumber+1)*pageSize) - pageSize);
  //         // }
  //         // setFirstIndex(((pageNumber-1)*pageSize)+1);
  //         // setLastIndex(Math.min(firstIndex + pageSize-1, res.data.pageList.totalElements))
  //         // setSlicedAllData(res.data.pageList.content.slice(firstIndex, lastIndex));
  //         }
  //     }).catch((err)=>console.log(err))

  
  //    setDataFetching(false);
  // }

  // pagination work
  if(pageSize<1){
      setPageSize(5);
  }

    useEffect(()=>{
    if(isReady){
      setDataFetching(true);        
      const res =  privateAxios.get(`/charge/getApprovalBillBoxList?pageNumber=${pageNumber-1}&pageSize=${pageSize}`)
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


    // useEffect(()=>{
    //       privateAxios.get("/charge/getBillBoxDetail").then((res)=>console.log(res)).catch((err)=>console.log("error from billbox" + err))
    // })


   


    return (

        <>
        
            <h2 id='chargeHeadID'>List of Submitted Bills</h2>


            <div className='find-container'>
                {/* <div className='findButtonClass'><button className='btn-find btn btn-primary' onClick={()=>handleFindALL()}>FindAll</button></div> */}
                
                <div className="parentSearchInput">
                {/* <div> <button className='btn btn-primary' id='searchDataID' onClick={() => setShowModal(true)}>Add Billbox</button>
      {ShowModal && mainModal}</div> */}
                    <div className="spacer"></div>
                    <input type="number" placeholder='search by ID' id='searchInput' value={inputId} onChange={(e) => setInputId(e.target.value)} />
                    <button className='btn btn-primary' id='searchDataID' onClick={fetchData}>Search</button>
                </div>

                <div className='table-responsive'>
                    <table className='table userTable'>
                        <thead>
                            <tr>
                                <th>ID</th>
                                
                                <th>Bill Type</th>
                                <th>Department</th>
                                <th>Payment Type</th>
                                <th>Invoice No</th>
                                <th>Invoice Date</th>
                                {/* <th>Entry Date</th> */}
                                {/* <th>Base Amount</th> */}
                                <th>Amount</th>
                                {/* <th>Valid</th>
                                <th>Remarks</th> */}
                                <th>Action</th>
                                <th>Download</th>
                            </tr>
                        </thead>
                        <tbody>
                            <FindBillBoxData2 select1Data={select1Data} select2Data={select2Data} select3Data={select3Data} allData={allData} setAllData={setAllData}  />
                        </tbody>

                    </table>
                </div>
                { isAllData && <Pagination totalUsers={allData.length} pageSize={pageSize} setPageSize={setPageSize} setPageNumber={setPageNumber} pageNumber={pageNumber} lastIndex={lastIndex} firstIndex={firstIndex} totalPages={totalPages} totalElements={totalElements} />}

            </div>


            <ToastContainer />
        </>

    )
}

export default BillboxList2
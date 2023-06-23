import React, { useState, useEffect } from 'react'
import '../../style/chargeList.css'
import axios from '../axios.jsx'
import FindAllData from './FindAllData.jsx'
import { ToastContainer, toast } from 'react-toastify'
import { privateAxios } from '../../service/helperUtil'
import Pagination from '../Pagination'

import Mymodal from '../ShowModal.jsx';
import '../../style/modal.css'
import UserData from './UserData';
import '../../style/UserData.css'

function ChargeList() {

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
     const [isReady , setIsready] =useState(false)
    // useEffect(() => {
    //     handleFindALL();
    // },[])
    const [ShowModal, setShowModal] = useState(false);
    const [isSubmitting, setIsSubmitting]=useState(false);

    // let lastIndex = pageNumber*pageSize;
    // let firstIndex = lastIndex - pageSize;
    // let slicedAllData=allData.slice(firstIndex, lastIndex);
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
        setIsSubmitting(true);
    
        console.log(user);
    
    
        try {
          const res = await  privateAxios.post("/charge/save", user)
          .then( (Response)=>console.log(Response))
          .catch( (err) => console.log(err))
    
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
    

    useEffect(()=>{
        if(isReady){
        setDataFetching(true);        
        const res =  privateAxios.get(`/charge/findAll?pageNumber=${pageNumber-1}&pageSize=${pageSize}`)
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




    // pagination work
    if(pageSize<1){
        setPageSize(5);
    }

   
    // axios.interceptors.request.use(
    //     (config) => {
    //       const token = localStorage.getItem('token');
    //       if (token) {
    //         config.headers['Authorization'] = `Bearer ${token}`;
    //       }
    //       return config;
    //     },
    //     (error) => {
    //       return Promise.reject(error);
    //     }
    //   );


    const handleFindALL = async () => {
        alert("handleFindAll called")
        setDataFetching(true);

        try {

            const res = await privateAxios.get(`/charge/findAll?pageNumber=${pageNumber-1}&pageSize=${pageSize}`)
            // .then((res)=>console.log(res)).catch((err)=>console.log(err));
            if(res){
                console.log(res);
                setAllData(res.data.pageList.content);
                setTotalPages(res.data.pageList.totalPages);
                setTotalElements(res.data.pageList.totalElements);
                setLastIndex( (pageNumber)*pageSize);
                
                    setFirstIndex(lastIndex - pageSize);
                
            // setFirstIndex(((pageNumber-1)*pageSize)+1);
            // setLastIndex(Math.min(firstIndex + pageSize-1, res.data.pageList.totalElements))
            setSlicedAllData(res.data.pageList.content.slice(firstIndex, lastIndex));
            }


            
        } catch (error) {
            setisError(error.message);
            console.log(error.message);
            showErrorToast();
        }

        setDataFetching(false);
    }

 




    const showErrorToast = () => {
        toast.error("Something went wrong, check your connection !!")
    }
    const showErrorNotFoundToast = () => {
        toast.error("Not Found!!")
    }


    // for search by ID
    const fetchData = async () => {

        try {
            const res = await privateAxios.get(`/charge/find/${inputId}`)
            setAllData([res.data.pageList.content]);
            console.log([res.data.pageList.content]);
        } catch (error) {
            setisError(error.message);
            console.log(error.message);
            showErrorNotFoundToast();
        }

    }

    useEffect(()=>{
        console.log(firstIndex + " --first");
        console.log(lastIndex+ " --lastIndex");
        console.log(slicedAllData +" sliced data");
    })
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
            
            {isSubmitting ? (
               <button class="modal-btn" type="button" disabled>
               <span class="spinner-border" style={{margin:'0 0.3rem', height:'1.6rem', width:'1.5rem'}} role="status" aria-hidden="true"></span>
               
               Submitting...
             </button>
                  ) : (
                    <button className='modal-btn' type='submit' >Submit</button>
             )}
              
          </form>
    
        </Mymodal>
      )

    return (

        <>

            <h2 id='chargeHeadID'>Charge List</h2>

            {datafetching ? (<div class="d-flex justify-content-center">
                            <div class="spinner-border" role="status">
                                <span class="sr-only">Loading...</span>
                            </div>
                             </div>):""
            }


            <div className='find-container'>
                {/* <div className='findButtonClass'><button className='btn-find btn btn-primary' onClick={()=>handleFindALL()}>FindAll</button></div> */}
                <div className="parentSearchInput">
                    <div> <button className='btn btn-primary' id='searchDataID' onClick={() => setShowModal(true)}>Add Charges</button>
      {ShowModal && mainModal}</div>
                     {/* <input type="number" className='userPerPageClass' id='Pagi_input_id' name='userPerPage' value={pageSize} onChange={(e) => { setPageSize(e.target.value) }} /> */}
                    <div className="spacer"></div>
                    <input type="number" placeholder='search by ID' id='searchInput' value={inputId} onChange={(e) => setInputId(e.target.value)} />
                    <button className='btn btn-primary' id='searchDataID' onClick={fetchData}>Search</button>
                </div>



                <div className='table-responsive'>
                    <table className='table userTable'>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>ChargeName</th>
                                <th>ChargeType</th>
                                <th>ChargeRate</th>
                                <th>entryDate</th>
                                <th>chargeAmount</th>
                                <th>chargeApplyOnBaseAmount</th>
                                <th>roundingType</th>
                                <th>hoaPostingRequired</th>
                                <th>isDepositToGovt</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <FindAllData allData={allData} setAllData={setAllData} handleFindALL={handleFindALL} />
                        </tbody>

                    </table>

                </div>
                      { isAllData && <Pagination totalUsers={allData.length} pageSize={pageSize} setPageSize={setPageSize} setPageNumber={setPageNumber} pageNumber={pageNumber} lastIndex={lastIndex} firstIndex={firstIndex} totalPages={totalPages} totalElements={totalElements} />}
            </div>


            <ToastContainer />
        </>

    )
}

export default ChargeList
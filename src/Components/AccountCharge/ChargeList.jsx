import React, { useState, useEffect } from 'react'
import '../../style/chargeList.css'
import axios from '../axios.jsx'
import FindAllData from './FindAllData.jsx'
import { ToastContainer, toast } from 'react-toastify'
import { privateAxios } from '../../service/helperUtil'
import Pagination from '../Pagination'


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


    // let lastIndex = pageNumber*pageSize;
    // let firstIndex = lastIndex - pageSize;
    // let slicedAllData=allData.slice(firstIndex, lastIndex);



    useEffect(()=>{
        setDataFetching(true);  
        if(isReady){
        console.log(datafetching);    
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

    
       
    }else{
        setIsready(true)
    }
    setDataFetching(false);

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
                                <th>Charge Name</th>
                                <th>Charge Type</th>
                                <th>Charge Rate</th>
                                <th>Entry Date</th>
                                <th>Charge Amount</th>
                                <th>Charge Apply On Base Amount</th>
                                <th>Rounding Type</th>
                                <th>How Posting Required</th>
                                <th>Is Deposit To Govt</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <FindAllData allData={allData} setAllData={setAllData} handleFindALL={handleFindALL} />
                        </tbody>

                    </table>

                </div>
                      { isAllData && <Pagination totalUsers={allData.length} pageSize={pageSize} setPageSize={setPageSize} setPageNumber={setPageNumber} pageNumber={pageNumber} lastIndex={lastIndex} firstIndex={firstIndex} totalPages={totalPages} totalElements={totalElements}  />}
            </div>


            <ToastContainer />
        </>

    )
}

export default ChargeList
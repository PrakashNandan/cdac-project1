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
    const [pageSize, setPageSize]=useState(10);
    const [pageNumber, setPageNumber]=useState(1);
    const [datafetching, setDataFetching]=useState(false);

    useEffect(() => {
        handleFindALL();
    },[])


    // pagination work
    if(pageSize<1){
        setPageSize(10);
    }

    const lastIndex = pageNumber*pageSize;
    const firstIndex = lastIndex - pageSize;
    const slicedAllData=allData.slice(firstIndex, lastIndex);


   
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

        setDataFetching(true);

        try {

            const res = await privateAxios.get("/charge/findAll");
            setAllData(res.data.pageList.content);


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
                            <FindAllData allData={slicedAllData} setAllData={setAllData} handleFindALL={handleFindALL} />
                        </tbody>

                    </table>

                </div>
                         <Pagination totalUsers={allData.length} userPerPage={pageSize} setUserPerPage={setPageSize} setCurrentPage={setPageNumber} currPage={pageNumber} lastIndex={lastIndex} firstIndex={firstIndex}/>
            </div>


            <ToastContainer />
        </>

    )
}

export default ChargeList
import React, {useState, useEffect}from 'react'
import '../../style/chargeList.css'
import axios from '../axios.jsx'
import FindAllData from '../AccountCharge/FindAllData.jsx'
import {ToastContainer, toast} from 'react-toastify'
import FindAllBillCategory from './FindAllBillCategory'
import Pagination from '../Pagination'


function BillCategoryList() {

    const [allData, setAllData]=useState([]);
    const [isError, setisError]=useState('');
    const [inputId, setInputId] = useState('');
    const [currentPage, setCurrentPage]=useState(1);
    const [userPerPage, setUserPerPage] = useState(3);
    const [showAllData,setShowAllData]=useState(true);

    useEffect(()=>{
        handleFindALL();
    },[])
   



    const handleFindALL=async()=>{
       
        try{
            
            const res = await axios.get("/allBillCategory");
            setAllData(res.data);
            console.log(res.data);


        }catch(error){
            setisError(error.message);
            console.log(error.message);
            showErrorToast();
        }
    }
   
    useEffect(()=>{
        handleFindALL();
    },[])

    // findAll && handleFindALL();

    

    const showErrorToast=()=>{
        toast.error("Something went wrong, check your connection !!")
    }
    const showErrorNotFoundToast=()=>{
        toast.error("Not Found!!")
    }




    const fetchData=async()=>{
        
        try{
            const res = await axios.get(`/allBillCategory/${inputId}`)
            setAllData([res.data]);
            console.log([res.data]);
        }catch(error){
            setisError(error.message);
            console.log(error.message);
            showErrorNotFoundToast();
        } 
    
    }


    // const findDataById = () => {
    //     return allData.find((item) => item.id === inputId);
    //   };


    
    const lastIndex = currentPage*userPerPage;
    const firstIndex = lastIndex - userPerPage;
    const slicedAllData=allData.slice(firstIndex, lastIndex);



  return (

    <>
    
            <h2 id='chargeHeadID'>Bill Category List</h2>


           <div className='find-container'>
           
            {/* <div className='findButtonClass'><button className='btn-find btn btn-primary' onClick={()=>handleFindALL()}>FindAll</button></div> */}
            {/* <div className='ParentPagination'>
                  <input type="number" className='userPerPageClass' name='userPerPage' value={userPerPage} onChange={(e)=>{setUserPerPage(e.target.value)}} />
          </div> */}
            <div className="parentSearchInput">
                <input type="number" className='userPerPageClass' id='Pagi_input_id' name='userPerPage' value={userPerPage} onChange={(e)=>{setUserPerPage(e.target.value)}} />

                <input type="number" placeholder='search by ID' id='searchInput' value={inputId} onChange={(e) => setInputId(e.target.value)} /> 
                <button className='btn btn-primary' id='searchDataID' onClick={fetchData}>Search</button>   
            </div>



            <div className='table-responsive'>
                <table className='table userTable'>
                    <thead>
                        <tr>
                            <th>BillCategotyID</th> 
                            <th>billCategoryName</th>
                            <th>operations</th>
                           
                        </tr>
                    </thead>
                    <tbody>
                    <FindAllBillCategory allData={slicedAllData} setAllData={setAllData} handleFindALL={handleFindALL}/>
                    </tbody>
                  
                </table> 
                <Pagination totalUsers={allData.length} userPerPage={userPerPage} setCurrentPage={setCurrentPage} currPage={currentPage}/>
        </div>
        </div>
   

    <ToastContainer/>
    </>

  )
}

export default BillCategoryList;
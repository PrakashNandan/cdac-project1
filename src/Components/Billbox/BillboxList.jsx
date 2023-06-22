import React, {useState, useEffect}from 'react'
import '../../style/chargeList.css'
import axios from '../axios.jsx'
import {ToastContainer, toast} from 'react-toastify'
import FindBillBoxData from './FindBillBoxData'


function BillboxList() {

    const [allData, setAllData]=useState([]);
    const [isError, setisError]=useState('');
    const [inputId, setInputId] = useState('');
    const [showAllData,setShowAllData]=useState(true);

    useEffect(()=>{
        handleFindALL();
    },[])
   


    const handleFindALL=async()=>{
       
        try{
            
            const res = await axios.get("/charge/findAll");
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


    
    const showErrorToast=()=>{
        toast.error("Something went wrong, check your connection !!")
    }
    const showErrorNotFoundToast=()=>{
        toast.error("Not Found!!")
    }



    const fetchData=async()=>{
        
        try{
            const res = await axios.get(`/charge/find/${inputId}`)
            setAllData([res.data]);
            console.log([res.data]);
        }catch(error){
            setisError(error.message);
            console.log(error.message);
            showErrorNotFoundToast();
        } 
    
    }



  return (

    <>
    
            <h2 id='chargeHeadID'>BillBox List</h2>


           <div className='find-container'>
            {/* <div className='findButtonClass'><button className='btn-find btn btn-primary' onClick={()=>handleFindALL()}>FindAll</button></div> */}

            <div className="parentSearchInput">
                <input type="number" placeholder='search by ID' id='searchInput' value={inputId} onChange={(e) => setInputId(e.target.value)} /> 
                <button className='btn btn-primary' id='searchDataID' onClick={fetchData}>Search</button>   
            </div>

            <div className='table-responsive'>
                <table className='table userTable'>
                    <thead>
                        <tr>
                            <th>ID</th> 
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
                            <th>remarks</th>
                            <th>Actions</th>
                            <th>Download</th>
                        </tr>
                    </thead>
                    <tbody>
                    <FindBillBoxData allData={allData} setAllData={setAllData} handleFindALL={handleFindALL}/>
                    </tbody>
                  
                </table> 
        </div>
        </div>
   

    <ToastContainer/>
    </>

  )
}

export default BillboxList
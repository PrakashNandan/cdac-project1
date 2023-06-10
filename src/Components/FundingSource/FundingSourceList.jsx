import React, {useState, useEffect}from 'react'
import '../../style/chargeList.css'
import axios from '../axios.jsx'
import FundingSourceData from './FundingSourceData'
import {ToastContainer, toast} from 'react-toastify'
import FindAllBillCategory from './FindAllFundingSource'
import FindAllFundingSource from './FindAllFundingSource'


function FundingSourceList() {

    const [allData, setAllData]=useState([]);
    const [isError, setisError]=useState('');
    const [inputId, setInputId] = useState('');
    const [showAllData,setShowAllData]=useState(true);

    useEffect(()=>{
        handleFindALL();
    },[])
   



    const handleFindALL=async()=>{
       
        try{
            
            const res = await axios.get("/fundSource/findAll");
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
            const res = await axios.get(`/fundSource/find/${inputId}`)
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



  return (

    <>
    
            <h2 id='chargeHeadID'>Funding Source List</h2>


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
                            <th>Funding Source ID</th> 
                            <th>Funding Source Name</th>
                           
                        </tr>
                    </thead>
                    <tbody>
                    <FindAllFundingSource allData={allData} setAllData={setAllData} handleFindALL={handleFindALL}/>
                    </tbody>
                  
                </table> 
        </div>
        </div>
   

    <ToastContainer/>
    </>

  )
}

export default FundingSourceList;
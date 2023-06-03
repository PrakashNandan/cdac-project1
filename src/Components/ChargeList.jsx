import React, {useState, useEffect}from 'react'
import '../style/chargeList.css'
import axios from './axios.jsx'
import FindAllData from './FindAllData.jsx'
import {ToastContainer, toast} from 'react-toastify'


function ChargeList() {

    const [allData, setAllData]=useState([]);
    const [isError, setisError]=useState('');
    const [inputId, setInputId] = useState('');

    useEffect(()=>{
        // handleFindALL();
    },[])



    const handleFindALL=async()=>{
        try{
            const res = await axios.get("/users");
            setAllData(res.data);
            console.log(res.data);

        }catch(error){
            setisError(error.message);
            console.log(error.message);
            showErrorToast();
        }

    }

    const showErrorToast=()=>{
        toast.error("Something went wrong, check your connection !!")
    }
    const showErrorNotFoundToast=()=>{
        toast.error("Not Found!!")
    }


    // const findDataById = (id) => {
    //     return data.find((item) => item.id === id);
    // };

    const fetchData=async()=>{
        try{
            const res = await axios.get(`/users/${inputId}`)
            setAllData([res.data]);
            console.log(res.data);
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
    
            <h2 id='chargeHeadID'>Charge List</h2>


           <div className='find-container'>
            <div className='findButtonClass'><button className='btn-find btn btn-primary' onClick={handleFindALL}>FindAll</button></div>

            <div className="parentSearchInput">
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
                            <th>isDepositetoGovt</th>
                            <th>Operations</th>

                            {/* <th>ID</th>
                            <th>Name</th>
                            <th>userName</th>
                            <th>email</th>
                            <th>Operations</th> */}
                        </tr>
                    </thead>
                    <tbody>
                    <FindAllData allData={allData} handleFindALL={handleFindALL}/>
                    </tbody>
                  
                </table> 
        </div>
        </div>
   

    <ToastContainer/>
    </>

  )
}

export default ChargeList
import React, { useState, useEffect } from 'react'
import '../../style/chargeList.css'
import axios from '../axios.jsx'
import { ToastContainer, toast } from 'react-toastify'
import FindAllDept from './FindAllDept'
import { privateAxios } from '../../service/helperUtil'
import Pagination from '../Pagination'

import ShowModal from '../ShowModal.jsx'
import Mymodal from '../ShowModal.jsx';
import '../../style/modal.css'
import UserData from '../AccountCharge/UserData.jsx';
import '../../style/UserData.css'
import DeptData from './DeptData.jsx';


function DeptList() {

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


     const [ShowModal, setShowModal]=useState(false);
     const [dept, setDept] = useState({
         deptName : '',
         deptCode:'',
       },[] );
       const [allDept, setAllDept] = useState([]);
       const closeModal = ()=>{
           return setShowModal(false);
       }
   
   
       const handleInputChange = (event) => {
           const { name, value } = event.target;
           setDept((prevDept) => ({ ...prevDept, [name]: value }));
       };
   
   
         const  handleSubmit = async (event) => {
           
           event.preventDefault(); 
           console.log(dept);  
    
           try{
             const res = await privateAxios.post("dept/save", dept);
             toast.success('Submit Successfully')
             setAllDept([...allDept, dept]);
             console.log(res);
   
           }catch(error){
             toast.error("Form not Submitted !! , please try again")
             console.log(error);
           }
           closeModal();
   
         };
         
   const showToast=()=>{
       if(isError!=="")
       {
         toast.error("Error !! form not submittd, pleae try again")
       }else{
         toast.success('Submit Successfully')
       }
     }
    // useEffect(() => {
    //     handleFindALL();
    // }, [])


    const handleFindALL = async () => {

        try {

            const res = await privateAxios.get("/dept/findAll");
            setAllData(res.data.pageList.content);
            console.log(res.data);


        } catch (error) {
            setisError(error.message);
            console.log(error.message);
            showErrorToast();
        }
    }

    
     // pagination work
     if(pageSize<1){
        setPageSize(5);
    }

    useEffect(()=>{
        if(isReady){
        setDataFetching(true);        
        const res =  privateAxios.get(`/dept/findAll?pageNumber=${pageNumber-1}&pageSize=${pageSize}`)
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
            const res = await axios.get(`dept/find/${inputId}`)
            setAllData([res.data]);
            console.log([res.data]);
        } catch (error) {
            setisError(error.message);
            console.log(error.message);
            showErrorNotFoundToast();
        }

    }

    const mainModal =(

        <Mymodal closeModal={closeModal} handleSubmit={handleSubmit} handleInputChange={handleInputChange} >

              <button id='close-btn' onClick={closeModal}>close</button>
                <h2>Form</h2>

              <form onSubmit={handleSubmit}  className='form'>

              <div >
                  <label htmlFor="deptName">Department Name:</label>
                  <input
                    type="text"
                    name="deptName"
                    id="deptName"
                    value={dept.deptName}
                    onChange={handleInputChange}
                    placeholder="Enter deptName"
                    required
                  />
              </div>
              <div >
                  <label htmlFor="deptCode">Department code:</label>
                  <input
                    type="text"
                    name="deptCode"
                    id="deptCode"
                    value={dept.deptCode}
                    onChange={handleInputChange}
                    placeholder="Enter deptCode"
                    required
                  />
              </div>
     
      
        
                        
              {/* onClick={closeModal} */}
                <button className='modal-btn' type='submit' >Submit</button>
              </form>

        </Mymodal>
    )


    return (

        <>

            <h2 id='chargeHeadID'>Department List</h2>


            <div className='find-container'>
                {/* <div className='findButtonClass'><button className='btn-find btn btn-primary' onClick={()=>handleFindALL()}>FindAll</button></div> */}
               
                <div className="parentSearchInput">
                    <div> <button className='btn btn-primary' id='searchDataID' onClick={()=>setShowModal(true)}>Add Department</button>
   {ShowModal && mainModal}</div>
                
                    <div className="spacer"></div>
                    <input type="number" placeholder='search by ID' id='searchInput' value={inputId} onChange={(e) => setInputId(e.target.value)} />
                    <button className='btn btn-primary' id='searchDataID' onClick={fetchData}>Search</button>
                </div>



                <div className='table-responsive'>
                    <table className='table userTable'>
                        <thead>
                            <tr>
                                <th>Department ID</th>
                                <th>Department Name</th>
                                <th>Department code</th>
                                <th>Action</th>


                            </tr>
                        </thead>
                        <tbody>
                            <FindAllDept allData={allData} setAllData={setAllData} handleFindALL={handleFindALL} />
                        </tbody>

                    </table>
                </div>
                { isAllData && <Pagination totalUsers={allData.length} pageSize={pageSize} setPageSize={setPageSize} setPageNumber={setPageNumber} pageNumber={pageNumber} lastIndex={lastIndex} firstIndex={firstIndex} totalPages={totalPages} totalElements={totalElements} />}
            </div>


            <ToastContainer />
        </>

    )
}

export default DeptList;
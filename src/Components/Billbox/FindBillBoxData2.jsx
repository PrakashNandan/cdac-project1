import axios from '../axios.jsx';
import React, {useEffect, useState} from 'react'
import {ToastContainer, toast} from 'react-toastify'
import Mymodal from '../ShowModal.jsx';
import { privateAxios } from '../../service/helperUtil.js';
import { Navigate, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setPdf } from './billBoxSlice.js';


function FindBillBoxData2({allData,setAllData, }) {

  // const [showModal, setShowModal] = useState(false);
  // const [dataForUpdate, setDataForUpdate] = useState([]);
  // const [uid, setUid]= useState();
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const pdf=async(curData)=>{
    
              // setDataForUpdate(res.data);
              navigate('/pdf')
    dispatch(setPdf(curData));
   
  
  }
  const handleApprove=async(id)=>{

    const conf = window.confirm("Are you sure to approve the data with id: "+(+id))
    if(conf){

        try{
            const res = await privateAxios.get(`/charge/approveBillBoxDetails/${id}`)
            toast.warn("The bill has been approved ")
            setAllData(res.data);
            console.log(res);
            // handleFindALL();

        }catch(error){
            toast.error("Error in approval")
            console.log(error.message);
        }
    
        // handleFindALL();
    }
  }

  




  


  return (
    // <>


    

    // {
    //   allData && allData.length > 0 &&
    //     allData.map((curData) => {
    //         const {id,billSlNo,BillTypeName,DepartmentName,PaymentTypeName,invoiceNo,invoiceDate,entryDate,
    //           amount,valid,remarks,DepartmentId,PaymentTypeId,BillTypeId
    //             } = curData;

          
    //         return (
    //             <tr >
    //                 <td>{id}</td> 
    //                 <td>{BillTypeName}</td>
    //                 <td>{DepartmentName}</td>
    //                 <td>{PaymentTypeName}</td>
    //                 <td>{invoiceNo}</td>
    //                 <td>{invoiceDate}</td>
    //                 <td>Rs. {amount}</td>
    //                 {/* <td>{valid===true ? "YES" : "NO" }</td> */}
    //                 {/* <td>{remarks}</td> */}
  
    //                 <td><button type="button" class="btn btn-success" onClick={()=>handleApprove()}>Approve</button>
                        
    //                                   </td>
    //                 <td><button type="button" class="btn m-1 btn-light" onClick={()=>pdf(curData)}>Generate PDF</button></td>
    //             </tr>
    //         )
    //     })

    // }
    // <ToastContainer/>

    // </>
    <>
     <tr >
                    <td>2</td> 
                    <td>CGST</td>
                    <td>Electrical</td>
                    <td>Card</td>
                    <td>23237678</td>
                    <td>23-07-2023</td>
                    <td>Rs. 77856</td>
                    {/* <td>{valid===true ? "YES" : "NO" }</td> */}
                    {/* <td>{remarks}</td> */}
  
                    <td><button type="button" class="btn btn-success" onClick={()=>handleApprove()}>Approve</button>
                        
                    </td>
                    <td><button type="button" className='btn m-1 btn-info btn-sm' onClick={()=>pdf()}>Generate PDF</button></td>
                </tr></>
  )
}

export default FindBillBoxData2;
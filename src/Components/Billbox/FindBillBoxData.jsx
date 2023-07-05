import axios from '../axios.jsx';
import React, {useEffect, useState} from 'react'
import {ToastContainer, toast} from 'react-toastify'
import Mymodal from '../ShowModal.jsx';
import { privateAxios } from '../../service/helperUtil.js';
import { Navigate, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setPdf } from './billBoxSlice.js';


function FindBillBoxData({select1Data,select2Data,select3Data,allData,setAllData, handleFindALL}) {

  const [showModal, setShowModal] = useState(false);
  const [dataForUpdate, setDataForUpdate] = useState([]);
  const [uid, setUid]= useState();
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const pdf=async(curData)=>{
    
              // setDataForUpdate(res.data);
              navigate('/pdf')
    dispatch(setPdf(curData));
   
  
  }
  const handleDeleteData=async(id)=>{

    const conf = window.confirm("Are you sure to delete the data with id: "+(+id))
    if(conf){

        try{
            const res = await privateAxios.get(`/charge/deleteBillBoxDetails/${id}`)
            toast.warn("The data has Deleted Successfully")
            setAllData(res.data);
            console.log(res);
            handleFindALL();

        }catch(error){
            toast.error("Error in deletion")
            console.log(error.message);
        }
    
        // handleFindALL();
    }
  }

  const handleUpdateData=async(curData)=>{
      setShowModal(true);
      setUid(curData.id);

      // <td>{id}</td> 
      //               <td>{BillTypeName}</td>
      //               <td>{DepartmentName}</td>
      //               <td>{PaymentTypeName}</td>
      //               <td>{invoiceNo}</td>
      //               <td>{invoiceDate}</td>
      //               <td>Rs. {amount}</td>

    setDataForUpdate({
      BillType: curData.BillTypeId,
      Department: curData.DepartmentId ,
      PaymentType: curData.PaymentTypeId ,
      invoiceNo: curData.invoiceNo ,
      invoiceDate: curData.invoiceDate ,
      amount: curData.amount ,
      valid: true ,
      remarks:'' ,

    })
      
  }

  const closeModal = ()=>{
    return setShowModal(false);
    
  }

  const handleSubmit=async(event)=>{
        event.preventDefault();
        try{
          const res = await privateAxios.put(`/charge/updateBillBoxDetails/${uid}`, dataForUpdate );
          console.log(res.data);
          toast.success("updated Successfully")
        }catch(error){
          toast.error("Error !! Not updated");
          console.log(error.message);
        }
        
        closeModal();
        handleFindALL();
  }

  const handleInputChange=(event)=>{
    const { name, value, type, checked } = event.target;
    const inputValue = type === 'checkbox' ? checked : value;
    setDataForUpdate((prevUser) => ({ ...prevUser, [name]: inputValue }));
  }
  const handleTextAreaChange = (event) => {
    const { value } = event.target;
    setDataForUpdate({ ...dataForUpdate,remarks: value });
    // onClick={()=>{setBillBox({...billBox,valid:'1'})}}
  };


  const mainModal = (


    <Mymodal closeModal={closeModal} handleSubmit={handleSubmit} handleInputChange={handleInputChange} >

      {/* <button id='close-btn' onClick={closeModal}>close</button> */}
      <h1>Bill Box Form</h1> 
      <div className="cont">
          
        <form className = "modalForm">
          <div className="row">
            <div className="col-half">
              {/* <div className="invoice">
                <input type="string" id="input-box1" value={billBox.billSlNo} placeholder="Bill Sl No" onChange={handleInputChange} />
              </div> */}
            </div>
            <div className='row'>
            <div className="input-group input-group-icon invoice">
            <div className="input-icon">
            <i class="fa fa-address-card-o" aria-hidden="true"></i></div>
              <div className="invoice">
                <input type="text" placeholder='Invoice no' name='invoiceNo' value={dataForUpdate.invoiceNo} onChange={handleInputChange} />
              </div>
              </div>
            </div>
            <div className="input-group input-group-icon">
              {/* <input type="text" placeholder="Full Name" /> */}
              <div className="input-icon">
                <i class="fa fa-columns" aria-hidden="true"></i>
              </div>


              {/* <select >
                <option id="op">Bill Type</option>
                <option className="op1">Bill Type 2</option>
              </select> */}


              <select name='BillType' value={dataForUpdate.BillType} onChange={handleInputChange}>
                <option id="op" >Bill Type</option>
                {select1Data.map((option) => (
                  <option key={option.id} value={option.id}>
                    {option.name}
                  </option>
                ))}
              </select>



            </div>
            <div className="input-group input-group-icon">

              <div className="input-icon">
                <i class="fa fa-money" aria-hidden="true"></i>        </div>

              {/* <select>
                <option >Bill Category</option>
                <option >Bill Category2</option>
              </select> */} 

          <select name='Department' value={dataForUpdate.Department} onChange={handleInputChange}>
            <option>Department List</option>
            {select2Data.map((option) => (
              <option key={option.id}  value={option.id}>
                {option.name}
              </option>
            ))}
          </select>




            </div>
            <div className="input-group input-group-icon">

              <div className="input-icon">
                <i className="fa fa-credit-card" />        </div>
              {/* <select >
                <option>Funding Source</option>
                <option>Funding Source2</option>
              </select> */}

            <select name='PaymentType' value={dataForUpdate.PaymentType} onChange={handleInputChange}>
              <option>Payment Type</option>
              {select3Data.map((option) => (
                <option key={option.id} value={option.id}>
                  {option.name}
                </option>
              ))}
            </select>


            </div>
          </div>
         
          <div className="row1">
            <div className='row'>
            <div className="col-half">
              <h4>Invoice Date</h4>
              <div className="input-group">
                <input type="date" id="entry" placeholder='Invoice date' name='invoiceDate' value={dataForUpdate.invoiceDate} onChange={handleInputChange} />
              </div>
            </div>
            {/* <div className="col-half">
              <h4>Entry Date</h4>
              <div className="input-group">
                <input type="date" id="entry" placeholder='entry date' name='entryDate' value={billBox.entryDate} onChange={handleInputChange} />     </div>

            </div> */}
            <div className='col-half'>
            <h4>Bill Net Amount</h4>
              <div className="input-group input-group-icon">

                <input type="number" id="yes" placeholder='Bill Net Amount' value={dataForUpdate.amount} name='amount' onChange={handleInputChange} />
                <div className="input-icon">
                  <i class="fa fa-inr" aria-hidden="true"></i>
                </div>
              </div>
            </div>
            </div>
          
          <div className="row">
            <h4>Is Valid ?</h4>
            <div className="input-group">
              <input
                id="payment-method-card"
                type="radio"
                name="valid"
                
                defaultChecked="true"
                
                onClick={()=>{setDataForUpdate({...dataForUpdate,valid:true})}}
              />
              <label htmlFor="payment-method-card">
                <span>
                  YES
                </span>
              </label>
              <input
                id="payment-method-paypal"
                type="radio"
                name="valid"
                
                // defaultValue="paypal"
                onClick={()=>{setDataForUpdate({...dataForUpdate,valid:false})}}
              />
              <label htmlFor="payment-method-paypal">
                {" "}
                <span>
                  NO
                </span>
              </label>
            </div>
            
            
          </div>
          </div>
          <div className="row">
            <h4>Remarks</h4>
            {/* <div className="input-group">
        <input id="terms" type="checkbox" />
        <label htmlFor="terms">
          I accept the terms and conditions for signing up to this service, and
          hereby confirm I have read the privacy policy.
        </label>
      </div> */}
            <div className="input-group input-group-icon">
              <textarea id="w3review" name="remark" value={dataForUpdate.remarks} onChange={handleTextAreaChange} rows="2" cols="100"  />

            </div>

          </div>
          <div className='row'><button id='submitbtn' type='submit' onClick={handleSubmit} >Submit</button></div>
          
        </form>
      </div>


    </Mymodal>
  )


  return (
    <>


      {showModal && mainModal}

    {
      allData && allData.length > 0 &&
        allData.map((curData) => {
            const {id,billSlNo,BillTypeName,DepartmentName,PaymentTypeName,invoiceNo,invoiceDate,entryDate,
              amount,valid,remarks,DepartmentId,PaymentTypeId,BillTypeId
                } = curData;

          
            return (
                <tr >
                    <td>{id}</td> 
                    <td>{BillTypeName}</td>
                    <td>{DepartmentName}</td>
                    <td>{PaymentTypeName}</td>
                    <td>{invoiceNo}</td>
                    <td>{invoiceDate}</td>
                    <td>Rs. {amount}</td>
                    {/* <td>{valid===true ? "YES" : "NO" }</td> */}
                    {/* <td>{remarks}</td> */}
  
                    <td><button type="button" class="btn btn-danger btn-sm" onClick={()=>handleDeleteData(id)}>Delete</button>
                        <button type="button" class="btn ml-2 btn-secondary btn-sm" onClick={()=>handleUpdateData(curData)}>Update</button>
                    </td>
                    <td><button type="button" class="btn btn-info btn-sm" onClick={()=>pdf(curData)}>Generate PDF</button></td>
                </tr>
            )
        })

    }
    <ToastContainer/>

    </>
    // <>
    //  <tr >
    //                 <td>2</td> 
    //                 <td>CGST</td>
    //                 <td>Electrical</td>
    //                 <td>Card</td>
    //                 <td>23237678</td>
    //                 <td>23-07-2023</td>
    //                 <td>Rs. 77856</td>
    //                 {/* <td>{valid===true ? "YES" : "NO" }</td> */}
    //                 {/* <td>{remarks}</td> */}
  
    //                 <td><button type="button" class="btn btn-danger" onClick={()=>handleDeleteData()}>Delete</button>
    //                     <button type="button" class="btn m-1 btn-light" onClick={()=>handleUpdateData()}>Update</button>
    //                 </td>
    //                 <td><button type="button" className='btn m-1 btn-info btn-sm' onClick={()=>pdf()}>Generate PDF</button></td>
    //             </tr></>
  )
}

export default FindBillBoxData;
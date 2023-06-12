import axios from 'axios';
import React, { useState } from 'react'

function PaymentTypeData({paymentTypes}) {


  const [filteredData, setFilteredData]=useState([]);
  
  // const res = axios.get("/find")



  return (
    <>
    {
        paymentTypes.map((curPaymentType) => {
            const {paymentTypeName,
              entryDate,isValid
            } = curPaymentType;
           

            return (
                <tr >
                    {/* <td>{id}</td> */}
                    <td>{paymentTypeName}</td>
                    <td>{entryDate}</td>
                    <td>{isValid}</td>
                     
                </tr>
            )
        })

    }
    </>
  )
}

export default PaymentTypeData;
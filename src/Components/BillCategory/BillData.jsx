
import React, { useState } from 'react'

function BillData({allBillCategory}) {


 
  
  // const res = axios.get("/find")



  return (
    <>
    {
        allBillCategory.map((curBill) => {
            const {billCategoryName} = curBill;
           

            return (
                <tr >
                    {/* <td>{id}</td> */}
                    <td>{billCategoryName}</td>
                     
                </tr>
            )
        })

    }
    </>
  )
}

export default BillData;
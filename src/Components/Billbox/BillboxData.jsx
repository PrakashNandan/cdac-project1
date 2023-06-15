import axios from 'axios';
import React, { useState } from 'react'

function BillboxData({slicedBill}) {
    
  return (
    <>
    {
        slicedBill.map((curBill) => {                    
            const {billSlNo,
                BillType,
                BillCategory,
                FundingSource,
                invoiceNo,
                invoiceDate,
                entryDate,
                baseAmount,
                billNetAmount,
                valid,
                remarks} = curBill;
           

            return (
                <tr >
                    {/* <td>{id}</td> */}
                    <td>{billSlNo}</td>
                    <td>{BillType}</td>
                    <td>{BillCategory}</td>
                    <td>{FundingSource}</td>
                    <td>{invoiceNo}</td>
                    <td>{invoiceDate}</td>
                    <td>{entryDate}</td>
                    <td>{baseAmount}</td>
                    <td>{billNetAmount}</td>
                    <td>{valid}</td>
                    <td>{remarks}</td>
                   
                </tr>
            )
        })

    }
    </>
  )
}

export default BillboxData;
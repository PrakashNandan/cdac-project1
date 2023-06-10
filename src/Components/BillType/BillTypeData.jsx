import axios from 'axios';
import React, { useState } from 'react'

function BillTypeData({billTypes}) {


  const [filteredData, setFilteredData]=useState([]);
  
  // const res = axios.get("/find")



  return (
    <>
    {
        billTypes.map((curBillType) => {
            const {billTypeName,
              entryDate
            } = curBillType;
           

            return (
                <tr >
                    {/* <td>{id}</td> */}
                    <td>{billTypeName}</td>
                    <td>{entryDate}</td>
                     
                </tr>
            )
        })

    }
    </>
  )
}

export default BillTypeData;
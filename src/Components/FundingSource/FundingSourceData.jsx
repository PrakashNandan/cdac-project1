
import React, { useState } from 'react'

function FundingSourceData({allFundingSource}) {


 
  
  // const res = axios.get("/find")



  return (
    <>
    {
        allFundingSource.map((currFundingSource) => {
            const {fundingSourceName} = currFundingSource;
           

            return (
                <tr >
                    {/* <td>{id}</td> */}
                    <td>{fundingSourceName}</td>
                     
                </tr>
            )
        })

    }
    </>
  )
}

export default FundingSourceData;
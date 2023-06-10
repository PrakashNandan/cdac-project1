
import React, { useState } from 'react'

function FinYearData({slicedfinYear}) {




  return (
    <>
    {
        slicedfinYear.map((curFinYear) => {
            const {finYearStartDate,finYearEndDate,finYearName,remarks,entryDate} = curFinYear;
           

            return (
                <tr >
                    {/* <td>{id}</td> */}
                    <td>{finYearStartDate}</td>
                    <td>{finYearEndDate}</td>
                    <td>{finYearName}</td>
                    <td>{remarks}</td>
                    <td>{entryDate}</td>
                     
                </tr>
            )
        })

    }
    </>
  )
}

export default FinYearData;
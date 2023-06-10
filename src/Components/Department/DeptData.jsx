
import React, { useState } from 'react'

function DeptData({slicedAllDept}) {




  return (
    <>
    {
        slicedAllDept.map((curDept) => {
            const {deptName,deptCode} = curDept;
           

            return (
                <tr >
                    {/* <td>{id}</td> */}
                    <td>{deptName}</td>
                    <td>{deptCode}</td>
                     
                </tr>
            )
        })

    }
    </>
  )
}

export default DeptData;
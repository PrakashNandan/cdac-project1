
import React, { useState } from 'react'

function LidgerTypeData({slicedLidgerType}) {

  return (
    <>
    {
        slicedLidgerType.map((curLiger) => {
            const {ledgerTypeName} = curLiger;
           

            return (
                <tr >
                    {/* <td>{id}</td> */}
                    <td>{ledgerTypeName}</td>
                     
                </tr>
            )
        })

    }
    </>
  )
}

export default LidgerTypeData;
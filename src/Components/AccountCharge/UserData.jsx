
import React, { useState } from 'react'

function UserData({users}) {


  const [filteredData, setFilteredData]=useState([]);
  
  // const res = axios.get("/find")



  return (
    <>
    {
        users.map((curUser) => {
            const {chargeName,
            chargeType,
            chargeRate,
            entryDate,
            chargeAmount,
            chargeApplyOnBaseAmount,
            roundingType,
            hoaPostingRequired,
            depositToGovt} = curUser;
           

            return (
                <tr >
                    {/* <td>{id}</td> */}
                    <td>{chargeName}</td>
                    <td>{chargeType}</td>
                    <td>{chargeRate}</td>
                    <td>{entryDate}</td>
                    <td>{chargeAmount}</td>
                    <td>{chargeApplyOnBaseAmount}</td>
                    <td>{roundingType}</td>
                    <td>{hoaPostingRequired===true ? "YES" : "NO" }</td>
                    <td>{depositToGovt===true ? "YES" : "NO"}</td>  
                </tr>
            )
        })

    }
    </>
  )
}

export default UserData
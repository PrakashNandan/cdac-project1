import axios from 'axios';
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
<<<<<<< HEAD
            isDepositToGovt,} = curUser;
=======
            depositToGovt} = curUser;
>>>>>>> 2a7de0df04ef26efe184afca4e435d6a2c470eab
           

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
<<<<<<< HEAD
                    <td>{isDepositToGovt===true ? "YES" : "NO"}</td>  
=======
                    <td>{depositToGovt===true ? "YES" : "NO"}</td>  
>>>>>>> 2a7de0df04ef26efe184afca4e435d6a2c470eab
                </tr>
            )
        })

    }
    </>
  )
}

export default UserData
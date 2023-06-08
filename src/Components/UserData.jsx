import React from 'react'

function UserData({users}) {
  return (
    <>
    {
        users.map((curUser, index) => {
            const {chargeName,
            chargeType,
            chargeRate,
            entryDate,
            chargeAmount,
            chargeApplyOnBaseAmount,
            roundingType,
            hoaPostingRequired,
            isDepositToGovt,} = curUser;
           

            return (
                <tr key={index}>
                    {/* <td>{id}</td> */}
                    <td>{chargeName}</td>
                    <td>{chargeType}</td>
                    <td>{chargeRate}</td>
                    <td>{entryDate}</td>
                    <td>{chargeAmount}</td>
                    <td>{chargeApplyOnBaseAmount}</td>
                    <td>{roundingType}</td>
                    <td>{hoaPostingRequired===true ? "YES" : "NO" }</td>
                    <td>{isDepositToGovt===true ? "YES" : "NO"}</td>  
                </tr>
            )
        })

    }
    </>
  )
}

export default UserData
import React, { useState } from 'react'
import Sidebar from './Sidebar'
import AddAndDisplayUserPage from './AddUser'
import Addcharges from './AddCharges'
import ChargeList from './ChargeList'

function UserDetail() {

// const 
const [showChargeList,setShowChargeList]=useState(false);



  return (
    <div>
      <Sidebar setShowChargeList={setShowChargeList}  ></Sidebar>
      {/* <AddAndDisplayUserPage/> */}
      {/* <Addcharges/> */}
     {showChargeList? <ChargeList />:<Addcharges/>}

    </div>
  )
}

export default UserDetail
import React, { useState } from 'react'
import Sidebar from './Sidebar'
import AddAndDisplayUserPage from './AddUser'
import Addcharges from './AddCharges'
import ChargeList from './ChargeList'

function UserDetail() {

// const 
const [showChargeList,setShowChargeList]=useState(false);
const [findAll, setFindAll]=useState(false)



  return (
    <div>
      <Sidebar setShowChargeList={setShowChargeList}  setFindAll={setFindAll}></Sidebar>
      {/* <AddAndDisplayUserPage/> */}
      {/* <Addcharges/> */}
     {showChargeList? <ChargeList findAll={findAll} />:<Addcharges/>}

        

    </div>
  )
}

export default UserDetail
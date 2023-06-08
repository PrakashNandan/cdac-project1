import React, { useState } from 'react'
import Sidebar from './Sidebar'
import AddAndDisplayUserPage from './AddUser'
import Addcharges from './AddCharges'
import ChargeList from './ChargeList'

function UserDetail() {

// const 
const [showChargeList,setShowChargeList]=useState(false);
<<<<<<< HEAD
// const [findAll, setFindAll]=useState(false)
=======
>>>>>>> 2a7de0df04ef26efe184afca4e435d6a2c470eab



  return (
    <div>
      <Sidebar setShowChargeList={setShowChargeList}  ></Sidebar>
      {/* <AddAndDisplayUserPage/> */}
      {/* <Addcharges/> */}
<<<<<<< HEAD
     {showChargeList? <ChargeList  />:<Addcharges/>}

        
=======
     {showChargeList? <ChargeList />:<Addcharges/>}
>>>>>>> 2a7de0df04ef26efe184afca4e435d6a2c470eab

    </div>
  )
}

export default UserDetail
import React from 'react'
import Sidebar from './Sidebar'
import AddAndDisplayUserPage from './AddUser'
import Addcharges from './AddCharges'
import ChargeList from './ChargeList'

function UserDetail() {
  return (
    <div>
      <Sidebar/>
      {/* <AddAndDisplayUserPage/> */}
      {/* <Addcharges/> */}
      <ChargeList/>

        

    </div>
  )
}

export default UserDetail
import React, { useState } from 'react'
import Sidebar from './Sidebar'
import Addcharges from './AccountCharge/AddCharges'
import ChargeList from './AccountCharge/ChargeList'
import AddBillCategory from './BillCategory/AddBillCategory'
import BillCategoryList from './BillCategory/BillCategoryList'
import AddDept from './Department/AddDept'
import DeptList from './Department/DeptList'
import AddFinYear from './FinancialYear.jsx/AddFinYear'
import FinYearList from './FinancialYear.jsx/FinYearList'
import AddLedgerType from './LedgerType/AddLedgerType'
import LedgerTypeList from './LedgerType/LedgerTypeList'

function UserDetail() {

// const 
const [showChargeList,setShowChargeList]=useState(false);



  return (
    <div>
      <Sidebar setShowChargeList={setShowChargeList}  ></Sidebar>
      {/* <AddAndDisplayUserPage/> */}
      {/* <Addcharges/> */}
     {/* {showChargeList? <ChargeList />:<Addcharges/>} */}

     <AddBillCategory/>
     <BillCategoryList/>
     {/* <AddDept/> */}
     {/* <DeptList/> */}
     {/* <AddFinYear/> */}
     {/* <FinYearList/> */}
     {/* <AddLedgerType/> */}
     {/* <LedgerTypeList/> */}
     

    </div>
  )
}

export default UserDetail
import React, { useState } from "react";
import Sidebar from "./Sidebar";
import AddAndDisplayUserPage from "./AddUser";
import Addcharges from "./AccountCharge/AddCharges";
import ChargeList from "./AccountCharge/ChargeList";
import BillTypeList from "./BillType/BillTypeList";
import AddBillType from "./BillType/AddBillType";
import AddBillCategory from "./BillCategory/AddBillCategory";
import BillCategoryList from "./BillCategory/BillCategoryList";
import AddFundingSource from "./FundingSource/AddFundingSource";
import FundingSourceList from "./FundingSource/FundingSourceList";
import AddPaymentType from "./PaymentType/AddPaymentType";
import PaymentTypeList from "./PaymentType/PaymentTypeList";
import AddLedgerType from "./LedgerType/AddLedgerType";
import LedgerTypeList from "./LedgerType/LedgerTypeList";
import DeptList from "./Department/DeptList";
import AddDept from "./Department/AddDept";
import AddFinYear from "./FinancialYear/AddFinYear";
import FinYearList from "./FinancialYear/FinYearList";
import Db from "./Db";
import Homepage from "./Homepage";
function UserDetail() {
  // const
  const [showChargeList, setShowChargeList] = useState(false);
  const [showAddCharge,setShowAddCharge]=useState(false);
  const [showAddBillType,setShowAddBillType]=useState(false);
  const [showBillTypeList,setShowBillTypeList]=useState(false);
  const [showAddBillCategory,setShowAddBillCategory]=useState(false);
  const [showBillCategoryList,setShowBillCategoryList]=useState(false);
  const [showAddDept,setShowAddDept]=useState(false);
  const [showDeptList,setShowDeptList]=useState(false);
  const [showAddFinYear,setShowAddFinYear]=useState(false);
  const [showFinYearList,setShowFinYearList]=useState(false);
  const [showAddFundingSource,setShowAddFundingSource]=useState(false);
  const [showFundingSourceList,setShowFundingSourceList]=useState(false);
  const [showAddLedgerType,setShowAddLedgerType]=useState(false);
  const [showLedgerTypeList,setShowLedgerTypeList]=useState(false);
  const [showAddPaymentType,setShowAddPaymentType]=useState(false);
  const [showPaymentTypeList,setShowPaymentTypeList]=useState(false);
  const [ShowDashboard, setShowDashboard] = useState(false);
  const [ShowHomepage, setShowHomepage] = useState(true);

  return (
    <div>
      <Sidebar
        setShowHomepage= {setShowHomepage}
        setShowDashboard= {setShowDashboard}
        setShowChargeList={setShowChargeList}
        setShowAddCharge={setShowAddCharge}
        setShowBillTypeList={setShowBillTypeList}
        setShowAddBillType={setShowAddBillType}
        setShowAddBillCategory={setShowAddBillCategory}
        setShowBillCategoryList={setShowBillCategoryList}
        setShowAddFundingSource={setShowAddFundingSource}
        setShowFundingSourceList={setShowFundingSourceList}
        setShowAddPaymentType={setShowAddPaymentType}
        setShowPaymentTypeList={setShowPaymentTypeList}
        setShowAddLedgerType={setShowAddLedgerType}
        setShowLedgerTypeList={setShowLedgerTypeList}
        setShowDeptList={setShowDeptList}
        setShowAddDept={setShowAddDept}
        setShowAddFinYear={setShowAddFinYear}
        setShowFinYearList={setShowFinYearList}
      ></Sidebar>
  {(ShowHomepage)&&
<Homepage></Homepage>}
    {(ShowDashboard)&&
<Db></Db>}
{(showChargeList)&&
<ChargeList></ChargeList>}

{(showAddCharge)&&
<Addcharges></Addcharges>}

{(showAddBillType)&&
<AddBillType></AddBillType>}

{(showBillTypeList)&&
<BillTypeList></BillTypeList>}

{(showAddBillCategory)&&
<AddBillCategory/>}

{(showBillCategoryList)&&
<BillCategoryList></BillCategoryList>}

{(showAddDept)&&
<AddDept></AddDept>}

{(showDeptList)&&
<DeptList></DeptList>}

{(showAddFinYear)&&
<AddFinYear></AddFinYear>}

{(showFinYearList)&&
<FinYearList></FinYearList>}

{(showAddFundingSource)&&
<AddFundingSource></AddFundingSource>}

{(showFundingSourceList)&&
<FundingSourceList></FundingSourceList>}

{(showAddLedgerType)&&
<AddLedgerType></AddLedgerType>}

{(showLedgerTypeList)&&
<LedgerTypeList></LedgerTypeList>}

{(showAddPaymentType)&&
<AddPaymentType></AddPaymentType>}

{(showPaymentTypeList)&&
<PaymentTypeList></PaymentTypeList>}

 
    </div>
  );
}

export default UserDetail;

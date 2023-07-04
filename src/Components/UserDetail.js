import React, { useState } from "react";
import Sidebar from "./Sidebar";
import AddAndDisplayUserPage from "./AddUser";
import ChargeList from "./AccountCharge/ChargeList";
import BillTypeList from "./BillType/BillTypeList";
import BillCategoryList from "./BillCategory/BillCategoryList";
import FundingSourceList from "./FundingSource/FundingSourceList";
import PaymentTypeList from "./PaymentType/PaymentTypeList";
import LedgerTypeList from "./LedgerType/LedgerTypeList";
import DeptList from "./Department/DeptList";
import FinYearList from "./FinancialYear/FinYearList";
import Db from "./Db";
import Homepage from "./Homepage";
import AddBillbox from "./Billbox/AddBillbox"
import BillboxList from "./Billbox/BillboxList";
import BillboxList2 from "./Billbox/BillboxList2";
import Employeedetails from "./Employee/Employeedetails";
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
  const [ShowBillbox, setShowBillbox] = useState(false);
  const [ShowEmployee, setShowEmployee] = useState(false);
  return (
    <div>
      <Sidebar
        setShowBillbox={setShowBillbox}
        setShowEmployee={setShowEmployee}
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
      {(ShowEmployee)&&
<Employeedetails></Employeedetails>}
       {(ShowBillbox)&&
<BillboxList2></BillboxList2>}
  {(ShowHomepage)&&
<Homepage></Homepage>}
    {(ShowDashboard)&&
<Db></Db>}
{(showChargeList)&&
<ChargeList></ChargeList>}





{(showBillTypeList)&&
<BillTypeList></BillTypeList>}



{(showBillCategoryList)&&
<BillCategoryList></BillCategoryList>}



{(showDeptList)&&
<DeptList></DeptList>}



{(showFinYearList)&&
<FinYearList></FinYearList>}



{(showFundingSourceList)&&
<FundingSourceList></FundingSourceList>}


{(showLedgerTypeList)&&
<LedgerTypeList></LedgerTypeList>}



{(showPaymentTypeList)&&
<PaymentTypeList></PaymentTypeList>}

 
    </div>
  );
}

export default UserDetail;

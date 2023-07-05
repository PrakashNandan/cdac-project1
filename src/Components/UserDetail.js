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
import ApprovedBillList from "./Billbox/ApprovedBillList";
function UserDetail() {
  // const
  const [showChargeList, setShowChargeList] = useState(false);
  const [showBillTypeList,setShowBillTypeList]=useState(false);
  const [showBillCategoryList,setShowBillCategoryList]=useState(false);
  const [showDeptList,setShowDeptList]=useState(false);
  const [showFinYearList,setShowFinYearList]=useState(false);
  const [showFundingSourceList,setShowFundingSourceList]=useState(false);
  const [showLedgerTypeList,setShowLedgerTypeList]=useState(false);
  const [showPaymentTypeList,setShowPaymentTypeList]=useState(false);
  const [ShowDashboard, setShowDashboard] = useState(false);
  const [ShowHomepage, setShowHomepage] = useState(true);
  const [ShowBillbox, setShowBillbox] = useState(false);
  const [ShowAdminBillbox, setShowAdminBillbox] = useState(false);
  const [ShowApprovedBills, setShowApprovedBills] = useState(false);
  const [ShowEmployee, setShowEmployee] = useState(false);
  return (
    <div>
      <Sidebar
        setShowBillbox={setShowBillbox}
        setShowEmployee={setShowEmployee}
        setShowHomepage= {setShowHomepage}
        setShowDashboard= {setShowDashboard}
        setShowChargeList={setShowChargeList}
        setShowBillTypeList={setShowBillTypeList}
        setShowBillCategoryList={setShowBillCategoryList}
        setShowFundingSourceList={setShowFundingSourceList}
        setShowPaymentTypeList={setShowPaymentTypeList}
        setShowLedgerTypeList={setShowLedgerTypeList}
        setShowDeptList={setShowDeptList}
        setShowFinYearList={setShowFinYearList}
        setShowAdminBillbox={setShowAdminBillbox}
        setShowApprovedBills={setShowApprovedBills}
      ></Sidebar>
      {(ShowEmployee)&&
<Employeedetails></Employeedetails>}
       {(ShowBillbox)&&
<BillboxList></BillboxList>}
       {(ShowAdminBillbox)&&
<BillboxList2></BillboxList2>}
       {(ShowApprovedBills)&&
<ApprovedBillList></ApprovedBillList>}
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

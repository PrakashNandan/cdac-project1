import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faAngleDown,
  faAngleRight,
} from "@fortawesome/free-solid-svg-icons";
import axios from "./axios.jsx";
import "../style/Sidebar.css";
import { useNavigate } from "react-router-dom";

const TripleLevelDropdown = ({ setShowChargeList,
  setShowEmployee ,

  setShowBillbox ,

  setShowHomepage , 

  setShowDashboard,
  
  setShowBillTypeList,
  
  setShowBillCategoryList,
 
  setShowFundingSourceList,
  
  setShowPaymentTypeList,
  
  setShowLedgerTypeList,

  setShowDeptList,
 
  setShowFinYearList,
  setShowAdminBillbox,
  setShowApprovedBills, }) => {

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isDropdown2Open, setIsDropdown2Open] = useState(false);
  const [isDropdown3Open, setIsDropdown3Open] = useState(false);
 

const navigate =useNavigate();

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
    setIsDropdown2Open(false);
    setIsDropdown3Open(false);
  };
  const toggleDropdown2 = () => {
    setIsDropdown2Open(!isDropdown2Open);
    setIsDropdownOpen(false);
    setIsDropdown3Open(false);

  };
  const toggleDropdown3 = () => {
    setIsDropdownOpen(false);
    setIsDropdown2Open(false);
    setIsDropdown3Open(!isDropdown3Open);
  };


function handleClick0() {
  setIsDropdownOpen(false);
    setIsDropdown2Open(false);
    setIsDropdown3Open(false);
    setShowEmployee(false) ;
setShowHomepage(false);
  setShowBillbox(false) ;
  setShowChargeList(false);
  setShowDashboard(true);
  setShowBillTypeList(false);
    setShowBillCategoryList(false);
    setShowFundingSourceList(false);
    setShowPaymentTypeList(false);
    setShowLedgerTypeList(false);
    setShowDeptList(false);
    setShowFinYearList(false);
    setShowApprovedBills(false);
  setShowAdminBillbox(false);
}
  
  function handleClick2() {
    setShowHomepage(false);
    setShowDashboard(false);
    setShowChargeList(true);
    setShowBillTypeList(false);
    setShowBillbox(false) ;
    setShowBillCategoryList(false);
    setShowFundingSourceList(false);
    setShowPaymentTypeList(false);
    setShowLedgerTypeList(false);
    setShowDeptList(false);
    setShowEmployee(false) ;
   setShowFinYearList(false);
   setShowApprovedBills(false);
  setShowAdminBillbox(false);
  }
 
  function handleClick4() {
    setShowHomepage(false);
    setShowDashboard(false);
    setShowChargeList(false);
    setShowBillTypeList(false);
    setShowBillbox(false) ;
    setShowBillCategoryList(true);
    setShowFundingSourceList(false);
    setShowPaymentTypeList(false);
    setShowLedgerTypeList(false);
    setShowDeptList(false);
    setShowEmployee(false) ;
    setShowFinYearList(false);
    setShowApprovedBills(false);
  setShowAdminBillbox(false);
  }
 
  function handleClick6() {
    setShowHomepage(false);
    setShowDashboard(false);
    setShowChargeList(false);
    setShowBillTypeList(true);
    setShowBillbox(false) ;
    setShowBillCategoryList(false);
    setShowFundingSourceList(false);
    setShowPaymentTypeList(false);
    setShowLedgerTypeList(false);
    setShowDeptList(false);
    setShowEmployee(false) ;
    setShowFinYearList(false);
    setShowApprovedBills(false);
  setShowAdminBillbox(false);
  }
  
  function handleClick8() {
    setShowDashboard(false);
    setShowHomepage(false);
    setShowChargeList(false);
    setShowBillTypeList(false);
    setShowBillCategoryList(false);
    setShowBillbox(false) ;
    setShowFundingSourceList(false);
    setShowPaymentTypeList(false);
    setShowLedgerTypeList(false);
    setShowDeptList(true);
    setShowEmployee(false) ;
    setShowFinYearList(false);
    setShowApprovedBills(false);
  setShowAdminBillbox(false);
  }
  
  function handleClick10() {
    setShowHomepage(false);
    setShowChargeList(false);
    setShowDashboard(false);
    setShowBillTypeList(false);
    setShowBillCategoryList(false);
    setShowFundingSourceList(false);
    setShowBillbox(false) ;
    setShowPaymentTypeList(false);
    setShowLedgerTypeList(false);
    setShowDeptList(false);
    setShowEmployee(false) ;
    setShowFinYearList(true);
    setShowApprovedBills(false);
  setShowAdminBillbox(false);
  }
  
  function handleClick12() {
    setShowDashboard(false);
    setShowHomepage(false);
    setShowChargeList(false);
    setShowBillbox(false) ;
    setShowBillTypeList(false);
    setShowBillCategoryList(false);
    setShowFundingSourceList(true);
    setShowEmployee(false) ;
    setShowPaymentTypeList(false);
    setShowLedgerTypeList(false);
    setShowDeptList(false);
    setShowFinYearList(false);
    setShowApprovedBills(false);
  setShowAdminBillbox(false);
  }
  
  function handleClick14() {
    setShowChargeList(false);
    setShowHomepage(false);
    setShowDashboard(false);
    setShowBillTypeList(false);
    setShowBillCategoryList(false);
    setShowFundingSourceList(false);
    setShowPaymentTypeList(false);
    setShowLedgerTypeList(true);
    setShowBillbox(false) ;
     setShowEmployee(false) ;
    setShowDeptList(false);
    setShowFinYearList(false);
    setShowApprovedBills(false);
  setShowAdminBillbox(false);
  }
  
  function handleClick16() {
    setShowChargeList(false);
    setShowHomepage(false);
    setShowDashboard(false);
    setShowBillTypeList(false);
    setShowBillCategoryList(false);
    setShowFundingSourceList(false);
    setShowPaymentTypeList(true);
    setShowLedgerTypeList(false);
    setShowDeptList(false);
    setShowBillbox(false) ;
    setShowEmployee(false) ;
    setShowFinYearList(false);
    setShowApprovedBills(false);
    setShowAdminBillbox(false);  }

function handleClick17 (){
  setShowChargeList(false);
  setShowBillbox(true);
  setShowHomepage(false);
  setShowDashboard(false);
  setShowBillTypeList(false);
  setShowBillCategoryList(false);
  setShowFundingSourceList(false);
  setShowPaymentTypeList(false);
  setShowLedgerTypeList(false);
  setShowDeptList(false);
  setShowFinYearList(false);
  setShowEmployee(false) ;
  setShowApprovedBills(false);
  setShowAdminBillbox(false);
}
function handleClick18 (){
  setShowChargeList(false);
  setShowBillbox(false);
  setShowHomepage(false);
  setShowDashboard(false);
  setShowBillTypeList(false);
  setShowBillCategoryList(false);
  setShowFundingSourceList(false);
  setShowPaymentTypeList(false);
  setShowLedgerTypeList(false);
  setShowDeptList(false);
  setShowFinYearList(false);
  setShowEmployee(false) ;
  setShowApprovedBills(false);
  setShowAdminBillbox(true);
}
function handleClick19 (){
  setShowChargeList(false);
  setShowBillbox(false);
  setShowHomepage(false);
  setShowDashboard(false);
  setShowBillTypeList(false);
  setShowBillCategoryList(false);
  setShowFundingSourceList(false);
  setShowPaymentTypeList(false);
  setShowLedgerTypeList(false);
  setShowDeptList(false);
  setShowFinYearList(false);
  setShowEmployee(false) ;
  setShowApprovedBills(true);
  setShowAdminBillbox(false);
}
function handleClick20 (){
  setShowChargeList(false);
  setShowEmployee(true) ;
  setShowBillbox(false);
  setShowHomepage(false);
  setShowDashboard(false);
  setShowBillTypeList(false);
  setShowBillCategoryList(false);
  setShowFundingSourceList(false);
  setShowPaymentTypeList(false);
  setShowLedgerTypeList(false);
  setShowDeptList(false);
  setShowFinYearList(false);
  setShowApprovedBills(false);
  setShowAdminBillbox(false);
}
  const sidebarRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setIsSidebarOpen(false);
      }
    };

    document.body.addEventListener("click", handleOutsideClick);

    return () => {
      document.body.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  // const role='USER'
  const role=localStorage.getItem('role');

  return (
    <div className={`sidebar ${isSidebarOpen ? "open" : ""}`} ref={sidebarRef}>
      <div className={` ${isSidebarOpen ? "header-open" : "sidebar-header"}`} onClick={toggleSidebar}>
     
        
        <FontAwesomeIcon icon={faBars} className="sidebar-toggle-icon" />
      </div>
      {isSidebarOpen && (
        
        <ul className="sidebar-menu">
          {/* {roles.includes("ADMIN") ? () : null} */}
          <li>
            <button
              className="sidebar-dropdown"
              onClick={() => handleClick0()}
            >
              <i class="fa fa-home" aria-hidden="true" style={{ paddingRight: '15px' }}></i>

              Dashboard
            </button>
          </li>
            {role==='ADMIN' && <li>
            <button className={`sidebar-dropdown ${isDropdownOpen ? "sidebar-dropdown-open" : ""}`} onClick={toggleDropdown}>
              <div className="grid1">
                <div className="icn" style={{ paddingRight: '6px' }} ><i class="fa fa-user" aria-hidden="true"></i></div>
                <div className="gridX">Admin</div>
                <div className={` ${isDropdownOpen ? "down" : "up"} arrow-icon1`} ><FontAwesomeIcon
                  icon={faAngleRight}
                /></div>
              </div>
            </button>
            {isDropdownOpen && (
              <div className="lists">
              <ul className={"sidebar-submenu asdf"} >
                <li >
                  <button
                    className="sidebar-dropdown3"
                    onClick={() => handleClick2()}
                  >
                    <span>Acc Charge</span>
                    
                  </button>
                 
                </li>
                <li>
                  <button
                    className="sidebar-dropdown3"
                    onClick={() => handleClick4()}
                  >
                    <span>Bill Category</span>
                    
                  </button>
                 
                </li>
                <li>
                  <button
                    className="sidebar-dropdown3"
                    onClick={() => handleClick6()}
                  >
                    <span>Bill Type</span>
                    
                  </button>
               
                </li>
                <li>
                  <button
                    className="sidebar-dropdown3"
                    onClick={() => handleClick8()}
                  >
                    <span>Department</span>
                    
                  </button>
                 
                </li>
                <li>
                  <button
                    className="sidebar-dropdown3"
                    onClick={() => handleClick10()}
                  >
                    <span>FinancialYear</span>
                    
                  </button>
                  
                </li>
                <li>
                  <button
                    className="sidebar-dropdown3"
                    onClick={() => handleClick12()}
                  >
                    <span>FundingSource</span>
                    
                  </button>
                
                </li>
                <li>
                  <button
                    className="sidebar-dropdown3"
                    onClick={() => handleClick14()}
                  >
                    <span>LedgerType</span>
                    
                  </button>
                 
                </li>
                <li>
                  <button
                    className="sidebar-dropdown3"
                    onClick={() => handleClick16()}
                  >
                    <span>PaymentType</span>
                    
                  </button>
                
                </li>
              </ul>
              </div>
            )}
          </li>}
          <li>
            <button className="sidebar-dropdown" onClick={toggleDropdown2}>
              <div className="grid2">
                <div className="icn" style={{ paddingRight: '4px' }} ><i class="fa fa-exchange" aria-hidden="true"></i></div>
                <div className="gridX">Transactions</div>
                <div className={` ${isDropdown2Open ? "down" : "up"} arrow-icon1`}><FontAwesomeIcon
                  icon={faAngleRight}
                /></div>
              </div>

            </button>
            {isDropdown2Open && (
              <ul className="sidebar-submenu">
               
                {role==='USER' &&<li>
                <button
                          className="sidebar-dropdown3"
                          onClick={() => handleClick17()}
                        >
                         Bill Box 
                        </button>
                </li>}
                {(role==='ADMIN'||role==='ACCOUNT') &&<li>
                <button
                          className="sidebar-dropdown3"
                          onClick={() => handleClick18()}
                        >
                        Submitted Bills 
                        </button>
                </li>}
                {(role==='ADMIN'||role==='ACCOUNT') &&<li>
                <button
                          className="sidebar-dropdown3"
                          onClick={() => handleClick19()}
                        >
                         Approved Bills 
                        </button>
                </li>}
                
              </ul>
            )}
          </li>
          {role==='ADMIN' && <li>
            <button className="sidebar-dropdown" onClick={toggleDropdown3}>

              <div className="grid3">
                <div className="icn"><i class="fa fa-users" aria-hidden="true"></i></div>
                <div className="gridX">Employee</div>
                <div className={` ${isDropdown3Open ? "down" : "up"} arrow-icon1`}><FontAwesomeIcon
                  icon={faAngleRight}
                /></div>
              </div>
            </button>
            {isDropdown3Open && (
              <ul className="sidebar-submenu">
                <li>
                <button
                          className="sidebar-dropdown3"
                          onClick={() => handleClick20()}
                        >
                      Employee Details
                        </button>

                </li>
              </ul>
            )}
          </li>}
        </ul>
        
      )}
    </div>
  );
};

export default TripleLevelDropdown;

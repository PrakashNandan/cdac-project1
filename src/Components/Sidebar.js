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
  setShowAddCharge,
  setShowBillTypeList,
  setShowAddBillType,
  setShowAddBillCategory,
  setShowBillCategoryList,
  setShowAddFundingSource,
  setShowFundingSourceList,
  setShowAddPaymentType,
  setShowPaymentTypeList,
  setShowAddLedgerType,
  setShowLedgerTypeList,
  setShowDeptList,
  setShowAddDept,
  setShowAddFinYear,
  setShowFinYearList, }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isDropdown2Open, setIsDropdown2Open] = useState(false);
  const [isDropdown3Open, setIsDropdown3Open] = useState(false);
  const [isDropdown11Open, setIsDropdown11Open] = useState(false);
  const [isDropdown13Open, setIsDropdown13Open] = useState(false);
  const [isDropdown17Open, setIsDropdown17Open] = useState(false);
  const [isDropdown18Open, setIsDropdown18Open] = useState(false);
  const [isDropdown14Open, setIsDropdown14Open] = useState(false);
  const [isDropdown15Open, setIsDropdown15Open] = useState(false);
  const [isDropdown16Open, setIsDropdown16Open] = useState(false);
  const [isDropdown12Open, setIsDropdown12Open] = useState(false);

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
  setShowAddCharge(false);
  setShowBillTypeList(false);
    setShowAddBillType(false);
    setShowAddBillCategory(false);
    setShowBillCategoryList(false);
    setShowAddFundingSource(false);
    setShowFundingSourceList(false);
    setShowAddPaymentType(false);
    setShowPaymentTypeList(false);
    setShowAddLedgerType(false);
    setShowLedgerTypeList(false);
    setShowDeptList(false);
    setShowAddDept(false);
    setShowAddFinYear(false);
    setShowFinYearList(false);
}
  
  function handleClick2() {
    setShowHomepage(false);
    setShowDashboard(false);
    setShowChargeList(true);
    setShowAddCharge(false);
    setShowBillTypeList(false);
    setShowAddBillType(false);
    setShowBillbox(false) ;
    setShowAddBillCategory(false);
    setShowBillCategoryList(false);
    setShowAddFundingSource(false);
    setShowFundingSourceList(false);
    setShowAddPaymentType(false);
    setShowPaymentTypeList(false);
    setShowAddLedgerType(false);
    setShowLedgerTypeList(false);
    setShowDeptList(false);
    setShowEmployee(false) ;
    setShowAddDept(false);
    setShowAddFinYear(false);
    setShowFinYearList(false);
  }
 
  function handleClick4() {
    setShowHomepage(false);
    setShowDashboard(false);
    setShowChargeList(false);
    setShowAddCharge(false);
    setShowBillTypeList(false);
    setShowBillbox(false) ;
    setShowAddBillType(false);
    setShowAddBillCategory(false);
    setShowBillCategoryList(true);
    setShowAddFundingSource(false);
    setShowFundingSourceList(false);
    setShowAddPaymentType(false);
    setShowPaymentTypeList(false);
    setShowAddLedgerType(false);
    setShowLedgerTypeList(false);
    setShowDeptList(false);
    setShowEmployee(false) ;
    setShowAddDept(false);
    setShowAddFinYear(false);
    setShowFinYearList(false);
  }
 
  function handleClick6() {
    setShowHomepage(false);
    setShowDashboard(false);
    setShowChargeList(false);
    setShowAddCharge(false);
    setShowBillTypeList(true);
    setShowAddBillType(false);
    setShowAddBillCategory(false);
    setShowBillbox(false) ;
    setShowBillCategoryList(false);
    setShowAddFundingSource(false);
    setShowFundingSourceList(false);
    setShowAddPaymentType(false);
    setShowPaymentTypeList(false);
    setShowAddLedgerType(false);
    setShowLedgerTypeList(false);
    setShowDeptList(false);
    setShowAddDept(false);
    setShowEmployee(false) ;
    setShowAddFinYear(false);
    setShowFinYearList(false);
  }
  
  function handleClick8() {
    setShowDashboard(false);
    setShowHomepage(false);
    setShowChargeList(false);
    setShowAddCharge(false);
    setShowBillTypeList(false);
    setShowAddBillType(false);
    setShowAddBillCategory(false);
    setShowBillCategoryList(false);
    setShowAddFundingSource(false);
    setShowBillbox(false) ;
    setShowFundingSourceList(false);
    setShowAddPaymentType(false);
    setShowPaymentTypeList(false);
    setShowAddLedgerType(false);
    setShowLedgerTypeList(false);
    setShowDeptList(true);
    setShowAddDept(false);
    setShowEmployee(false) ;
    setShowAddFinYear(false);
    setShowFinYearList(false);
  }
  
  function handleClick10() {
    setShowHomepage(false);
    setShowChargeList(false);
    setShowDashboard(false);
    setShowAddCharge(false);
    setShowBillTypeList(false);
    setShowAddBillType(false);
    setShowAddBillCategory(false);
    setShowBillCategoryList(false);
    setShowAddFundingSource(false);
    setShowFundingSourceList(false);
    setShowAddPaymentType(false);
    setShowBillbox(false) ;
    setShowPaymentTypeList(false);
    setShowAddLedgerType(false);
    setShowLedgerTypeList(false);
    setShowDeptList(false);
    setShowAddDept(false);
    setShowAddFinYear(false);
    setShowEmployee(false) ;
    setShowFinYearList(true);
  }
  
  function handleClick12() {
    setShowDashboard(false);
    setShowHomepage(false);
    setShowChargeList(false);
    setShowBillbox(false) ;
    setShowAddCharge(false);
    setShowBillTypeList(false);
    setShowAddBillType(false);
    setShowAddBillCategory(false);
    setShowBillCategoryList(false);
    setShowAddFundingSource(false);
    setShowFundingSourceList(true);
    setShowAddPaymentType(false);
    setShowEmployee(false) ;
    setShowPaymentTypeList(false);
    setShowAddLedgerType(false);
    setShowLedgerTypeList(false);
    setShowDeptList(false);
    setShowAddDept(false);
    setShowAddFinYear(false);
    setShowFinYearList(false);
  }
  
  function handleClick14() {
    setShowChargeList(false);
    setShowHomepage(false);
    setShowDashboard(false);
    setShowAddCharge(false);
    setShowBillTypeList(false);
    setShowAddBillType(false);
    setShowAddBillCategory(false);
    setShowBillCategoryList(false);
    setShowAddFundingSource(false);
    setShowFundingSourceList(false);
    setShowAddPaymentType(false);
    setShowPaymentTypeList(false);
    setShowAddLedgerType(false);
    setShowLedgerTypeList(true);
    setShowBillbox(false) ;
     setShowEmployee(false) ;
    setShowDeptList(false);
    setShowAddDept(false);
    setShowAddFinYear(false);
    setShowFinYearList(false);
  }
  
  function handleClick16() {
    setShowChargeList(false);
    setShowHomepage(false);
    setShowDashboard(false);
    setShowAddCharge(false);
    setShowBillTypeList(false);
    setShowAddBillType(false);
    setShowAddBillCategory(false);
    setShowBillCategoryList(false);
    setShowAddFundingSource(false);
    setShowFundingSourceList(false);
    setShowAddPaymentType(false);
    setShowPaymentTypeList(true);
    setShowAddLedgerType(false);
    setShowLedgerTypeList(false);
    setShowDeptList(false);
    setShowAddDept(false);
    setShowAddFinYear(false);
    setShowBillbox(false) ;
    setShowEmployee(false) ;
    setShowFinYearList(false);  }

function handleClick17 (){
  setShowChargeList(false);
  setShowBillbox(true);
  setShowHomepage(false);
  setShowDashboard(false);
  setShowAddCharge(false);
  setShowBillTypeList(false);
  setShowAddBillType(false);
  setShowAddBillCategory(false);
  setShowBillCategoryList(false);
  setShowAddFundingSource(false);
  setShowFundingSourceList(false);
  setShowAddPaymentType(false);
  setShowPaymentTypeList(false);
  setShowAddLedgerType(false);
  setShowLedgerTypeList(false);
  setShowDeptList(false);
  setShowAddDept(false);
  setShowAddFinYear(false);
  setShowFinYearList(false);
  setShowEmployee(false) ;
}
function handleClick18 (){
  setShowChargeList(false);
  setShowEmployee(true) ;
  setShowBillbox(false);
  setShowHomepage(false);
  setShowDashboard(false);
  setShowAddCharge(false);
  setShowBillTypeList(false);
  setShowAddBillType(false);
  setShowAddBillCategory(false);
  setShowBillCategoryList(false);
  setShowAddFundingSource(false);
  setShowFundingSourceList(false);
  setShowAddPaymentType(false);
  setShowPaymentTypeList(false);
  setShowAddLedgerType(false);
  setShowLedgerTypeList(false);
  setShowDeptList(false);
  setShowAddDept(false);
  setShowAddFinYear(false);
  setShowFinYearList(false);
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

  return (
    <div className={`sidebar ${isSidebarOpen ? "open" : ""}`} ref={sidebarRef}>
      <div className={` ${isSidebarOpen ? "header-open" : "sidebar-header"}`} onClick={toggleSidebar}>
     
        
        <FontAwesomeIcon icon={faBars} className="sidebar-toggle-icon" />
      </div>
      {isSidebarOpen && (
        
        <ul className="sidebar-menu">
          <li>
                        <button
                          className="sidebar-dropdown"
                          onClick={() => handleClick0()}
                        >
                         <i class="fa fa-home" aria-hidden="true" style={{paddingRight:'22px'}}></i> 
                        Dashboard
                        </button>
                      </li>
          <li>
            <button className={`sidebar-dropdown ${isDropdownOpen ? "sidebar-dropdown-open" : ""}`} onClick={toggleDropdown}>
             <div className="grid1">
              <div className="icn" ><i class="fa fa-user" aria-hidden="true"></i></div>
              <div className="gridX">Admin</div>
              <div className={` ${isDropdownOpen ? "down":"up"}`} style={{marginLeft:'145px'}}><FontAwesomeIcon
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
                  {/* {isDropdown11Open && (
                    <ul className="sidebar-submenu2">
                      <li>
                        <button
                          className="sidebar-dropdown3"
                          onClick={() => handleClick1()}
                        >
                          AddCharge
                        </button>
                      </li>
                      <li>
                        <button
                          className="sidebar-dropdown3"
                          onClick={() => handleClick2()}
                        >
                          ChargeList
                        </button>
                      </li>
                    </ul>
                  )} */}
                </li>
                <li>
                  <button
                    className="sidebar-dropdown3"
                    onClick={() => handleClick4()}
                  >
                    <span>Bill Category</span>
                    
                  </button>
                  {/* {isDropdown12Open && (
                    <ul className="sidebar-submenu3">
                      <li>
                        <button
                          className="sidebar-dropdown3"
                          onClick={() => handleClick3()}
                        >
                          Add Bill-Category
                        </button>
                      </li>
                      <li>
                        <button
                          className="sidebar-dropdown3"
                          onClick={() => handleClick4()}
                        >
                          Bill Category List
                        </button>
                      </li>
                    </ul>
                  )} */}
                </li>
                <li>
                  <button
                    className="sidebar-dropdown3"
                    onClick={() => handleClick6()}
                  >
                    <span>Bill Type</span>
                    
                  </button>
                  {/* {isDropdown13Open && (
                    <ul className="sidebar-submenu3">
                      <li>
                        <button
                          className="sidebar-dropdown3"
                          onClick={() => handleClick5()}
                        >
                          Add Bill Type
                        </button>
                      </li>
                      <li>
                        <button
                          className="sidebar-dropdown3"
                          onClick={() => handleClick6()}
                        >
                          Bill Types
                        </button>
                      </li>
                    </ul>
                  )} */}
                </li>
                <li>
                  <button
                    className="sidebar-dropdown3"
                    onClick={() => handleClick8()}
                  >
                    <span>Department</span>
                    
                  </button>
                  {/* {isDropdown14Open && (
                    <ul className="sidebar-submenu3">
                      <li>
                        <button
                          className="sidebar-dropdown3"
                          onClick={() => handleClick7()}
                        >
                          Add Department
                        </button>
                      </li>
                      <li>
                        <button
                          className="sidebar-dropdown3"
                          onClick={() => handleClick8()}
                        >
                          Departments List
                        </button>
                      </li>
                    </ul>
                  )} */}
                </li>
                <li>
                  <button
                    className="sidebar-dropdown3"
                    onClick={() => handleClick10()}
                  >
                    <span>FinancialYear</span>
                    
                  </button>
                  {/* {isDropdown15Open && (
                    <ul className="sidebar-submenu3">
                      <li>
                        <button
                          className="sidebar-dropdown3"
                          onClick={() => handleClick9()}
                        >
                          Add FinancialYear
                        </button>
                      </li>
                      <li>
                        <button
                          className="sidebar-dropdown3"
                          onClick={() => handleClick10()}
                        >
                          Financial Year List
                        </button>
                      </li>
                    </ul>
                  )} */}
                </li>
                <li>
                  <button
                    className="sidebar-dropdown3"
                    onClick={() => handleClick12()}
                  >
                    <span>FundingSource</span>
                    
                  </button>
                  {/* {isDropdown16Open && (
                    <ul className="sidebar-submenu3">
                      <li>
                        <button
                          className="sidebar-dropdown3"
                          onClick={() => handleClick11()}
                        >
                          Add FundingSource
                        </button>
                      </li>
                      <li>
                        <button
                          className="sidebar-dropdown3"
                          onClick={() => handleClick12()}
                        >
                          Funding Sources
                        </button>
                      </li>
                    </ul>
                  )} */}
                </li>
                <li>
                  <button
                    className="sidebar-dropdown3"
                    onClick={() => handleClick14()}
                  >
                    <span>LedgerType</span>
                    
                  </button>
                  {/* {isDropdown17Open && (
                    <ul className="sidebar-submenu3">
                      <li>
                        <button
                          className="sidebar-dropdown3"
                          onClick={() => handleClick13()}
                        >
                          Add LedgerType
                        </button>
                      </li>
                      <li>
                        <button
                          className="sidebar-dropdown3"
                          onClick={() => handleClick14()}
                        >
                          Ledger Types
                        </button>
                      </li>
                    </ul>
                  )} */}
                </li>
                <li>
                  <button
                    className="sidebar-dropdown3"
                    onClick={() => handleClick16()}
                  >
                    <span>PaymentType</span>
                    
                  </button>
                  {/* {isDropdown18Open && (
                    <ul className="sidebar-submenu3">
                      <li>
                        <button
                          className="sidebar-dropdown3"
                          onClick={() => handleClick15()}
                        >
                          Add PaymentType
                        </button>
                      </li>
                      <li>
                        <button
                          className="sidebar-dropdown3"
                          onClick={() => handleClick16()}
                        >
                          PaymentType List
                        </button>
                      </li>
                    </ul>
                  )} */}
                </li>
              </ul>
              </div>
            )}
          </li>
          <li>
            <button className="sidebar-dropdown" onClick={toggleDropdown2}>
            <div className="grid2">
            <div className="icn" ><i class="fa fa-exchange" aria-hidden="true"></i></div>
              <div className="gridX">Transactions</div>
              <div className={` ${isDropdown2Open ? "down":"up"}`} style={{marginLeft:'89px'}}><FontAwesomeIcon
                icon={faAngleRight}
              /></div>
              </div> 
            
            </button>
            {isDropdown2Open && (
              <ul className="sidebar-submenu">
                {/* <li>
                <button
                          className="sidebar-dropdown3"
                          onClick={() => handleClick17()}
                        >
                        Add Bill Box
                        </button>

                </li> */}
                <li>
                <button
                          className="sidebar-dropdown3"
                          onClick={() => handleClick17()}
                        >
                         Bill Box 
                        </button>
                </li>
                
              </ul>
            )}
          </li>
          <li>
            <button className="sidebar-dropdown" onClick={toggleDropdown3}>
             
               <div className="grid3">
               <div className="icn" ><i class="fa fa-users" aria-hidden="true"></i></div>
             <div className="gridX">Employee</div>
             <div className={` ${isDropdown3Open ? "down":"up"}`} style={{marginLeft:'111px'}}><FontAwesomeIcon
                icon={faAngleRight}
              /></div>
              </div>
            </button>
            {isDropdown3Open && (
              <ul className="sidebar-submenu">
                <li>
                <button
                          className="sidebar-dropdown3"
                          onClick={() => handleClick18()}
                        >
                      Employee Details
                        </button>

                </li>
              </ul>
            )}
          </li>
        </ul>
        
      )}
    </div>
  );
};

export default TripleLevelDropdown;

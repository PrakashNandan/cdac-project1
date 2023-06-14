import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faAngleDown,
  faAngleRight,
} from "@fortawesome/free-solid-svg-icons";
import "../style/Sidebar.css";
import axios from "./axios.jsx";
import "../style/Sidebar.css";
import { useNavigate } from "react-router-dom";

const TripleLevelDropdown = ({ setShowChargeList,
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
  };
  const toggleDropdown2 = () => {
    setIsDropdown2Open(!isDropdown2Open);
  };
  const toggleDropdown3 = () => {
    setIsDropdown3Open(!isDropdown3Open);
  };

  const toggleDropdown11 = () => {
    setIsDropdown11Open(!isDropdown11Open);
setIsDropdown12Open(false);
setIsDropdown13Open(false);
setIsDropdown17Open(false);
setIsDropdown18Open(false);
setIsDropdown14Open(false);
setIsDropdown15Open(false);
setIsDropdown16Open(false);
  };
  const toggleDropdown12 = () => {
    setIsDropdown12Open(!isDropdown12Open);
    
setIsDropdown11Open(false);
setIsDropdown13Open(false);
setIsDropdown17Open(false);
setIsDropdown18Open(false);
setIsDropdown14Open(false);
setIsDropdown15Open(false);
setIsDropdown16Open(false);
  };

  const toggleDropdown13 = () => {
    setIsDropdown13Open(!isDropdown13Open);
setIsDropdown11Open(false);
setIsDropdown12Open(false);
setIsDropdown17Open(false);
setIsDropdown18Open(false);
setIsDropdown14Open(false);
setIsDropdown15Open(false);
setIsDropdown16Open(false);
  };

  const toggleDropdown17 = () => {
    setIsDropdown17Open(!isDropdown17Open);
setIsDropdown11Open(false);
setIsDropdown12Open(false);
setIsDropdown13Open(false);
setIsDropdown18Open(false);
setIsDropdown14Open(false);
setIsDropdown15Open(false);
setIsDropdown16Open(false);
  };

  const toggleDropdown18 = () => {
    setIsDropdown18Open(!isDropdown18Open);
setIsDropdown11Open(false);
setIsDropdown12Open(false);
setIsDropdown13Open(false);
setIsDropdown17Open(false);
setIsDropdown14Open(false);
setIsDropdown15Open(false);
setIsDropdown16Open(false);
  };
  const toggleDropdown14 = () => {
    setIsDropdown14Open(!isDropdown14Open);
setIsDropdown11Open(false);
setIsDropdown12Open(false);
setIsDropdown13Open(false);
setIsDropdown17Open(false);
setIsDropdown18Open(false);
setIsDropdown15Open(false);
setIsDropdown16Open(false);
  };
  const toggleDropdown15 = () => {
    setIsDropdown15Open(!isDropdown15Open);
setIsDropdown11Open(false);
setIsDropdown12Open(false);
setIsDropdown13Open(false);
setIsDropdown17Open(false);
setIsDropdown18Open(false);
setIsDropdown14Open(false);
setIsDropdown16Open(false);
  };
  const toggleDropdown16 = () => {
   setIsDropdown16Open(!isDropdown16Open);
setIsDropdown11Open(false);
setIsDropdown12Open(false);
setIsDropdown13Open(false);
setIsDropdown17Open(false);
setIsDropdown18Open(false);
setIsDropdown14Open(false);
setIsDropdown15Open(false);
  };

  function handleClick1() {
setShowChargeList(false);
setShowAddCharge(true);
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
setShowChargeList(true);
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
  function handleClick3() {
setShowChargeList(false);
setShowAddCharge(false);
setShowBillTypeList(false);
setShowAddBillType(false);
setShowAddBillCategory(true);
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
  function handleClick4() {
setShowChargeList(false);
setShowAddCharge(false);
setShowBillTypeList(false);
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
setShowAddDept(false);
setShowAddFinYear(false);
setShowFinYearList(false);
  }
  function handleClick5() {
setShowChargeList(false);
setShowAddCharge(false);
setShowBillTypeList(false);
setShowAddBillType(true);
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
  function handleClick6() {
setShowChargeList(false);
setShowAddCharge(false);
setShowBillTypeList(true);
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
  function handleClick7() {
    setShowChargeList(false);
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
    setShowAddDept(true);
    setShowAddFinYear(false);
    setShowFinYearList(false);
  }
  function handleClick8() {
setShowChargeList(false);
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
setShowDeptList(true);
setShowAddDept(false);
setShowAddFinYear(false);
setShowFinYearList(false);
  }
  function handleClick9() {
    setShowChargeList(false);
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
    setShowAddFinYear(true);
    setShowFinYearList(false);  }
  function handleClick10() {
    setShowChargeList(false);
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
    setShowFinYearList(true);  }
  function handleClick11() {
    setShowChargeList(false);
    setShowAddCharge(false);
    setShowBillTypeList(false);
    setShowAddBillType(false);
    setShowAddBillCategory(false);
    setShowBillCategoryList(false);
    setShowAddFundingSource(true);
    setShowFundingSourceList(false);
    setShowAddPaymentType(false);
    setShowPaymentTypeList(false);
    setShowAddLedgerType(false);
    setShowLedgerTypeList(false);
    setShowDeptList(false);
    setShowAddDept(false);
    setShowAddFinYear(false);
    setShowFinYearList(false);  }
  function handleClick12() {
    setShowChargeList(false);
    setShowAddCharge(false);
    setShowBillTypeList(false);
    setShowAddBillType(false);
    setShowAddBillCategory(false);
    setShowBillCategoryList(false);
    setShowAddFundingSource(false);
    setShowFundingSourceList(true);
    setShowAddPaymentType(false);
    setShowPaymentTypeList(false);
    setShowAddLedgerType(false);
    setShowLedgerTypeList(false);
    setShowDeptList(false);
    setShowAddDept(false);
    setShowAddFinYear(false);
    setShowFinYearList(false);  }
  function handleClick13() {
    setShowChargeList(false);
    setShowAddCharge(false);
    setShowBillTypeList(false);
    setShowAddBillType(false);
    setShowAddBillCategory(false);
    setShowBillCategoryList(false);
    setShowAddFundingSource(false);
    setShowFundingSourceList(false);
    setShowAddPaymentType(false);
    setShowPaymentTypeList(false);
    setShowAddLedgerType(true);
    setShowLedgerTypeList(false);
    setShowDeptList(false);
    setShowAddDept(false);
    setShowAddFinYear(false);
    setShowFinYearList(false);  }
  function handleClick14() {
    setShowChargeList(false);
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
    setShowDeptList(false);
    setShowAddDept(false);
    setShowAddFinYear(false);
    setShowFinYearList(false);  }
  function handleClick15() {
    setShowChargeList(false);
    setShowAddCharge(false);
    setShowBillTypeList(false);
    setShowAddBillType(false);
    setShowAddBillCategory(false);
    setShowBillCategoryList(false);
    setShowAddFundingSource(false);
    setShowFundingSourceList(false);
    setShowAddPaymentType(true);
    setShowPaymentTypeList(false);
    setShowAddLedgerType(false);
    setShowLedgerTypeList(false);
    setShowDeptList(false);
    setShowAddDept(false);
    setShowAddFinYear(false);
    setShowFinYearList(false);  }
  function handleClick16() {
    setShowChargeList(false);
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
    setShowFinYearList(false);  }
const handleClick17 = ()=>{
    navigate('/addbill')
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
      <div className="sidebar-header" onClick={toggleSidebar}>
        <FontAwesomeIcon icon={faBars} className="sidebar-toggle-icon" />
      </div>
      {isSidebarOpen && (
        <ul className="sidebar-menu">
          <li>
            <button className="sidebar-dropdown" onClick={toggleDropdown}>
              <span>Admin</span>
              <FontAwesomeIcon
                icon={isDropdownOpen ? faAngleDown : faAngleRight}
              />
            </button>
            {isDropdownOpen && (
              <ul className="sidebar-submenu">
                <li>
                  <button
                    className="sidebar-dropdown2"
                    onClick={toggleDropdown11}
                  >
                    <span>Acc Charge</span>
                    &nbsp;&nbsp;&nbsp;&nbsp;<FontAwesomeIcon
                      icon={isDropdown11Open ? faAngleDown : faAngleRight}
                    />
                  </button>
                  {isDropdown11Open && (
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
                  )}
                </li>
                <li>
                  <button
                    className="sidebar-dropdown2"
                    onClick={toggleDropdown12}
                  >
                    <span>Bill Category</span>
                    &nbsp;&nbsp;&nbsp;&nbsp;<FontAwesomeIcon
                      icon={isDropdown12Open ? faAngleDown : faAngleRight}
                    />
                  </button>
                  {isDropdown12Open && (
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
                  )}
                </li>
                <li>
                  <button
                    className="sidebar-dropdown2"
                    onClick={toggleDropdown13}
                  >
                    <span>Bill Type</span>
                    &nbsp;&nbsp;&nbsp;&nbsp;<FontAwesomeIcon
                      icon={isDropdown13Open ? faAngleDown : faAngleRight}
                    />
                  </button>
                  {isDropdown13Open && (
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
                  )}
                </li>
                <li>
                  <button
                    className="sidebar-dropdown2"
                    onClick={toggleDropdown14}
                  >
                    <span>Department</span>
                    &nbsp;&nbsp;&nbsp;&nbsp;<FontAwesomeIcon
                      icon={isDropdown14Open ? faAngleDown : faAngleRight}
                    />
                  </button>
                  {isDropdown14Open && (
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
                          Departments
                        </button>
                      </li>
                    </ul>
                  )}
                </li>
                <li>
                  <button
                    className="sidebar-dropdown2"
                    onClick={toggleDropdown15}
                  >
                    <span>FinancialYear</span>
                    &nbsp;&nbsp;&nbsp;&nbsp;<FontAwesomeIcon
                      icon={isDropdown15Open ? faAngleDown : faAngleRight}
                    />
                  </button>
                  {isDropdown15Open && (
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
                  )}
                </li>
                <li>
                  <button
                    className="sidebar-dropdown2"
                    onClick={toggleDropdown16}
                  >
                    <span>FundingSource</span>
                    &nbsp;&nbsp;&nbsp;&nbsp;<FontAwesomeIcon
                      icon={isDropdown16Open ? faAngleDown : faAngleRight}
                    />
                  </button>
                  {isDropdown16Open && (
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
                  )}
                </li>
                <li>
                  <button
                    className="sidebar-dropdown2"
                    onClick={toggleDropdown17}
                  >
                    <span>LedgerType</span>
                    &nbsp;&nbsp;&nbsp;&nbsp;<FontAwesomeIcon
                      icon={isDropdown17Open ? faAngleDown : faAngleRight}
                    />
                  </button>
                  {isDropdown17Open && (
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
                  )}
                </li>
                <li>
                  <button
                    className="sidebar-dropdown2"
                    onClick={toggleDropdown18}
                  >
                    <span>PaymentType&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                    &nbsp;&nbsp;&nbsp;&nbsp;<FontAwesomeIcon
                      icon={isDropdown18Open ? faAngleDown : faAngleRight}
                    />
                  </button>
                  {isDropdown18Open && (
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
                  )}
                </li>
              </ul>
            )}
          </li>
          <li>
            <button className="sidebar-dropdown" onClick={toggleDropdown2}>
              <span>Transactions</span>
              <FontAwesomeIcon
                icon={isDropdown2Open ? faAngleDown : faAngleRight}
              />
            </button>
            {isDropdown2Open && (
              <ul className="sidebar-submenu">
                <li>
                <button
                          className="sidebar-dropdown3"
                          onClick={() => handleClick17()}
                        >
                         Bill Box
                        </button>

                </li>
                <li>
                <button
                          className="sidebar-dropdown3"
                          onClick={() => handleClick17()}
                        >
                         Bill Box List
                        </button>
                </li>
                <li>C</li>
              </ul>
            )}
          </li>
          <li>
            <button className="sidebar-dropdown" onClick={toggleDropdown3}>
              <span>Employee</span>
              <FontAwesomeIcon
                icon={isDropdown3Open ? faAngleDown : faAngleRight}
              />
            </button>
            {isDropdown3Open && (
              <ul className="sidebar-submenu">
                <li>A</li>
                <li>B</li>
                <li>C</li>
              </ul>
            )}
          </li>
        </ul>
      )}
    </div>
  );
};

export default TripleLevelDropdown;

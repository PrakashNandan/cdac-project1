import React, { useEffect, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faAngleDown, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import './Sidebar.css';




const TripleLevelDropdown = ({setShowChargeList,setFindAll,findAll}) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isDropdown2Open, setIsDropdown2Open] = useState(false);
  const [isDropdown3Open, setIsDropdown3Open] = useState(false);
  const [isDropdown4Open, setIsDropdown4Open] = useState(false);
  const [isDropdown5Open, setIsDropdown5Open] = useState(false);
  const [isDropdown14Open, setIsDropdown14Open] = useState(false);
  const [isDropdown15Open, setIsDropdown15Open] = useState(false);
  const [isDropdown16Open, setIsDropdown16Open] = useState(false);

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

  const toggleDropdown4 = () => {
    setIsDropdown4Open(!isDropdown4Open);
  };

  const toggleDropdown5 = () => {
    setIsDropdown5Open(!isDropdown5Open);
  };
  const toggleDropdown14 = () => {
    setIsDropdown14Open(!isDropdown14Open);
  };
  const toggleDropdown15 = () => {
    setIsDropdown15Open(!isDropdown15Open);
  };
  const toggleDropdown16 = () => {
    setIsDropdown16Open(!isDropdown16Open);
  };



  function handleClick1(){
    setShowChargeList(false);
  }
  function handleClick2(){
    setShowChargeList(true);
    

  }

  const sidebarRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setIsSidebarOpen(false);
      }
    };

    document.body.addEventListener('click', handleOutsideClick);

    return () => {
      document.body.removeEventListener('click', handleOutsideClick);
    };
  }, []);

  return (
    <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`} ref={sidebarRef}>
      <div className="sidebar-header" onClick={toggleSidebar}>
        <FontAwesomeIcon icon={faBars} className="sidebar-toggle-icon" />
        
      </div>
      {isSidebarOpen && (
        <ul className="sidebar-menu">
          <li>
            <button className="sidebar-dropdown" onClick={toggleDropdown}>
              <span>Admin</span>
              <FontAwesomeIcon icon={isDropdownOpen ? faAngleDown : faAngleRight} />
            </button>
            {isDropdownOpen && (
              <ul className="sidebar-submenu">
                <li>
                  <button className="sidebar-dropdown2" onClick={toggleDropdown2}>
                    <span>Acc Charge</span>
                    <FontAwesomeIcon icon={isDropdown2Open ? faAngleDown : faAngleRight} />
                  </button>
                  {isDropdown2Open && (
                    <ul className="sidebar-submenu2">
                      <li><button className="sidebar-dropdown3" onClick={()=>handleClick1()}>AddCharge</button></li>
                      <li><button className="sidebar-dropdown3" onClick={()=>handleClick2()}>ChargeList</button></li>
                    </ul>
                  )}
                </li>
                <li>
                  <button className="sidebar-dropdown2" onClick={toggleDropdown3}>
                    <span>Bill Category</span>
                    <FontAwesomeIcon icon={isDropdown3Open ? faAngleDown : faAngleRight} />
                  </button>
                  {isDropdown3Open && (
                    <ul className="sidebar-submenu3">
                      <li><button className="sidebar-dropdown3" >AddCharge</button></li>
                      <li><button className="sidebar-dropdown3" >ChargeList</button></li>
                    </ul>
                  )}
                </li>
                <li>
                  <button className="sidebar-dropdown2" onClick={toggleDropdown14}>
                    <span>Bill Type</span>
                    <FontAwesomeIcon icon={isDropdown14Open ? faAngleDown : faAngleRight} />
                  </button>
                  {isDropdown14Open && (
                    <ul className="sidebar-submenu3">
                     <li><button className="sidebar-dropdown3" >AddCharge</button></li>
                      <li><button className="sidebar-dropdown3" >ChargeList</button></li>
                    </ul>
                  )}
                </li>
                <li>
                  <button className="sidebar-dropdown2" onClick={toggleDropdown15}>
                    <span>Department</span>
                    <FontAwesomeIcon icon={isDropdown15Open ? faAngleDown : faAngleRight} />
                  </button>
                  {isDropdown15Open && (
                    <ul className="sidebar-submenu3">
                      <li><button className="sidebar-dropdown3" >AddCharge</button></li>
                      <li><button className="sidebar-dropdown3" >ChargeList</button></li>
                    </ul>
                  )}
                </li>
                <li>
                  <button className="sidebar-dropdown2" onClick={toggleDropdown16}>
                    <span>FinancialYear</span>
                    <FontAwesomeIcon icon={isDropdown16Open ? faAngleDown : faAngleRight} />
                  </button>
                  {isDropdown16Open && (
                    <ul className="sidebar-submenu3">
                      <li><button className="sidebar-dropdown3" >AddCharge</button></li>
                      <li><button className="sidebar-dropdown3" >ChargeList</button></li>
                    </ul>
                  )}
                </li>
              </ul>
            )}
          </li>
          <li>
            <button className="sidebar-dropdown" onClick={toggleDropdown4}>
              <span>Developers</span>
              <FontAwesomeIcon icon={isDropdown4Open ? faAngleDown : faAngleRight} />
            </button>
            {isDropdown4Open && (
              <ul className="sidebar-submenu">
                <li>A</li>
                <li>B</li>
                <li>C</li>
              </ul>
            )}
          </li>
          <li>
            <button className="sidebar-dropdown" onClick={toggleDropdown5}>
              <span>Employee</span>
              <FontAwesomeIcon icon={isDropdown5Open ? faAngleDown : faAngleRight} />
            </button>
            {isDropdown5Open && (
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

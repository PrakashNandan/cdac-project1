import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faAngleDown, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import './Sidebar.css';

const TripleLevelDropdown = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isDropdown2Open, setIsDropdown2Open] = useState(false);
  const [isDropdown3Open, setIsDropdown3Open] = useState(false);
  const [isDropdown4Open, setIsDropdown4Open] = useState(false);
  const [isDropdown5Open, setIsDropdown5Open] = useState(false);

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

  return (
    <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
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
                    <span>1</span>
                    <FontAwesomeIcon icon={isDropdown2Open ? faAngleDown : faAngleRight} />
                  </button>
                  {isDropdown2Open && (
                    <ul className="sidebar-submenu2">
                      <li>A</li>
                      <li>B</li>
                      <li>C</li>
                    </ul>
                  )}
                </li>
                <li>
                  <button className="sidebar-dropdown3" onClick={toggleDropdown3}>
                    <span>2</span>
                    <FontAwesomeIcon icon={isDropdown3Open ? faAngleDown : faAngleRight} />
                  </button>
                  {isDropdown3Open && (
                    <ul className="sidebar-submenu3">
                      <li>A</li>
                      <li>B</li>
                      <li>C</li>
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
                <li>C</li>
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

import React from 'react';
import { FaUser, FaProductHunt, FaBlog, FaSignInAlt, FaTachometerAlt } from 'react-icons/fa';
import './Sidebar.css'; 
const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="profile">
        <h4>Portal</h4>
      </div>
      <ul className="sidebar-menu">
        <li>
          <a href="#">
            <FaTachometerAlt className="icon" /> Dashboard
          </a>
        </li>
        <li>
          <a href="#">
            <FaUser className="icon" /> Employees
          </a>
        </li>
        <li>
          <a href="#">
            <FaProductHunt className="icon" />Details
          </a>
        </li>
        <li>
          <a href="#">
            <FaBlog className="icon" /> Fine
          </a>
        </li>
        <li>
          <a href="#">
            <FaSignInAlt className="icon" /> Login
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
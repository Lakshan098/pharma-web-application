import "./Navbar.css";
import "../../../index.css";
import logo from "../../../Assets/Brand/Logo1.png";
import { FaUserCircle, FaAngleDown } from "react-icons/fa";
import Dropdown from 'react-bootstrap/Dropdown';
import './Navbar.css';
import React from 'react'
import '../../../index.css';

function Navbar() {
  return (
    <div className="nav-container">
      <img src={logo} alt="Logo" className="logo" width={175} height={70} />

      <a className="nav-tabs" href="dashboardpage">
        Home
      </a>
      <a className="nav-tabs" href="pharmacies">
        Pharmacies
      </a>
      <a className="nav-tabs" href="deliveryagent">
        Delivery Agents
      </a>
      {/* <a className='nav-tabs' href="statisticspage">Statistics</a> */}
      <a className="nav-tabs" href="complaints">
        Complaints
      </a>

      <div className="profile-container">
        <a className="lable-tag" href="adminprofile">
          A.W.S.Rashmika
          <br />
          Admin User
        </a>
        <FaUserCircle className="user" />
        <FaAngleDown className="downarrow" />
        
      </div>
    </div>
  );
}

export default Navbar;

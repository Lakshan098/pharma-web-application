import './Navbar.css';
import React from 'react';
import logo from '../../../Assets/Brand/Logo1.png';
import { FaUserCircle, FaAngleDown } from 'react-icons/fa';

function Navbar() {
    return (
      <div className="p-container">

            <img src={logo} alt="Logo" className='logo' width={175} height={70} />

            <a class="bar-link" href="/PharmacyHome">Home</a>
            <a class="bar-link"href="/PharmacyOrder">Orders</a>
            <a class="bar-link"href="#">Notifications</a>
            <a class="bar-link"href="/PharmacyInventory">Inventory</a>
            <a class="bar-link"href="/PharmacyStatistics">Statistics</a>

        <div className="profile-container">
            <label class="lable-tag">PharmacyX</label>
            <FaUserCircle className='user'/>
            <FaAngleDown className='downarrow' />
        </div>
      </div>
    );
  }

  export default Navbar;
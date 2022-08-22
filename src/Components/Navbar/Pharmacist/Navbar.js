import './Navbar.css';
import React from 'react';
import logo from '../../../Assets/Brand/Logo1.png';
import { FaUserCircle, FaAngleDown } from 'react-icons/fa';

function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function (event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content-pnv");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

function Navbar() {
  return (
    <div className="p-container">

      <img src={logo} alt="Logo" className='logo' width={175} height={70} />
      
        <a class="bar-link" href="/PharmacyHome">Home</a>
        <a class="bar-link" href="/PharmacyOrder">Orders</a>
        <a class="bar-link" href="#">Notifications</a>
        <a class="bar-link" href="/PharmacyInventory">Inventory</a>
        <a class="bar-link" href="/PharmacyStatistics">Statistics</a>
      

      <div className="profile-container">
        <label class="lable-tag">K.K.S.Dilshan</label>
        <FaUserCircle className='user' />
        <div class="dropdown-div">
          <button onClick={myFunction} class="dropbtn-pnav"><FaAngleDown className='downarrow' /></button>
          <div id="myDropdown" class="dropdown-content-pnav">
            <a href="/Pharmacistprofile">My Profile</a>
            <a href="#contact">About Us</a>
            <a href="/Login1">Log Out</a>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Navbar;
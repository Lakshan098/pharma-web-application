import './Navbar.css';
import React from 'react';
import logo from '../../../Assets/Brand/Logo1.png';
import { FaUserCircle, FaAngleDown } from 'react-icons/fa';

function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function (event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
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
=======
            <a class="bar-link" href="/PharmacyHome">Home</a>
            <a class="bar-link"href="/PharmacyOrder">Orders</a>
            <a class="bar-link"href="#">Notifications</a>
            <a class="bar-link"href="/PharmacyInventory">Inventory</a>
            <a class="bar-link"href="/PharmacyStatistics">Statistics</a>
>>>>>>> sanduni

      <img src={logo} alt="Logo" className='logo' width={175} height={70} />
      
        <a class="bar-link" href="/PharmacyHome">Home</a>
        <a class="bar-link" href="/PharmacyOrder">Orders</a>
        <a class="bar-link" href="#">Notifications</a>
        <a class="bar-link" href="/PharmacyInventory">Inventory</a>
        <a class="bar-link" href="/PharmacyStatistics">Statistics</a>
      

      <div className="profile-container">
        <label class="lable-tag">PharmacyX</label>
        <FaUserCircle className='user' />
        <div class="dropdown-div">
          <button onClick={myFunction} class="dropbtn-pnav"><FaAngleDown className='downarrow' /></button>
          <div id="myDropdown" class="dropdown-content-pnav">
            <a href="/Login1">Log Out</a>
            <a href="#about">About us</a>
            <a href="#contact">Edit Profile</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
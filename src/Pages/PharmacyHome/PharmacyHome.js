import Footer from '../../Components/Footer/Footer';
import Navbar from '../../Components/Navbar/Pharmacist/Navbar';
import React,{ useState } from 'react';
import './PharmacyHome.css';
import { MdVerifiedUser, MdOutlineDoNotDisturb } from 'react-icons/md';
import pharmacyLogo from '../../Assets/Brand/hospital-pharmacy.jpg';
import profilelogo from '../../Assets/Brand/imgprofile.jpg';
import SearchBar from '../../Components/SearchBar/Search';
import Card from '../../Components/card/card';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';
import PendingOrder from '../../Components/PendingOrder/PendingOrder'



//drop dawn function
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}


// Close the dropdown menu if the user clicks outside of it
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

function Tab(e) {
    if (e.value === 'Item1') {
        return <PendingOrder />;
    } else if (e.value === 'Item2') {
        return <PendingOrder />;
    } else {
        return <PendingOrder />;
    }
}


//when button click navigate function
function PharmacyHome() {

    const navigate = useNavigate();
    const navigateViewDetails = () => {

        navigate('/ViewDetails');
    };



    return (
        <div>
            <Navbar />
            <div className="mainLogo">
                <img className="logo-tag" src={pharmacyLogo} alt="Snow" />
                <div class="bottom-left1"><h1><b>Central Pharmacy</b></h1></div>
                <div class="bottom-left2"><h3><b>Colombo 07</b></h3></div>

            </div>

            <div className="process-button-div" >
                {/* <button onClick={shoot} id="process-one" class="process-button btn-1" type="button" >Pending order &#11167;</button> */}

                <div class="dropdown">
                    <button onClick={myFunction} class="dropbtn">Pending order &#11167;</button>
                    <div id="myDropdown" class="dropdown-content">
                        <a  eventKey="Item1" onClick={Tab("Item1")}>Pending order</a>
                        <a  eventKey="Item2" >On going order </a>
                        <a  eventKey="Item3">Completed order</a>
                    </div>
                </div>
                


                <div class="searchbar"> <SearchBar /> </div>
            </div>

            <div><PendingOrder /></div>

           


            <div> <Footer /></div>
        </div>

    );
}
export default PharmacyHome;
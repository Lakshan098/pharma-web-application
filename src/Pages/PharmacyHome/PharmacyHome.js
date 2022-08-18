import Footer from '../../Components/Footer/Footer';
import Navbar from '../../Components/Navbar/Pharmacist/Navbar';
import React from 'react';
import './PharmacyHome.css';
import { MdVerifiedUser,MdOutlineDoNotDisturb } from 'react-icons/md';
import pharmacyLogo from '../../Assets/Brand/hospital-pharmacy.jpg';
import profilelogo from '../../Assets/Brand/imgprofile.jpg';
import SearchBar from '../../Components/SearchBar/Search';
import Card from '../../Components/card/card';
import {Routes, Route, useNavigate} from 'react-router-dom';

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
                <button id="process-one" class="process-button btn-1" type="button" >Pending order &#11167;</button>
                {/* <button id="process-one" class="process-button btn-1" type="button" >Ongoing order &#11167;</button> */}
                <button id="process-two" class="process-button disabled btn-2" type="button">Completed order &#11167;</button>
                <div class="searchbar"> <SearchBar /> </div>
            </div>
            
            
            <div class="profile-cards">
            <div class="card">
                    <div class="neworder"><p>New order</p></div>
                    <div class="orderId"><p>Order Id:12345xer</p></div>
                    <div class="home-date"><p>20 july 2022 2pm</p></div>
                    <div><p>Delivary <MdVerifiedUser color="green"/></p></div>
                    <div><p>Prescription <MdVerifiedUser color="green"/></p> </div>

                    <div><button class="view-btn" onClick={navigateViewDetails}>View Details</button></div>
                    <div class="ar-button">
                        <p><button class="Accept-btn">Accept</button></p>
                        <p><button class="Reject-btn">Reject</button></p>
                    </div>

                    <p class="title2">40 minutes ago</p>
                </div>


                <div class="card">
                    <div class="neworder"><p>New order</p></div>
                    <div class="orderId"><p>Order Id:12345xer</p></div>
                    <div class="home-date"><p>20 july 2022 2pm</p></div>
                    <div><p>Delivary <MdOutlineDoNotDisturb color="red"/></p></div>
                    <div><p>Prescription <MdVerifiedUser color="green"/></p> </div>

                    <div><button class="view-btn" onClick={navigateViewDetails}>View Details</button></div>
                    <div class="ar-button">
                        <p><button class="Accept-btn">Accept</button></p>
                        <p><button class="Reject-btn">Reject</button></p>
                    </div>

                    <p class="title2">40 minutes ago</p>
                </div>

                <div class="card">
                    <div class="neworder"><p>New order</p></div>
                    <div class="orderId"><p>Order Id:12345xer</p></div>
                    <div class="home-date"><p>20 july 2022 2pm</p></div>
                    <div><p>Delivary <MdVerifiedUser color="green"/></p></div>
                    <div><p>Prescription <MdOutlineDoNotDisturb color="red"/></p> </div>

                    <div><button class="view-btn" onClick={navigateViewDetails}>View Details</button></div>
                    <div class="ar-button">
                        <p><button class="Accept-btn">Accept</button></p>
                        <p><button class="Reject-btn">Reject</button></p>
                    </div>

                    <p class="title2">40 minutes ago</p>
                </div>

                <div class="card">
                    <div class="neworder"><p>New order</p></div>
                    <div class="orderId"><p>Order Id:12345xer</p></div>
                    <div class="home-date"><p>20 july 2022 2pm</p></div>
                    <div><p>Delivary <MdVerifiedUser color="green"/></p></div>
                    <div><p>Prescription <MdVerifiedUser color="green"/></p> </div>

                    <div><button class="view-btn" onClick={navigateViewDetails}>View Details</button></div>
                    <div class="ar-button">
                        <p><button class="Accept-btn">Accept</button></p>
                        <p><button class="Reject-btn">Reject</button></p>
                    </div>

                    <p class="title2">40 minutes ago</p>
                </div>

            </div>

            

            <div> <Footer /></div>
        </div>

    );
}
export default PharmacyHome;
import React from 'react';
import { MdVerifiedUser, MdOutlineDoNotDisturb } from 'react-icons/md';
import { Routes, Route, useNavigate } from 'react-router-dom';
import "./OngoingOrder.css";

 function OngoingOrder(){
    

    const navigate = useNavigate();
    const navigateViewDetails = () => {

        navigate('/OngoingViewDetails');
    };
    return(
        <div class="profile-cards">
                <div class="card">
                    <div class="neworder"><p>Ongoing Order</p></div>
                    <div class="orderId"><p>Order Id:12345xer</p></div>
                    <div class="home-date"><p>20 july 2022 2pm</p></div>
                    <div><p>Delivary <MdVerifiedUser color="green" /></p></div>
                    <div><p>Prescription <MdVerifiedUser color="green" /></p> </div>

                    <div><button class="view-btn" onClick={navigateViewDetails}>View Details</button></div>
                    <div class="ar-button">
                        <p><button class="Accept-btn">Accept</button></p>
                        <p><button class="Reject-btn">Reject</button></p>
                    </div>

                    <p class="title2">40 minutes ago</p>
                </div>


                <div class="card">
                    <div class="neworder"><p>Ongoing Order</p></div>
                    <div class="orderId"><p>Order Id:12345xer</p></div>
                    <div class="home-date"><p>20 july 2022 2pm</p></div>
                    <div><p>Delivary <MdOutlineDoNotDisturb color="red" /></p></div>
                    <div><p>Prescription <MdVerifiedUser color="green" /></p> </div>

                    <div><button class="view-btn" onClick={navigateViewDetails}>View Details</button></div>
                    <div class="ar-button">
                        <p><button class="Accept-btn">Accept</button></p>
                        <p><button class="Reject-btn">Reject</button></p>
                    </div>

                    <p class="title2">40 minutes ago</p>
                </div>

                <div class="card">
                    <div class="neworder"><p>Ongoing Order</p></div>
                    <div class="orderId"><p>Order Id:12345xer</p></div>
                    <div class="home-date"><p>20 july 2022 2pm</p></div>
                    <div><p>Delivary <MdVerifiedUser color="green" /></p></div>
                    <div><p>Prescription <MdOutlineDoNotDisturb color="red" /></p> </div>

                    <div><button class="view-btn" onClick={navigateViewDetails}>View Details</button></div>
                    <div class="ar-button">
                        <p><button class="Accept-btn">Accept</button></p>
                        <p><button class="Reject-btn">Reject</button></p>
                    </div>

                    <p class="title2">40 minutes ago</p>
                </div>

                <div class="card">
                    <div class="neworder"><p>Ongoing Order</p></div>
                    <div class="orderId"><p>Order Id:12345xer</p></div>
                    <div class="home-date"><p>20 july 2022 2pm</p></div>
                    <div><p>Delivary <MdVerifiedUser color="green" /></p></div>
                    <div><p>Prescription <MdVerifiedUser color="green" /></p> </div>

                    <div><button class="view-btn" onClick={navigateViewDetails}>View Details</button></div>
                    <div class="ar-button">
                        <p><button class="Accept-btn">Accept</button></p>
                        <p><button class="Reject-btn">Reject</button></p>
                    </div>

                    <p class="title2">40 minutes ago</p>
                </div>

            </div>

    );
 }

 export default OngoingOrder;
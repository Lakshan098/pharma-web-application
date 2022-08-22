import React from 'react';
import {FaTimesCircle,FaCheckCircle  } from 'react-icons/fa';
import { Routes, Route, useNavigate } from 'react-router-dom';
import "./PendingOrder.css";

 function PendingOrder(){
    

    const navigate = useNavigate();
    const navigateViewDetails = () => {

        navigate('/PendingViewDetails');
    };
    const navigateDrugDetails = () => {

        navigate('/DrugDetails');
    };
    return(
        <div class="profile-cards">
                <div class="card item1">
                    <div class="neworder"><p>Pending Order</p></div>
                    <div class="orderId"><p>Order Id:1</p></div>
                    <div class="home-date"><p>20 Auguest 2022 2pm</p></div>
                    <div><p>Delivary <FaCheckCircle color="green" /></p></div>
                    <div><p>Prescription <FaCheckCircle color="green" /></p> </div>

                    <div><button class="view-btn" onClick={navigateViewDetails}>View Details</button></div>
                    <div class="ar-button">
                        <p><button onClick={navigateDrugDetails} class="Accept-btn">Accept</button></p>
                        <p><button class="Reject-btn">Reject</button></p>
                    </div>

                    <p class="title2">40 minutes ago</p>
                </div>


                <div class="card item2">
                    <div class="neworder"><p>Pending Order</p></div>
                    <div class="orderId"><p>Order Id:2</p></div>
                    <div class="home-date"><p>18 Auguest 2022 3pm</p></div>
                    <div><p>Delivary <FaTimesCircle color="red" /></p></div>
                    <div><p>Prescription <FaCheckCircle color="green" /></p> </div>

                    <div><button class="view-btn" onClick={navigateViewDetails}>View Details</button></div>
                    <div class="ar-button">
                        <p><button class="Accept-btn">Accept</button></p>
                        <p><button class="Reject-btn">Reject</button></p>
                    </div>

                    <p class="title2">41 minutes ago</p>
                </div>

                <div class="card item3">
                    <div class="neworder"><p>Pending Order</p></div>
                    <div class="orderId"><p>Order Id:3</p></div>
                    <div class="home-date"><p>18 Auguest 2022 8am</p></div>
                    <div><p>Delivary <FaCheckCircle color="green" /></p></div>
                    <div><p>Prescription <FaCheckCircle color="green" /></p> </div>

                    <div><button class="view-btn" onClick={navigateViewDetails}>View Details</button></div>
                    <div class="ar-button">
                        <p><button class="Accept-btn">Accept</button></p>
                        <p><button class="Reject-btn">Reject</button></p>
                    </div>

                    <p class="title2">50 minutes ago</p>
                </div>

                <div class="card item4">
                    <div class="neworder"><p>Pending Order</p></div>
                    <div class="orderId"><p>Order Id:4</p></div>
                    <div class="home-date"><p>15 Auguest 2022 9pm</p></div>
                    <div><p>Delivary<FaTimesCircle color="red" /></p></div>
                    <div><p>Prescription <FaTimesCircle color="red" /></p> </div>

                    <div><button class="view-btn" onClick={navigateViewDetails}>View Details</button></div>
                    <div class="ar-button">
                        <p><button class="Accept-btn">Accept</button></p>
                        <p><button class="Reject-btn">Reject</button></p>
                    </div>

                    <p class="title2">51 minutes ago</p>
                </div>

            </div>

    );
 }

 export default PendingOrder;
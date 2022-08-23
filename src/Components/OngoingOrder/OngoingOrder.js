import React from 'react';
import {FaTimesCircle,FaCheckCircle  } from 'react-icons/fa';
import { Routes, Route, useNavigate } from 'react-router-dom';
import "./OngoingOrder.css";

 function OngoingOrder(){
    

    const navigate = useNavigate();
    const navigateViewDetails = () => {

        navigate('/OngoingViewDetails');
    };
    const OngoingViewDetailsNoDelivary = () => {

        navigate('/OngoingViewDetailsNoDelivary');
    };
    return(
        <div class="profile-cards">
                <div class="card">
                    <div class="neworder"><p>Ongoing Order</p></div>
                    <div class="orderId"><p>Order Id:5</p></div>
                    <div class="home-date"><p>20 Auguest 2022 7am</p></div>
                    <div><p>Delivery <FaCheckCircle color="green" /></p></div>
                    <div><p>Prescription <FaCheckCircle color="green" /></p></div>

                    <div><button class="view-btn" onClick={navigateViewDetails}>View Details</button></div>
                    

                    <p class="title2">40 minutes ago</p>
                </div>


                <div class="card">
                    <div class="neworder"><p>Ongoing Order</p></div>
                    <div class="orderId"><p>Order Id:6</p></div>
                    <div class="home-date"><p>20 Auguest 2022 5am</p></div>
                    <div><p>Delivery <FaTimesCircle color="red" /></p></div>
                    <div><p>Prescription <FaCheckCircle color="green" /></p> </div>

                    <div><button class="view-btn" onClick={OngoingViewDetailsNoDelivary} >View Details</button></div>

                    <p class="title2">40 minutes ago</p>
                </div>

                <div class="card">
                    <div class="neworder"><p>Ongoing Order</p></div>
                    <div class="orderId"><p>Order Id:7</p></div>
                    <div class="home-date"><p>20 Auguest 2022 8am</p></div>
                    <div><p>Delivery <FaCheckCircle color="green" /></p></div>
                    <div><p>Prescription <FaTimesCircle color="red" /></p> </div>

                    <div><button class="view-btn" onClick={navigateViewDetails}>View Details</button></div>

                    <p class="title2">40 minutes ago</p>
                </div>

                <div class="card">
                    <div class="neworder"><p>Ongoing Order</p></div>
                    <div class="orderId"><p>Order Id:8</p></div>
                    <div class="home-date"><p>20 Auguest 2022 9am</p></div>
                    <div><p>Delivery <FaCheckCircle color="green" /></p></div>
                    <div><p>Prescription <FaTimesCircle color="red" /></p> </div>

                    <div><button class="view-btn" onClick={navigateViewDetails}>View Details</button></div>
                    <p class="title2">40 minutes ago</p>
                </div>

            </div>

    );
 }

 export default OngoingOrder;
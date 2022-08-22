import React from 'react';
import {FaTimesCircle,FaCheckCircle  } from 'react-icons/fa';
import { Routes, Route, useNavigate } from 'react-router-dom';
import "./DeliveryOrder.css";

 function DeliveryOrder(){
    

    const navigate = useNavigate();
    const navigateViewDetails = () => {

        navigate('/OngoingViewDetailsSetDelivary');
    };
    // const OngoingViewDetailsNoDelivary = () => {

    //     navigate('/OngoingViewDetailsNoDelivary');
    // };
    return(
        <div class="profile-cards">
                <div class="card">
                    <div class="neworder"><p>Delivery Order</p></div>
                    <div class="orderId"><p>Order Id:13</p></div>
                    <div class="home-date"><p>21 Auguest 2022 2pm</p></div>
                    <div><p>Delivary <FaCheckCircle color="green" /></p></div>
                    <div><p>Prescription <FaCheckCircle color="green" /></p></div>

                    <div><button class="view-btn" onClick={navigateViewDetails}>View Details</button></div>
                    

                    <p class="title2">40 minutes ago</p>
                </div>


                <div class="card">
                    <div class="neworder"><p>Delivery Order</p></div>
                    <div class="orderId"><p>Order Id:14</p></div>
                    <div class="home-date"><p>16 Auguest 2022 8am</p></div>
                    <div><p>Delivary <FaCheckCircle color="green" /></p></div>
                    <div><p>Prescription <FaCheckCircle color="green" /></p> </div>

                    <div><button class="view-btn" onClick={navigateViewDetails} >View Details</button></div>

                    <p class="title2">1 hours ago</p>
                </div>

                <div class="card">
                    <div class="neworder"><p>Delivery Order</p></div>
                    <div class="orderId"><p>Order Id:15</p></div>
                    <div class="home-date"><p>27 July 2022 3pm</p></div>
                    <div><p>Delivary <FaCheckCircle color="green" /></p></div>
                    <div><p>Prescription <FaTimesCircle color="red" /></p> </div>

                    <div><button class="view-btn" onClick={navigateViewDetails}>View Details</button></div>

                    <p class="title2">5 days ago</p>
                </div>

                <div class="card">
                    <div class="neworder"><p>Delivery Order</p></div>
                    <div class="orderId"><p>Order Id:16</p></div>
                    <div class="home-date"><p>20 July 2022 1pm</p></div>
                    <div><p>Delivary <FaCheckCircle color="green" /></p></div>
                    <div><p>Prescription <FaTimesCircle color="red" /></p> </div>

                    <div><button class="view-btn" onClick={navigateViewDetails}>View Details</button></div>
                    <p class="title2">4 Weeks ago</p>
                </div>

            </div>

    );
 }

 export default DeliveryOrder;
import React from 'react';
import { MdVerifiedUser, MdOutlineDoNotDisturb } from 'react-icons/md';
import { Routes, Route, useNavigate } from 'react-router-dom';
import "./CompletedOrder.css";

 function CompletedOrder(){
    

    const navigate = useNavigate();
    const navigateViewDetails = () => {

        navigate('/ViewDetails');
    };
    return(
        <div class="profile-cards">
                <div class="card">
                    <div class="complete-order"><p>Completed Order</p></div>
                    <div class="orderId"><p>Order Id:12345xer</p></div>
                    <div class="home-date"><p>20 july 2022 2pm</p></div>
                    <div><button class="view-btn" onClick={navigateViewDetails}>View Details</button></div>
                    <p class="title2">40 minutes ago</p>
                </div>


                <div class="card">
                    <div class="complete-order"><p>Completed Order</p></div>
                    <div class="orderId"><p>Order Id:12345xer</p></div>
                    <div class="home-date"><p>20 july 2022 2pm</p></div>
                    <div><button class="view-btn" onClick={navigateViewDetails}>View Details</button></div>
                    <p class="title2">40 minutes ago</p>
                </div>

                <div class="card">
                    <div class="complete-order"><p>Completed Order</p></div>
                    <div class="orderId"><p>Order Id:12345xer</p></div>
                    <div class="home-date"><p>20 july 2022 2pm</p></div>
                    <div><button class="view-btn" onClick={navigateViewDetails}>View Details</button></div>
                    <p class="title2">40 minutes ago</p>
                </div>

                <div class="card">
                    <div class="complete-order"><p>Completed Order</p></div>
                    <div class="orderId"><p>Order Id:12345xer</p></div>
                    <div class="home-date"><p>20 july 2022 2pm</p></div>
                    <div><button class="view-btn" onClick={navigateViewDetails}>View Details</button></div>
                    <p class="title2">40 minutes ago</p>
                </div>

            </div>

    );
 }

 export default CompletedOrder;
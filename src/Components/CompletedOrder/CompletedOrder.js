import React from 'react';
import { MdVerifiedUser, MdOutlineDoNotDisturb } from 'react-icons/md';
import { Routes, Route, useNavigate } from 'react-router-dom';
import "./CompletedOrder.css";

 function CompletedOrder(){
    

    const navigate = useNavigate();
    const navigateViewDetails = () => {

        navigate('/CompletedViewDetails');
    };
    return(
        <div class="profile-cards">
                <div class="card">
                    <div class="complete-order"><p>Completed Order</p></div>
                    <div class="orderId"><p>Order Id:9</p></div>
                    <div class="home-date"><p>20 July 2022 2pm</p></div>
                    <div><button class="view-btn" onClick={navigateViewDetails}>View Details</button></div>
                    <p class="title2">40 minutes ago</p>
                </div>


                <div class="card">
                    <div class="complete-order"><p>Completed Order</p></div>
                    <div class="orderId"><p>Order Id:10</p></div>
                    <div class="home-date"><p>19 July 2022 3pm</p></div>
                    <div><button class="view-btn" onClick={navigateViewDetails}>View Details</button></div>
                    <p class="title2">40 minutes ago</p>
                </div>

                <div class="card">
                    <div class="complete-order"><p>Completed Order</p></div>
                    <div class="orderId"><p>Order Id:11</p></div>
                    <div class="home-date"><p>18 July 2022 4pm</p></div>
                    <div><button class="view-btn" onClick={navigateViewDetails}>View Details</button></div>
                    <p class="title2">40 minutes ago</p>
                </div>

                <div class="card">
                    <div class="complete-order"><p>Completed Order</p></div>
                    <div class="orderId"><p>Order Id:12</p></div>
                    <div class="home-date"><p>17 July 2022 5pm</p></div>
                    <div><button class="view-btn" onClick={navigateViewDetails}>View Details</button></div>
                    <p class="title2">40 minutes ago</p>
                </div>

            </div>

    );
 }

 export default CompletedOrder;
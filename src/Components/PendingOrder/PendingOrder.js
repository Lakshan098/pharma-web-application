import React, { useState, useEffect } from 'react';
import { FaTimesCircle, FaCheckCircle } from 'react-icons/fa';
import { Routes, Route, useNavigate } from 'react-router-dom';
import "./PendingOrder.css";

function PendingOrder({ test }) {
    const navigate = useNavigate();

    const navigateViewDetails = () => {
        navigate('/PendingViewDetails');
    };

    const navigateDrugDetails = () => {
        navigate('/DrugDetails');
    };


    return test.map((order) => (

        <div class="profile-cards">
            <div class="card item1">
                <div class="neworder"><p>{order.status} order</p></div>
                <div class="orderId"><p>Order Id:{order.order_id}</p></div>
                <div class="home-date"><p>{order.time_stamp}</p></div>
                <div><p>Delivery {Number(order.delivery_need) == 1 ? <FaCheckCircle color="green" />:  <FaTimesCircle color="red" />}</p></div>
                <div><p>Prescription{Number(order.has_prescription) == 1 ?  <FaCheckCircle color="green" /> : <FaTimesCircle color="red" />}</p> </div>
                <div><button class="view-btn" onClick={navigateViewDetails}>View Details</button></div>
                
                <div class="ar-button">
                    <p><button onClick={navigateDrugDetails} class="Accept-btn">Accept</button></p>
                    <p><button class="Reject-btn">Reject</button></p>
                </div>

                <p class="title2">40 minutes ago</p>
            </div>
        </div>



      ) );

    

    
}

export default PendingOrder;
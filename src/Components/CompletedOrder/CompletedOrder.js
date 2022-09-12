import React from 'react';
import { MdVerifiedUser, MdOutlineDoNotDisturb } from 'react-icons/md';
import { Routes, Route, useNavigate } from 'react-router-dom';
import "./CompletedOrder.css";

function CompletedOrder({ test }) {


    const navigate = useNavigate();
    const navigateViewDetails = (test) => {

        if (Number(test) == 1) {
            navigate('/CompletedViewDetails');
        } else {

            //need to create another page complete order but not set delivery
            navigate('/CompletedViewDetailsNoDelivery'); 
        }
    };
    return test.map((order) => (
        <div class="profile-cards">
            <div class="card">
                <div class="complete-order"><p>{order.status} Order</p></div>
                <div class="orderId"><p>Order Id: {order.order_id}</p></div>
                <div class="home-date"><p>{order.time_stamp}</p></div>
                <div><button class="view-btn" onClick={() => navigateViewDetails(order.delivery_need)}>View Details</button></div>
                <p class="title2">40 minutes ago</p>
            </div>
        </div>

    ));

}

export default CompletedOrder;
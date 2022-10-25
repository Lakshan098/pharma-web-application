import React from 'react';
import { MdVerifiedUser, MdOutlineDoNotDisturb } from 'react-icons/md';
import { Routes, Route, useNavigate,createSearchParams } from 'react-router-dom';
import "./CompletedOrder.css";

function CompletedOrder({ test }) {


    const navigate = useNavigate();
    const navigateViewDetails = (test,id) => {

        if (Number(test) == 1) {
            
            navigate({ 
                pathname: '/CompletedViewDetails/',
                search: createSearchParams({ 
                    id : id
                }).toString()
            })
        } else {
            navigate({ 
                pathname: '/CompletedViewDetailsNoDelivery/',
                search: createSearchParams({ 
                    id : id
                }).toString()
            })
        }
    };
    return test.map((order) => (
        <div class="card-items-data">
            <div class="card">
                <div class="complete-order"><p>Completed Order</p></div>
                <div class="orderId"><p>Order Id: {order.order_id}</p></div>
                <div class="home-date"><p>{order.time_stamp}</p></div>
                <div><button class="view-btn" onClick={() => navigateViewDetails(order.delivery_need,order.order_id)}>View Details</button></div>
                <p class="title2">40 minutes ago</p>
            </div>
        </div>

    ));

}

export default CompletedOrder;
import React from 'react';
import { FaTimesCircle, FaCheckCircle } from 'react-icons/fa';
import { Routes, Route, useNavigate, createSearchParams } from 'react-router-dom';
import "./OngoingOrder.css";

function OngoingOrder({ test }) {

   
    const navigate = useNavigate();

    const navigateViewDetails = (test,id) => {
        
        if (Number(test) == 1) {
            navigate({ 
                pathname: '/OngoingViewDetails/',
                search: createSearchParams({ 
                    id : id
                }).toString()
            })
            // navigate('/OngoingViewDetails');
        } else {
            navigate({ 
                pathname: '/OngoingViewDetailsNoDelivary/',
                search: createSearchParams({ 
                    id : id
                }).toString()
            })
        //    navigate('/OngoingViewDetailsNoDelivary/'+id);
        }
    };
    
    return test.map((order) => (
        <div class="card-items-data">
            <div class="card card-ongoing">
                <div class="neworder"><p>On going Order</p></div>
                <div class="orderId"><p>Order Id: {order.order_id}</p></div>
                <div class="home-date"><p>{order.time_stamp}</p></div>
                <div><p>Delivery {Number(order.delivery_need) == 1 ? <FaCheckCircle color="green" /> : <FaTimesCircle color="red" />}</p></div>
                <div><p>Prescription{Number(order.has_prescription) == 1 ? <FaCheckCircle color="green" /> : <FaTimesCircle color="red" />}</p></div>

                <div><button class="view-btn" onClick={() => navigateViewDetails(order.delivery_need,order.order_id)} >View Details</button></div>


                <p class="title2">40 minutes ago</p>
            </div>
        </div>

    ));



}

export default OngoingOrder;
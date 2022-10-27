import React from 'react';
import { FaTimesCircle, FaCheckCircle } from 'react-icons/fa';
import { Routes, Route, useNavigate,createSearchParams} from 'react-router-dom';
import "./DeliveryOrder.css";

function DeliveryOrder({ test }) {


    const navigate = useNavigate();

    const navigateViewDetails = (id) => {
        navigate({ 
            pathname: '/OngoingViewDetailsSetDelivary/',
            search: createSearchParams({ 
                id : id
            }).toString()
        })
    };
    
    return test.map((order) => (
        <div class="card-items-data">
            <div class="card">
                <div class="neworder"><p>Delivery Order</p></div>
                <div class="orderId"><p>Order Id: {order.order_id}</p></div>
                <div class="home-date"><p>{order.time_stamp}</p></div>
                <div><p>Delivery{Number(order.delivery_need) == 1 ? <FaCheckCircle color="green" /> : <FaTimesCircle color="red" />}</p></div>
                <div><p>Prescription{Number(order.has_prescription) == 1 ? <FaCheckCircle color="green" /> : <FaTimesCircle color="red" />}</p></div>

                <div><button class="view-btn" onClick={()=>navigateViewDetails(order.order_id)}>View Details</button></div>


                <p class="title2">40 minutes ago</p>
            </div>
        </div>
    ));
    
}

export default DeliveryOrder;
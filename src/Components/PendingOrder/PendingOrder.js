import React, { useState, useEffect } from 'react';
import { FaTimesCircle, FaCheckCircle } from 'react-icons/fa';
import { Routes, Route, useNavigate, createSearchParams } from 'react-router-dom';
import "./PendingOrder.css";
import Axios from "../../api/axios";


function PendingOrder({ test }) {
    const navigate = useNavigate();


    //pased order id using navigate function   
    const navigateViewDetails = (id) => {
        navigate({
            pathname: '/PendingViewDetails/',
            search: createSearchParams({
                id: id
            }).toString()
        })
    };

    const navigateDrugDetails = () => {
        navigate('/DrugDetails');
    };

    const id = test[0].order_id;
    console.log(id);

    const navigateHome = () => {
        var config = {
            method: 'get',
            url: ('http://localhost:3000/RejectOrder/RejectPendingOrder/' + id),
            headers: {},
        };

        Axios(config);
        navigate('/PharmacyHome');
    };



    return test.map((order) => (

        <div class="profile-cards">
            <div class="card-items-data">
                <div class="card item1">
                    <div class="neworder"><p>Pending Order</p></div>
                    <div class="orderId"><p>Order Id:{order.order_id}</p></div>
                    <div class="home-date"><p>{order.time_stamp}</p></div>
                    <div><p>Delivery {Number(order.delivery_need) == 1 ? <FaCheckCircle color="green" /> : <FaTimesCircle color="red" />}</p></div>
                    <div><p>Prescription{Number(order.has_prescription) == 1 ? <FaCheckCircle color="green" /> : <FaTimesCircle color="red" />}</p> </div>
                    <div><button class="view-btn" onClick={() => navigateViewDetails(order.order_id)}>View Details</button></div>

                    <div class="ar-button">
                        <p><button onClick={navigateDrugDetails} class="Accept-btn">Accept</button></p>
                        <p><button onClick={navigateHome} class="Reject-btn"> Reject</button></p>
                        {/* <DeletePopup /> */}
                    </div>

                    <p class="title2">40 minutes ago</p>
                </div>
            </div>
        </div>



    ));




}

export default PendingOrder;
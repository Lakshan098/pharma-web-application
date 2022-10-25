import Footer from '../../Components/Footer/Footer';
import React, { useState, useEffect } from 'react';
import Navbar from '../../Components/Navbar/Pharmacist/Navbar';
import './OngoingViewDetails.css';
import DeliveryAgent from '../../Assets/Brand/imgprofile.jpg';
import { MdVerifiedUser } from 'react-icons/md';
import { AiFillFilePdf } from 'react-icons/ai';
import { FaTimesCircle, FaCheckCircle } from 'react-icons/fa';
import queryString from 'query-string';
import Popup9 from '../../Components/Popup9/Popup9';

import Axios from "../../api/axios";
import { Routes, Route, useNavigate, createSearchParams, useSearchParams } from 'react-router-dom';


function OngoingViewDetails() {

    const [searchparams] = useSearchParams();
    var id = searchparams.get("id");

    var config = {
        method: 'get',
        url: ('http://localhost:3000/PharmacyHome/OngoingViewDetails/' + id),
        headers: {},
    };

    var [data, setData] = React.useState([]);
    const [tableData, setTableData] = useState({});

    useEffect(async () => {
        await Axios(config)
            .then((response) => {
                setData(response.data);
                response.data.map((object) => {

                    setTableData({
                        id: object.order_id,
                        customer_name: object.cname,
                        placed_date: object.time_stamp,
                        status: object.status,
                        contact: object.customertelno,
                        prescription: object.prescription_image,
                        delivery_need: object.delivery_need,
                        feedback: object.feedback_report,
                        payment: object.payment,
                        customer_approvel: object.customer_approval
                    });



                });

            })
            .catch(function (err) {
                console.log(err);
            });
    }, []);

    const orderID =tableData.id;
    console.log(orderID);

    const navigate = useNavigate();
    // const changeDeliveryStatus = () => {
        
        
    //     var config = {
    //         method: 'get',
    //         url: ('http://localhost:3000/OngoingViewDetails/ChangeOngoingViewDetails/'+id),
    //         headers: {},
    //     };
        
    //     Axios(config);
    //     navigate('/PharmacyHome');
    // };

    return (
        <div>
            <Navbar />
            <div className="ongoingviewdetails-card">
                <h4 className="Ongoingorder-details"><b>Order Details</b></h4>
                <div>
                    <table className="Ongoingorder-tbl">
                        <tr>
                            <th></th>
                            <th></th>
                        </tr>

                        <tr>
                            <td><b>Order Id: </b></td>
                            <td>{tableData.id}</td>
                        </tr>

                        <tr>
                            <td><b>Placed time stamp :</b></td>
                            <td>{tableData.placed_date}</td>
                        </tr>

                        <tr>
                            <td><b>Status :</b></td>
                            <td><div class="status-div-ongoing"><b>{tableData.status}</b></div></td>
                        </tr>

                        <tr>
                            <td><b>Customer name :</b></td>
                            <td>{tableData.customer_name}</td>
                        </tr>

                        <tr>
                            <td><b>Customer Telephone :</b></td>
                            <td>{tableData.contact}</td>
                        </tr>

                        <tr>
                            <td><b>Prescription :</b></td>
                            <td><b><a href={tableData.prescription}>Click here</a></b></td>
                        </tr>

                        <tr>
                            <td><b>Delivery :</b></td>
                            <td>{Number(tableData.delivery_need) == 1 ? <FaCheckCircle color="green" /> : <FaTimesCircle color="red" />}</td>
                        </tr>

                        <tr>
                            <td><b>Feedback report :</b></td>
                            <td><b><a href="#">{tableData.feedback}</a></b></td>
                        </tr>

                        <tr>
                            <td><b>Payment :</b></td>
                            <td>{Number(tableData.payment) == 1 ? <FaCheckCircle color="green" /> : <FaTimesCircle color="red" />}</td>
                        </tr>

                        <tr>
                            <td><b>Customer Approvel:</b></td>
                            <td><b>{Number(tableData.customer_approvel) == 1 ? <FaCheckCircle color="green" /> : <FaTimesCircle color="red" />}</b></td>
                        </tr>
                    </table>
                </div>
                <div>

                </div>




                <div className="addDelivery-div" ><Popup9 test={tableData.id}/></div>



            </div>
            <Footer />

        </div>

    );
}

export default OngoingViewDetails;
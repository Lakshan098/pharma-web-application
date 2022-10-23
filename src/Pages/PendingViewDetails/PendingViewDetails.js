import Footer from '../../Components/Footer/Footer';
import React, { useState, useEffect } from 'react';
import Navbar from '../../Components/Navbar/Pharmacist/Navbar';
import './PendingViewDetails.css';
import DeliveryAgent from '../../Assets/Brand/imgprofile.jpg';
import { MdVerifiedUser } from 'react-icons/md';
import { AiFillFilePdf } from 'react-icons/ai';
import {FaTimesCircle,FaCheckCircle  } from 'react-icons/fa';
import {Routes, Route, useNavigate} from 'react-router-dom';

import Axios from "../../api/axios";
import {  createSearchParams,useSearchParams } from 'react-router-dom';
// const navigate = useNavigate();

// const navigateDrugDetails = () => {
        
//     navigate('/DrugDetails');
//   };

function PendingViewDetails() {

    const [ searchparams ] = useSearchParams();
    var id=searchparams.get("id");

    var config = {
        method: 'get',
        url: ('http://localhost:3000/PharmacyHome/PendingViewDetails/'+id),
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
                        customer_name: object.username,
                        placed_date: object.time_stamp,
                        status: object.status,
                        contact: object.contact_number,
                        prescription: object.prescription,
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
    }, [])

    return (
        <div>
            <Navbar />
            <div className="Pendingviewdetails-card">
                <h4 className="pendingorder-details"><b>Order Details</b></h4>
                <div>
                    <table className="pending-details-tbl">
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
                            <td><div class="status-div-pending"><b>{tableData.status}</b></div></td>
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
                            <td><a href="#"><b>{tableData.prescription}</b></a></td>
                        </tr>

                        <tr>
                            <td><b>Delivery :</b></td>
                            <td>{Number(tableData.delivery_need)== 1 ? <FaCheckCircle color="green"/>:<FaTimesCircle color="red" />}</td>
                        </tr>

                        {/* <tr>
                            <td><b>Feedback report :</b></td>
                            <td><a href="#"><b>Feedback_report.pdf</b></a></td>
                        </tr> */}

                        <tr>
                            <td><b>Payment :</b></td>
                            <td>{Number(tableData.payment)== 1 ? <FaCheckCircle color="green"/>:<FaTimesCircle color="red" />}</td>
                        </tr>
                    </table>
                    <div  className="addCartBtn-div" ><button className="add-cart-btn">Add to cart</button></div>
                </div>


            </div>
            <Footer />

        </div>

    );
}

export default PendingViewDetails;
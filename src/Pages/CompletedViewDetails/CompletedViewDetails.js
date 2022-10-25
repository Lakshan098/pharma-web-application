import Footer from '../../Components/Footer/Footer';
import React ,{ useState, useEffect } from 'react';
import Navbar from '../../Components/Navbar/Pharmacist/Navbar';
import './CompletedViewDetails.css';
import DeliveryAgent from '../../Assets/Brand/imgprofile.jpg';
import { MdVerifiedUser} from 'react-icons/md';
import { AiFillFilePdf} from 'react-icons/ai';
import {FaTimesCircle,FaCheckCircle  } from 'react-icons/fa';

import Axios from "../../api/axios";
import { Routes, Route, useNavigate, createSearchParams,useSearchParams } from 'react-router-dom';

function CompletedViewDetails() {

    const [ searchparams ] = useSearchParams();
    var id=searchparams.get("id");

    var config = {
        method: 'get',
        url: ('http://localhost:3000/PharmacyHome/CompletedViewDetails/'+id),
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
                        customer_contact: object.customertelno,
                        prescription: object.prescription_image,
                        delivery_need: object.delivery_need,
                        feedback: object.feedback_report,
                        payment: object.payment,
                        customer_approvel: object.customer_approval,
                        delivery_fee: object.delivery_fee,
                        destination:object.address,
                        delivery_contact: object.deliverytelno,
                        delivery_agent_name: object.deliveryname,
                        delivery_profile: object.profile_pic

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
            <div className="Completeviewdetails-card">
                <h4 className="Completeorder-details"><b>Order Details</b></h4>
                <div>
                    <table className="Completeorder-tbl">
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
                            <td><div class="status-div"><b>{tableData.status}</b></div></td>
                        </tr>

                        <tr>
                            <td><b>Customer name :</b></td>
                            <td>{tableData.customer_name}</td>
                        </tr>

                        <tr>
                            <td><b>Customer Telephone :</b></td>
                            <td>{tableData.customer_contact}</td>
                        </tr>

                        <tr>
                            <td><b>Prescription :</b></td>
                            <td><b><a href={tableData.prescription}>Click here</a></b></td>
                        </tr>

                        <tr>
                            <td><b>Delivary :</b></td>
                            <td>{Number(tableData.delivery_need)== 1 ? <FaCheckCircle color="green"/>:<FaTimesCircle color="red" />}</td>
                        </tr>

                        <tr>
                            <td><b>Feedback report :</b></td>
                            <td><b><a href="#">{tableData.feedback}</a></b></td>
                        </tr>

                        <tr>
                            <td><b>Payment :</b></td>
                            <td>{Number(tableData.payment)== 1 ? <FaCheckCircle color="green"/>:<FaTimesCircle color="red" />}</td>
                        </tr>
                    </table>
                </div>
                <div>
                    
                </div>
                <h4 className="Completeorder-details"><b>Delivary Details</b></h4>
                <div className='agent-details'>
                    <div className="agent-photo">
                        <img className="agent-photo" src={tableData.delivery_profile} />
                        <div className="v-agent-name"><p >{tableData.delivery_agent_name}</p>
                            </div>
                    </div>

                    <div>
                        <table className="v-order-tbl v-order-tbl2">
                            <tr>
                                <th></th>
                                <th></th>
                            </tr>

                            <tr>
                                <td><b>Delivery fee :</b></td>
                                <td>{tableData.delivery_fee}</td>
                            </tr>

                            <tr>
                                <td><b>Estimated time :</b></td>
                                <td> 20 minutes</td>
                            </tr>

                            <tr>
                                <td><b>Destination:</b></td>
                                <td>{tableData.destination}</td>
                            </tr>
                            <tr>
                                <td><b>Distance:</b></td>
                                <td>5Km</td>
                            </tr>
                            <tr>
                                <td><b>Tel.no:</b></td>
                                <td>{tableData.delivery_contact}</td>
                            </tr>

                        </table>

                    </div>
                </div>

            </div>
            <Footer />

        </div>

    );
}

export default CompletedViewDetails;
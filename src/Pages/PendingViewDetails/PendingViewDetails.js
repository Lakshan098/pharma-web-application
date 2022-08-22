import Footer from '../../Components/Footer/Footer';
import React from 'react';
import Navbar from '../../Components/Navbar/Pharmacist/Navbar';
import './PendingViewDetails.css';
import DeliveryAgent from '../../Assets/Brand/imgprofile.jpg';
import { MdVerifiedUser } from 'react-icons/md';
import { AiFillFilePdf } from 'react-icons/ai';
import {FaTimesCircle,FaCheckCircle  } from 'react-icons/fa';

function PendingViewDetails() {
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
                            <td>1</td>
                        </tr>

                        <tr>
                            <td><b>Placed time stamp :</b></td>
                            <td>20 Auguest 2022</td>
                        </tr>

                        <tr>
                            <td><b>Status :</b></td>
                            <td><div class="status-div-pending"><b>Pending order</b></div></td>
                        </tr>

                        <tr>
                            <td><b>Customer name :</b></td>
                            <td>K.K.S.Dilshan</td>
                        </tr>

                        <tr>
                            <td><b>Customer Telephone :</b></td>
                            <td>0710371977</td>
                        </tr>

                        <tr>
                            <td><b>Prescription :</b></td>
                            <td><a href="#"><b>Prescription.jpg</b></a></td>
                        </tr>

                        <tr>
                            <td><b>Delivary :</b></td>
                            <td><FaCheckCircle color="green" /></td>
                        </tr>

                        {/* <tr>
                            <td><b>Feedback report :</b></td>
                            <td><a href="#"><b>Feedback_report.pdf</b></a></td>
                        </tr> */}

                        <tr>
                            <td><b>Payment :</b></td>
                            <td><FaCheckCircle color="green" /></td>
                        </tr>
                    </table>
                    <div className="addCartBtn-div" ><button className="add-cart-btn">Add to cart</button></div>
                </div>


            </div>
            <Footer />

        </div>

    );
}

export default PendingViewDetails;
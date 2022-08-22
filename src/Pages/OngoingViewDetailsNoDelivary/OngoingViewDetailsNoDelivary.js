import Footer from '../../Components/Footer/Footer';
import React from 'react';
import Navbar from '../../Components/Navbar/Pharmacist/Navbar';
import './OngoingViewDetailsNoDelivary.css';
import DeliveryAgent from '../../Assets/Brand/imgprofile.jpg';
import { MdVerifiedUser} from 'react-icons/md';
import { AiFillFilePdf} from 'react-icons/ai';
import {FaTimesCircle,FaCheckCircle  } from 'react-icons/fa';


function OngoingViewDetailsNoDelivary() {
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
                            <td>6</td>
                        </tr>

                        <tr>
                            <td><b>Placed time stamp :</b></td>
                            <td>20 Auguest 2022</td>
                        </tr>

                        <tr>
                            <td><b>Status :</b></td>
                            <td><div class="status-div-ongoing"><b>On going order</b></div></td>
                        </tr>

                        <tr>
                            <td><b>Customer name :</b></td>
                            <td>N.S.Wimalaweera</td>
                        </tr>

                        <tr>
                            <td><b>Customer Telephone :</b></td>
                            <td>0710371977</td>
                        </tr>

                        <tr>
                            <td><b>Prescription :</b></td>
                            <td><b><a href="#">Prescription.jpg</a></b></td>
                        </tr>

                        <tr>
                            <td><b>Delivary :</b></td>
                            <td><FaTimesCircle color="red"/></td>
                        </tr>

                        <tr>
                            <td><b>Feedback report :</b></td>
                            <td><b><a href="#">Feedback_report.pdf</a></b></td>
                        </tr>

                        <tr>
                            <td><b>Payment :</b></td>
                            <td><FaCheckCircle color="green"/></td>
                        </tr>
                        
                        <tr>
                            <td><b>Customer Approvel:</b></td>
                            <td><b><FaCheckCircle color="green"/></b></td>
                        </tr>
                    </table>
                </div>
                <div>
                    
                </div>

                
                <div className="Completed-div" ><button className="add-complete-btn">Completed Order</button></div>
                
           
                
            </div>
            <Footer />

        </div>

    );
}

export default OngoingViewDetailsNoDelivary;
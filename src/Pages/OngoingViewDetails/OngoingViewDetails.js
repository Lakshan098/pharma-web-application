import Footer from '../../Components/Footer/Footer';
import React from 'react';
import Navbar from '../../Components/Navbar/Pharmacist/Navbar';
import './OngoingViewDetails.css';
import DeliveryAgent from '../../Assets/Brand/imgprofile.jpg';
import { MdVerifiedUser} from 'react-icons/md';
import { AiFillFilePdf} from 'react-icons/ai';
import {FaTimesCircle,FaCheckCircle  } from 'react-icons/fa';


function OngoingViewDetails() {
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
                            <td>5</td>
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
                            <td>K.G.L.Mihirange</td>
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
                            <td><b>Delivery :</b></td>
                            <td><FaCheckCircle color="green"/></td>
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

                
                <div className="addDelivery-div" ><button className="add-delivary-btn">Set for delivery</button></div>
                
                {/* <h4 className="Ongoingorder-details"><b>Delivary Details</b></h4>
                <div className='agent-details'>
                    <div className="agent-photo">
                        <img className="agent-photo" src={DeliveryAgent} />
                        <div className="v-agent-name"><p >K.k.Sahan Dilshan</p>
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
                                <td> 350</td>
                            </tr>

                            <tr>
                                <td><b>Estimated time :</b></td>
                                <td> 20 minutes</td>
                            </tr>

                            <tr>
                                <td><b>Destination:</b></td>
                                <td> No.75, Tangalle Rd, Beliatta</td>
                            </tr>
                            <tr>
                                <td><b>Distance:</b></td>
                                <td>5Km</td>
                            </tr>
                            <tr>
                                <td><b>Tel.no:</b></td>
                                <td>0710371977</td>
                            </tr>

                        </table>

                    </div>
                </div> */}
                
            </div>
            <Footer />

        </div>

    );
}

export default OngoingViewDetails;
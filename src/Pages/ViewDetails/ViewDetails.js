import Footer from '../../Components/Footer/Footer';
import React from 'react';
import Navbar from '../../Components/Navbar/Pharmacist/Navbar';
import './ViewDetails.css';
import DeliveryAgent from '../../Assets/Brand/imgprofile.jpg';
import { MdVerifiedUser} from 'react-icons/md';
import { AiFillFilePdf} from 'react-icons/ai';


function ViewDetails() {
    return (
        <div>
            <Navbar />
            <div className="viewdetails-card">
                <h4 className="v-order-details"><b>Order Details</b></h4>
                <div>
                    <table className="v-order-tbl">
                        <tr>
                            <th></th>
                            <th></th>
                        </tr>

                        <tr>
                            <td><b>Order Id: </b></td>
                            <td>1234rew</td>
                        </tr>

                        <tr>
                            <td><b>Placed time stamp :</b></td>
                            <td>20 July 2022</td>
                        </tr>

                        <tr>
                            <td><b>Status :</b></td>
                            <td>Completed</td>
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
                            <td><AiFillFilePdf color="blue"/></td>
                        </tr>

                        <tr>
                            <td><b>Delivary :</b></td>
                            <td><MdVerifiedUser color="green"/></td>
                        </tr>

                        <tr>
                            <td><b>Feedback report :</b></td>
                            <td><AiFillFilePdf color="blue"/></td>
                        </tr>

                        <tr>
                            <td><b>Payment :</b></td>
                            <td><MdVerifiedUser color="green"/></td>
                        </tr>
                    </table>
                </div>
                <div>
                    <hr class="viewdetails-hr-line" />
                </div>
                <h4 className="v-order-details"><b>Delivary Details</b></h4>
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
                </div>

            </div>
            <Footer />

        </div>

    );
}

export default ViewDetails;
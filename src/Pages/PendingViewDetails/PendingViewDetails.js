import Footer from '../../Components/Footer/Footer';
import React from 'react';
import Navbar from '../../Components/Navbar/Pharmacist/Navbar';
import './PendingViewDetails.css';
import DeliveryAgent from '../../Assets/Brand/imgprofile.jpg';
import { MdVerifiedUser} from 'react-icons/md';
import { AiFillFilePdf} from 'react-icons/ai';


function PendingViewDetails() {
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
                

            </div>
            <Footer />

        </div>

    );
}

export default PendingViewDetails;
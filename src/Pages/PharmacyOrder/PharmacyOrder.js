import Footer from '../../Components/Footer/Footer';
import React from 'react';
import Navbar from '../../Components/Navbar/Pharmacist/Navbar';
import './PharmacyOrder.css';
import Searchbar from '../../Components/SearchBar/Search';
import { Routes, Route, useNavigate } from 'react-router-dom';




function PharmacyOrder() {

    const navigate = useNavigate();
    const navigate2 = useNavigate();
    const navigate3 = useNavigate();
    const navigateViewDetails = () => {

        navigate('/OngoingViewDetails');
    };

    const navigateViewDetails2 = () => {

        navigate('/PendingViewDetails');
    };

    const navigateViewDetails3 = () => {

        navigate('/CompletedViewDetails');
    };
    return (
        <div>
            <Navbar />
            <div className="order-card">
                <h2 className="order-main-headertopic"><b>Order Details</b></h2>
                <div className="order-search"><Searchbar /></div>
                <div className="order-table">
                    <table className="order-table">
                        <tr>
                            <th>Order Id</th>
                            <th>Customer Name</th>
                            <th>Placed date</th>
                            <th>Status</th>
                            <th></th>

                        </tr>


                        <tr>
                            <td>1</td>
                            <td>K.K.S.Dilshan</td>
                            <td>22 Auguest 2022</td>
                            <td><button className="progress-btn progress-btn1"><b>On going</b></button></td>
                            <td><button onClick={navigateViewDetails} className="order-viewbtn"><b>View details</b></button></td>

                        </tr>
                        <hr class="order-hr-line" />
                        <tr>
                            <td>2</td>
                            <td>N.Wimalaweera</td>
                            <td>19 Auguest 2022</td>
                            <td><button className="progress-btn progress-btn2"><b>Delivery</b></button></td>
                            <td><button onClick={navigateViewDetails2} className="order-viewbtn"><b>View details</b></button></td>
                        </tr>
                        <hr class="order-hr-line" />

                        <tr>
                            <td>3</td>
                            <td>S.Rashmika</td>
                            <td>22 July 2021</td>
                            <td><button className="progress-btn progress-btn3 "><b>Completed</b></button></td>
                            <td><button onClick={navigateViewDetails3} className="order-viewbtn"><b>View details</b></button></td>
                        </tr>
                        <hr class="order-hr-line" />

                        <tr>
                            <td>4</td>
                            <td>S.Dilshan</td>
                            <td>21 June 2022</td>
                            <td><button className="progress-btn progress-btn4 "><b>Pending order</b></button></td>
                            <td><button onClick={navigateViewDetails2} className="order-viewbtn"><b>View details</b></button></td>
                        </tr>
                        <hr class="order-hr-line" />
                        <tr>
                            <td>5</td>
                            <td>A.Muthumala</td>
                            <td>17 June 2022</td>
                            <td><button className="progress-btn progress-btn4 "><b>Completed</b></button></td>
                            <td><button onClick={navigateViewDetails3} className="order-viewbtn"><b>View details</b></button></td>
                        </tr>
                        <hr class="order-hr-line" />
                        <tr>
                            <td>6</td>
                            <td>T.Madushanka</td>
                            <td>22 March 2022</td>
                            <td><button className="progress-btn progress-btn2"><b>Delivery</b></button></td>
                            <td><button onClick={navigateViewDetails2} className="order-viewbtn"><b>View details</b></button></td>
                        </tr>
                        <hr class="order-hr-line" />


                    </table>
                </div>

            </div>
            <Footer />
        </div>



    );
}
export default PharmacyOrder;
import Footer from '../../Components/Footer/Footer';
import React from 'react';
import Navbar from '../../Components/Navbar/Pharmacist/Navbar';
import './PharmacyOrder.css';
import Searchbar from '../../Components/SearchBar/Search';
import {Routes, Route, useNavigate} from 'react-router-dom';




function PharmacyOrder() {

    const navigate = useNavigate();
    const navigateViewDetails = () => {
        
        navigate('/ViewDetails');
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
                            <td>IN001</td>
                            <td>Manuka Dewanarayana</td>
                            <td>22 july 2022</td>
                            <td><button className="progress-btn progress-btn1"><b>On going</b></button></td>
                            <td><button onClick={navigateViewDetails} className="order-viewbtn"><b>View details</b></button></td>
                            
                        </tr>
                        <hr class="order-hr-line"/>
                        <tr>
                            <td>IN002</td>
                            <td>Navod Wimalaweera</td>
                            <td>22 july 2022</td>
                            <td><button className="progress-btn progress-btn2"><b>Delivery</b></button></td>
                            <td><button onClick={navigateViewDetails} className="order-viewbtn"><b>View details</b></button></td>
                        </tr>
                        <hr class="order-hr-line"/>

                        <tr>
                            <td>IN003</td>
                            <td>Sanduni Rashmika</td>
                            <td>22 july 2021</td>
                            <td><button className="progress-btn progress-btn3 "><b>Completed</b></button></td>
                            <td><button onClick={navigateViewDetails} className="order-viewbtn"><b>View details</b></button></td>
                        </tr>
                        <hr class="order-hr-line"/>

                        <tr>
                            <td>IN004</td>
                            <td>Sahan Dilshan</td>
                            <td>21 july 2022</td>
                            <td><button className="progress-btn progress-btn4 "><b>New order</b></button></td>
                            <td><button onClick={navigateViewDetails} className="order-viewbtn"><b>View details</b></button></td>
                        </tr>
                        <hr class="order-hr-line"/>
                        <tr>
                            <td>IN004</td>
                            <td>Sahan Dilshan</td>
                            <td>21 july 2022</td>
                            <td><button className="progress-btn progress-btn4 "><b>Completed</b></button></td>
                            <td><button onClick={navigateViewDetails} className="order-viewbtn"><b>View details</b></button></td>
                        </tr>
                        <hr class="order-hr-line"/>
                        <tr>
                            <td>IN002</td>
                            <td>Navod Wimalaweera</td>
                            <td>22 july 2022</td>
                            <td><button className="progress-btn progress-btn2"><b>Delivery</b></button></td>
                            <td><button onClick={navigateViewDetails} className="order-viewbtn"><b>View details</b></button></td>
                        </tr>
                        <hr class="order-hr-line"/>

                        
                    </table>
                </div>

            </div>
            <Footer />
        </div>

        

    );
}
export default PharmacyOrder;
import Navbar from '../../Components/Navbar/Admin/Navbar';
import React from 'react';
import Footer from '../../Components/Footer/Footer';
import Search from '../../Components/Search/Search';
import './Pharmacies.css';


function Pharmacies(){
    return (
        <div>
          <div className='header'>
            <Navbar/>
          </div>
          <h2 className='p-head'>Pharmacies</h2>
          <div className='p-search1'>
            <Search/>
          </div>

          <div class="member-list">
                <table class="table table-hover">
                    <thead>
                        <tr>

                            <th>Pharmacy ID</th>
                            <th>Pharmacy Name</th>
                            <th>Registration Number</th>
                            <th>Province</th>
                            <th>Contact Number</th>
                            <th>Email</th>
                            <th>Rating</th>
                        </tr>
                    </thead>
                    <tbody class="output" id="output">
                        <tr>
                          <td>001</td>
                          <td>Central Pharmacy</td>
                          <td>80270017</td>
                          <td>Western Province</td>
                          <td>+94 41 222 4432</td>
                          <td>centralpharma@gmail.com</td>
                          <td>4.7</td>
                        </tr>

                        <tr>
                          <td>002</td>
                          <td>Union Chemist</td>
                          <td>80240234</td>
                          <td>Southern Province</td>
                          <td>+94 41 222 9663</td>
                          <td>unionchemist@gmail.com</td>
                          <td>4.5</td>
                        </tr>

                        <tr>
                          <td>003</td>
                          <td>Aruna Pharmacy</td>
                          <td>80233413</td>
                          <td>Southern Province</td>
                          <td>+94 41 223 9325</td>
                          <td>arunapharma@gmail.com</td>
                          <td>4.6</td>
                        </tr>

                        <tr>
                          <td>004</td>
                          <td>Suwasana Pharmacy</td>
                          <td>80203394</td>
                          <td>Western Province</td>
                          <td>+94 41 222 7357</td>
                          <td>suwasanapharma@gmail.com</td>
                          <td>4.4</td>
                        </tr>

                        <tr>
                          <td>005</td>
                          <td>Sahana Pharmacy</td>
                          <td>80783927</td>
                          <td>Western Province</td>
                          <td>+94 41 222 3455</td>
                          <td>sahanapharma@gmail.com</td>
                          <td>4.5</td>
                        </tr>

                        <tr>
                          <td>006</td>
                          <td>Lanka Pharmacy</td>
                          <td>80325535</td>
                          <td>Central Province</td>
                          <td>+94 41 222 4556</td>
                          <td>lankapharma@gmail.com</td>
                          <td>4.7</td>
                        </tr>

                        <tr>
                          <td>007</td>
                          <td>Sethma Pharmacy</td>
                          <td>80324879</td>
                          <td>Central Province</td>
                          <td>+94 41 222 7658</td>
                          <td>sethmapharma@gmail.com</td>
                          <td>4.6</td>
                        </tr>

                        <tr>
                          <td>008</td>
                          <td>Ruhunu Pharmacy</td>
                          <td>80742479</td>
                          <td>Southern Province</td>
                          <td>+94 41 222 5353</td>
                          <td>ruhunupharma@gmail.com</td>
                          <td>4.5</td>
                        </tr>
                    </tbody>
                </table>
          </div>

          <Footer/>
        </div>
        
      );
}

export default Pharmacies;
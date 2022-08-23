import Navbar from '../../Components/Navbar/Admin/Navbar';
import React from 'react';
import Footer from '../../Components/Footer/Footer';
import Search from '../../Components/Search/Search';
import './DeliveryAgent.css';


function DeliveryAgent(){
    return (
        <div>
          <div className='header'>
            <Navbar/>
          </div>
          <h2 className='d-head'>Delivery Agents</h2>
          <div className='search-bar'>
            <Search/>
          </div>
          
          <div class="member-list">
                <table class="table table-hover">
                    <thead>
                        <tr>

                            <th>Agent ID</th>
                            <th>Agent Name</th>
                            {/* <th>Register Number</th> */}
                            <th>Address</th>
                            <th>Contact Number</th>
                            <th>Email</th>
                            <th>Rating</th>
                        </tr>
                    </thead>
                    <tbody class="output" id="output">
                        <tr>
                          <td>001</td>
                          <td>Navod Wimalaweera</td>
                          {/* <td>8003431</td> */}
                          <td>161, Helambagaswala, Tissamaharama</td>
                          <td>0702181481</td>
                          <td>navod98513@gmail.com</td>
                          <td>4.7</td>
                        </tr>

                        <tr>
                          <td>002</td>
                          <td>Manuka Dewanarayana</td>
                          {/* <td>8003256</td> */}
                          <td>18, Uyanwatta, Matara</td>
                          <td>0767832469</td>
                          <td>manukad@gmail.com</td>
                          <td>4.6</td>
                        </tr>

                        <tr>
                          <td>003</td>
                          <td>Lakshan Mihiranga</td>
                          {/* <td>8005733</td> */}
                          <td>121, Polommaruwa, Tangalle</td>
                          <td>0773245887</td>
                          <td>lmihiranga98@gmail.com</td>
                          <td>4.3</td>
                        </tr>

                        <tr>
                          <td>004</td>
                          <td>Sahan Dilshan</td>
                          {/* <td>8005478</td> */}
                          <td>14, Kirama, Walasmulla</td>
                          <td>0718723468</td>
                          <td>kksdilshan@gmail.com</td>
                          <td>4.8</td>
                        </tr>

                        <tr>
                          <td>005</td>
                          <td>Prabath Udayanga</td>
                          {/* <td>8009235</td> */}
                          <td>19, Hiththatiya, Matara</td>
                          <td>0712452365</td>
                          <td>pudayanga@gmail.com</td>
                          <td>4.7</td>
                        </tr>

                        <tr>
                          <td>006</td>
                          <td>Harsha Perera</td>
                          {/* <td>8008475</td> */}
                          <td>134, Unawatuna, Galle</td>
                          <td>0786728835</td>
                          <td>harshaperera89@gmail.com</td>
                          <td>4.2</td>
                        </tr>

                        <tr>
                          <td>007</td>
                          <td>Udara Kaushalya</td>
                          {/* <td>8007373</td> */}
                          <td>131/2, Dodampahala, Dickwella</td>
                          <td>0776378681</td>
                          <td>ukaushalya@gmail.com</td>
                          <td>4.4</td>
                        </tr>

                        <tr>
                          <td>008</td>
                          <td>Nimesh Hansaka</td>
                          {/* <td>8006767</td> */}
                          <td>14, Obesekarapura, Rajagiriya</td>
                          <td>0740866411</td>
                          <td>hansaka88@gmail.com</td>
                          <td>4.3</td>
                        </tr>
                    </tbody>
                </table>
          </div>

          <Footer/>
        </div>
        
      );
}

export default DeliveryAgent;
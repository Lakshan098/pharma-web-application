import Footer from '../../Components/Footer/Footer';
import Navbar from '../../Components/Navbar/Pharmacist/Navbar';
import './PharmacyHome.css';
import pharmacyLogo from '../../Assets/Brand/hospital-pharmacy.jpg';
import profilelogo from '../../Assets/Brand/imgprofile.jpg';
import SearchBar from '../../Components/SearchBar/Search';
import Card from '../../Components/card/card';

function PharmacyHome() {
    return (
        <div>
            <Navbar />
            <div className="mainLogo">
                <img className="logo-tag" src={pharmacyLogo} alt="Snow" />
                <div class="bottom-left1"><h1><b>Central Pharmacy</b></h1></div>
                <div class="bottom-left2"><h3><b>Colombo 07</b></h3></div>

            </div>

            <div className="process-button" >
                <button id="process-one" class="button btn-1" type="button" >On going order &#11167;</button>
                <button id="process-two" class="button disabled btn-2" type="button">Processed order &#11167;</button>
                <div class="searchbar"> <SearchBar /> </div>
            </div>
            
            
            <div class="profile-cards">
            <div class="card">
                <img className="profiles-logo" src={profilelogo} alt="Avatar" />
                <h2>K.K.Sahan Dilshan</h2>
                <p class="title1">172,Egodabadda,kirama</p>
                <p><button class="view-btn">View Details</button></p>
                <div class="ar-button">
                <p><button class="Accept-btn">Accept</button></p>
                <p><button class="Reject-btn">Reject</button></p>
                </div>

                <p class="title2">1 minutes ago</p>
            </div>


            <div class="card">
                <img className="profiles-logo" src={profilelogo} alt="Avatar" />
                <h2>K.K.Sahan Dilshan</h2>
                <p class="title1">172,Egodabadda,kirama</p>
                <p><button class="view-btn">View Details</button></p>
                <div class="ar-button">
                <p><button class="Accept-btn">Accept</button></p>
                <p><button class="Reject-btn">Reject</button></p>
                </div>

                <p class="title2">10 minutes ago</p>
            </div>

            <div class="card">
                <img className="profiles-logo" src={profilelogo} alt="Avatar" />
                <h2>K.K.Sahan Dilshan</h2>
                <p class="title1">172,Egodabadda,kirama</p>
                <p><button class="view-btn">View Details</button></p>
                <div class="ar-button">
                <p><button class="Accept-btn">Accept</button></p>
                <p><button class="Reject-btn">Reject</button></p>
                </div>

                <p class="title2">30 minutes ago</p>
            </div>   

            <div class="card">
                <img className="profiles-logo" src={profilelogo} alt="Avatar" />
                <h2>K.K.Sahan Dilshan</h2>
                <p class="title1">172,Egodabadda,kirama</p>
                <p><button class="view-btn">View Details</button></p>
                <div class="ar-button">
                <p><button class="Accept-btn">Accept</button></p>
                <p><button class="Reject-btn">Reject</button></p>
                </div>

                <p class="title2">40 minutes ago</p>
            </div>

            </div>

            <div> <Footer /></div>
        </div>
        
    );
}
export default PharmacyHome;
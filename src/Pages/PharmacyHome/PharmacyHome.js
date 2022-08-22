import Footer from '../../Components/Footer/Footer';
import Navbar from '../../Components/Navbar/Pharmacist/Navbar';
import React, { useState } from 'react';
import './PharmacyHome.css';
import { MdVerifiedUser, MdOutlineDoNotDisturb } from 'react-icons/md';
import pharmacyLogo from '../../Assets/Brand/hospital-pharmacy.jpg';
import profilelogo from '../../Assets/Brand/imgprofile.jpg';
// import SearchBar from '../../Components/SearchBar/Search';
import Card from '../../Components/card/card';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';
import PendingOrder from '../../Components/PendingOrder/PendingOrder';
import OngoingOrder from '../../Components/OngoingOrder/OngoingOrder';
import CompletedOrder from '../../Components/CompletedOrder/CompletedOrder';
import Button from 'react-bootstrap/Button';



//when button click navigate function
function PharmacyHome() {

    const navigate = useNavigate();
    const navigateViewDetails = () => {

        navigate('/ViewDetails');
    };


    const [show, setShow] = useState(true);
    const handleOpen = () => {
        if(show == true){
            setShow(!show);
        }
        if(show2 == true){
            setShow(!show2);
        }
        if(show3 == true){
            setShow(!show3);
        }
        setShow(!show);
    };

    const [show2, setShow2] = useState(false);
    const handleOpen2 = () => {
        if(show == true){
            setShow(!show);
        }
        if(show2 == true){
            setShow(!show2);
        }
        if(show3 == true){
            setShow(!show3);
        }
        setShow2(!show2);
    };

    const [show3, setShow3] = useState(false);
    const handleOpen3 = () => {
        if(show == true){
            setShow(!show);
        }
        if(show2 == true){
            setShow(!show2);
        }
        if(show3 == true){
            setShow(!show3);
        }
        setShow3(!show3);
    };


    return (
        <div>
            <Navbar />
            <div className="mainLogo">
                <img className="logo-tag" src={pharmacyLogo} alt="Snow" />
                <div class="bottom-left1"><h1><b>Central Pharmacy</b></h1></div>
                <div class="bottom-left2"><h3><b>Colombo 07</b></h3></div>

            </div>

            <div className="process-button-div" >
                <div ><button onClick={handleOpen} id="process-one" class="process-button" type="button" >Pending order</button></div>
                <div><button onClick={handleOpen2} id="process-one" class="process-button btn-3" type="button" >On going order</button></div>
                <div><button onClick={handleOpen3} id="process-one" class="process-button btn-3" type="button" >Completed order</button></div>


                {/* <div class="searchbar"> <SearchBar /> </div> */}
            </div>

                { show ? <PendingOrder /> : ''
                }
                { show2 ? <OngoingOrder /> : ''
                }
                { show3 ? <CompletedOrder /> : ''
                }




            <div> <Footer /></div>
        </div>

    );
}
export default PharmacyHome;
import Footer from '../../Components/Footer/Footer';
import Navbar from '../../Components/Navbar/Pharmacist/Navbar';
import React, { useState } from 'react';
import './PharmacyHome.css';
import { MdVerifiedUser, MdOutlineDoNotDisturb } from 'react-icons/md';
import pharmacyLogo from '../../Assets/Brand/gg.jpg';
import profilelogo from '../../Assets/Brand/imgprofile.jpg';
import Card from '../../Components/card/card';
import { Routes, Route, useNavigate, useLocation, useSearchParams, useParams } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';
import PendingOrder from '../../Components/PendingOrder/PendingOrder';
import OngoingOrder from '../../Components/OngoingOrder/OngoingOrder';
import CompletedOrder from '../../Components/CompletedOrder/CompletedOrder';
import DeliveryOrder from '../../Components/DeliveryOrder/DeliveryOrder';
import Button from 'react-bootstrap/Button';


import Axios from "../../api/axios";
import { useEffect } from 'react';



//when button click navigate function
function PharmacyHome() {

    const navigate = useNavigate();
    const navigateViewDetails = () => {

        navigate('/ViewDetails');
    };


    const [show, setShow] = useState(true);
    const handleOpen = () => {

        if (show2 == true) {
            setShow2(false);
        }
        if (show3 == true) {
            setShow3(false);
        }
        if (show4 == true) {
            setShow4(false);
        }
        setShow(true);
    };

    const [show2, setShow2] = useState(false);
    const handleOpen2 = () => {
        if (show == true) {
            setShow(false);
        }

        if (show3 == true) {
            setShow3(false);
        }
        if (show4 == true) {
            setShow4(false);
        }
        setShow2(true);
    };

    const [show3, setShow3] = useState(false);
    const handleOpen3 = () => {
        if (show == true) {
            setShow(false);
        }
        if (show2 == true) {
            setShow2(false);
        }
        if (show4 == true) {
            setShow4(false);
        }
        setShow3(true);
    };

    const [show4, setShow4] = useState(false);
    const handleOpen4 = () => {
        if (show == true) {
            setShow(false);
        }
        if (show2 == true) {
            setShow2(false);
        }
        if (show3 == true) {
            setShow3(false);
        }
        setShow4(true);
    };

    // const btn = document.getElementById('process-one1');

    // btn.addEventListener('click', function handleOpen() {
    //     btn.style.backgroundColor = 'salmon';
    //     btn.style.color = 'white';
    // });

    // const [email, setEmail] = useState("");
    // const [password, setPassword] = useState("");
    // const id =this.props.match.params.uid;





    // const getData=()=>{
    //     Axios.get("http://localhost:3001/PharmacyHome/:Id").then((response) => {
    //         console.log(response.data);});
    // };

    var params = useParams();
    var Id = params.uid;
    //console.log(Id);
    //var SId = Id.toString();
    //console.log(SId);

    var config = {
        method: 'get',
        url: 'http://localhost:3000/PharmacyHome/"PHA0000085"',
        headers: {},
    };
    var [data, setData] = React.useState([]);

    useEffect(() => {
        Axios(config)
            .then((response) => {
                // console.log(response.data.result[0].username);
                setData(response.data.result[0].username);
                // console.log(data);
            })
            .catch(function (err) {
                console.log(err);
            });
    })
    console.log(data);

    return (
        <div>
            <Navbar />

            <div className="mainLogo">
                <img className="logo-tag" src={pharmacyLogo} alt="Snow" />
                <div class="bottom-left1"><h1><b>{data}</b></h1></div>
                <div class="bottom-left2"><h3><b>Colombo 07 </b></h3></div>

            </div>

            <div className="process-button-div" >
                <div ><button onClick={handleOpen} id="process-one1" class="process-button" type="button" >Pending order</button></div>
                <div><button onClick={handleOpen2} id="process-one2" class="process-button btn-3" type="button" >On going order</button></div>
                <div><button onClick={handleOpen3} id="process-one3" class="process-button btn-3" type="button" >Completed order</button></div>
                <div><button onClick={handleOpen4} id="process-one3" class="process-button btn-3" type="button" >Delivering order</button></div>


                {/* <div class="searchbar"> <SearchBar /> </div> */}
            </div>



            {show ? <PendingOrder /> : ''
            }
            {show2 ? <OngoingOrder /> : ''
            }
            {show3 ? <CompletedOrder /> : ''
            }
            {show4 ? <DeliveryOrder /> : ''
            }




            <div> <Footer /></div>
        </div>

    );
}
export default PharmacyHome;
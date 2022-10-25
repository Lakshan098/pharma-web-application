import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Pharmacist/Navbar";
import React, { useState } from "react";
import "./PharmacyHome.css";
import { MdVerifiedUser, MdOutlineDoNotDisturb } from "react-icons/md";
import pharmacyLogo from "../../Assets/Brand/gg.jpg";
import profilelogo from "../../Assets/Brand/imgprofile.jpg";
import Card from "../../Components/card/card";
import {
  Routes,
  Route,
  useNavigate,
  useLocation,
  useSearchParams,
  useParams,
} from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import PendingOrder from "../../Components/PendingOrder/PendingOrder";
import OngoingOrder from "../../Components/OngoingOrder/OngoingOrder";
import CompletedOrder from "../../Components/CompletedOrder/CompletedOrder";
import DeliveryOrder from "../../Components/DeliveryOrder/DeliveryOrder";
import Button from "react-bootstrap/Button";

import Axios from "../../api/axios";
import { useEffect } from "react";

//when button click navigate function
function PharmacyHome({ navigation }) {
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

    var Id = localStorage.getItem('userId');
    var SId = Id.toString();


    var config = {
        method: 'get',
        url: ('http://localhost:3000/PharmacyHome/' + SId),
        headers: {},
    };

    // var [data, setData] = React.useState([]);
    var [pending, setPending] = React.useState([]);
    var [ongoing, setOngoing] = React.useState([]);
    var [delivery, setDelivery] = React.useState([]);
    var [complted, setCompleted] = React.useState([]);


    useEffect(async () => {
        await Axios(config)
            .then((response) => {

                response.data.map((item) => {
                    if (item.status === 'pending') {
                        setPending(prevState => [...prevState, item]);
                    }
                    else if (item.status === 'delivery' && item.delivery_need === 1) {
                        setDelivery(prevState => [...prevState, item]);
                    }
                    else if (item.status === 'ongoing') {
                        setOngoing(prevState => [...prevState, item]);
                    }else if (item.status === 'completed'){
                        setCompleted(prevState => [...prevState, item]);
                    }
                })

            })
            .catch(function (err) {
                console.log(err);
            });
    }, [])

    return (
        <div>
            <Navbar />

            <div className="mainLogo">
                <img className="logo-tag" src={pharmacyLogo} alt="Snow" />
                <div class="bottom-left1"><h1><b>{localStorage.getItem('username')}</b></h1></div>
                <div class="bottom-left2"><h3><b></b></h3></div>

            </div>

            <div className="process-button-div" >
                <div><button onClick={handleOpen} id="process-one1" class="process-button" type="button" >Pending order</button></div>
                <div><button onClick={handleOpen2} id="process-one2" class="process-button btn-3" type="button" >On going order</button></div>
                <div><button onClick={handleOpen3} id="process-one3" class="process-button btn-3" type="button" >Completed order</button></div>
                <div><button onClick={handleOpen4} id="process-one3" class="process-button btn-3" type="button" >Delivering order</button></div>


                {/* <div class="searchbar"> <SearchBar /> </div> */}
            </div>

            
            <div class="grid">

                {
                    show & pending.length != 0 ? <PendingOrder test={pending} /> : ''
                }
                {show2 & ongoing.length != 0 ? <OngoingOrder test={ongoing} /> : ''
                }
                {show3 & complted.length != 0 ? <CompletedOrder test={complted} /> : ''
                }
                {show4 & delivery.length != 0 ? <DeliveryOrder test={delivery} /> : ''
                }

            </div>

           
            <div> <Footer /></div>
        </div>


      <div>
        {" "}
        <Footer />
      </div>
    </div>
  );
}
export default PharmacyHome;

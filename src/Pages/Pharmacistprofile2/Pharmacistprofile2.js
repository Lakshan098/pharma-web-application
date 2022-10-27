import Navbar from "../../Components/Navbar/Pharmacist/Navbar";
import React from "react";
import { Rating } from "react-simple-star-rating";
import Footer from "../../Components/Footer/Footer";
import Button from "@mui/material/Button";
import logo from "../../Assets/Brand/centralphar.jpg";
import ProgressBar from "@ramonak/react-progress-bar";
import "./Pharmacistprofile2.css";
import "../../index.css";
import Popup1 from "../../Components/Popup1/Popup1";
import Popup from "../../Components/Popup/Popup";
import Popup2 from "../../Components/Popup2/Popup2";
import Popup3 from "../../Components/Popup3/Popup3";
import Popup4 from "../../Components/Popup4/Popup4";
import Popup5 from "../../Components/Popup5/Popup5";
import Popup6 from "../../Components/Popup6/Popup6";
import Popup10 from "../../Components/Popup10/Popup10";
import Popup11 from "../../Components/Popup11/Popup11";
import {
  FaUserCircle,
  FaMailBulk,
  FaPencilAlt,
  FaPhoneAlt,
  FaUserAlt,
  FaRegistered,
  FaUniversity,
  FaAddressCard,
  FaCalendarTimes,
  FaClock
} from "react-icons/fa";
import {
  ResponsiveContainer,
  ComposedChart,
  Line,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  PieChart,
  Pie,
} from "recharts";
import Axios from "../../api/axios";
import { useEffect,useState } from 'react';

    
const data = [
  {
    name: "Jan",
    Orders: 26,
  },
  {
    name: "Feb",
    Orders: 34,
  },
  {
    name: "Mar",
    Orders: 41,
  },
  {
    name: "Apr",
    Orders: 48,
  },
  {
    name: "May",
    Orders: 67,
  },
  {
    name: "Jun",
    Orders: 42,
  },
  {
    name: "Jul",
    Orders: 51,
  },
  {
    name: "Aug",
    Orders: 37,
  },
  {
    name: "Sep",
    Orders: 43,
  },
  {
    name: "Oct",
    Orders: 28,
  },
  {
    name: "Nov",
    Orders: 40,
  },
  {
    name: "Dec",
    Orders: 66,
  },
];

function Pharmacistprofile2() {

  var Id = localStorage.getItem('userId');
  var SId = Id.toString();


    var config = {
        method: 'get',
        url: ('http://localhost:3000/PharmacyHome/GetProfileData/' + SId),
        headers: {},
    };
    var [data, setData] = React.useState([]);
    const [tableData, setTableData] = React.useState({});
    const [newPassword,setNewPassword] = React.useState("");
    const [currentPassword,currentNewPassword] = React.useState("");
    const [confirmPassword,setConfirmPassword] = React.useState("");
    const changePassword = async () => {
      // var config = {
      //     method: 'post',
      //     url: ('http://localhost:3000/User/updateUsername'),
      //     headers: {},
      // };
      await Axios.post('http://localhost:3000/User/updatePassword', {
        uid: Id,
        current_password : currentNewPassword,
        new_password: newPassword
      });
      // navigate('/PharmacyHome');
      window.location.reload();
    };

    useEffect(async () => {
      await Axios(config)
          .then((response) => {
              console.log(response.data);
              response.data.map((object) => {
                
                  setTableData({
                      profile_pic: object.profile_pic,
                      username: object.username,
                      contact_number: object.contact_number,
                      email: object.email,
                      address: object.address,
                      account_number: object.account_number,
                      uid:object.uid,
                      rating: object.rating,
                      open_time: object.open_time,
                      close_time: object.close_time
                  });



              });

          })
          .catch(function (err) {
              console.log(err);
          });
  }, [])


  return (
    <div>
      <Navbar />
      <div>
        <section class="pharmacist-home-section">
          <div class="pharmacist-home-content">
            <div className="pharmacist2-card">
              <div className="pharmacist-name">
                <div className="pharmacist-prof-pic">
                  <img
                    src={tableData.profile_pic}
                    alt="Logo"
                    className="logo2"
                    width={140}
                    height={140}
                  />
                </div>
                <div className="pharmacist-prof-name">
                  <h1>{tableData.username}</h1>
                  <h6>
                    <Rating readonly="true" initialValue={tableData.rating} size="25" />
                  </h6>
                </div>
              </div>
              <div className="pharmacist-details">
                <h4 style={{ marginLeft: "50px", color: "#1789AD" }}>
                  Details
                </h4>
                <div
                  style={{
                    borderTop: "2px solid #000 ",
                    width: "80%",
                    marginTop: "10px",
                    marginLeft: "50px",
                  }}
                ></div>

                <div className="pharmacist-detail-list">
                  <div className="pharmacist-detail-one">
                    <div className="pharmacist-detail-obj">
                      <FaUserCircle />
                      <h5>Name</h5>
                    </div>
                    <div className="pharmacist-detail-des">
                      <h5>{tableData.username}</h5>
                    </div>
                    <div className="pharmacy-detail-ico">
                      <Popup test={tableData.uid} />
                    </div>
                  </div>

                  <div className="pharmacist-detail-one">
                    <div className="pharmacist-detail-obj">
                      <FaPhoneAlt />
                      <h5>Contact Number</h5>
                    </div>
                    <div className="pharmacist-detail-des">
                      <h5>{tableData.contact_number}</h5>
                    </div>
                    <div className="pharmacy-detail-ico">
                      <Popup2 test={tableData.uid}/>
                    </div>
                  </div>

                  <div className="pharmacist-detail-one">
                    <div className="pharmacist-detail-obj">
                      <FaMailBulk />
                      <h5>Email</h5>
                    </div>
                    <div className="pharmacist-detail-des">
                      <h5>{tableData.email}</h5>
                    </div>
                    <div className="pharmacy-detail-ico">
                      <Popup3 test={tableData.uid}/>
                    </div>
                  </div>
                

                  <div className="pharmacist-detail-one">
                    <div className="pharmacist-detail-obj">
                      <FaAddressCard />
                      <h5>Address</h5>
                    </div>
                    <div className="pharmacist-detail-des">
                      <h5>{tableData.address}</h5>
                    </div>
                    <div className="pharmacy-detail-ico">
                      <Popup6 test={tableData.uid}/>
                    </div>
                  </div>            

                  <div className="pharmacist-detail-one">
                    <div className="pharmacist-detail-obj">
                      <FaUniversity />
                      <h5>Bank Account</h5>
                    </div>
                    <div className="pharmacist-detail-des">
                      <h5>{tableData.account_number}</h5>
                    </div>
                    <div className="pharmacy-detail-ico">
                      <Popup4 test={tableData.uid}/>
                    </div>
                  </div>

                  <div className="pharmacist-detail-one">
                    <div className="pharmacist-detail-obj">
                      <FaClock />
                      <h5>Open time</h5>
                    </div>
                    <div className="pharmacist-detail-des">
                      <h5>{tableData.open_time}</h5>
                    </div>
                    <div className="pharmacy-detail-ico">
                      <Popup10 test={tableData.uid}/>
                    </div>
                  </div>

                  <div className="pharmacist-detail-one">
                    <div className="pharmacist-detail-obj">
                      <FaClock />
                      <h5>Close time</h5>
                    </div>
                    <div className="pharmacist-detail-des">
                      <h5>{tableData.close_time}</h5>
                    </div>
                    <div className="pharmacy-detail-ico">
                      <Popup11 test={tableData.uid}/>
                    </div>
                  </div>

                 
                </div>
              </div>
              
              <div className="admin-password">
                <h4 style={{ marginLeft: "50px", color: "#1789AD" }}>
                  Change Password
                </h4>
                <div
                  style={{
                    borderTop: "2px solid #000 ",
                    width: "80%",
                    marginTop: "10px",
                    marginLeft: "50px",
                  }}
                ></div>
                <form className="prof-form">
                  <div className="label-head">
                    <label className="prof-label">
                      Old Password
                      <input className="prof-input" type="password"  onChange={(e) => currentNewPassword(e.target.value)} />
                    </label>
                  </div>
                  <div className="label-head">
                    <label className="prof-label">
                      New Password
                      <input className="prof-input" type="password" onChange={(e) => setConfirmPassword(e.target.value)} />
                    </label>
                  </div>
                  <div className="label-head">
                    <label className="prof-label">
                      Confirm Password
                      <input className="prof-input" type="password" onChange={(e) => setNewPassword(e.target.value)}/>
                    </label>
                  </div>
                  <div className="label-head">
                    <Button size="small" variant="contained" onClick = {changePassword}>
                      Update Password
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}

export default Pharmacistprofile2;
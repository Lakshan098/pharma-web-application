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
import {
  FaUserCircle,
  FaMailBulk,
  FaPencilAlt,
  FaPhoneAlt,
  FaUserAlt,
  FaRegistered,
  FaUniversity,
  FaAddressCard
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
                    src={logo}
                    alt="Logo"
                    className="logo2"
                    width={140}
                    height={140}
                  />
                </div>
                <div className="pharmacist-prof-name">
                  <h1>Lanka Pharmacy</h1>
                  <h6>
                    <Rating readonly="true" initialValue={4} size="25" />
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
                      <h5>Lanka Pharmacy</h5>
                    </div>
                    <div className="pharmacy-detail-ico">
                      <Popup />
                    </div>
                  </div>

                  <div className="pharmacist-detail-one">
                    <div className="pharmacist-detail-obj">
                      <FaPhoneAlt />
                      <h5>Contact Number</h5>
                    </div>
                    <div className="pharmacist-detail-des">
                      <h5>0412224432</h5>
                    </div>
                    <div className="pharmacy-detail-ico">
                      <Popup2 />
                    </div>
                  </div>

                  <div className="pharmacist-detail-one">
                    <div className="pharmacist-detail-obj">
                      <FaMailBulk />
                      <h5>Email</h5>
                    </div>
                    <div className="pharmacist-detail-des">
                      <h5>lankapharma@gmail.com</h5>
                    </div>
                    <div className="pharmacy-detail-ico">
                      <Popup3 />
                    </div>
                  </div>
                

                  <div className="pharmacist-detail-one">
                    <div className="pharmacist-detail-obj">
                      <FaAddressCard />
                      <h5>Address</h5>
                    </div>
                    <div className="pharmacist-detail-des">
                      <h5>No 215/3, Habarakada, Homagama</h5>
                    </div>
                    <div className="pharmacy-detail-ico">
                      <Popup6 />
                    </div>
                  </div>            

                  <div className="pharmacist-detail-one">
                    <div className="pharmacist-detail-obj">
                      <FaUniversity />
                      <h5>Bank Account</h5>
                    </div>
                    <div className="pharmacist-detail-des">
                      <h5>84197230</h5>
                    </div>
                    <div className="pharmacy-detail-ico">
                      <Popup4 />
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
                      <input className="prof-input" type="password" />
                    </label>
                  </div>
                  <div className="label-head">
                    <label className="prof-label">
                      New Password
                      <input className="prof-input" type="password" />
                    </label>
                  </div>
                  <div className="label-head">
                    <label className="prof-label">
                      Confirm Password
                      <input className="prof-input" type="password" />
                    </label>
                  </div>
                  <div className="label-head">
                    <Button size="small" variant="contained">
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
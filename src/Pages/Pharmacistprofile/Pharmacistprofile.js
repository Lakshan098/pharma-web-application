import Navbar from "../../Components/Navbar/Pharmacist/Navbar";
import React from "react";
import { Rating } from "react-simple-star-rating";
import Footer from "../../Components/Footer/Footer";
import Button from "@mui/material/Button";
import logo from "../../Assets/Brand/centralphar.jpg";
import ProgressBar from "@ramonak/react-progress-bar";
import "./Pharmacistprofile.css";
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

function Pharmacistprofile() {
  return (
    <div>
      <Navbar />
      <div>
        <section class="pharmacist-home-section">
          <div class="pharmacist-home-content">
            <div className="pharmacist-card">
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
                  <h1>Central Pharmacy</h1>
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
                      <h5>Central Pharmacy</h5>
                    </div>
                    <div className="pharmacy-detail-ico">
                      <Popup />
                    </div>
                  </div>
                  <div className="pharmacist-detail-one">
                    <div className="pharmacist-detail-obj">
                      <FaUserCircle />
                      <h5>ID Number</h5>
                    </div>
                    <div className="pharmacist-detail-des">
                      <h5>000127</h5>
                    </div>
                    <div className="pharmacy-detail-ico">
                      <Popup4 />
                    </div>
                  </div>
                  <div className="pharmacist-detail-one">
                    <div className="pharmacist-detail-obj">
                      <FaPhoneAlt />
                      <h5>Registration Number</h5>
                    </div>
                    <div className="pharmacist-detail-des">
                      <h5>80270017</h5>
                    </div>
                    <div className="pharmacy-detail-ico">
                      <Popup5 />
                    </div>
                  </div>
                  <div className="pharmacist-detail-one">
                    <div className="pharmacist-detail-obj">
                      <FaMailBulk />
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
                      <FaPhoneAlt />
                      <h5>Contact Number</h5>
                    </div>
                    <div className="pharmacist-detail-des">
                      <h5>+94 41 222 4432</h5>
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
                      <h5>centralpharma@gmail.com</h5>
                    </div>
                    <div className="pharmacy-detail-ico">
                      <Popup3 />
                    </div>
                  </div>
                </div>
              </div>
              <div className="pharmacist-password">
                <h4 style={{ marginLeft: "80px", color: "#1789AD" }}>
                  Statistics
                </h4>
                <div
                  style={{
                    borderTop: "2px solid #000 ",
                    width: "80%",
                    marginTop: "10px",
                    marginLeft: "80px",
                  }}
                ></div>
              </div>

              <div class="pharmacist-home-content3">
                <div className="pharmacist-best-da">
                  <div className="pharmacist-best-da-header">
                    <h3>Monthly sales</h3>
                  </div>

                  <div style={{ width: "450px", height: 300 }}>
                    <ResponsiveContainer>
                      <ComposedChart
                        width={400}
                        height={400}
                        data={data}
                        margin={{
                          top: 30,
                          right: 40,
                          bottom: 10,
                          left: 20,
                        }}
                      >
                        <CartesianGrid stroke="#DCDCDC" strokeDasharray="5 5" />
                        <XAxis dataKey="name" scale="Month" />
                        <YAxis
                          label={{
                            value: "No.Of Orders",
                            angle: -90,
                            position: "insideBottomLeft",
                          }}
                        />
                        <Tooltip />
                        <Legend />
                        <Area
                          type="monotone"
                          dataKey="Orders"
                          fill="#ffffff"
                          stroke="#0a5279"
                        />
                      </ComposedChart>
                    </ResponsiveContainer>
                  </div>

                </div>

                <div className="pharmacist-best-da">
                  <div className="pharmacist-best-da-header">
                    <h3>Complaints</h3>
                  </div>
                  <div>
                    <div className="pharmacist-complaint">
                      <div class="vl"></div>
                      <div>
                        <div className="pharmacist-complaint-by">
                          <div className="pharmacist-icon-prof">
                            <FaUserAlt
                              size={30}
                            />
                          </div>
                          <div>
                            <p className="complainant-name">A.W.S.Rashmika</p>
                            <p className="complainant-name">sandunirashmika727@gmail.com</p>
                          </div>
                        </div>
                        <div className="complaint-desc">
                          <h4>Delivery is too late. Not satisfied.</h4>
                        </div>
                        <div className="complaint-date-time">
                          <div className="complaint-date">
                            2022/07/18
                          </div>
                          <div className="complaint-time">
                            05:12 pm
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="pharmacist-complaint">
                      <div class="vl"></div>
                      <div>
                        <div className="pharmacist-complaint-by">
                          <div className="pharmacist-icon-prof">
                            <FaUserAlt
                              size={30}
                            />
                          </div>
                          <div>
                            <p className="complainant-name">A.W.S.Rashmika</p>
                            <p className="complainant-name">sandunirashmika727@gmail.com</p>
                          </div>
                        </div>
                        <div className="complaint-desc">
                          <h4>Delivery is too late. Not satisfied.</h4>
                        </div>
                        <div className="complaint-date-time">
                          <div className="complaint-date">
                            2022/07/18
                          </div>
                          <div className="complaint-time">
                            05:12 pm
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
              <div className="panalty-marks">
                <div className="panelty-progress1">
                  <h4>Panelty Marks</h4>
                </div>
                <div className="panelty-progress2">
                  <ProgressBar completed={36} maxCompleted={100} bgColor="#E31723" baseBgColor="#E57676" height="25px" />
                </div>
                <div className="panelty-progress3">
                  <Button size="small" variant="contained">
                    Alert
                  </Button>
                </div>
                <div className="panelty-progress3">
                  <Button size="small" variant="contained">
                    Remove
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}

export default Pharmacistprofile;

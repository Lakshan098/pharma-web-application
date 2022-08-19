import "./Complaints.css";
import Navbar from "../../Components/Navbar/Admin/Navbar";
import Footer from "../../Components/Footer/Footer";
import "../../index.css";
<<<<<<< HEAD
import logo from "../../Assets/Brand/wellness.png";
import { FaAngleDown } from "react-icons/fa";
=======
import React from "react";
>>>>>>> a58d61c10d92c6b53e208b177cb06d149da37e0d

function Complaints() {
  return (
    <div>
      <Navbar />
      <div>
        <div className="complaints-head-bar">
          <div className="complaints-heading">
            <h3>Complaints Overview</h3>
          </div>
          <div className="complaints-detail">
            <div className="total-complaints">
              <div className="vl2"></div>
              <div className="com-val-name">
                <div className="com-name">
                  <h4>Total Complaints</h4>
                </div>
                <div className="com-value">789</div>
              </div>
            </div>
            <div className="pharmacy-complaints">
              <div className="vl2"></div>
              <div className="com-val-name">
                <div className="com-name">
                  <h4>Pharmacy Complaints</h4>
                </div>
                <div className="com-value">438</div>
              </div>
            </div>
            <div className="agent-complaints">
              <div className="vl2"></div>
              <div className="com-val-name">
                <div className="com-name">
                  <h4>Agent Complaints</h4>
                </div>
                <div className="com-value">351</div>
              </div>
            </div>
          </div>
        </div>
        <div className="complaints-head-bar2">
          <div className="complaints-heading">
            <h3>Complaints</h3>
          </div>
          <div>
            <div>
              <div className="complaint-det">
                <div className="p-a-logo2">
                  <div class="dropdown">
                    <button class="dropbtn1">
                      All
                      <FaAngleDown className="arrow-key" />
                    </button>
                    <div class="dropdown-content">
                      <a href="#">Link 1</a>
                      <a href="#">Link 2</a>
                      <a href="#">Link 3</a>
                    </div>
                  </div>
                </div>
              </div>
              <hr
                style={{
                  color: "black",
                  background: "black",
                  width: "82%",
                  marginLeft: "75px",
                }}
              />
            </div>
            <div>
              <div className="complaint-det">
                <div className="p-a-logo">
                  <img
                    src={logo}
                    alt="Logo"
                    className="logo"
                    width={100}
                    height={50}
                  />
                </div>
                <div className="p-a-logo1">
                  <a href="pharmacistprofile" className="comp-link">
                    <div>
                      <h5>Central Pharmacy</h5>
                    </div>
                    <div className="cmp-det">
                      <h6>It takes too long to get an answer when I call</h6>
                    </div>
                  </a>
                </div>
                <div className="p-a-logo2">
                  <div class="dropdown">
                    <button class="dropbtn">
                      On progress
                      <FaAngleDown className="arrow-key" />
                    </button>
                    <div class="dropdown-content">
                      <a href="#">Link 1</a>
                      <a href="#">Link 2</a>
                      <a href="#">Link 3</a>
                    </div>
                  </div>
                </div>
              </div>
              <hr
                style={{
                  color: "black",
                  background: "black",
                  width: "82%",
                  marginLeft: "75px",
                }}
              />
            </div>
            <div>
              <div className="complaint-det">
                <div className="p-a-logo">
                  <img
                    src={logo}
                    alt="Logo"
                    className="logo"
                    width={100}
                    height={50}
                  />
                </div>
                <div className="p-a-logo1">
                  <a href="unionchemistprofile" className="comp-link">
                  <div>
                    <h5>Union Chemist</h5>
                  </div>
                  <div className="cmp-det">
                    <h6>Drugs are not kept under appropriate conditions</h6>
                  </div>
                  </a>
                  
                </div>
                <div className="p-a-logo2">
                  <div class="dropdown">
                    <button class="dropbtn">
                      Resolved
                      <FaAngleDown className="arrow-key" />
                    </button>
                    <div class="dropdown-content">
                      <a href="#">Link 1</a>
                      <a href="#">Link 2</a>
                      <a href="#">Link 3</a>
                    </div>
                  </div>
                </div>
              </div>
              <hr
                style={{
                  color: "black",
                  background: "black",
                  width: "82%",
                  marginLeft: "75px",
                }}
              />
            </div>
            <div>
              <div className="complaint-det">
                <div className="p-a-logo">
                  <img
                    src={logo}
                    alt="Logo"
                    className="logo"
                    width={100}
                    height={50}
                  />
                </div>
                <div className="p-a-logo1">
                  <a href="agentprofile" className="comp-link">
                    <div>
                      <h5>N.S.Wimalaweera</h5>
                    </div>
                    <div className="cmp-det">
                      <h6>Late delivery</h6>
                    </div>
                  </a>
                </div>
                <div className="p-a-logo2">
                  <div class="dropdown">
                    <button class="dropbtn">
                      New
                      <FaAngleDown className="arrow-key" />
                    </button>
                    <div class="dropdown-content">
                      <a href="#">New</a>
                      <a href="#">On progress</a>
                      <a href="#">Resolved</a>
                    </div>
                  </div>
                </div>
              </div>
              <hr
                style={{
                  color: "black",
                  background: "black",
                  width: "82%",
                  marginLeft: "75px",
                }}
              />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Complaints;

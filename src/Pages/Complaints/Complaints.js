import "./Complaints.css";
import Navbar from "../../Components/Navbar/Admin/Navbar";
import Footer from "../../Components/Footer/Footer";
import "../../index.css";
import logo from "../../Assets/Brand/wellness.png";
import { FaAngleDown } from "react-icons/fa";
import React from "react";

function Complaints() {
  return (
    <div>
      <Navbar />
      <div>
        <div className="complaints-head-bar2">
          <div className="complaints-heading">
            <h2>Complaints</h2>
          </div>
          <div>
            <div>
              <div className="complaint-det">
                <div className="p-a-logo2">
                  <div class="dropdown1">
                    <button class="dropbtn1">
                      All Complaints
                      <FaAngleDown />
                    </button>
                    <div class="dropdown-content1">
                      <a>All Complaints</a>
                      <a>Pharmacy Complaints</a>
                      <a>Agent Complaints</a>
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
                  <div class="dropdown1">
                    <button class="dropbtn2">
                      On progress
                      <FaAngleDown />
                    </button>
                    <div class="dropdown-content1">
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
                  <div class="dropdown1">
                    <button class="dropbtn2">
                      Resolved
                      <FaAngleDown />
                    </button>
                    <div class="dropdown-content1">
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
                  <div class="dropdown1">
                    <button class="dropbtn2">
                      New
                      <FaAngleDown/>
                    </button>
                    <div class="dropdown-content1">
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

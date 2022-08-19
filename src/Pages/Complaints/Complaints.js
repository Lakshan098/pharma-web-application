import "./Complaints.css";
import Navbar from "../../Components/Navbar/Admin/Navbar";
import Footer from "../../Components/Footer/Footer";
import "../../index.css";
import React from "react";

function Complaints() {
  return (
    <div>
        <Navbar/>
        <div className="complaints-head-bar">
            <div className="complaints-heading">
                <h3>Complaints Overview</h3>
            </div>
            <div className="complaints-detail">
                <div className="total-complaints">
                    szdgsdg
                </div>
                <div className="pharmacy-complaints">
                    dsgsdgsdg 
                </div>
                <div className="agent-complaints">
                    fdxbggdxb  
                </div>
            </div>

        </div>
        <Footer/>
    </div>  
  );
}

export default Complaints;



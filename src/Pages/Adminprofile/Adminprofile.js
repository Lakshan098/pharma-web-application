import Navbar from "../../Components/Navbar/Admin/Navbar";
import Footer from "../../Components/Footer/Footer";
import Button from "@mui/material/Button";
import logo from '../../Assets/Brand/sanduni.jpg';
import "./Adminprofile.css";
import "../../index.css";
import { FaUserCircle,FaMailBulk,FaPencilAlt, FaPhoneAlt} from 'react-icons/fa';

function Adminprofile() {
  return (
    <div>
      <Navbar />
      <div>
        <section class="admin-home-section">
          <div class="admin-home-content">
            <div className="admin-card">
              <div className="admin-name">
                <div className="prof-pic">
                  <img
                    src={logo}
                    alt="Logo"
                    className="logo2"
                    width={140}
                    height={140}
                  />
                </div>
                <div className="prof-name">
                  <h1>A.W.S.Rashmika</h1>
                  <h6>Admin User</h6>
                </div>
              </div>
              <div className="admin-details">
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
                <div className="detail-list">
                  <div className="detail-one">
                    <div className="detail-obj">
                    <FaUserCircle />
                      <h5>Name</h5>
                    </div>
                    <div className="detail-des">
                      <h5>A.W.S.Rashmika</h5>
                    </div>
                    <div className="detail-ico">
                      <FaPencilAlt/>
                    </div>
                  </div>
                  <div className="detail-one">
                    <div className="detail-obj">
                    <FaUserCircle />
                      <h5>Username</h5>
                    </div>
                    <div className="detail-des">
                      <h5>A.W.S.Rashmika</h5>
                    </div>
                    <div className="detail-ico">
                      <FaPencilAlt/>
                    </div>
                  </div>
                  <div className="detail-one">
                    <div className="detail-obj">
                        <FaPhoneAlt/>
                      <h5>Contact Number</h5>
                    </div>
                    <div className="detail-des">
                      <h5>A.W.S.Rashmika</h5>
                    </div>
                    <div className="detail-ico">
                      <FaPencilAlt/>
                    </div>
                  </div>
                  <div className="detail-one">
                    <div className="detail-obj">
                        <FaMailBulk/>
                      <h5>Email</h5>
                    </div>
                    <div className="detail-des">
                      <h5>A.W.S.Rashmika</h5>
                    </div>
                    <div className="detail-ico">
                      <FaPencilAlt/>
                    </div>
                  </div>
                  <div className="btn-detail">
                    <Button size="small" variant="contained">
                      Update
                    </Button>
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

export default Adminprofile;

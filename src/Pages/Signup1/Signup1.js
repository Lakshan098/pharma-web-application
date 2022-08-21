import "./Signup1.css";
import React from "react";
import "../../index.css";
import logo from "../../Assets/Brand/signup-photo.webp";
import logo3 from "../../Assets/Brand/Logo1.png";
import Button from "@mui/material/Button";

function Signup1() {
  return (
    <div className="signup-container">
      <div className="signup-container2">
        <div className="signup-input">
          <div className="signup-logo">
            <img src={logo3} alt="Logo" className="logo-signup1" />
          </div>
          <div className="signup-header">
            <h1>SIGNUP</h1>
          </div>

          <div className="signup-form-input">
            <form className="signup-input-form">
              <input
                type="text"
                name="name"
                className="signup-username-password1"
                placeholder="Pharmacy Name"
              />
              <input
                type="text"
                name="name"
                className="signup-username-password1"
                placeholder="Pharmacy Registration Number"
              />
              <input
                type="text"
                name="name"
                className="signup-username-password1"
                placeholder="Email"
              />
              <input
                type="text"
                name="name"
                className="signup-username-password1"
                placeholder="Pharmacy Address"
              />
              <input
                type="text"
                name="name"
                className="signup-username-password1"
                placeholder="Pharmacy Account Number"
              />
              <input
                type="password"
                name="name"
                className="signup-username-password1"
                placeholder="Password"
              />
              <input
                type="password"
                name="name"
                className="signup-username-password2"
                placeholder="Confirm Passsword"
              />
            </form>
            <div className="signup-btn">
              <Button size="small" variant="contained" className="signup-btn-btn">
                SIGNUP
              </Button>
            </div>
            <div className="to-login">
              <div className="to-login1">
                <h6>Have an account?</h6>
              </div>
              <div className="to-login2">
                <a href="login1" className="signup-forget-pw-link1">
                  <h6>Login</h6>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="signup-image">
          <img src={logo} alt="Logo" className="logo-signup" />
        </div>
      </div>
    </div>
  );
}

export default Signup1;

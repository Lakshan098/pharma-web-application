import "./Login1.css";
import React from "react";
import "../../index.css";
import logo from "../../Assets/Brand/login-photo.jpeg";
import logo3 from "../../Assets/Brand/Logo1.png";
import Button from "@mui/material/Button";
import { FaUserAlt } from "react-icons/fa";

function Login1() {
  return (
    <div className="login-container">
      <div className="login-container2">
        <div className="login-input">
          <div className="login-logo">
            <img src={logo3} alt="Logo" className="logo-login1" />
          </div>
          <div className="login-header">
            <h1>LOGIN</h1>
            <div
              style={{
                borderTop: "3px solid #091f48 ",
                width: "35%",
              }}
            ></div>
          </div>

          <div className="login-form-input">
            <form className="input-form">
              <input
                type="text"
                name="name"
                className="username-password1"
                placeholder="Email"
                required
              />
              <input
                type="password"
                name="name"
                className="username-password2"
                placeholder="Passsword"
                pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
                required
              />
            </form>
            <div className="forget-pw">
              <a href="#" className="forget-pw-link">
                <h6>Forget Password?</h6>
              </a>
            </div>
            <div className="login-btn">
              <Button size="small" variant="contained" className="btn-btn">
                LOGIN
              </Button>
            </div>
            <div className="to-signup">
              <div className="to-signup1">
                <h6>Don't have an account?</h6>
              </div>
              <div className="to-signup2">
                <a href="#" className="forget-pw-link1">
                  <h6>SignUp</h6>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="login-image">
          <img src={logo} alt="Logo" className="logo-login" />
        </div>
      </div>
    </div>
  );
}

export default Login1;

import "./Confirmotp.css";
import React from "react";
import forgetlogo from "../../Assets/Brand/Forget Password.svg";
import logoIcon from "../../Assets/Brand/Logo1.png";
import Button from "@mui/material/Button";
import { useEffect, useRef, useState } from "react";
import { Navigate, Link, useNavigate } from "react-router-dom";

import Axios from '../../api/axios';

function confirmotp() {

  const [otp, setOtp] = useState('');

  const navigate = useNavigate();

  const HandleOtp = (e) => {
    e.preventDefault()
    const data = { otp: otp };
    console.log(data);
    Axios.post("http://localhost:3000/Signup/VerifyOTP", {
      otp: otp,
    })
    .then(() => {
      navigate('/')
    })
  };

  return (

      <div className="forgetpassword-div">
        <div className="forget-logo">
          <img src={forgetlogo} className="#" width={800} height={500} />
        </div>
        <div>
          <div class="brandname-div">
            <img
              src={logoIcon}
              className="brandname-forgot"
              width={320}
              height={150}
            />
          </div>
          <div className="brandname-div1">
              <h4 className="brandname-div2">Check Your Mail Box and</h4>
              <h4 className="brandname-div2">Enter the OTP Code</h4>
          </div>
          
          <form action="Verificationpage">
            <div className="forgot-email">

              <input
                placeholder="Enter OTP"
                className="forgot-input"
                type="text"
                name="otp"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                noValidate
              />
              
            </div>

            <div className="reset-pswd">
              <Button size="small" variant="contained" className="p-reset-btn" onClick={HandleOtp}>
              CONFIRM
            </Button>
            </div>
          </form>
        </div>
      </div>
  );
}

export default confirmotp;
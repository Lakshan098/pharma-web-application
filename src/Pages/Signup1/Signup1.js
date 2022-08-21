import "./Signup1.css";
import React from "react";
import "../../index.css";
import logo from "../../Assets/Brand/signup-photo.webp";
import logo3 from "../../Assets/Brand/Logo1.png";
import Button from "@mui/material/Button";
import { useEffect, useRef, useState } from "react";
import { Navigate, Link, useNavigate } from "react-router-dom";


import Axios from '../../api/axios';

function Signup1() {

  const navigate = useNavigate();
  const userRef = useRef();
  const pharmacy = "pharmacy";

  const [username, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [regNo, setRegNo] = useState('');
  const [address, setAddress] = useState('');
  const [telephone, setTelephone] = useState('');
  const [accNo, setAccNo] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    userRef.current.focus();
  }, [])

  const HandleSignup = (e) => {
    e.preventDefault()
    const data = { username: username, email: email, password: password, telephone:telephone, regNo:regNo, accNo:accNo, user_type:pharmacy };
    console.log(data);
    Axios.post("http://localhost:3000/Signup", {
      username: username, 
      email: email, 
      password: password, 
      telephone:telephone, 
      regNo:regNo, 
      accNo:accNo, 
      user_type:pharmacy
    })
    .then(() => {
      navigate('/')
    })
};

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
              <label className="signup-form-label">Pharmacy Name</label>
              <input
                type="text"
                name="username"
                id="username"
                className="signup-username-password1"
                ref={userRef}
                autoComplete="off"
                value={username}
                onChange={(e) => setUserName(e.target.value)}
                
              />
              <label className="signup-form-label">Pharmacy Registration Number</label>
              <input
                type="text"
                name="regNo"
                id="regNo"
                className="signup-username-password1"
                ref={userRef}
                autoComplete="off"
                value={regNo}
                onChange={(e) => setRegNo(e.target.value)}
              />
              <label className="signup-form-label">Email</label>
              <input
                type="text"
                name="name"
                className="signup-username-password1"
                ref={userRef}
                autoComplete="off"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <label className="signup-form-label">Pharmacy Address</label>
              <input
                type="text"
                name="address"
                id="address"
                className="signup-username-password1"
                ref={userRef}
                autoComplete="off"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
              <label className="signup-form-label">Telephone</label>
              <input
                type="text"
                name="telephone"
                id="telephone"
                className="signup-username-password1"
                ref={userRef}
                autoComplete="off"
                value={telephone}
                onChange={(e) => setTelephone(e.target.value)}
              />
              <label className="signup-form-label">Bank Account Number</label>
              <input
                type="text"
                name="accNo"
                id="accNo"
                className="signup-username-password1"
                ref={userRef}
                autoComplete="off"
                value={accNo}
                onChange={(e) => setAccNo(e.target.value)}
              />
              <label className="signup-form-label">Password</label>
              <input
                type="password"
                name="name"
                className="signup-username-password1"
                ref={userRef}
                autoComplete="off"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

            </form>
            <div className="signup-btn">
              <Button size="small" variant="contained" className="signup-btn-btn" onClick={HandleSignup}>
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

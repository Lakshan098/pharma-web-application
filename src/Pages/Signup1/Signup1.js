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

  const initialValues = {username:"", email:"", regNo:"", address:"", telephone:"", bName:"", accNo:"", password:""};

  const navigate = useNavigate();
  const userRef = useRef();
  const pharmacy = "pharmacy";

  const [username, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [regNo, setRegNo] = useState('');
  const [address, setAddress] = useState('');
  const [telephone, setTelephone] = useState('');
  const [bName, setBName] = useState('');
  const [accNo, setAccNo] = useState('');
  const [password, setPassword] = useState('');
  const [formErrors, setFormErrors] = useState('');
  const [isSubmit, setIsSubmit] = useState(false);

  useEffect(() => {
    userRef.current.focus();
  }, [])

  const HandleSignup = (e) => {
    e.preventDefault()
    const data = { username: username, email: email, address:address, password: password, telephone: telephone, regNo: regNo, bName: bName, accNo: accNo, user_type: pharmacy };
    setFormErrors(validate(data));
    setIsSubmit(true)

  };

  const sendData = () => {
    Axios.post("http://localhost:3001/Signup", {
      username: username,
      email: email,
      address: address,
      password: password,
      telephone: telephone,
      regNo: regNo,
      accNo: accNo,
      user_type: pharmacy
    })
      .then(() => {
        navigate('/Confirmotp')
      })
  }

  useEffect(() => {
    console.log(formErrors)
    if(Object.keys(formErrors).length === 0 && isSubmit){
      sendData()
    }
  }, [formErrors])

  const validate = (values) => {
    const errors = {};
    const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const pRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$/;
    if(!values.username){
      errors.username = "Username is required";
    }
    if(!values.regNo){
      errors.regNo = "Registration number is required";
    }
    if(!values.email){
      errors.email = "Email is required";
    }else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email";
    }
    if(!values.address){
      errors.address = "Address is required";
    }
    if(!values.telephone){
      errors.telephone = "Telephone number is required";
    }
    if(!values.accNo){
      errors.accNo = "Bank account number is required";
    }
    if(!values.bName){
      errors.bName = "Bank name is required";
    }

    if(!values.password){
      errors.password = "Password is required";
    }else if (!pRegex.test(values.password)) {
      errors.password = "Password must have at least 8 characters with including uppercase, lowercase, number and special character";
    }
    return errors;
  }

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
              <p className="form-error-message">{formErrors.username}</p>
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
              <p className="form-error-message">{formErrors.regNo}</p>
              <label className="signup-form-label">Email</label>
              <input
                type="text"
                name="email"
                className="signup-username-password1"
                ref={userRef}
                autoComplete="off"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <p className="form-error-message">{formErrors.email}</p>
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
              <p className="form-error-message">{formErrors.address}</p>
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
              <p className="form-error-message">{formErrors.bName}</p>
              <label className="signup-form-label">Bank Name</label>
              <input
                type="text"
                name="bName"
                id="bName"
                className="signup-username-password1"
                ref={userRef}
                autoComplete="off"
                value={bName}
                onChange={(e) => setBName(e.target.value)}
              />
              <p className="form-error-message">{formErrors.bName}</p>
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
              <p className="form-error-message">{formErrors.accNo}</p>
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
              <p className="form-error-message">{formErrors.password}</p>

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
          <div className="img-sign">
            <img src={logo} alt="Logo" className="logo-signup" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup1;

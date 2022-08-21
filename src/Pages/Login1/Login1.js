import "./Login1.css";
import React from "react";
import "../../index.css";
import logo from "../../Assets/Brand/login-photo.jpeg";
import logo3 from "../../Assets/Brand/Logo1.png";
import Button from "@mui/material/Button";
import { FaUserAlt } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";
import { Navigate, Link, useNavigate } from "react-router-dom";
import jwt_decode from 'jwt-decode';

import Axios from '../../api/axios';
const LOGIN_URL = '/Signup/SignIn';

function Login1() {
  const navigate = useNavigate();
  const userRef = useRef();
  const errRef = useRef();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    userRef.current.focus();
  }, [])

  const HandleSignIn = (e) => {
    e.preventDefault()
    const data = { email: email, password: password };
    console.log(data);
    Axios.post("http://localhost:3000/Signup/SignIn", {
        email: email,
        password: password,
    })
        .then((response) => {
            console.log(response.data)

            if (response.data.error) {
                alert(response.data.error);
            }
            else {
                // alert("successfully Logged in!");
                const token = response.data;
                console.log(token);
                sessionStorage.setItem("token", token);
                let sessionToken = sessionStorage.getItem("token");
                //console.log("Appjs", sessionToken);
                //console.log(response.data.token)

                if (sessionToken) {
                    const users = jwt_decode(response.data.token);
                    console.log(users);
                    window.loggedUserType = users.User_type;
                    window.loggedUserId = users.User_ID;
                    //Navigate("/");
                    //<Navigate to="/" replace={true} />
                    console.log(users.User_type);

                    if (window.loggedUserType == "admin") {
                        console.log("Admin dashboard called", window.loggedUserType);
                        //Navigate("/Adminprofile");
                        //return (<Navigate to='/Adminprofile' />)
                        //<Navigate to="/Adminprofile" replace={true} />
                        navigate('/DashboardPage')
                    }

                    else if (window.loggedUserType == "pharmacy") {
                        console.log("Pharmacy dashboard called", window.loggedUserType);
                        //Navigate("/PharmacyHome");
                        //return (<Navigate to='/' />)
                        //<Navigate to="/PharmacyHome" replace={true} />
                        navigate('/PharmacyHome')
                        
                    }

                }
                else {
                    window.loggedUserType = null;
                    window.loggedUserId = null;
                }
            }
        });
};

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
                name="email"
                id="email"
                className="username-password1"
                ref={userRef}
                autoComplete="off"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
              />

              <input
                type="password"
                name="password"
                id="password"
                className="username-password2"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Passsword"
              />
              <div className="login-btn">
                <Button size="small" variant="contained" className="btn-btn" onClick={HandleSignIn}>
                  LOGIN
                </Button>
              </div>
            </form>
            <div className="forget-pw">
              <a href="Forgetpassword" className="forget-pw-link">
                <h6>Forget Password?</h6>
              </a>
            </div>
            <div className="to-signup">
              <div className="to-signup1">
                <h6>Don't have an account?</h6>
              </div>
              <div className="to-signup2">
                <a href="signup1" className="forget-pw-link1">
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

import "./Confirmotp.css";
import React from "react";
import forgetlogo from "../../Assets/Brand/Forget Password.svg";
import logoIcon from "../../Assets/Brand/Logo1.png";
import Button from "@mui/material/Button";



export default class Login extends React.Component {
  render() {
    
    return (
      <div>
        <div className="forgetpassword-div">
          <div className="forget-logo">
            <img src={forgetlogo} className="#" width={500} height={300} />
          </div>
          <div>
            <div class="brandname-div">
              <img
                src={logoIcon}
                className="brandname-forgot"
                width={220}
                height={100}
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
                  type="email"
                  name="email"
                  onChange={this.handleChange}
                  noValidate
                />
                
              </div>

              <div className="reset-pswd">
                <Button size="small" variant="contained" className="p-reset-btn">
                CONFIRM
              </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

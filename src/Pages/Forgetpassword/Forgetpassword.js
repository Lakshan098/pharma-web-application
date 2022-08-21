import "./Forgetpassword.css";
import React from "react";
import forgetlogo from "../../Assets/Brand/Forget Password.svg";
import logoIcon from "../../Assets/Brand/Logo1.png";
import Button from "@mui/material/Button";

const validEmailRegex = RegExp(
  /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
);

const validateForm = (errors) => {
  let valid = true;
  Object.values(errors).forEach((val) => val.length > 0 && (valid = false));
  return valid;
};

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: null,
      errors: {
        email: "",
      },
    };
  }

  handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    let errors = this.state.errors;

    switch (name) {
      case "email":
        errors.email = validEmailRegex.test(value) ? "" : "Email is not valid!";
        break;

      default:
        break;
    }

    this.setState({ errors, [name]: value });
  };

  render() {
    const { errors } = this.state;
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
                <h4 className="brandname-div2">Forgot Password ?</h4>
                <h4 className="brandname-div2">No Worries !</h4>
                <h4 className="brandname-div2">Enter Your Registered Email and</h4>
                <h4 className="brandname-div2">Check Your Mail Box</h4>
            </div>
            
            <form action="Verificationpage">
              <div className="forgot-email">

                <input
                  placeholder="Enter your email"
                  className="forgot-input"
                  type="email"
                  name="email"
                  onChange={this.handleChange}
                  noValidate
                />
                
              </div>
              <div className="error-display">
              {errors.email.length > 0 && (
                  <span className="forgot-error">{errors.email}</span>
                )}
              </div>

              <div className="reset-pswd">
                <Button size="small" variant="contained" className="p-reset-btn">
                RESET
              </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

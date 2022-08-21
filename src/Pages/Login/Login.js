//import Footer from '../../Components/Footer/Footer';
//import Navbar from '../../Components/Navbar/Pharmacist/Navbar';

import './Login.css';
import loginlogo from '../../Assets/Brand/login.png';
import logo from '../../Assets/Brand/Logo1.png';
import PharmacyLogin from '../../Assets/Brand/Pharmacy_login.jpg';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import { AiTwotoneMail } from 'react-icons/ai';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { Link, Routes, Route, useNavigate } from 'react-router-dom';



{/* <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.2/css/all.min.css"></link>  */}



const validEmailRegex = RegExp(
    /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
);
const validateForm = errors => {
    let valid = true;
    Object.values(errors).forEach(val => val.length > 0 && (valid = false));
    return valid;
};

export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: null,
            password: null,
            errors: {
                email: '',
                password: '',
            }
        };
    }

    handleChange = (event) => {
        event.preventDefault();
        const { name, value } = event.target;
        let errors = this.state.errors;

        switch (name) {

            case 'email':
                errors.email =
                    validEmailRegex.test(value)
                        ? ''
                        : 'Email is not valid!';
                break;
            case 'password':
                errors.password =
                    value.length < 8
                        ? 'Password must be at least 8 characters long!'
                        : '';
                break;
            default:
                break;
        }

        this.setState({ errors, [name]: value });
    }

    handleSubmit = (event) => {
        const navigate = useNavigate();
        event.preventDefault();
        if (validateForm(this.state.errors)) {
            console.info('PharmacyHome');
            // navigate('/PharmacyHome');
            // document.getElementById("login-form").submit();
        } else {
            navigate('Inavalid page');
            // document.getElementById("login-form").submit();
        }
    }

    render() {
        const { errors } = this.state;


        return (
            <div className="main-login-div">
                <div className="wrapper2-login">

                </div>
                <div className='wrapper-login'>
                    <div className="co-main">
                        <img src={logo} className='brandname-login' width={175} height={70} />
                        <img src={loginlogo} className='login-image-login' width={500} height={300} />
                    </div>
                    <div className='form-wrapper'>
                        <h2><b>Login</b></h2>

                        <form id="login-form" method="GET" className="p-login-form" noValidate>

                            <div className='login-email'>
                                <label  className="login-lable" htmlFor="email">Email</label>
                                
                                <input placeholder= 'email' className="login-input" type='email' name='email' onChange={this.handleChange} noValidate />
                                {errors.email.length > 0 &&
                                    <span className='error'>{errors.email}</span>}
                            </div>

                            <div className='p-login-password' >
                                <label className="login-lable" htmlFor="password">password</label>
                                
                                <input placeholder="password" className="login-input" type='password' name='password' onChange={this.handleChange} noValidate />
                                {errors.password.length > 0 &&
                                    <span className='error'>{errors.password}</span>}
                            </div>

                            <div className='p-Forget-password'>
                                <a class="p-fromLogin-forgot" href="forgetpassword"><b>Forgot password</b></a>

                            </div>

                            <div className='submit-btn'>
                                <button type="submit" variant="contained" className='p-login-btn' >Login</button>
                            </div>

                            <div class="p-signup">
                                <lable><b>Don't have an account?</b></lable>
                                <a class="p-fromLogin-signup" href="SignUp"><b>Sign Up</b></a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

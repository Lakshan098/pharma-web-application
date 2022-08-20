import './SignUp.css';
import loginlogo from '../../Assets/Brand/login.png';
import logo from '../../Assets/Brand/Logo1.png';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { AiTwotoneMail } from 'react-icons/ai';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { Link, Routes, Route, useNavigate } from 'react-router-dom';




{/* <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.2/css/all.min.css"></link> */}




const validEmailRegex = RegExp(
    /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
);
const validateForm = errors => {
    let valid = true;
    Object.values(errors).forEach(val => val.length > 0 && (valid = false));
    return valid;
};

export default class SignUp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: null,
            password: null,
            PharmacyId: null,
            errors: {
                email: '',
                password: '',
                PharmacyId: '',
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

            case 'PharmacyId':
                errors.PharmacyId =
                    value.length < 4
                        ? 'Invalid Id'
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
                <div className="wrapper2">

                </div>
                <div className='wrapper'>
                    <div className="co-main">
                        <img src={logo} className='brandname-signup' width={175} height={70} />
                        <img src={loginlogo} className='signup-image-signup' width={500} height={300} />
                    </div>
                    <div className='form-wrapper'>
                        <h2 className='Sign-Up-topic'><b>Sign Up</b></h2>

                        <form id="login-form" action="pharmacyHome" method="GET" className="p-sinup-form" onSubmit={this.handleSubmit} noValidate>

                        <div className='login-email'>
                                <label  className="login-lable" htmlFor="email">Pharmacy Name:</label>

                                <input placeholder='Pharmacy Name' className="signup-input" type='text' name='text' />
                                
                            </div>

                            <div className='p-login-location' >
                                <label className="login-lable" >Pharmacy Registration No</label>

                                <input placeholder="Pharmacy Registration No" className="signup-input" type='text'  />
                                
                            </div>
                            
                            
                            <div className='login-email'>
                                <label  className="login-lable" htmlFor="email">Email:</label>

                                <input placeholder='email' className="signup-input" type='email' name='email' onChange={this.handleChange} noValidate />
                                {errors.email.length > 0 &&
                                    <span className='error'>{errors.email}</span>}
                            </div>

                            <div className='p-login-location' >
                                <label className="login-lable" >Pharmacy Location</label>

                                <input placeholder="Pharmacy Location" className="signup-input" type='text'  />
                                
                            </div>

                            <div className='p-login-location' >
                                <label className="login-lable" >Pharmacy Account No</label>

                                <input placeholder="Pharmacy Account No" className="signup-input" type='text'  />
                                
                            </div>

                            <div className='p-login-location' >
                                <label className="login-lable" >Pharmacy Address</label>

                                <input placeholder="Pharmacy Address" className="signup-input" type='text'  />
                                
                            </div>
                            

                            <div className='p-login-password' >
                                <label className="login-lable" htmlFor="password">Enter the new password</label>

                                <input placeholder=" password" className="signup-input" type='password' name='password' onChange={this.handleChange} noValidate  />
                                {errors.password.length > 0 &&
                                    <span className='error'>{errors.password}</span>}
                            </div>


                            <div className='submit-btn'>
                                <button type="submit" variant="contained" className='p-signup-btn' >Sign Up</button>
                            </div>

                            <div class="p-signup">
                                <lable><b>Already have an accounte?</b></lable>
                                <a class="p-fromsinup-login" href="/"><b>Login</b></a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

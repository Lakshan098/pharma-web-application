import './Forgetpassword.css';
import React from 'react';
import forgetlogo from '../../Assets/Brand/Forget Password.svg';
import logoIcon from '../../Assets/Brand/Logo1.png';

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
            errors: {
                email: '',
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

            default:
                break;
        }

        this.setState({ errors, [name]: value });
    }

    render() {
        const { errors } = this.state;
        return (
            <div>
                <div class="brandname-div">
                    <img src={logoIcon} className='brandname-forgot' width={110} height={50} />
                </div>
                <div className="forgetpassword-div">

                    <div className='forget-logo'>
                        <img src={forgetlogo} className='#' width={500} height={300} />
                    </div>
                    <div>
                        <h4><b>Forgot Password</b></h4>
                        <p><b>No Worries!<br />Enter your registered email and we<br /> will sent you a reset</b></p>

                        <form action="Verificationpage">
                            <div className='forgot-email'>
                                <label className="forgot-lable" htmlFor="email">Enter your Email</label>

                                <input placeholder='email' className="forgot-input" type='email' name='email' onChange={this.handleChange} noValidate />
                                {errors.email.length > 0 &&
                                    <span className='forgot-error'>{errors.email}</span>}
                            </div>

                            <div className='reset-pswd'>
                                <button type="submit" variant="contained" className='p-reset-btn' >Reset</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }

}
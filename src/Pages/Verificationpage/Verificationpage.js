import './Verificationpage.css';
import React from 'react';
import forgetlogo from '../../Assets/Brand/Forget Password.svg';
import logoIcone from '../../Assets/Brand/Logo1.png';
import msglogo from '../../Assets/Brand/mail-gif.gif';


function Verificationpage() {
    return (
        <div>
            <div class="brandname-div">
                <img src={logoIcone} className='brandname-forgot' width={110} height={50} />
            </div>
            <div className='verification-div'>
                <div className='v-forget-logo'>
                    <img src={forgetlogo} className='#' width={500} height={300} />
                </div>

                <div>
                    <img src={msglogo} className='#' width={400} height={200} />
                    <h2 class="f-main-topic"><b>Check your email</b></h2>
                    <p class="f-main-p"><b>we have sent an email verification to your email</b></p>
                </div>

            </div>
        </div>
    );
}
export default Verificationpage;
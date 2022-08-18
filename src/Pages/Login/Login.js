//import Footer from '../../Components/Footer/Footer';
//import Navbar from '../../Components/Navbar/Pharmacist/Navbar';
import './Login.css';
import loginlogo from '../../Assets/Brand/Loginlogo.jpeg';
import logo from '../../Assets/Brand/Logo1.png';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { AiTwotoneMail } from 'react-icons/ai';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons'



<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.2/css/all.min.css"></link>




function Login() {
    return (
        <card>
            <div className="main-div">

                <div className="co-main">
                    <img src={logo} className='logo-image' width={175} height={70} />
                    <img src={loginlogo} className='login-image' width={500} height={300} />
                </div>

                <div className="login-text">
                    <h3>Login</h3>
                </div>







                <form>
                    <Container fluid="md">
                        <Row className="login-text">
                            <Col>
                            <i class="bi bi-envelope-fill"></i>
                                <input type="Email" className="Email" placeholder='&#xf0e0;  Email' />
                            </Col>

                        </Row>

                        <Row className="login-text">
                            <Col>
                                <input type="Password" className="password" placeholder='&#xf084; Password' />
                            </Col>

                        </Row>
                    </Container>


                    <div className="forgot-password">
                        <span><h5><a href="#" class="forget-password">Forgot password?</a></h5></span>
                    </div>

                    <div>
                        <button className="login-btn">Login</button>
                    </div>

                    <div class="sin-up-btn">
                        <span >Don't have an account?<a class="psw" href="#">Sign in</a></span>
                    </div>
                </form>




            </div>
        </card>
    );
}

export default Login;
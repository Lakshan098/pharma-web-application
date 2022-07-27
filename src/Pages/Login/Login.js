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


                <Container fluid="md">
                    <Row className="login-text">
                        <Col>

                            <input type="Email" className="Email" placeholder='Email' />
                        </Col>

                    </Row>

                    <Row className="login-text">
                        <Col>
                            <input type="Password" className="password" placeholder='Password' />
                        </Col>

                    </Row>
                </Container>

                <div className="forgot-password">
                    <h5>Forgot password?</h5>
                </div>

                <div>
                    <button className="login-btn">Login</button>
                </div>

                <Container className="sin-up-btn" fluid="md">
                    <Col><h5>Don't have an account ?Sin-UP</h5></Col>
                    
                    </Container>
                    
                



            </div>
        </card>
    );
}

export default Login;
import Navbar from '../../Components/Navbar/Admin/Navbar';
import Footer from '../../Components/Footer/Footer';

function Login(){
    return(
        <div>
            <Navbar />
            <div className='login-container'>
                <h1>This is login page. You first redirect here</h1>
            </div>
            <Footer />
        </div>
    )
}

export default Login;
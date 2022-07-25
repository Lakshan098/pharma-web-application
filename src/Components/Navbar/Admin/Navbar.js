import './Navbar.css';
import '../../../index.css';
import logo from '../../../Assets/Brand/Logo1.png';
import { FaUserCircle, FaAngleDown } from 'react-icons/fa';

function Navbar() {
    return (
      <div className="container">

            <img src={logo} alt="Logo" className='logo' width={175} height={70} />

            <a href="#">Home</a>
            <a href="#">Pharmacies</a>
            <a href="#">Delivery Agents</a>
            <a href="#">Statistics</a>
            <a href="#">Complaints</a>

        <div className="profile-container">
            <label>A.W.S.Rashmika<br/>Admin User</label>
            <FaUserCircle className='user'/>
            <FaAngleDown className='downarrow' />
        </div>
      </div>
    );
  }

  export default Navbar;
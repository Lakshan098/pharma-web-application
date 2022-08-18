import './Navbar.css';
import '../../../index.css';
import logo from '../../../Assets/Brand/Logo1.png';
import { FaUserCircle, FaAngleDown } from 'react-icons/fa';

function Navbar() {
    return (
      <div className="a-container">

            <img src={logo} alt="Logo" className='logo' width={175} height={70} />

            <a class="bar-link"  href="#">Home</a>
            <a class="bar-link" href="pharmacies">Pharmacies</a>
            <a class="bar-link" href="deliveryagent">Delivery Agents</a>
            <a class="bar-link" href="#">Statistics</a>
            <a class="bar-link" href="#">Complaints</a>

        <div className="profile-container">
            <label class="lable-tag">A.W.S.Rashmika<br/>Admin User</label>
            <FaUserCircle className='user'/>
            <FaAngleDown className='downarrow' />
        </div>
      </div>
    );
  }

  export default Navbar;
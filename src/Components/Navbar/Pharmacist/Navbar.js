import './Navbar.css';
import logo from '../../../Assets/Brand/Logo1.png';
import { FaUserCircle, FaAngleDown } from 'react-icons/fa';

function Navbar() {
    return (
      <div className="container">

            <img src={logo} alt="Logo" className='logo' width={175} height={70} />

            <a href="#">Home</a>
            <a href="#">Orders</a>
            <a href="#">Notifications</a>
            <a href="#">Inventory</a>
            <a href="#">Statistics</a>

        <div className="profile-container">
            <label>PharmacyX</label>
            <FaUserCircle className='user'/>
            <FaAngleDown className='downarrow' />
        </div>
      </div>
    );
  }

  export default Navbar;
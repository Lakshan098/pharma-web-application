import './PharmacyProfile.css';
import Footer from '../../Components/Footer/Footer';
import Navbar from '../../Components/Navbar/Pharmacist/Navbar';
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
import { AiTwotoneMail } from 'react-icons/ai';
import { FaUserCircle } from 'react-icons/fa';
import { FaPhoneAlt } from 'react-icons/fa';
import { MdLocationOn } from 'react-icons/md';
import { RiPencilFill } from 'react-icons/ri';

function Card() {
  return (

    <div className="dashboard">
      <Navbar />
      <section class="home-section">
        <div class="home-content">

          <div class="three">
            <div></div>
            <div><h1><p>Pharmacy</p></h1></div>
            <div className='details'><b>DETAILS</b></div>
            <div className='line'><hr /></div>
            {/* <table>

              <tr>
                <td>NAME <br /> <FaUserCircle /></td>
                <td>Pharmacy</td>
                <td><RiPencilFill /></td>
              </tr>
              <tr>
                <td>User Name <br /> <FaUserCircle /></td>
                <td>Francisco Chang</td>
                <td><RiPencilFill /></td>
              </tr>
              <tr>
                <td>Contact Number <br /> <FaPhoneAlt /></td>
                <td>Francisco Chang</td>
                <td><RiPencilFill /></td>
              </tr>
              <tr>
                <td>Email <br /><AiTwotoneMail /></td>
                <td>dsahan548@gmail.com</td>
                <td><RiPencilFill /></td>
              </tr>
              <tr>
                <td>Location <br /><MdLocationOn /></td>
                <td>Francisco Chang</td>
                <td><RiPencilFill /></td>
              </tr>
            </table> */}
            
            <form>
              <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
              <label for="vehicle1"> I have a bike</label><br />
              <input type="checkbox" id="vehicle2" name="vehicle2" value="Car" />
              <label for="vehicle2"> I have a car</label><br />
              <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat" />
              <label for="vehicle3"> I have a boat</label>
            </form>

          </div>

          

        </div>


      </section>
      <Footer />
    </div>

  );
}

export default Card;


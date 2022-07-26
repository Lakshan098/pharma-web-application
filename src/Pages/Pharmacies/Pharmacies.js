import Navbar from '../../Components/Navbar/Admin/Navbar';
import Footer from '../../Components/Footer/Footer';
import SearchBar from '../../Components/SearchBar/Search';


function Pharmacies(){
    return (
        <div>
          <Navbar/>
          <SearchBar/>
          <Footer/>
        </div>
        
      );
}

export default Pharmacies;
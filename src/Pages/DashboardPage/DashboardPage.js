import Navbar from "../../Components/Navbar/Admin/Navbar";
import Footer from "../../Components/Footer/Footer";
import Dashboard from "../../Components/Dashboard/Dashboard";

function DashboardPage(){

    return (
        <div>
            <Navbar/>
            <Dashboard/>
            <Footer/>
        </div>
        
      );
}

export default DashboardPage;
import Navbar from "../../Components/Navbar/Admin/Navbar";
import React from "react"
import Footer from "../../Components/Footer/Footer";
import Statistics from "../../Components/Statistics/Statistics";


function StatisticsPage(){

    return (
        <div>
            <Navbar/>
            <Statistics/>
            <Footer/>
        </div>
        
      );
}

export default StatisticsPage;


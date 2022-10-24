import ReactDOM from "react-dom/client";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Login from "./Pages/Login/Login";
import Login1 from "./Pages/Login1/Login1";
import SignUp from "./Pages/SignUp/SignUp";
import Pharmacies from './Pages/Pharmacies/Pharmacies';
import PharmacyHome from "./Pages/PharmacyHome/PharmacyHome";
import Card from './Components/card/card';
import PharmacyOrder from "./Pages/PharmacyOrder/PharmacyOrder";
import Forgetpassword from "./Pages/Forgetpassword/Forgetpassword";
import Verificationpage from "./Pages/Verificationpage/Verificationpage";
import CompletedViewDetails from "./Pages/CompletedViewDetails/CompletedViewDetails";
import PendingOrder from "./Components/PendingOrder/PendingOrder";
import CompletedOrder from "./Components/CompletedOrder/CompletedOrder";
import OngoingOrder from "./Components/OngoingOrder/OngoingOrder";
import PendingViewDetails from "./Pages/PendingViewDetails/PendingViewDetails";
import OngoingViewDetails from "./Pages/OngoingViewDetails/OngoingViewDetails";
import DeliveryAgent from './Pages/DeliveryAgent/DeliveryAgent';
import Dashboard from './Components/Dashboard/Dashboard';
import DashboardPage from "./Pages/DashboardPage/DashboardPage";
import { Rating } from 'react-simple-star-rating';
import Statistics from './Components/Statistics/Statistics';
import StatisticsPage from "./Pages/StatisticsPage/StatisticsPage";
import Adminprofile from './Pages/Adminprofile/Adminprofile';
import Agentprofile from './Pages/Agentprofile/Agentprofile';
import Pharmacistprofile from "./Pages/Pharmacistprofile/Pharmacistprofile";
import Complaints from "./Pages/Complaints/Complaints";
import Unionchemistprofile from "./Pages/Unionchemistprofile/Unionchemistprofile";
import Signup1 from './Pages/Signup1/Signup1';
import OngoingViewDetailsNoDelivary from './Pages/OngoingViewDetailsNoDelivary/OngoingViewDetailsNoDelivary';
import OngoingViewDetailsSetDelivary from './Pages/OngoingViewDetailsSetDelivary/OngoingViewDetailsSetDelivary';
import DeliveryOrder from './Components/DeliveryOrder/DeliveryOrder';
import Confirmotp from "./Pages/Confirmotp/Confirmotp";
import Popup from "./Components/Popup/Popup";
import Popup1 from "./Components/Popup1/Popup1";
import Popup2 from "./Components/Popup2/Popup2";
import Popup3 from "./Components/Popup3/Popup3";
import Popup4 from "./Components/Popup4/Popup4";
import Popup5 from "./Components/Popup5/Popup5";
import Popup6 from "./Components/Popup6/Popup6";
import Search from "./Components/Search/Search";
import DeletePopup from "./Components/DeletePopup/DeletePopup";
import PharmacyStatistics from "./Pages/PharmacyStatistics/PharmacyStatistics";
import PharmacyInventory from "./Pages/PharmacyInventory/PharmacyInventory";
import DrugDetails from "./Pages/DrugDetails/DrugDetails";
import Pharmacistprofile2 from "./Pages/Pharmacistprofile2/Pharmacistprofile2";
import CompletedViewDetailsNoDelivery from "./Pages/CompletedViewDetailsNoDelivery/CompletedViewDetailsNoDelivery";


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Login1/>} />
          <Route path="pharmacies" element={<Pharmacies />} />
          <Route path="deliveryagent" element={<DeliveryAgent />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="PharmacyHome" element={<PharmacyHome />} />
          <Route path="Card" element={<Card />} />
          <Route path="dashboardpage" element={<DashboardPage />} />
          <Route path="SignUp" element={<SignUp />} />
          <Route path="PharmacyOrder" element={<PharmacyOrder />} />
          <Route path="Forgetpassword" element={<Forgetpassword />} />
          <Route path="Verificationpage" element={<Verificationpage />} />
          <Route path="CompletedViewDetails" element={<CompletedViewDetails />} />
          <Route path="rating" element={<Rating />} />
          <Route path="statistics" element={<Statistics />} />
          <Route path="statisticspage" element={<StatisticsPage />} />
          <Route path="adminprofile" element={<Adminprofile />} />
          <Route path="agentprofile" element={<Agentprofile />} />
          <Route path="pharmacistprofile" element={<Pharmacistprofile />} />
          <Route path="complaints" element={<Complaints />} />
          <Route path="unionchemistprofile" element={<Unionchemistprofile />} />
          <Route path="PendingOrder" element={<PendingOrder />} />
          <Route path="CompletedOrder" element={<CompletedOrder />} />
          <Route path="OngoingOrder" element={<OngoingOrder />} />
          <Route path="PendingViewDetails" element={<PendingViewDetails />} />
          <Route path="OngoingViewDetails" element={<OngoingViewDetails />} />
          <Route path="login1" element={<Login1 />} />
          <Route path="signup1" element={<Signup1 />} />
          <Route path="OngoingViewDetailsNoDelivary" element={<OngoingViewDetailsNoDelivary />} />
          <Route path="OngoingViewDetailsSetDelivary" element={<OngoingViewDetailsSetDelivary />} />
          <Route path="DeliveryOrder" element={<DeliveryOrder />} />
          <Route path="confirmotp" element={<Confirmotp />} />
          <Route path="popup" element={<Popup />} />
          <Route path="popup1" element={<Popup1 />} />
          <Route path="popup2" element={<Popup2 />} />
          <Route path="popup3" element={<Popup3 />} />
          <Route path="popup4" element={<Popup4 />} />
          <Route path="popup5" element={<Popup5 />} />
          <Route path="popup6" element={<Popup6 />} />
          <Route path="search" element={<Search />} />
          <Route path="DeletePopup" element={<DeletePopup />} />
          <Route path="Pharmacistprofile2" element={<Pharmacistprofile2 />} />
          <Route path="CompletedViewDetailsNoDelivery" element={<CompletedViewDetailsNoDelivery />} />
          {/* <Route path="basicmenu" element={<BasicMenu />} /> */}
          

          <Route path="pharmacystatistics" element={<PharmacyStatistics />} />
          <Route path="pharmacyinventory" element={<PharmacyInventory />} />
          <Route path="drugdetails" element={<DrugDetails />} />
          
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
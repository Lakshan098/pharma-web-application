import ReactDOM from "react-dom/client";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login/Login";
import Login1 from "./Pages/Login1/Login1";
import SignUp from "./Pages/SignUp/SignUp";
import Pharmacies from './Pages/Pharmacies/Pharmacies';
import SearchBar from "./Components/SearchBar/Search";
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


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Login1/>} />
          <Route path="pharmacies" element={<Pharmacies />} />
          <Route path="search" element={<SearchBar />} />

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
          
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
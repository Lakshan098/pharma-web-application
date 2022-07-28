// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login/Login";
import Pharmacies from './Pages/Pharmacies/Pharmacies';
import SearchBar from "./Components/SearchBar/Search";
import PharmacyProfile from "./Pages/PharmacyProfile/PharmacyProfile";

import DeliveryAgent from './Pages/DeliveryAgent/DeliveryAgent';
import Dashboard from './Components/Dashboard/Dashboard';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Login />} />
          <Route path="pharmacies" element={<Pharmacies />} />
          <Route path="search" element={<SearchBar />} />
          <Route path="PharmacyProfile" element={<PharmacyProfile />} />
          <Route path="deliveryagent" element={<DeliveryAgent />} />
          <Route path="dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
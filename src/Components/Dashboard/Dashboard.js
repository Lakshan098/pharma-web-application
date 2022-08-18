import "./Dashboard.css";
import ProgressBar from "@ramonak/react-progress-bar";
import React, { useState } from 'react';
import { Rating } from 'react-simple-star-rating';
import logo from '../../Assets/Brand/wellness.png';

import {
  ResponsiveContainer,
  ComposedChart,
  Line,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  PieChart,
  Pie,
} from "recharts";

const data2 = [
  { name: "Ongoing", value: 40, fill: "#0a5279" },
  { name: "New", value: 23, fill: "#0000FF" },
  { name: "Finished", value: 42, fill: "#0047AB" },
  { name: "Cancelled", value: 18, fill: "#ffcccb" },
];


const data = [
  {
    name: "Jan",
    Orders: 26,
  },
  {
    name: "Feb",
    Orders: 34,
  },
  {
    name: "Mar",
    Orders: 41,
  },
  {
    name: "Apr",
    Orders: 48,
  },
  {
    name: "May",
    Orders: 67,
  },
  {
    name: "Jun",
    Orders: 42,
  },
  {
    name: "Jul",
    Orders: 51,
  },
  {
    name: "Aug",
    Orders: 37,
  },
  {
    name: "Sep",
    Orders: 43,
  },
  {
    name: "Oct",
    Orders: 28,
  },
  {
    name: "Nov",
    Orders: 40,
  },
  {
    name: "Dec",
    Orders: 66,
  },
];

function Dashboard() {
  return (
    <div className="dashboard">
      <section class="home-section">
        <div class="home-content">
          <div className="one">
            <div>
              <p class="icon">&#xf0c0; </p>
            </div>
            <div>
              <p class="value">Customers</p>
              <p class="name">2548 Customers</p>
            </div>
          </div>

          <div class="two">
            <div>
              <p class="icon">&#xf7f2; </p>
            </div>
            <div>
              <p class="value">Pharmacies</p>
              <p class="name">589 Pharmacies</p>
            </div>
          </div>

          <div class="three">
            <div>
              <p class="icon">&#xf84a; </p>
            </div>
            <div>
              <p class="value">Delivery Agents</p>
              <p class="name">365 Delivery Agents</p>
            </div>
          </div>
        </div>

        <div className="home-content2">
          <div className="sales">
            <div className="sales-header">
              <h3>Monthly Sales</h3>
            </div>

            <div style={{ width: "100%", height: 300 }}>
              <ResponsiveContainer>
                <ComposedChart
                  width={500}
                  height={400}
                  data={data}
                  margin={{
                    top: 30,
                    right: 40,
                    bottom: 10,
                    left: 20,
                  }}
                >
                 <CartesianGrid stroke="#DCDCDC" strokeDasharray="5 5"/>
                  <XAxis dataKey="name" scale="Month" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Area
                    type="monotone"
                    dataKey="Orders"
                    fill="#ffffff"
                    stroke="#0a5279"
                  />
                  {/* <Bar dataKey="pv" barSize={20} fill="#413ea0" /> */}
                  {/* <Line type="monotone" dataKey="orders" stroke="#ff7300" /> */}
                </ComposedChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="orders">
            <div className="order-header">
              <h3>Orders</h3>
            </div>
            <div style={{ width: "90%", height: 300 }}>
              <ResponsiveContainer>
                <PieChart width={400} height={400}>
                  <Pie
                    dataKey="value"
                    startAngle={360}
                    
                    endAngle={0}
                    data={data2}
                    cx={180}
                    cy={150}
                    outerRadius={110}
                    fill="#8884d8"
                    label
                  />
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        <div class="home-content3">
          <div className="best-da">
            <div className="best-da-header">
              <h3>Best Delivery Agents</h3>
            </div>
            <div className="agent-details">
                <div className="agent-name1">
                    <h5>G.L.U.Maduranga</h5>
                </div>
                <div className="p-bar">
                    <ProgressBar completed={91} maxCompleted={100} bgColor="#62c1e0" baseBgColor="#d6ffff"/>
                </div>
            

            
                <div className="agent-name1">
                    <h5>N.S.Wimalaweera</h5>
                </div>
                <div className="p-bar">
                    <ProgressBar completed={84} maxCompleted={100} bgColor="#62c1e0" baseBgColor="#d6ffff"/>
                </div>
            

            
                <div className="agent-name1">
                    <h5>M.S.Dewanarayana</h5>
                </div>
                <div className="p-bar">
                    <ProgressBar completed={75} maxCompleted={100} bgColor="#62c1e0" baseBgColor="#d6ffff"/>
                </div>
            

            
                <div className="agent-name1">
                    <h5>K.G.L.Mihiranga</h5>
                </div>
                <div className="p-bar">
                    <ProgressBar completed={71} maxCompleted={100} bgColor="#62c1e0" baseBgColor="#d6ffff"/>
                </div>
            

            
                <div className="agent-name1">
                    <h5>K.K.S.Dilshan</h5>
                </div>
                <div className="p-bar">
                    <ProgressBar completed={60} maxCompleted={100} bgColor="#62c1e0" baseBgColor="#d6ffff"/>
                </div>
            

            
                <div className="agent-name1">
                    <h5>H.K.P.S.Perera</h5>
                </div>
                <div className="p-bar">
                    <ProgressBar completed={45} maxCompleted={100} bgColor="#62c1e0" baseBgColor="#d6ffff"/>
                </div>
            </div>
            </div>
          

          <div class="best-p">
            <div className="best-p-header">
              <h3>Best Pharmacies</h3>
            </div>
            <div>
              <div className="p-rating-1">
                  <div className="p-rating-co">
                    <img src={logo} alt="Logo" className='logo' width={100} height={50} />
                  </div>
                  <div className="p-rating-co">
                    <h5>Central Pharmacy</h5>
                  </div>
                  <div className="p-rating-co">
                    <Rating 
                      readonly="true"
                      initialValue={5}
                      size="25"
                    />
                  </div>
              </div>
              <hr
                style={{
                  color: 'black',
                  background: 'black',
                  width: '82%',
                  marginLeft: '50px',
                }}
              />
            </div>

            <div>
              <div className="p-rating">
                  <div className="p-rating-co">
                    <img src={logo} alt="Logo" className='logo' width={100} height={50} />
                  </div>
                  <div className="p-rating-co">
                    <h5>Ragama Pharmacy</h5>
                  </div>
                  <div className="p-rating-co">
                    <Rating 
                      readonly="true"
                      initialValue={4}
                      size="25"
                    />
                  </div>
              </div>
              <hr
                style={{
                  color: 'black',
                  background: 'black',
                  width: '82%',
                  marginLeft: '50px',
                }}
              />
            </div>

            <div>
              <div className="p-rating">
                  <div className="p-rating-co">
                    <img src={logo} alt="Logo" className='logo' width={100} height={50} />
                  </div>
                  <div className="p-rating-co">
                    <h5>HealthCare Pharmacy</h5>
                  </div>
                  <div className="p-rating-co">
                    <Rating 
                      readonly="true"
                      initialValue={4}
                      size="25"
                    />
                  </div>
              </div>
              <hr
                style={{
                  color: 'black',
                  background: 'black',
                  width: '82%',
                  marginLeft: '50px',
                }}
              />
            </div>

            <div>
              <div className="p-rating">
                  <div className="p-rating-co">
                    <img src={logo} alt="Logo" className='logo' width={100} height={50} />
                  </div>
                  <div className="p-rating-co">
                    <h5>Union Pharmacy</h5>
                  </div>
                  <div className="p-rating-co">
                    <Rating 
                      readonly="true"
                      initialValue={3}
                      size="25"
                    />
                  </div>
              </div>
              <hr
                style={{
                  color: 'black',
                  background: 'black',
                  width: '82%',
                  marginLeft: '50px',
                }}
              />
            </div>

            <div>
              <div className="p-rating">
                  <div className="p-rating-co">
                    <img src={logo} alt="Logo" className='logo' width={100} height={50} />
                  </div>
                  <div className="p-rating-co">
                    <h5>Pharma Pharmacy</h5>
                  </div>
                  <div className="p-rating-co">
                    <Rating 
                      readonly="true"
                      initialValue={3}
                      size="25"
                    />
                  </div>
              </div>
              <hr
                style={{
                  color: 'black',
                  background: 'black',
                  width: '82%',
                  marginLeft: '50px',
                }}
              />
            </div>

            <div>
              <div className="p-rating">
                  <div className="p-rating-co">
                    <img src={logo} alt="Logo" className='logo' width={100} height={50} />
                  </div>
                  <div className="p-rating-co">
                    <h5>Sethma Pharmacy</h5>
                  </div>
                  <div className="p-rating-co">
                    <Rating 
                      readonly="true"
                      initialValue={2}
                      size="25"
                    />
                  </div>
              </div>
              <hr
                style={{
                  color: 'black',
                  background: 'black',
                  width: '82%',
                  marginLeft: '50px',
                }}
              />
            </div>
            
          </div>
        </div>
      </section>
    </div>
  );
}

export default Dashboard;

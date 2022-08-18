import "./Statistics.css";
import ProgressBar from "@ramonak/react-progress-bar";
import React, { useState } from "react";
import { Rating } from "react-simple-star-rating";
import logo from "../../Assets/Brand/wellness.png";
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

const data2 = [
  { name: "Ongoing", value: 40, fill: "#0a5279" },
  { name: "New", value: 23, fill: "#0000FF" },
  { name: "Finished", value: 42, fill: "#0047AB" },
  { name: "Cancelled", value: 18, fill: "#ffcccb" },
];

function Statistics() {
  return (
    <div>
      <section class="stat-home-section">
        <div class="stat-home-content">
          <div className="stat-col">
            <div className="stat-one">
              <div>
                <p class="stat-value">Application Status</p>
              </div>
            </div>

            <div class="stat-two">
              <p class="stat-value">Total Income</p>
            </div>
          </div>
          <div className="stat-col">
            <div className="stat-three">
              <p class="stat-value">Total Sales</p>
            </div>

            <div class="stat-four"></div>
          </div>

          <div className="stat-monthly-sales">
            <p class="stat-value">Monthly Sales</p>
            <div style={{ width: "550px", height: 300 }}>
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
                  <CartesianGrid stroke="#DCDCDC" strokeDasharray="5 5" />
                  <XAxis dataKey="name" scale="Month" />
                  <YAxis
                    label={{
                      value: "No.Of Orders",
                      angle: -90,
                      position: "insideBottomLeft",
                    }}
                  />
                  <Tooltip />
                  <Legend />
                  <Area
                    type="monotone"
                    dataKey="Orders"
                    fill="#ffffff"
                    stroke="#0a5279"
                  />
                </ComposedChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        <div class="stat-home-content3">
          <div className="stat-product-sales">
            <div className="stat-product-sales-header">
              <h3>Product Sales</h3>
              <div style={{ width: "520px", height: 230 }}>
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
                        <CartesianGrid stroke="#DCDCDC" strokeDasharray="5 5" />
                        <XAxis dataKey="name" scale="Month" />
                        <YAxis
                            label={{
                            value: "No.Of Orders",
                            angle: -90,
                            position: "insideBottomLeft",
                            }}
                        />
                        <Tooltip />
                        <Area
                            type="monotone"
                            dataKey="Orders"
                            fill="#ffffff"
                            stroke="#0a5279"
                        />
                        </ComposedChart>
                    </ResponsiveContainer>
            </div>
            </div>
            
            <div>
              <div className="stat-p-rating-1">
                  <div className="stat-p-rating-co">
                    <h4>Amitriptyline Tablet</h4>
                  </div>
                  <div className="stat-p-rating-co">
                    <h4>589</h4>
                  </div>
              </div>
              <div className="stat-p-rating-1">
                  <div className="stat-p-rating-co">
                    <h4>Peracitamol</h4>
                  </div>
                  <div className="stat-p-rating-co">
                    <h4>532</h4>
                  </div>
              </div>
              <div className="stat-p-rating-1">
                  <div className="stat-p-rating-co">
                    <h4>Piriton</h4>
                  </div>
                  <div className="stat-p-rating-co">
                    <h4>472</h4>
                  </div>
              </div>
              <div className="stat-p-rating-1">
                  <div className="stat-p-rating-co">
                    <h4>Vitamin C</h4>
                  </div>
                  <div className="stat-p-rating-co">
                    <h4>443</h4>
                  </div>
              </div>
              
              <div className="stat-p-rating-1">
                  <div className="stat-p-rating-co">
                    <h4>Amlodipine besylate</h4>
                  </div>
                  <div className="stat-p-rating-co">
                    <h4>429</h4>
                  </div>
              </div>
              <div className="stat-p-rating-1">
                  <div className="stat-p-rating-co">
                    <h4>Loratadine</h4>
                  </div>
                  <div className="stat-p-rating-co">
                    <h4>411</h4>
                  </div>
              </div>
            </div>

          </div>

          <div class="stat-monthly-sales1">
            <div className="stat-product-sales-header">
              <h3>Monthly Sales</h3>
            </div>
            <hr
                style={{
                  color: 'black',
                  background: 'black',
                  width: '82%',
                  marginLeft: '50px',
                  marginTop: '80px',
                }}
              />
            <div>
              <div className="stat-monthly-p-rating-1">
                  <div className="stat-monthly-p-rating-co">
                    <img src={logo} alt="Logo" className='logo' width={100} height={50} />
                  </div>
                  <div className="stat-monthly-p-rating-co">
                    <h5>Central Pharmacy</h5>
                  </div>
                  <div className="stat-monthly-p-rating-co">
                    <h5>789</h5>
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
              <div className="stat-monthly-p-rating-1">
                  <div className="stat-monthly-p-rating-co">
                    <img src={logo} alt="Logo" className='logo' width={100} height={50} />
                  </div>
                  <div className="stat-monthly-p-rating-co">
                    <h5>Union Chemist</h5>
                  </div>
                  <div className="stat-monthly-p-rating-co">
                    <h5>582</h5>
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
              <div className="stat-monthly-p-rating-1">
                  <div className="stat-monthly-p-rating-co">
                    <img src={logo} alt="Logo" className='logo' width={100} height={50} />
                  </div>
                  <div className="stat-monthly-p-rating-co">
                    <h5>N.S.Wimalaweera</h5>
                  </div>
                  <div className="stat-monthly-p-rating-co">
                    <h5>986</h5>
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
              <div className="stat-monthly-p-rating-1">
                  <div className="stat-monthly-p-rating-co">
                    <img src={logo} alt="Logo" className='logo' width={100} height={50} />
                  </div>
                  <div className="stat-monthly-p-rating-co">
                    <h5>K.K.S.Dilshan</h5>
                  </div>
                  <div className="stat-monthly-p-rating-co">
                    <h5>789</h5>
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
              <div className="stat-monthly-p-rating-1">
                  <div className="stat-monthly-p-rating-co">
                    <img src={logo} alt="Logo" className='logo' width={100} height={50} />
                  </div>
                  <div className="stat-monthly-p-rating-co">
                    <h5>M.S.Dewanarayana</h5>
                  </div>
                  <div className="stat-monthly-p-rating-co">
                    <h5>674</h5>
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
              <div className="stat-monthly-p-rating-1">
                  <div className="stat-monthly-p-rating-co">
                    <img src={logo} alt="Logo" className='logo' width={100} height={50} />
                  </div>
                  <div className="stat-monthly-p-rating-co">
                    <h5>Ragama Pharmacy</h5>
                  </div>
                  <div className="stat-monthly-p-rating-co">
                    <h5>345</h5>
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

export default Statistics;

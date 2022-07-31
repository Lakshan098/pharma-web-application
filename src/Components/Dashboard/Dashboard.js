import "./Dashboard.css";

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
                  {/* <CartesianGrid stroke="#f5f5f5" /> */}
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
        </div>
      </section>
    </div>
  );
}

export default Dashboard;

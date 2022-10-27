import "./Dashboard.css";
import ProgressBar from "@ramonak/react-progress-bar";
import React, { useState } from "react";
import { Rating } from "react-simple-star-rating";
import logo from "../../Assets/Brand/wellness.png";
import { FaHospitalAlt, FaBiking } from "react-icons/fa";
import Axios from "../../api/axios";
import { useEffect } from "react";
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
import { CommentsDisabled } from "@mui/icons-material";

const data2 = [
  { name: "Ongoing", value: 40, fill: "#0a5279" },
  { name: "New", value: 23, fill: "#0000FF" },
  { name: "Finished", value: 42, fill: "#0047AB" },
  { name: "Cancelled", value: 18, fill: "red" },
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

  var pie_data=[{
    name:"delivering",
    count:0,
    // fill: "#0a5279"
  },
  {
    name:"ongoing",
    count:0,
    
    // fill: "red"
  },
  {
    name:"completed",
    count:0,
    // fill: "#0047AB"
  },
  {
    name:"delivery",
    count:0,
    // fill: "#0000FF"

  },
  {
    name:"pending",
    count:0
    
  }
]
  var monthly_orders = [{
    name: "January",
    Orders: 0,
  },
  {
    name: "February",
    Orders: 0,
  },
  {
    name: "March",
    Orders: 0,
  },
  {
    name: "April",
    Orders: 0,
  },
  {
    name: "May",
    Orders: 0,
  },
  {
    name: "June",
    Orders: 0,
  },
  {
    name: "July",
    Orders: 0,
  },
  {
    name: "Augest",
    Orders: 0,
  },
  {
    name: "September",
    Orders: 0,
  },
  {
    name: "October",
    Orders: 0,
  },
  {
    name: "November",
    Orders: 0,
  },
  {
    name: "December",
    Orders: 0,
  }
];
  const [monthlyOrders, setMonthlyOrders] = useState([]);

  const best_agents = [];
  const [bestAgents, setBestAgents] = useState([]);

  const best_pharmacies = [];
  const [bestPharmacies, setBestPharmacies] = useState([]);

  var [dataList, setDataList] = React.useState([]);
  var customerSum;
  var pharmacySum;
  var agentSum;
  const [customercount, setCustomerCount] = useState();
  const [pharmacyCount, setPharmacyCount] = useState();
  const [agentCount, setAgentCount] = useState();
  const [pieData,setPieData]=useState([]);

  var configCustomerCount = {
    method: "post",

    url: "http://localhost:3000/Admin/GetCustomerCount",

    headers: {},
  };

  var configPharmacyCount = {
    method: "post",

    url: "http://localhost:3000/admin/GetPharmacyCount",

    headers: {},
  };

  var configAgentCount = {
    method: "post",

    url: "http://localhost:3000/admin/GetDeliveryAgentCount",

    headers: {},
  };

  var configBestAgent = {
    method: "post",

    url: "http://localhost:3000/Admin/GetBestAgents",

    headers: {},
  };

  var configBestPharmacy = {
    method: "post",

    url: "http://localhost:3000/admin/GetBestPharmacies",

    headers: {},
  };

  var configGraphData = {
    method: "post",

    url: "http://localhost:3000/Admin/GetGraphData",

    headers: {},
  };

  var configPieChart = {
    method: 'post',
    url: 'http://localhost:3000/admin/GetMonthlyOrderCount',
    headers: { }
  };
  

  useEffect(() => {
    Axios(configCustomerCount).then((response) => {
      customerSum = response.data[0].count;
      setCustomerCount(customerSum);
    });

    Axios(configPharmacyCount).then((response) => {
      // console.log("Pharmacies");
      pharmacySum = response.data[0].count;
      setPharmacyCount(pharmacySum);
    });

    Axios(configAgentCount).then((response) => {
      // console.log("Agents");
      agentSum = response.data[0].count;
      setAgentCount(agentSum);
    });

    Axios(configBestAgent).then((response) => {
      response.data.map((item) => {
        best_agents.push({
          name: item.username,
          rate: item.rating,
        });
      });
      setBestAgents(...[best_agents]);
      console.log(bestAgents);
    });

    Axios(configBestPharmacy).then((response) => {
      response.data.map((item) => {
        best_pharmacies.push({
          name: item.username,
          rate: item.rating,
          image: item.profile_pic,
        });
      });
      setBestPharmacies(...[best_pharmacies]);
      console.log(bestPharmacies);
    });

    Axios(configGraphData).then((response) => {
      response.data.map((item) => {
        monthly_orders.forEach((element,index) => {
          if(element.name==item.Month){
            monthly_orders[index].Orders=item.Count
            // monthly_orders.push({
            //   name: item.Month,
            //   Orders: item.Count,
            // });
          }
        });
        
      });

      setMonthlyOrders(...[monthly_orders]);
      console.log(monthly_orders);
    });

    Axios(configPieChart).then((response) => {
      response.data.map((item) => {
        pie_data.forEach((element,index) => {
          if(element.name==item.status){
            pie_data[index].count+=1;
            // monthly_orders.push({
            //   name: item.Month,
            //   Orders: item.Count,
            // });
          }
        });
        
      });

      setPieData(...[pie_data]);
      console.log(pieData);
    })


.catch(function (error) {
  console.log(error);
});

    
    
  }, []);

  const renderItems = bestAgents.map((object) => (
    <div>
      <div className="agent-name1">
        <h5>{object.name}</h5>
      </div>
      <div className="p-bar">
        <ProgressBar
          completed={(object.rate / 5) * 100}
          maxCompleted={100}
          bgColor="#62c1e0"
          baseBgColor="#d6ffff"
        />
      </div>
    </div>
  ));

  const renderItems1 = bestPharmacies.map((object) => (
    <div>
      <div className="p-rating">
        <div className="p-rating-co">
          <img src={object.image} alt="Logo" className="logo" width={100} height={50} />
        </div>
        <div className="p-rating-co">
          <h5>{object.name}</h5>
        </div>
        <div className="p-rating-co">
          <Rating readonly="true" initialValue={object.rate} size="25" />
        </div>
      </div>
      <hr
        style={{
          color: "black",
          background: "black",
          width: "82%",
          marginLeft: "50px",
        }}
      />
    </div>
  ));

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
              <p class="name">{customercount} Customers</p>
            </div>
          </div>

          <div class="two">
            <div>
              <p class="icon">
                <FaHospitalAlt />
              </p>
            </div>
            <div>
              <p class="value">Pharmacies</p>
              <p class="name">{pharmacyCount} Pharmacies</p>
            </div>
          </div>

          <div class="three">
            <div>
              <p class="icon">
                <FaBiking />
              </p>
            </div>
            <div>
              <p class="value">Delivery Agents</p>
              <p class="name">{agentCount} Delivery Agents</p>
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
                  data={monthlyOrders}
                  margin={{
                    top: 30,
                    right: 40,
                    bottom: 10,
                    left: 20,
                  }}
                >
                  <CartesianGrid stroke="#DCDCDC" strokeDasharray="5 5" />
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
              <h3>Current Month Orders</h3>
            </div>
            <div style={{ width: "90%", height: 300 }}>
              <ResponsiveContainer>
                <PieChart width={400} height={400}>
                  <Pie
                    dataKey="count"
                    startAngle={360}
                    endAngle={0}
                    data={pieData}
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

            <div className="agent-details2">{renderItems}</div>
          </div>

          <div class="best-p">
            <div className="best-p-header">
              <h3>Best Pharmacies</h3>
            </div>

            <div className="agent-details2">{renderItems1}</div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Dashboard;

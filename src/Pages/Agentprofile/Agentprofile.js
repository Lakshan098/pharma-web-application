import Navbar from "../../Components/Navbar/Admin/Navbar";
import React from "react";
import { Rating } from "react-simple-star-rating";
import Footer from "../../Components/Footer/Footer";
import Button from "@mui/material/Button";
import logo from "../../Assets/Brand/my.jpg";
import ProgressBar from "@ramonak/react-progress-bar";
import "./Agentprofile.css";
import "../../index.css";
import { useState, useEffect } from 'react';
import Axios from "../../api/axios";
import { useNavigate } from "react-router-dom";
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import {
  FaUserCircle,
  FaMailBulk,
  FaPencilAlt,
  FaPhoneAlt,
  FaUserAlt,
} from "react-icons/fa";
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

function Agentprofile() {
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



  const navigate = useNavigate();

  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");
  console.log(id)

  const complaints = [];
  var [dataList, setDataList] = React.useState([]);
  var [data, setData] = React.useState([]);

  var config = {
    method: 'get',
    url: ('http://localhost:3000/admin/GetDeliveryComplaintDetails/' + id),
    headers: {},
  };
  var configOrder = {
    method: 'post',
    url: 'http://localhost:3000/DeliveryAgent/GetAgentOrders/DEL0000071',
    headers: { }
  };

  useEffect(() => {

    Axios(configOrder).then((response) => {
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



//     Axios(configOrder)
// .then(function (response) {
//   console.log(JSON.stringify(response.data));
// })
// .catch(function (error) {
//   console.log(error);
// });


    Axios(config)
      .then((response) => {
        setData(response.data[0])
        response.data[0].map((object) => {
          console.log(response)
          complaints.push(
            {
              id: id,
              customer_id: object.customer_id,
              dName: object.dName,
              contact_number: object.contact_number,
              email: object.email,
              rating: object.rating,
              reg_No: object.reg_No,
              accused_person: object.accused_person,
              cusName: object.cusName,
              complaint: object.complaint,
              month:object.Month,
              year:object.Year,
              time_stamp:object.time_stamp,
              cusEmail: object.cusEmail,
              panelty: object.panelty
            }
          )
        })
        //console.log(complaints)
        setDataList(complaints);
        setData(complaints);
        console.log(data)
        
      })
      .catch(function (err) {
        console.log(err);
      });
  }, [])

  const alertDelivery = () => {
    const aID = id
    confirmAlert({
      title: 'Confirm to submit',
      message: 'Are you sure to alert the user?',
      buttons: [
        {
          label: 'Yes',
          onClick: () => {
            if (data.panelty == 100) {
              window.location.reload();
            } else {
              var updatePanelty = {
                method: 'post',
                url: ('http://localhost:3000/admin/UpdatePanelty/' + aID)
              };
              Axios(updatePanelty)
                .then((response) => {
                  setData(response.data)
                })
                .catch(function (err) {
                  console.log(err);
                });
              navigate('/complaints')
            }
          }
        },
        {
          label: 'No',
          onClick: () => { }
        }
      ]
    });


  }

  const removeDelivery = () => {
    const aID = data.accused_person

    confirmAlert({
      title: 'Confirm to submit',
      message: 'Are you sure to remove the user?',
      buttons: [
        {
          label: 'Yes',
          onClick: () => {
            var deleteUser = {
              method: 'delete',
              url: (`http://localhost:3000/admin/DeleteUser/${aID}`)
            };
            Axios(deleteUser)
              .then((response) => {
                setData(response.data)
              })
              .catch(function (err) {
                console.log(err);
              });
            navigate('/complaints')
          }
        },
        {
          label: 'No',
          onClick: () => { }
        }
      ]
    });

  }
  console.log(data)

  return (
    <div>
      <Navbar />
      <div>
        <section class="agent-home-section">
          <div class="agent-home-content">
            <div className="agent-card">
              <div className="agent-name">
                <div className="agent-prof-pic">
                  <img
                    src={logo}
                    alt="Logo"
                    className="logo2"
                    width={140}
                    height={140}
                  />
                </div>
                <div className="agent-prof-name">
                  <h1>{data.dName}</h1>
                  <h6>
                    <Rating readonly="true" initialValue={data.rating} size="25" />
                  </h6>
                </div>
              </div>
              <div className="agent-details1">
                <h4 style={{ marginLeft: "50px", color: "#1789AD" }}>
                  Details
                </h4>
                <div
                  style={{
                    borderTop: "2px solid #000 ",
                    width: "80%",
                    marginTop: "10px",
                    marginLeft: "50px",
                  }}
                ></div>
                <div className="agent-detail-list">
                  <div className="agent-detail-one">
                    <div className="agent-detail-obj">
                      <FaUserCircle />
                      <h5>Name</h5>
                    </div>
                    <div className="agent-detail-des">
                      <h5>{data.dName}</h5>
                    </div>
                  </div>
                  <div className="agent-detail-one">
                    <div className="agent-detail-obj">
                      <FaPhoneAlt />
                      <h5>Contact Number</h5>
                    </div>
                    <div className="agent-detail-des">
                      <h5>{data.contact_number}</h5>
                    </div>
                  </div>
                  <div className="agent-detail-one">
                    <div className="agent-detail-obj">
                      <FaMailBulk />
                      <h5>Email</h5>
                    </div>
                    <div className="agent-detail-des">
                      <h5>{data.email}</h5>
                    </div>
                  </div>
                  <div className="agent-detail-one">
                  </div>
                </div>
              </div>
              <div className="agent-password">
                <h4 style={{ marginLeft: "80px", color: "#1789AD" }}>
                  Statistics
                </h4>
                <div
                  style={{
                    borderTop: "2px solid #000 ",
                    width: "80%",
                    marginTop: "10px",
                    marginLeft: "80px",
                  }}
                ></div>
              </div>

              <div class="agent-home-content3">
                <div className="agent-best-da">
                  <div className="agent-best-da-header">
                    <h3>Monthly sales</h3>
                  </div>

                  <div style={{ width: "450px", height: 300 }}>
                    <ResponsiveContainer>
                      <ComposedChart
                        width={400}
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

                <div className="agent-best-da">
                  <div className="agent-best-da-header">
                    <h3>Complaints</h3>
                  </div>
                  <div>
                    <div className="agent-complaint">
                      <div class="vl"></div>
                      <div>
                        <div className="agent-complaint-by">
                          <div className="agent-icon-prof">
                            <FaUserAlt
                              size={30}
                            />
                          </div>
                          <div>
                            <p className="complainant-name">{data.cusName}</p>
                            <p className="complainant-name">{data.cusEmail}</p>
                          </div>
                        </div>
                        <div className="complaint-desc">
                          <h4>{data.complaint}</h4>
                        </div>
                        <div className="complaint-date-time">
                          <div className="complaint-date">
                            {/* {data.time_stamp} */}
                            <h5>2022-10-26 &emsp;&emsp; 1.35pm</h5>
                          </div>
                          {/* <div className="complaint-time">
                                    05:12 pm
                                </div> */}
                        </div>
                      </div>
                    </div>
                    {/* <div className="agent-complaint">
                        <div class="vl"></div>
                    </div> */}
                  </div>
                </div>

              </div>
              <div className="panalty-marks">
                <div className="panelty-progress1">
                  <h4>Panelty Marks</h4>
                </div>
                <div className="panelty-progress2">
                  <ProgressBar completed={data.panelty} maxCompleted={100} bgColor="#E31723" baseBgColor="#E57676" height="25px" />
                </div>
                <div className="panelty-progress3">
                  <Button size="small" variant="contained" onClick={alertDelivery}>
                    Alert
                  </Button>
                </div>
                <div className="panelty-progress3">
                  <Button size="small" variant="contained" onClick={removeDelivery}>
                    Remove
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}

export default Agentprofile;

import "./Complaints.css";
import Navbar from "../../Components/Navbar/Admin/Navbar";
import Footer from "../../Components/Footer/Footer";
import "../../index.css";
import logo from "../../Assets/Brand/wellness.png";
import { FaAngleDown } from "react-icons/fa";
import React from "react";
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import { useState, useEffect } from 'react';
import Axios from "../../api/axios";
import { useNavigate } from "react-router-dom";

function Complaints() {

  const navigate = useNavigate();

  const navigatePharmacyProfile =(id)=>{
    navigate('/pharmacistprofile?id='+id);
    //console.log(id);
  }

  const navigateDeliveryProfile =(id)=>{
    navigate('/agentprofile?id='+id);
    //console.log(id);
  }
  
  const complaints = [];
  var [dataList, setDataList] = React.useState([]);
  var [data, setData] = React.useState([]);

  var config = {
    method: 'post',
    url: 'http://localhost:3000/admin/GetComplaints',
    headers: {},
  };

  useEffect(() => {
    Axios(config)
      .then((response) => {
        setData(response.data)
        response.data.map((object) => {
          complaints.push(
            {
              key: object.complaint_id,
              text: object.complaint,
              status: object.status,
              accused: object.username,
              accused_id: object.accused_person,
              complainant: object.complainant_id
            }
          )
        })
        console.log(complaints)
        setDataList(complaints);
        setData(complaints);
      })
      .catch(function (err) {
        console.log(err);
      });
  }, [])

  const options = [
    { value: 'allComplaints', text: 'All Complaints' },
    { value: 'phComplaints', text: 'Pharmacy Complaints' },
    { value: 'delComplaints', text: 'Agent Complaints' },
  ];

  const [selected, setSelected] = useState(options[0].value);

  const handleChange = event => {
    setSelected(event.target.value);
    if(event.target.value == 'phComplaints'){
      for(var key in data){
        if(data[key].status == 'pharmacy'){
          complaints.push(data[key])
          setDataList(complaints);
        }
      }
    }else if(event.target.value == 'delComplaints'){
      for(var key in data){
        if(data[key].status == 'delivery_agent'){
          complaints.push(data[key])
          setDataList(complaints);
        }
      }
    }else if(event.target.value == 'allComplaints'){
      for(var key in data){
          complaints.push(data[key])
          setDataList(complaints);
      }
    }
  };

  const listItems = dataList.map((item) =>
    <li>
      <div>
        <div className="complaint-det">
          <div className="p-a-logo1">
            <button className="listButton" onClick={item.status == 'pharmacy' ? ()=>navigatePharmacyProfile(item.key) : () => navigateDeliveryProfile(item.key)}>
              <div>
                <h5>{item.accused}</h5>
              </div>
              <div className="cmp-det">
                <h6>{item.text}</h6>
              </div>
              </button>
          </div>
      
          <button className="view-complaint" onClick={item.status == 'pharmacy' ? ()=>navigatePharmacyProfile(item.key) : () => navigateDeliveryProfile(item.key)}>View Complaint</button>
          <button className="dismiss-complaint">Dismiss</button>
        </div>
        <hr
          style={{
            color: "black",
            background: "black",
            width: "82%",
          }}
        />
      </div>
    </li>
  );



  return (
    <div>
      <Navbar />
      <div>
        <div className="complaints-head-bar2">
          <div className="complaints-heading">
            <h2>Complaints</h2>
          </div>
          <div>
            <div>
              <div className="complaint-det">
                <div className="p-a-logo2">

                  <select className="complaint-filter" value={selected} onChange={handleChange}>
                    {options.map(option => (
                      <option key={option.value} value={option.value}>
                        {option.text}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <hr
                style={{
                  color: "black",
                  background: "black",
                  width: "82%",

                }}
              />
            </div>
            <ul style={{ listStyleType: "none" }}>{listItems}</ul>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Complaints;

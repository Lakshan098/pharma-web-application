import React from "react";
import FilterableTable from "react-filterable-table";
import "./DeliveryAgent.css";
import Navbar from "../../Components/Navbar/Admin/Navbar";
import Footer from "../../Components/Footer/Footer";
import Axios from "../../api/axios";
import { useEffect, useState } from "react";

function DeliveryAgent() {
  const delivery_agent = [];
  const [delivery_agents, setDeliveryAgent] = useState([]);
  var config = {
    method: "post",

    url: "http://localhost:3000/User/GetDeliveryAgents",

    headers: {},
  };

  useEffect(async () => {
    await Axios(config).then((response) => {
      response.data.map((item) => {
        delivery_agent.push({
          aid: item.uid,
          aname: item.username,
          rating: item.rating,
          contnum: item.contact_number,
          email: item.email,
        });
      });
      setDeliveryAgent(...[delivery_agent]);
      console.log(delivery_agents[0]);
    });
  }, []);
  const data = [
    {
      aid: 1,
      aname: "Lanka Pharmacy",
      contnum: 1,
      email: "lankapharama@gmail.com",
      rating: 4,
    },
    {
      aid: 1,
      aname: "Lanka Pharmacy",
      contnum: 2,
      email: "lankapharama@gmail.com",
      rating: 4,
    },
    {
      aid: 1,
      aname: "Lanka Pharmacy",
      contnum: 2555555444,
      email: "lankapharama@gmail.com",
      rating: 4,
    },
    {
      aid: 1,
      aname: "Lanka Pharmacy",
      contnum: 0,
      email: "lankapharama@gmail.com",
      rating: 4.7,
    },
    {
      aid: 1,
      aname: "Lanka Pharmacy",
      contnum: 2,
      email: "lankapharama@gmail.com",
      rating: 4.7,
    },
    {
      aid: 1,
      aname: "Lanka Pharmacy",
      contnum: 4,
      email: "lankapharama@gmail.com",
      rating: 4.7,
    },
    {
      aid: 1,
      aname: "Lanka Pharmacy",
      contnum: 2,
      email: "lankapharama@gmail.com",
      rating: 4.7,
    },
    {
      aid: 1,
      aname: "Lanka Pharmacy",
      contnum: 2,
      email: "lankapharama@gmail.com",
      rating: 4.7,
    },
    {
      aid: 1,
      aname: "Lanka Pharmacy",
      contnum: 2,
      email: "lankapharama@gmail.com",
      rating: 4.7,
    },
    {
      aid: 1,
      aname: "Lanka Pharmacy",
      contnum: 2,
      email: "lankapharama@gmail.com",
      rating: 4.7,
    },
  ];

  // Fields to show in the table, and what object properties in the data they bind to
  const fields = [
    {
      name: "aid",
      displayName: "Delivery Agent ID",
      inputFilterable: true,
      sortable: true,
    },
    {
      name: "aname",
      displayName: "Delivery Agent Name",
      inputFilterable: true,
      exactFilterable: true,
      sortable: true,
    },
    {
      name: "contnum",
      displayName: "Contact Number",
      inputFilterable: true,
      exactFilterable: true,
      sortable: true,
    },
    {
      name: "email",
      displayName: "Email",
      inputFilterable: true,
      exactFilterable: true,
      sortable: true,
    },
    {
      name: "rating",
      displayName: "Rating",
      inputFilterable: true,
      exactFilterable: true,
      sortable: true,
    },
  ];
  return (
    <div>
      <Navbar />
      <h2 className="phead">Delivery Agents</h2>
      <div className="component-head">
        <FilterableTable
          namespace="People"
          initialSort="name"
          data={delivery_agents}
          fields={fields}
          noRecordsMessage="There are no people to display"
          noFilteredRecordsMessage="No people match your filters!"
        />
      </div>
      <Footer />
    </div>
  );
}

export default DeliveryAgent;

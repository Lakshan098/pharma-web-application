import React from "react";
import FilterableTable from "react-filterable-table";
import "./DeliveryAgent.css";
import Navbar from "../../Components/Navbar/Admin/Navbar";
import Footer from "../../Components/Footer/Footer";

function DeliveryAgent() {
  const data = [
    {
      aid: 1,
      aname: "Lanka Pharmacy",
      address: "ddvgsdgsgsgg",
      contnum: 1,
      email: "lankapharama@gmail.com",
      rating: 4,
    },
    {
      aid: 1,
      aname: "Lanka Pharmacy",
      address: "ddvgsdgsgsgg",
      contnum: 2,
      email: "lankapharama@gmail.com",
      rating: 4,
    },
    {
      aid: 1,
      aname: "Lanka Pharmacy",
      address: "ddvgsdgsgsgg,kjsdhmnlg,egkjengg",
      contnum: 2555555444,
      email: "lankapharama@gmail.com",
      rating: 4,
    },
    {
      aid: 1,
      aname: "Lanka Pharmacy",
      address: "ddvgsdgsgsgg",
      contnum: 0,
      email: "lankapharama@gmail.com",
      rating: 4.7,
    },
    {
      aid: 1,
      aname: "Lanka Pharmacy",
      address: "ddvgsdgsgsgg",
      contnum: 2,
      email: "lankapharama@gmail.com",
      rating: 4.7,
    },
    {
      aid: 1,
      aname: "Lanka Pharmacy",
      address: "ddvgsdgsgsgg",
      contnum: 4,
      email: "lankapharama@gmail.com",
      rating: 4.7,
    },
    {
      aid: 1,
      aname: "Lanka Pharmacy",
      address: "ddvgsdgsgsgg",
      contnum: 2,
      email: "lankapharama@gmail.com",
      rating: 4.7,
    },
    {
      aid: 1,
      aname: "Lanka Pharmacy",
      address: "ddvgsdgsgsgg",
      contnum: 2,
      email: "lankapharama@gmail.com",
      rating: 4.7,
    },
    {
      aid: 1,
      aname: "Lanka Pharmacy",
      address: "ddvgsdgsgsgg",
      contnum: 2,
      email: "lankapharama@gmail.com",
      rating: 4.7,
    },
    {
      aid: 1,
      aname: "Lanka Pharmacy",
      address: "ddvgsdgsgsgg",
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
      name: "address",
      displayName: "Address",
      inputFilterable: true,
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
      <FilterableTable
        namespace="People"
        initialSort="name"
        data={data}
        fields={fields}
        noRecordsMessage="There are no people to display"
        noFilteredRecordsMessage="No people match your filters!"
      />
      <Footer />
    </div>
  );
}

export default DeliveryAgent;

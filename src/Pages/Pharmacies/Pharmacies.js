import React from "react";
import FilterableTable from "react-filterable-table";
import "./Pharmacies.css";
import Navbar from "../../Components/Navbar/Admin/Navbar";
import Footer from "../../Components/Footer/Footer";
import Axios from "../../api/axios";
import { useEffect ,useState} from "react";

const Pharmacies = () => {
  const pharmacy = [];
  const [pharmacies,setPharmacies] = useState([]);
  var config = {
    method: "post",

    url: "http://localhost:3000/User/GetPharmacies",

    headers: {},
  };

  useEffect(async ()=>{
    await Axios(config).then((response) => {
      response.data.map((item) =>{
        pharmacy.push(
          {
            pid: item.uid,
            pname: item.username,
            regnum: item.reg_No,
            address: item.address,
            contnum: item.contact_number,
            email: item.email,
            rating: item.rating,
          }
      )
      })
      setPharmacies(...[pharmacy]);
      console.log(pharmacies[0]);
    })
  },[])

  const data = [
    {
      pid: 1,
      pname: "Lanka Pharmacy",
      regnum: 8,
      address: "ddvgsdgsgsgg",
      contnum: 1,
      email: "lankapharama@gmail.com",
      rating: 4,
    },
    {
      pid: 1,
      pname: "Lanka Pharmacy",
      regnum: 8,
      address: "ddvgsdgsgsgg",
      contnum: 2,
      email: "lankapharama@gmail.com",
      rating: 4,
    },
    {
      pid: 1,
      pname: "Lanka Pharmacy",
      regnum: 8,
      address: "ddvgsdgsgsgg",
      contnum: 2555555444,
      email: "lankapharama@gmail.com",
      rating: 4,
    },
    {
      pid: 1,
      pname: "Lanka Pharmacy",
      regnum: 8,
      address: "ddvgsdgsgsgg",
      contnum: 0,
      email: "lankapharama@gmail.com",
      rating: 4.7,
    },
    {
      pid: 1,
      pname: "Lanka Pharmacy",
      regnum: 8,
      address: "ddvgsdgsgsgg",
      contnum: 2,
      email: "lankapharama@gmail.com",
      rating: 4.7,
    },
    {
      pid: 1,
      pname: "Lanka Pharmacy",
      regnum: 8,
      address: "ddvgsdgsgsgg",
      contnum: 4,
      email: "lankapharama@gmail.com",
      rating: 4.7,
    },
    {
      pid: 1,
      pname: "Lanka Pharmacy",
      regnum: 8,
      address: "ddvgsdgsgsgg",
      contnum: 2,
      email: "lankapharama@gmail.com",
      rating: 4.7,
    },
    {
      pid: 1,
      pname: "Lanka Pharmacy",
      regnum: 8,
      address: "ddvgsdgsgsgg",
      contnum: 2,
      email: "lankapharama@gmail.com",
      rating: 4.7,
    },
    {
      pid: 1,
      pname: "Lanka Pharmacy",
      regnum: 8,
      address: "ddvgsdgsgsgg",
      contnum: 2,
      email: "lankapharama@gmail.com",
      rating: 4.7,
    },
    {
      pid: 1,
      pname: "Lanka Pharmacy",
      regnum: 98,
      address: "ddvgsdgsgsgg",
      contnum: 2,
      email: "lankapharama@gmail.com",
      rating: 4.7,
    },
  ];

  // Fields to show in the table, and what object properties in the data they bind to
  const fields = [
    {
      name: "pid",
      displayName: "Pharmacy ID",
      inputFilterable: true,
      sortable: true,
    },
    {
      name: "pname",
      displayName: "Pharmacy Name",
      inputFilterable: true,
      exactFilterable: true,
      sortable: true,
    },
    {
      name: "regnum",
      displayName: "Register Number",
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
      <h2 className="phead">Pharmacies</h2>
      <FilterableTable
        namespace="People"
        initialSort="name"
        data={pharmacies}
        fields={fields}
        noRecordsMessage="There are no people to display"
        noFilteredRecordsMessage="No people match your filters!"
      />
      <Footer />
    </div>
  );
};

export default Pharmacies;

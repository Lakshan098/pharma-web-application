import Footer from '../../Components/Footer/Footer';
import React, { useState } from 'react';
import Navbar from '../../Components/Navbar/Pharmacist/Navbar';
import './PharmacyOrder.css';
import Searchbar from '../../Components/Search/Search';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Table from '../../Components/Table/Table';

import Axios from "../../api/axios";
import { useEffect } from 'react';



function PharmacyOrder() {

  const navigate = useNavigate();
  const navigate2 = useNavigate();
  const navigate3 = useNavigate();
  const navigateViewDetails = () => {
    
    navigate('/PendingViewDetails');
  };


  var Id = localStorage.getItem('userId');
  var SId = Id.toString();

  var config = {
    method: 'get',
    url: ('http://localhost:3000/PharmacyOrder/' + SId),
    headers: {},
  };

  const [Data, setData] = React.useState([]);
  const [tableData, setTableData] = React.useState([]);
  const [rows, setRows] = React.useState([]);
  const [columns, setColumns] = React.useState([]);

  useEffect(async () => {
    await Axios(config)
      .then((response) => {
          setData(response.Data);
          response.data.map((object) => {
          setTableData(prevStats => [...prevStats,
          {
            id: object.order_id,
            customer_name: object.username,
            placed_date: object.time_stamp,
            status: object.status,
          }]
          )       
        });
      }).catch(function (err) {
        console.log(err);
      });


  }, [ ])
  
  // setRows(tableData);
  console.log(tableData);
  
  // var length = data.length;


  // const tableData=[
  //   {
  //     id: "1",
  //     customer_name:"jj",
  //     placed_date: "20/08/2022",
  //     status: "pending",
  //   },
  //   {
  //     id: "2",
  //     customer_name:"jj",
  //     placed_date: "20/08/2022",
  //     status: "pending",
  //   },]

  const tableColumns = [
    {
      field: "id",
      headerName: "Order ID",
      width: 230
    },

    {
      field: "customer_name",
      headerName: "Customer Name",
      width: 230,
    },
    {
      field: "placed_date",
      headerName: "Placed Date",
      width: 230,
    },
    {
      field: "status",
      headerName: "Status",
      width: 230,
      renderCell: (params) => {
        return (
          <div className={`cellWithStatus ${params.row.status}`}>
            {params.row.status}
          </div>
        );
      },
    },]

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <div
              className="viewButton"
              onClick={() => navigateViewDetails()}
            >
              View
            </div>
          </div>
        );
      },
    },
  ];


    // setRows(tableData);
  
  
  
    //  setRows(tableData);
    //  setColumns(tableColumns);
    // console.log(columns);
 




  
  
    // console.log(tableColumns)
  


  return (
    <div>
      <div className='header'>
        <Navbar />
      </div>
      <div className='big-container'>
        <div className='grid-container'>
          <span className='listTitle'>Orders</span>
          <Table rows={tableData} columns={tableColumns.concat(actionColumn)} />
        </div>
      </div>

      <Footer />
    </div>

  );
}
export default PharmacyOrder;
import Footer from '../../Components/Footer/Footer';
import React ,{useState} from 'react';
import Navbar from '../../Components/Navbar/Pharmacist/Navbar';
import './PharmacyOrder.css';
import Searchbar from '../../Components/SearchBar/Search';
import {Routes, Route, useNavigate} from 'react-router-dom';
import Table from '../../Components/Table/Table';

const tableData=[
    {
      id: 1,
      customer_name: "Snow",
      placed_date: "22/08/2022",
      status: "ongoing",
    },
    {
      id: 2,
      customer_name: "Jamie Lannister",
      placed_date: "22/08/2022",
      status: "delivery",
    },
    {
      id: 3,
      customer_name: "Lannister",
      placed_date: "22/08/2022",
      status: "completed",
    },
    {
      id: 4,
      customer_name: "Stark",
      placed_date: "22/08/2022",
      status: "pending",
    },
    {
      id: 5,
      customer_name: "Targaryen",
      placed_date: "22/08/2022",
      status: "pending",
    },
    {
      id: 6,
      customer_name: "Melisandre",
      placed_date: "22/08/2022",
      status: "completed",
    },
    {
      id: 7,
      customer_name: "Clifford",
      placed_date: "22/08/2022",
      status: "delivery",
    },
    {
      id: 8,
      customer_name: "Frances",
      placed_date: "22/08/2022",
      status: "delivery",
    },
    {
      id: 9,
      customer_name: "Roxie",
      placed_date: "22/08/2022",
      status: "completed",
    },
    {
      id: 10,
      customer_name: "Roxie",
      placed_date: "22/08/2022",
      status: "delivery",
    },
  ]


  
  const tableColumns = [{ field: "id", headerName: "Order ID", width: 230 },
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


function PharmacyOrder() {

    const navigate = useNavigate();
    const navigate2 = useNavigate();
    const navigate3 = useNavigate();
    const navigateViewDetails = () => {
        
        navigate('/ViewDetails');
      };
        
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
      const [rows , setRows] = useState(tableData);
      const [columns, setColumns] = useState(tableColumns);

        return (
            <div>
              <div className='header'>
                <Navbar/>
              </div>
              <div className='big-container'>
                <div className='grid-container'>
                  <span className='listTitle'>Orders</span>
                  <Table rows={rows} columns={columns.concat(actionColumn)} />
                </div>
              </div>
    
              <Footer/>
            </div>
            
          );
}
export default PharmacyOrder;
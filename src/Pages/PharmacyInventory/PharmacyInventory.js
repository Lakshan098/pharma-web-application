import Navbar from '../../Components/Navbar/Pharmacist/Navbar';
import Footer from '../../Components/Footer/Footer';
import Table from '../../Components/Table/Table';
import './PharmacyInventory.css';
import React , {useState} from 'react';
import { Link } from "react-router-dom";


const tableData=[
  {
    id: 1,
    batch_no : "00100",
    name:"Omeprazole",
    manufacturer_name:"Prilosec",
    manufacturer_id:"456789123",
    manufacturing_date:"23/01/2022",
    expiry_date:"23/01/2025",
    quantity:1000,
    unit_price:25,
    total:25000
  },
  {
    id: 2,
    batch_no : "00100",
    name:"Omeprazole",
    manufacturer_name:"Prilosec",
    manufacturer_id:"456778623",
    manufacturing_date:"24/01/2022",
    expiry_date:"24/01/2025",
    quantity:2000,
    unit_price:25,
    total:50000
  },
  {
    id: 3,
    batch_no : "00100",
    name:"Omeprazole",
    manufacturer_name:"Prilosec",
    manufacturer_id:"456657823",
    manufacturing_date:"25/01/2022",
    expiry_date:"25/01/2025",
    quantity:1000,
    unit_price:30,
    total:30000
  },
  {
    id: 4,
    batch_no : "00100",
    name:"Omeprazole",
    manufacturer_name:"Prilosec",
    manufacturer_id:"451234123",
    manufacturing_date:"02/02/2022",
    expiry_date:"02/02/2025",
    quantity:1500,
    unit_price:50,
    total:75000
  },
]

const actionColumn = [
  {
    field: "action",
    headerName: "Action",
    width: 200,
    renderCell: (params) => {
      return (
        <div className="cellAction">
          <Link to="/Edit" style={{ textDecoration: "none" }}>
            <div className="viewButton">Edit</div>
          </Link>
        </div>
      );
    },
  },
];

const tableColumns = [{ field: "id", headerName: "ID", width: 70 },
{
  field: "batch_no",
  headerName: "Batch No.",
  width: 100,
},
{
  field: "name",
  headerName: "Name",
  width: 230,
},

{
  field: "manufacturer_name",
  headerName: "Manufacturer",
  width: 100,
},
{
  field: "manufacturer_id",
  headerName: "Manufacturer ID",
  width: 100,
},
{
  field: "manufacturing_date",
  headerName: "Manufacturing Date",
  width: 100,
},
{
  field: "expiry_date",
  headerName: "Expiry Date",
  width: 100,
},
{
  field: "quantity",
  headerName: "Quantity",
  width: 100,
},
{
  field: "unit_price",
  headerName: "Unit Price",
  width: 100,
},
{
  field: "total",
  headerName: "Total",
  width: 100,
},
]

function PharmacyInventory(){

  
  const [rows , setRows] = useState(tableData)
  const [columns, setColumns] = useState(tableColumns)
    return (
        <div>
          <div className='header'>
            <Navbar/>
          </div>
          <div className='big-container max-height'>
            <div className='grid-container'>
              <span className='listTitle'>Inventory</span>
              <div className="datatableTitle">
              <button to="/users/new" className="link">
                Add new
              </button>
              </div>

              <Table rows={rows} columns={columns.concat(actionColumn)} />
            </div>
          </div>

          <Footer/>
        </div>
        
      );
}

export default PharmacyInventory;
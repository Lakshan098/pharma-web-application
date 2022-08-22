import React from 'react';
import Navbar from '../../Components/Navbar/Pharmacist/Navbar';
import Footer from '../../Components/Footer/Footer';
import './DrugDetails.css';
import Table from '../../Components/Table/Table';
import { noAuto } from '@fortawesome/fontawesome-svg-core';

const drugTable=[
  {
    id: 1,
    name: "Snow",
    brand: "active",
    quantity: 35,
  },
  {
    id: 2,
    name: "Snow",
    brand: "active",
    quantity: 35,
  },
  {
    id: 3,
    name: "Snow",
    brand: "active",
    quantity: 35,
  },
  {
    id: 4,
    name: "Snow",
    brand: "active",
    quantity: 35,
  },
]

const drugColumns = [{ field: "id", headerName: "ID", width: 70 },
{
  field: "name",
  headerName: "Name",
  width: 200,
},
{
  field: "brand",
  headerName: "Brand",
  width: 200,
},

{
  field: "quantity",
  headerName: "Quantity",
  width: 100,
},
]


const drugTable1=[
  {
    id: 1,
    batch_no: 2,
    name: "snow",
    manufacturer: 35,
    manufacturing_date:2142,
    expiry_date:325,
    quantity:24,
  },
  {
    id: 2,
    batch_no: 2,
    name: "snow",
    manufacturer: 35,
    manufacturing_date:2142,
    expiry_date:325,
    quantity:24,
  },
  {
    id: 1,
    batch_no: 2,
    name: "snow",
    manufacturer: 35,
    manufacturing_date:2142,
    expiry_date:325,
    quantity:24,
  },
  {
    id: 1,
    batch_no: 2,
    name: "snow",
    manufacturer: 35,
    manufacturing_date:2142,
    expiry_date:325,
    quantity:24,
  },
]

const drugColumns1 = [{ field: "id", headerName: "ID", width: 70 },
{
  field: "batch_no",
  headerName: "Batch No.",
  width: 200,
},
{
  field: "name",
  headerName: "Name",
  width: 200,
},

{
  field: "manufacturer",
  headerName: "Manufacturer",
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
]



function DrugDetails(){

  const handleDelete = (id) => {
  };

  const drugRemoveColumn = [
    {
      field: "remove",
      headerName: "Remove",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <div
              className="deleteButton"
              onClick={() => handleDelete(params.row.id)}
            >
              Remove
            </div>
          </div>
        );
      },
    },
  ];
    return (
        <div>
          <div className='header'>
            <Navbar/>
          </div>
          <div className='title-container'>
            <span className='title'>Drug Details</span>
          </div>
          <div className='big-container'>
            <div className='image-container'>
            <img src="https://www.madeformedical.com/wp-content/uploads/2018/07/vio-4.jpg" width="450" height="400"/>


            </div>
            <div className='drug-container'>
              <div className="datatableTitle" style={{paddingLeft: 10}}>
              <span className='listTitle'>Order</span>
              <button to="/users/new" className="link">
                Add New
              </button>
              </div>
              <Table rows={drugTable} columns={drugColumns.concat(drugRemoveColumn)} />
            </div>
          </div>
          <div className='big-container'>
            <div className='inventory-container'>
              <span className='listTitle'>Inventory</span>
              <Table rows={drugTable1} columns={drugColumns1} />
              <div className="datatableTitle">
              <button to="/users/new" className="link">
                Feedback
              </button>
              </div>
            </div>
          </div>

          <div className='big-container' style={{margineBottom: 20}}>
            <div className='inventory-container'>
            <span className='listTitle'>Invoice</span>
              <Table rows={drugTable} columns={drugColumns} />
              <div className='totalDiv'>
                <span className='total'>Total :</span>
              </div>
            </div>
          </div>
         

          <Footer/>
        </div>
        
      );
}

export default DrugDetails;
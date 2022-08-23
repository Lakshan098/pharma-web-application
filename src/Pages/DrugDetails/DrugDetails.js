import React, {useState} from 'react';
import Navbar from '../../Components/Navbar/Pharmacist/Navbar';
import Footer from '../../Components/Footer/Footer';
import './DrugDetails.css';
import Table from '../../Components/Table/Table';
import PropTypes from 'prop-types';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { noAuto } from '@fortawesome/fontawesome-svg-core';

const invoiceTable=[
  {
    id: 1,
    brand_name : "Amazon Elements Vitamin C",
    drug_name: "Vitamin c",
    quantity: 20,
    issuable : "Yes",
    reason: "",
    unit_price:50,
    amount: 80,
  },
  {
    id: 2,
    brand_name : "Prilosec",
    drug_name: "Omeprazole",
    quantity: 20,
    availability : "Yes",
    reason: "",
    unit_price:50,
    amount: 80,
  },
  {
    id: 3,
    brand_name : "Allerief",
    drug_name: "Piriton",
    quantity: 20,
    availability : "No",
    reason: "Not having the asking brand",
    unit_price:50,
    amount: 80,
  },
  {
    id: 4,
    brand_name : "00A",
    drug_name: "Vitamine c",
    quantity: 20,
    availability : "Not-Available",
    reason: "Not Enough",
    unit_price:"",
    amount: "",
  },
  {
    id: 5,
    brand_name : "00A",
    drug_name: "Vitamine c",
    quantity: 20,
    availability : "NOt-Available",
    reason: "Not Enough",
    unit_price:"",
    amount: "",
  },
  
]

const invoiceColumns = [{ field: "id", headerName: "ID", width: 70 },

{
  field: "brand_name",
  headerName: "Brand Name",
  width: 200,
},
{
  field: "drug_name",
  headerName: "Drug Name",
  width: 200,
},

{
  field: "quantity",
  headerName: "Quantity",
  width: 100,
},
{
  field: "Issuable",
  headerName: "Issuable",
  width: 150,
},

{
  field: "reason",
  headerName: "Reason for non-issuance",
  width: 300,
},

{
  field: "unit_price",
  headerName: "Unit price",
  width: 100,
},
{
  field: "amount",
  headerName: "Amount",
  width: 100,
},
]



const drugTable=[
  {
    id: 1,
    batch_no: "00A",
    drug_name: "Vitamine c",
    expiry_date: "2024-04-04",
    brand_name: "ABC",
    manufacture_date: "2022-04-04",
    quantity: 20,
    manufacture_batch_no: "ABCD",
  },
  {
    id: 2,
    batch_no: "00A",
    drug_name: "Vitamine c",
    expiry_date: "2024-04-04",
    brand_name: "ABC",
    manufacture_date: "2022-04-04",
    quantity: 20,
    manufacture_batch_no: "ABCD",
  },
  {
    id: 3,
    batch_no: "00A",
    drug_name: "Vitamine c",
    expiry_date: "2024-04-04",
    brand_name: "ABC",
    manufacture_date: "2022-04-04",
    quantity: 20,
    manufacture_batch_no: "ABCD",
  },
  {
    id: 4,
    batch_no: "00A",
    drug_name: "Vitamine c",
    expiry_date: "2024-04-04",
    brand_name: "ABC",
    manufacture_date: "2022-04-04",
    quantity: 20,
    manufacture_batch_no: "ABCD",
  },
  {
    id: 5,
    batch_no: "00A",
    drug_name: "Vitamine c",
    expiry_date: "2024-04-04",
    brand_name: "ABC",
    manufacture_date: "2022-04-04",
    quantity: 20,
    manufacture_batch_no: "ABCD",
  },
  {
    id: 6,
    batch_no: "00A",
    drug_name: "Vitamine c",
    expiry_date: "2024-04-04",
    brand_name: "ABC",
    manufacture_date: "2022-04-04",
    quantity: 20,
    manufacture_batch_no: "ABCD",
  },
]

const drugColumns = [{ field: "id", headerName: "ID", width: 70 },
{
  field: "batch_no",
  headerName: "Batch no",
  width: 100,
},
{
  field: "drug_name",
  headerName: "Drug Name",
  width: 200,
},

{
  field: "expiry_date",
  headerName: "Expiry Date",
  width: 100,
},
{
  field: "brand_name",
  headerName: "Brand Name",
  width: 100,
},

{
  field: "manufacture_date",
  headerName: "Manufactured Date",
  width: 200,
},
{
  field: "quantity",
  headerName: "Quantity",
  width: 200,
},

{
  field: "manufacture_batch_no",
  headerName: "Manufacture's batch no",
  width: 200,
},
]

const actionColumnInventory = [
  {
  field: "action",
  headerName: "Action",
  width: 200,
  renderCell: (params) => {
      return (
      <div className="cellAction">
          <div
          className="addButton"
          >
          Remove
          </div>
      </div>
      );
  },
  },
];

const cartTable=[
  {
    id: 1,
    name: "Benzodiaze",
    quantity: 35,
    amount: 120,
  },
  {
    id: 2,
    name: "Carbimazole",
    quantity: 35,
    amount: 120,
  },
  {
    id: 3,
    name: "Zin",
    quantity: 35,
    amount: 120,
  },
  {
    id: 4,
    name: "Cet",
    quantity: 35,
    amount: 120,
  },
  {
    id: 5,
    name: "Vitamin D 500mg",
    quantity: 35,
    amount: 120,
  },
]

const actionColumnCart = [
  {
  field: "action",
  headerName: "Action",
  width: 200,
  renderCell: (params) => {
      return (
      <div className="cellAction">
          <div
          className="removeButton"
          >
          Remove
          </div>
      </div>
      );
  },
  },
];

const cartColumns = [{ field: "id", headerName: "ID", width: 70 },
{
  field: "name",
  headerName: "Drug Name",
  width: 200,
},

{
  field: "quantity",
  headerName: "Quantity",
  width: 200,
},
{
  field: "amount",
  headerName: "Amount",
  width: 200,
},
]


function FeedbackDialog(props) {
  const { onClose,feedback, open } = props;

  const handleClose = () => {
    onClose(feedback);
  };



  return (
    <Dialog onClose={handleClose} open={open} fullWidth={100}>
      <DialogTitle>Feedback</DialogTitle>
      <DialogContent>
      <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Drug name"
            type="text"
            fullWidth
            variant="standard"

          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Brand name"
            type="text"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Feedback message"
            type="text"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Add feedback</Button>
        </DialogActions>
    </Dialog>
  );
}

FeedbackDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  feedback: PropTypes.string.isRequired,
};

function InvoiceDialog(props) {
  const { onClose,feedback, open } = props;

  const handleClose = () => {
    onClose(feedback);
  };



  return (
    <Dialog onClose={handleClose} open={open} fullWidth={100}>
      <DialogTitle>Invoice</DialogTitle>
        <DialogContent>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <div className='dialog-title'>Name</div>
            </Grid>
            <Grid item xs={3}>
              <div className='dialog-title'>Quantity</div>
            </Grid>
            <Grid item xs={3}>
              <div className='dialog-title'>Price</div>
            </Grid>
            <Grid item xs={6}>
              <div className='dialog-text'>Penadol</div>
            </Grid>
            <Grid item xs={3}>
              <div className='dialog-text' style={{paddingLeft:35}}>15</div>
            </Grid>
            <Grid item xs={3}>
              <div className='dialog-text'>75.00</div>
            </Grid>
            <Grid item xs={6}>
              <div className='dialog-text'>Penadol</div>
            </Grid>
            <Grid item xs={3}>
              <div className='dialog-text' style={{paddingLeft:35}}>15</div>
            </Grid>
            <Grid item xs={3}>
              <div className='dialog-text'>75.00</div>
            </Grid>
            <Grid item xs={6}>
              <div className='dialog-text'>Penadol</div>
            </Grid>
            <Grid item xs={3}>
              <div className='dialog-text' style={{paddingLeft:35}}>15</div>
            </Grid>
            <Grid item xs={3}>
              <div className='dialog-text'>75.00</div>
            </Grid>
            <Grid item xs={9}>
              <div className='dialog-title'>Total</div>
            </Grid>
            <Grid item xs={3}>
              <div className='dialog-title'>225.00</div>
            </Grid>
          </Grid>
        </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Send feedback</Button>
        </DialogActions>
    </Dialog>
  );
}

InvoiceDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};

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

  const [feedback, setFeedback] = useState("");
  const [openFeedback, setOpenFeedback] = useState(false);
  const [openInvoice, setOpenInvoice] = useState(false);


  const handleDelete = (id) => {
  };

  const handleClickOpenFeedback = () => {
    setOpenFeedback(true);
  };

  const handleCloseFeedback = (value) => {
    setOpenFeedback(false);
    setFeedback(value);
  };

  const handleClickOpenInvoice = () => {
    setOpenInvoice(true);
  };

  const handleCloseInvoice = (value) => {
    setOpenInvoice(false);
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
              <span className='listTitle'>Cart</span>
              
              </div>
              <Table rows={cartTable} columns={cartColumns.concat(actionColumnCart)} />
            </div>
          </div>
          <div className='big-container'>
            <div className='inventory-container'>
              <span className='listTitle'>Inventory</span>

              <Table rows={drugTable} columns={drugColumns.concat(actionColumnInventory)} />
              <div className="datatableTitle">
              <button onClick={handleClickOpenFeedback} className="link">
               Add Feedback
              </button>
              </div>
            </div>
          </div>

          <div className='big-container' style={{margineBottom: 20}}>
            <div className='inventory-container'>
            <span className='listTitle'>Feedback Report</span>
              <Table rows={invoiceTable} columns={invoiceColumns} />
              <div className='totalDiv'>
              <Button variant="contained" onClick={handleClickOpenInvoice} style={{margineLeft: 60}}>
                Send
              </Button>
                <span className='total'>Total :</span>
              </div>
            </div>
          </div>
         
          <FeedbackDialog
            feedback={feedback}
            open={openFeedback}
            onClose={handleCloseFeedback}
          />

          <InvoiceDialog
            open={openInvoice}
            onClose={handleCloseInvoice}
          />


          <Footer/>
        </div>
        
      );
}

export default DrugDetails;
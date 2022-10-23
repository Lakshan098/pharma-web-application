import Navbar from '../../Components/Navbar/Pharmacist/Navbar';
import Footer from '../../Components/Footer/Footer';
import Table from '../../Components/Table/Table';
import PropTypes from 'prop-types';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import MuiAlert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';
import './PharmacyInventory.css';
import React , {useState} from 'react';
import {  Link, useNavigate } from "react-router-dom";
import Axios from "../../api/axios";
import { useEffect } from 'react';


const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function EditDialog(props) {
  const { onClose, open } = props;


  const [batch_no,setBatchNo] = useState('');
  const [name,setName] = useState('');
  const [manufacturer_id,setManufacturerId] = useState('');
  const [manufacturing_date,setManufacturingDate] = useState('');
  const [expiry_date,setExpiryDate] = useState('');
  const [quantity,setQuantity] = useState(0);
  const [unit_price,setUnitPrice] = useState(0);

  const handleClose = (e) => {
    var newDrug = {
      closeType:e,
      batch_no:batch_no,
      name:name,
      manufacturer_id:manufacturer_id,
      manufacturing_date:manufacturing_date,
      expiry_date:expiry_date,
      quantity:quantity,
      unit_price:unit_price,
    }
    onClose(newDrug);
    //setType('');
    //setQuantity(0);
    //setDrugName('');
    //setBrandName('');
  };


  return (
    <Dialog onClose={handleClose} open={open} fullWidth={100}>
      <DialogTitle>Edit Drug</DialogTitle>
      <DialogContent>
          <TextField
            margin="dense"
            id="batch_no"
            label="Batch No"
            type="text"
            fullWidth
            variant="standard"
            value={batch_no}
            onChange={(val) => setBatchNo(val.target.value)}
          />
          <TextField
            margin="dense"
            id="name"
            label="Brand name"
            type="text"
            fullWidth
            variant="standard"
            value={name}
            onChange={(val) => setName(val.target.value)}
          />
          <TextField
            margin="dense"
            id="manufacturer_id"
            label="Manufacturer Id"
            type="text"
            fullWidth
            variant="standard"
            value={manufacturer_id}
            onChange={(val) => setManufacturerId(val.target.value)}
          />

          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              id="manufacturing_date"
              label="Manufacturing Date"
              type="date"
              value={manufacturing_date}
              fullWidth
              onChange={(newValue) => {
                setManufacturingDate(newValue);
              }}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
          
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              id="expiry_date"
              label="Expiry Date"
              type="date"
              value={expiry_date}
              fullWidth
              onChange={(newValue) => {
                setExpiryDate(newValue);
              }}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>

          <TextField
            margin="dense"
            id="quantity"
            label="Quantity"
            type="number"
            fullWidth
            variant="standard"
            value={quantity}
            onChange={(val) => setQuantity(val.target.value)}
          />

          <TextField
            margin="dense"
            id="unit_price"
            label="Unit Price"
            type="number"
            fullWidth
            variant="standard"
            value={unit_price}
            onChange={(val) => setUnitPrice(val.target.value)}
          />
             
        </DialogContent>
        <DialogActions>
          <Button onClick={()=>handleClose(-1)}>Cancel</Button>
          <Button onClick={()=>handleClose(1)}>Save</Button>
        </DialogActions>
    </Dialog>
  );
}

EditDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  newDrug: PropTypes.string.isRequired,
};

function AddDialog(props) {
  const { onClose, open } = props;


  const [batch_no,setBatchNo] = useState('');
  const [name,setName] = useState('');
  const [manufacturer_id,setManufacturerId] = useState('');
  const [manufacturing_date,setManufacturingDate] = useState('');
  const [expiry_date,setExpiryDate] = useState('');
  const [quantity,setQuantity] = useState(0);
  const [unit_price,setUnitPrice] = useState(0);

  const handleClose = (e) => {
    var newDrug = {
      closeType:e,
      batch_no:batch_no,
      name:name,
      manufacturer_id:manufacturer_id,
      manufacturing_date:manufacturing_date,
      expiry_date:expiry_date,
      quantity:quantity,
      unit_price:unit_price,
    }
    onClose(newDrug);
    //setType('');
    //setQuantity(0);
    //setDrugName('');
    //setBrandName('');
  };


  return (
    <Dialog onClose={handleClose} open={open} fullWidth={100}>
      <DialogTitle>Add New Drug</DialogTitle>
      <DialogContent>
          <TextField
            margin="dense"
            id="batch_no"
            label="Batch No"
            type="text"
            fullWidth
            variant="standard"
            value={batch_no}
            onChange={(val) => setBatchNo(val.target.value)}
          />
          <TextField
            margin="dense"
            id="name"
            label="Brand name"
            type="text"
            fullWidth
            variant="standard"
            value={name}
            onChange={(val) => setName(val.target.value)}
          />
          <TextField
            margin="dense"
            id="manufacturer_id"
            label="Manufacturer Id"
            type="text"
            fullWidth
            variant="standard"
            value={manufacturer_id}
            onChange={(val) => setManufacturerId(val.target.value)}
          />

          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              id="manufacturing_date"
              label="Manufacturing Date"
              type="date"
              value={manufacturing_date}
              fullWidth
              onChange={(newValue) => {
                setManufacturingDate(newValue);
              }}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
          
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              id="expiry_date"
              label="Expiry Date"
              type="date"
              value={expiry_date}
              fullWidth
              onChange={(newValue) => {
                setExpiryDate(newValue);
              }}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>

          <TextField
            margin="dense"
            id="quantity"
            label="Quantity"
            type="number"
            fullWidth
            variant="standard"
            value={quantity}
            onChange={(val) => setQuantity(val.target.value)}
          />

          <TextField
            margin="dense"
            id="unit_price"
            label="Unit Price"
            type="number"
            fullWidth
            variant="standard"
            value={unit_price}
            onChange={(val) => setUnitPrice(val.target.value)}
          />
             
        </DialogContent>
        <DialogActions>
          <Button onClick={()=>handleClose(-1)}>Cancel</Button>
          <Button onClick={()=>handleClose(1)}>Save</Button>
        </DialogActions>
    </Dialog>
  );
}

AddDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  newDrug: PropTypes.string.isRequired,
};

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
]

function PharmacyInventory(){

  const navigate = useNavigate();

  const [rows , setRows] = useState([]);
  const [columns, setColumns] = useState(tableColumns);

  const [openEdit, setOpenEdit] = useState(false);
  const [openAdd, setOpenAdd] = useState(false);
  const [openSnack, setOpenSnack] = React.useState(false);
  const [snackMessage, setSnackMessage] = useState('');
  const [snackType, setSnackType] = useState('success');


  var [PId , setPID] = React.useState('');
   
  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <button onClick={handleClickOpenEdit} className="viewButton">
               Edit
              </button>
          </div>
        );
      },
    },
  ];
  
  const getData = async () => {
    var Id = localStorage.getItem('userId');
      setPID(Id.toString());
    await Axios.get('http://localhost:3000/PharmacyInventory/'+Id.toString())
      .then((response) => {
        let arr =[];
        let i = 0;
        response.data.forEach(e => {
          console.log(e);
          i = i+1;
          let element = {
            id: i,
            batch_no : e.batch_No,
            name: e.drug_name,
            manufacturer_id: e.licenece_No,
            manufacturing_date: e.manufacture_date,
            expiry_date: e.expiry_date,
            quantity:e.quantity,
            unit_price:e.unit_price
          }
          arr.push(element);
        });
        setRows(arr);
      })
      .catch(function (err) {
          console.log(err);
      });
  }

  const handleClickOpenEdit = () => {
    setOpenEdit(true);
  };

  const handleCloseEdit = (value) => {
    if(value.closeType==1){
      console.log(value);
    }
    setOpenEdit(false);
  };

  const handleClickOpenAdd = () => {
    setOpenAdd(true);
  };

  const handleCloseAdd = (value) => {
    if(value.closeType==1){
      console.log(value);
      Axios.post("http://localhost:3000/PharmacyInventory", {
        batch_No:value.batch_no,
        pharmacy_id: PId,
        brand_name:value.name,
        drug_name:value.name,
        quantity:value.quantity,
        expiry_date:value.expiry_date,
        manufacture_date:value.manufacturing_date,
        licenece_No:value.manufacturer_id,
        unit_price:value.unit_price,
      }).then((response) =>{
        if(response.status == '200'){
          setSnackMessage("Added Successfully!");
          setSnackType("success");
          setOpenSnack(true);
        }
        getData();
      });
    }
    setOpenAdd(false);
  };


  const handleCloseSnack = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpenSnack(false);
  };

  useEffect(async () => {
      var Id = localStorage.getItem('userId');
      setPID(Id.toString());
      
      if(Id){
          getData();
      }else{
          navigate("/");
      }
      
  }, []);
    return (
        <div>
          <div className='header'>
            <Navbar/>
          </div>
          <div className='big-container max-height'>
            <div className='grid-container'>
              <span className='listTitle'>Inventory</span>
              <div className="datatableTitle">
              <button onClick={handleClickOpenAdd} className="link">
                Add new
              </button>
              </div>

              <Table rows={rows} columns={columns.concat(actionColumn)} />
            </div>
          </div>

          {/* dialog boxes */}

          <EditDialog
            open={openEdit}
            onClose={handleCloseEdit}
          />
          <AddDialog
            open={openAdd}
            onClose={handleCloseAdd}
          />

          {/* Snackbars */}
          <Snackbar open={openSnack} autoHideDuration={6000} onClose={handleCloseSnack}>
            <Alert onClose={handleCloseSnack} severity={snackType} sx={{ width: '100%' }}>
              {snackMessage}
            </Alert>
          </Snackbar>
          <Footer/>
        </div>
        
      );
}

export default PharmacyInventory;
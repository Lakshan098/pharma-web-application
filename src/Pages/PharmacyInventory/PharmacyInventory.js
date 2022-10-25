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

const baseUrl = "http://localhost:3000";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});



function EditDialog(props) {
  const { onClose, open ,item} = props;


  const [ebatch_no,setBatchNo] = useState(item.batch_no);
  const [ename,setName] = useState(item.name);
  const [emanufacturer_id,setManufacturerId] = useState(item.manufacturer_id);
  const [emanufacturing_date,setManufacturingDate] = useState(item.manufacturing_date);
  const [eexpiry_date,setExpiryDate] = useState(item.expiry_date);
  const [equantity,setQuantity] = useState(item.quantity);
  const [eunit_price,setUnitPrice] = useState(item.unit_price);

  
  const handleClose = (e) => {
    var newDrug = {
      closeType:e,
      batch_no:item.batch_no,
      name:ename,
      manufacturer_id:emanufacturer_id,
      manufacturing_date:emanufacturing_date,
      expiry_date:eexpiry_date,
      quantity:equantity,
      unit_price:eunit_price,
    }
    onClose(newDrug);

    setExpiryDate('');
    setUnitPrice(0);
    setQuantity(0);
    setName('');
    setManufacturerId('');
    setManufacturingDate('');

  };


  return (
    <Dialog onClose={handleClose} open={open} fullWidth={100}>
      <DialogTitle>Edit Drug {item.batch_no}</DialogTitle>
      <DialogContent>
          {/* <TextField
            margin="dense"
            id="batch_no"
            label="Batch No"
            type="text"
            fullWidth
            variant="standard"
            value={ebatch_no}
            onChange={(val) => setBatchNo(val.target.value)}
          /> */}
          <TextField
            margin="dense"
            id="name"
            label="Brand name"
            type="text"
            fullWidth
            variant="standard"
            defaultValue={item.name}
            onChange={(val) => setName(val.target.value)}
          />
          <TextField
            margin="dense"
            id="manufacturer_id"
            label="Manufacturer Id"
            type="text"
            fullWidth
            variant="standard"
            defaultValue={item.manufacturer_id}
            onChange={(val) => setManufacturerId(val.target.value)}
          />

          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              id="manufacturing_date"
              label="Manufacturing Date"
              type="date"
              defaultValue={item.manufacturing_date}
              // value={emanufacturing_date}
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
              defaultValue={item.expiry_date}
              // value={eexpiry_date}
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
            defaultValue={item.quantity}
            onChange={(val) => setQuantity(val.target.value)}
          />

          <TextField
            margin="dense"
            id="unit_price"
            label="Unit Price"
            type="number"
            fullWidth
            variant="standard"
            defaultValue={item.unit_price}
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
  batch_no: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  manufacturer_id: PropTypes.string.isRequired,
  manufacturing_date: PropTypes.string.isRequired,
  expiry_date: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
  unit_price: PropTypes.number.isRequired,
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

function ConfirmDialog(props) {
  const { onClose,batchNo, id,open } = props;

  const handleClose = (e) => {
    onClose(e);
  };



  return (
    <Dialog onClose={handleClose} open={open} fullWidth={100}>
      <DialogTitle>Warning</DialogTitle>
      <DialogContent>
        <div className='dialog-text'>Are you sure to delete item : {batchNo} </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={()=>handleClose(1)}>OK</Button>
          <Button onClick={()=>handleClose(-1)}>Cancel</Button>
        </DialogActions>
    </Dialog>
  );
}

ConfirmDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
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
  const [activeItem, setActiveItem] = useState({
    batch_no:'',
    expiry_date:'',
    id:'',
    manufacturer_id:'',
    manufacturing_date:'',
    name:'',
    quantity:'',
    unit_price:''
  })

  const [openEdit, setOpenEdit] = useState(false);
  const [openAdd, setOpenAdd] = useState(false);
  const [openSnack, setOpenSnack] = useState(false);
  const [openConfirm, setOpenConfirm] = useState(false);
  const [snackMessage, setSnackMessage] = useState('');
  const [snackType, setSnackType] = useState('success');


  var [PId , setPID] = useState('');
   
  const actionColumn = [
    {
      field: "edit",
      headerName: "Edit",
      width: 80,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <button onClick={()=>handleClickOpenEdit(params)} className="viewButton">
               Edit
              </button>
          </div>
        );
      },
    },
    {
      field: "delete",
      headerName: "Delete",
      width: 80,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <button onClick={()=>handleClickOpenConfirm(params)} className="deleteButton">
               Delete
              </button>
          </div>
        );
      },
    },
  ];
  
  const getData = async () => {
    var Id = localStorage.getItem('userId');
      setPID(Id.toString());
    await Axios.get(baseUrl+'/PharmacyInventory/'+Id.toString())
      .then((response) => {
        let arr =[];
        let i = 0;
        response.data.forEach(e => {
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

  const handleClickOpenEdit = (item) => {
    //console.log(item.row);
    setActiveItem(item.row);
    setOpenEdit(true);
  };

  const handleCloseEdit = (value) => {
    if(value.closeType==1){
      let data = {
        batch_No : value.batch_no,
        pharmacy_id : PId,
        brand_name : activeItem.name,
        drug_name : activeItem.name,
        quantity : activeItem.quantity,
        expiry_date : activeItem.expiry_date,
        manufacture_date : activeItem.manufacturing_date,
        licenece_No : activeItem.manufacturer_id,
        unit_price : activeItem.unit_price,
      }

      if(value.name != ""){
        data.brand_name = value.name;
        data.drug_name = value.name;
      }
      if(value.quantity != 0){
        data.quantity = value.quantity;
      }
      if(value.expiry_date != ""){
        data.expiry_date = value.expiry_date;
      }
      if(value.manufacturing_date != ""){
        data.manufacture_date = value.manufacturing_date;
      }
      if(value.manufacturer_id != ""){
        data.licenece_No = value.manufacturer_id;
      }
      if(value.unit_price!=""){
        data.unit_price = value.unit_price;
      }
      console.log(data);

     Axios.put(baseUrl+'/PharmacyInventory/',data)
      .then((response) => {
        if(response.status == '200'){
          setSnackMessage("Updated Successfully!");
          setSnackType("success");
          setOpenSnack(true);
          getData();
        }
      })
      .catch(function (err) {
          console.log(err);
      });
    }
    getData();
    setActiveItem({
      batch_no:'',
      expiry_date:'',
      id:'',
      manufacturer_id:'',
      manufacturing_date:'',
      name:'',
      quantity:'',
      unit_price:''
    });
    setOpenEdit(false);
  };

  const handleClickOpenAdd = () => {
    setOpenAdd(true);
  };

  const handleCloseAdd = (value) => {
    if(value.closeType==1){
      Axios.post(baseUrl+"/PharmacyInventory", {
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

  const handleClickOpenConfirm = (item) => {
    setActiveItem(item.row);
    setOpenConfirm(true);
  };

  const handleCloseConfirm = (value) => {
    if(value == 1){
      //console.log(activeItem);
      Axios.delete(baseUrl+'/PharmacyInventory/'+PId+'/'+activeItem.batch_no)
      .then((response) => {
        if(response.status == '200'){
          setSnackMessage("Deleted Successfully!");
          setSnackType("success");
          setOpenSnack(true);
          getData();
        }
      })
      .catch(function (err) {
          console.log(err);
      });
    }
    getData();
    setActiveItem({
      batch_no:'',
      expiry_date:'',
      id:'',
      manufacturer_id:'',
      manufacturing_date:'',
      name:'',
      quantity:'',
      unit_price:''
    });
    setOpenConfirm(false);
  };


  const handleCloseSnack = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpenSnack(false);
  };

  useEffect(async () => {
      var Id = localStorage.getItem('userId');
      if(Id != null){
        setPID(Id.toString());
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
            item={activeItem}
            onClose={handleCloseEdit}
          />
          <AddDialog
            open={openAdd}
            onClose={handleCloseAdd}
          />
          <ConfirmDialog
            open = {openConfirm}
            onClose = {handleCloseConfirm}
            batchNo = {activeItem.batch_no}
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
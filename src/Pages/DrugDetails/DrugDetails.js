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
import Grid from '@mui/material/Grid';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import FlatList from 'flatlist-react';

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
    unit_price: 10,
    manufacture_batch_no: "ABCD",
  },
  {
    id: 2,
    batch_no: "00A",
    drug_name: "Penadol",
    expiry_date: "2024-04-04",
    brand_name: "ABC",
    manufacture_date: "2022-04-04",
    quantity: 20,
    unit_price: 10,
    manufacture_batch_no: "ABCD",
  },
  {
    id: 3,
    batch_no: "00A",
    drug_name: "Vitamine E",
    expiry_date: "2024-04-04",
    brand_name: "ABC",
    manufacture_date: "2022-04-04",
    quantity: 20,
    unit_price: 10,
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
  field: "unit_price",
  headerName: "Unit Price",
  width: 200,
},
{
  field: "manufacture_batch_no",
  headerName: "Manufacture's batch no",
  width: 200,
},
]


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
  const { onClose, open } = props;
  const [type, setType] = useState('');
  const [drugName, setDrugName] = useState('');
  const [brandName, setBrandName] = useState('');
  const [quantity, setQuantity] = useState(0);
  const [feedback, setFeedback] = useState('');

  const handleClose = (e) => {
    var feedbackRecord = {
      closeType:e,
      type:type,
      drugName:drugName,
      brandName:brandName,
      quantity:quantity,
      feedback:feedback
    }
    onClose(feedbackRecord);
    setType('');
    setQuantity(0);
    setDrugName('');
    setBrandName('');
    setFeedback('');
  };
  const handleChange = (event) => {
    setType(event.target.value);
  };


  return (
    <Dialog onClose={handleClose} open={open} fullWidth={100}>
      <DialogTitle>Feedback</DialogTitle>
      <DialogContent>
      <InputLabel id="demo-simple-select-standard-label">Type</InputLabel>
        <Select
          autoFocus
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-filled"
          value={type}
          onChange={handleChange}
          label="Type"
          fullWidth
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={"not available"}>Not Available</MenuItem>
          <MenuItem value={"alternative"}>Alternative</MenuItem>
        </Select>
      <TextField
            
            margin="dense"
            id="name"
            label="Drug name"
            type="text"
            fullWidth
            variant="standard"
            value={drugName}
            onChange={(val) => setDrugName(val.target.value)}

          />
          <TextField
            
            margin="dense"
            id="name"
            label="Brand name"
            type="text"
            fullWidth
            variant="standard"
            value={brandName}
            onChange={(val) => setBrandName(val.target.value)}
          />
          {type=="alternative" ? (
          <TextField
            
            margin="dense"
            id="name"
            label="Quantity"
            type="number"
            fullWidth
            variant="standard"
            value={quantity}
            onChange={(val) => setQuantity(val.target.value)}
          />
          ):(<></>)
            
          }
          
          <TextField
            
            margin="dense"
            id="name"
            label="Feedback message"
            type="text"
            fullWidth
            variant="standard"
            value={feedback}
            onChange={(val) => setFeedback(val.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={()=>handleClose(-1)}>Cancel</Button>
          <Button onClick={()=>handleClose(1)}>Add feedback</Button>
        </DialogActions>
    </Dialog>
  );
}

FeedbackDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  feedback: PropTypes.string.isRequired,
};

const renderItem = (item) => {
  console.log(item);
  return (<>
    <Grid item xs={6}>
      <div className='dialog-text'>{item.drug_name}</div>
    </Grid>
    <Grid item xs={3}>
      <div className='dialog-text' style={{paddingLeft:35}}>{item.quantity}</div>
    </Grid>
    <Grid item xs={3}>
      <div className='dialog-text'>{item.amount}</div>
    </Grid>
    </>);
}

function calculateTotal(list){
  var sum = 0;
  list.forEach(item =>{
    sum = sum+ item.amount;
  });
  return sum;
}

function InvoiceDialog(props) {
  const { onClose,itemList, open } = props;
  const handleClose = () => {
    onClose();
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
            <FlatList
              list={itemList}
              renderItem={renderItem}
            />
            <Grid item xs={6}>
              <div className='dialog-title'>Total</div>
            </Grid>
            <Grid item xs={3}>
              <div className='dialog-title'></div>
            </Grid>
            <Grid item xs={3}>
              <div className='dialog-title'>{calculateTotal(itemList)}</div>
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

function InventoryAddDialog(props) {
  const { onClose,amount, open } = props;
  const [qty, setQty] = useState(0);

  const handleClose = (amount) => {
    onClose(amount);
    setQty(0);
  };


  return (
    <Dialog onClose={handleClose} open={open} fullWidth={100}>
      <DialogTitle>Add</DialogTitle>
      <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Quantity"
            type="number"
            fullWidth
            variant="standard"
            value={qty}
            onChange={val => setQty(val.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => handleClose(-1)}>Cancel</Button>
          <Button onClick={() => handleClose(qty)}>Add</Button>
        </DialogActions>
    </Dialog>
  );
}

InventoryAddDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  feedback: PropTypes.string.isRequired,
};

function ConfirmDialog(props) {
  const { onClose,amount, open } = props;

  const handleClose = () => {
    onClose();
  };



  return (
    <Dialog onClose={handleClose} open={open} fullWidth={100}>
      <DialogTitle>Successfull</DialogTitle>
      <DialogContent>
        <div className='dialog-text'>Remaining balance : {amount}</div>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>OK</Button>
        </DialogActions>
    </Dialog>
  );
}

ConfirmDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  feedback: PropTypes.string.isRequired,
};


function DrugDetails(){

  const [feedback, setFeedback] = useState("");
  const [openFeedback, setOpenFeedback] = useState(false);
  const [openInvoice, setOpenInvoice] = useState(false);
  
  const [openInventoryAdd, setOpenInventoryAdd] = useState(false);
  const [openConfirmDialog, setOpenConfirmDialog] = useState(false);
  const [cartData, setCartData] = useState([]);
  const [feedbackData, setFeedbackData] = useState([]);
  const [inventoryData, setInventoryData] = useState(drugTable);
  const [activeInventory, setActiveInventory] = useState({
    id:'',
    batch_no:'',
    drug_name:'',
    expiry_date:'',
    brand_name:'',
    manufacture_date:'',
    quantity:'',
    unit_price:'',
    manufacture_batch_no:''
  })



  const handleClickOpenFeedback = () => {
    setOpenFeedback(true);
  };

  const handleCloseFeedback = (value) => {
    if(value.closeType==1){
      if(value.type == "alternative"){
        var BreakErr = "";
        try{
          inventoryData.forEach(element => {
            if(element.drug_name == value.drugName && element.brand_name == element.brand_name){
              element.quantity = element.quantity - value.quantity;
              var cartItem = {
                id:element.id,
                name:element.drug_name,
                quantity:value.quantity,
                amount:value.quantity*element.unit_price,
              }
              var cartList = [];
              cartData.forEach(element => {
                cartList.push(element);
              });
              cartList.push(cartItem);
              setCartData(cartList);

              var feedBackItem = {
                id: element.id,
                brand_name:value.brandName,
                drug_name:value.drugName,
                quantity:value.quantity,
                Issuable:'Yes',
                reason:value.feedback,
                unit_price:element.unit_price,
                amount: value.quantity*element.unit_price,
              }
              var feedBackList = [];
              feedbackData.forEach(element => {
                feedBackList.push(element);
              });
              feedBackList.push(feedBackItem);
              setFeedbackData(feedBackList);
              throw BreakErr;
            }
          });
        }catch(err){
          if (err !== BreakErr) throw err;
        }
        
      }
      if(value.type == "not available"){
        var feedBackItem = {
          id: feedbackData.length + inventoryData.length +1,
          brand_name:value.brandName,
          drug_name:value.drugName,
          quantity:0,
          Issuable:'No',
          reason:value.feedback,
          unit_price:0,
          amount: 0
        }
        var feedBackList = [];
        feedbackData.forEach(element => {
          feedBackList.push(element);
        });
        feedBackList.push(feedBackItem);
        setFeedbackData(feedBackList);
      }
    }
    setOpenFeedback(false);
  };

  const handleClickOpenInvoice = () => {
    setOpenInvoice(true);
  };

  const handleCloseInvoice = (value) => {
    setOpenInvoice(false);
  };
  const handleClickOpenInventoryAdd = (item) => {
    setActiveInventory(item.row);
    setOpenInventoryAdd(true);
  };

  const handleCloseInventoryAdd = (value) => {
    if(value>0){
      activeInventory.quantity = activeInventory.quantity-value;
      var cartItem = {
        id:activeInventory.id,
        name:activeInventory.drug_name,
        quantity:value,
        amount:value*activeInventory.unit_price,
      }
      var cartList = [];
      cartData.forEach(element => {
        cartList.push(element);
      });
      cartList.push(cartItem);
      setCartData(cartList);
      inventoryData.forEach(element => {
        if(element.id == activeInventory.id){
          element.quantity = activeInventory.quantity;
        }
      });

      var feedBackItem = {
        id: activeInventory.id,
        brand_name:activeInventory.brand_name,
        drug_name:activeInventory.drug_name,
        quantity:value,
        Issuable:'Yes',
        reason:'',
        unit_price:activeInventory.unit_price,
        amount: activeInventory.unit_price * value
      }
      var feedBackList = [];
      feedbackData.forEach(element => {
        feedBackList.push(element);
      });
      feedBackList.push(feedBackItem);
      setFeedbackData(feedBackList);
      handleClickOpenConfirmDialog();
    }
    setOpenInventoryAdd(false);
  };

  const handleClickOpenConfirmDialog = () => {
    setOpenConfirmDialog(true)
  };

  const handleCloseConfirmDialog = (value) => {
    setOpenConfirmDialog(false);
  };

  const deleteCartItem = (e) => {
    var item = e.row;
    var cartList = [];
    cartData.forEach(element => {
      if(element.id != item.id){
        cartList.push(element);
      }
    });
    var feedbackList = [];
    feedbackData.forEach(element => {
      if(element.id != item.id){
        feedbackList.push(element);
      }
    });
    inventoryData.forEach(element => {
      if(element.id == item.id){
        element.quantity = element.quantity + parseInt(item.quantity);
      }
    });
    setCartData(cartList);
    setFeedbackData(feedbackList);
  };

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
            onClick={()=>handleClickOpenInventoryAdd(params)}
            >
            Add
            </div>
        </div>
        );
    },
    },
  ];

  
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
          onClick={()=>deleteCartItem(params)}
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
              <Table rows={cartData} columns={cartColumns.concat(actionColumnCart)} />
            </div>
          </div>
          <div className='big-container'>
            <div className='inventory-container'>
              <span className='listTitle'>Inventory</span>

              <Table rows={inventoryData} columns={drugColumns.concat(actionColumnInventory)} />
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
              <Table rows={feedbackData} columns={invoiceColumns} />
              <div className='totalDiv'>
              <Button variant="contained" onClick={handleClickOpenInvoice} style={{margineLeft: 60}}>
                Send
              </Button>
                <span className='total'>Total :{calculateTotal(feedbackData)}</span>
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
            itemList={feedbackData}
            onClose={handleCloseInvoice}
          />
          <InventoryAddDialog
            open = {openInventoryAdd}
            onClose = {handleCloseInventoryAdd}
            />
          <ConfirmDialog
            open = {openConfirmDialog}
            onClose = {handleCloseConfirmDialog}
            amount = {activeInventory.quantity}
            />

          <Footer/>
        </div>
        
      );
}

export default DrugDetails;
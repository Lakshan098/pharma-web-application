import React, {useState,useEffect, useRef} from 'react';
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
import pdf from '../../Assets/prescription.pdf'
import MuiAlert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';
import { Document, Page, pdfjs   } from "react-pdf";
import {  Link, useNavigate, useParams } from "react-router-dom";
import Axios from "../../api/axios";
import { jsPDF } from "jspdf";
import {firebase} from "../../config";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const baseUrl = "http://localhost:3000";

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

const drugColumns = [{ field: "id", headerName: "ID", width: 70 },
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
  return (<>
    <Grid item xs={2}>
      <div className='dialog-text'>{item.brand_name}</div>
    </Grid>
    <Grid item xs={2}>
      <div className='dialog-text'>{item.drug_name}</div>
    </Grid>
    <Grid item xs={1}>
      <div className='dialog-text'>{item.quantity}</div>
    </Grid>
    <Grid item xs={1}>
      <div className='dialog-text'>{item.Issuable}</div>
    </Grid>
    <Grid item xs={3}>
      <div className='dialog-text'>{item.reason}</div>
    </Grid>
    <Grid item xs={2}>
      <div className='dialog-text'>{item.unit_price}</div>
    </Grid>
    <Grid item xs={1}>
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
  const { onClose, open } = props;
  // const [file, setFile] = useState();

  const handleClose = (value) => {
    var invoiceRecord = {
      closeType:value,
      file:''
    }
    onClose(invoiceRecord);
  };
  const formHandler = (e) => {
    e.preventDefault();
    const file = e.target[0].files[0];
    var invoiceRecord = {
      closeType:1,
      file:file
    }
    onClose(invoiceRecord);
  };



  return (
    <Dialog onClose={formHandler} open={open} fullWidth={true} maxWidth="sm">
      <DialogTitle>Feedback</DialogTitle>
        <DialogContent>
          <form onSubmit={formHandler}>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="File"
            type="file"
            fullWidth
            variant="standard"
          />
          <DialogActions>
          <Button type="submit">Upload</Button>
          <Button onClick={() => handleClose(-1)}>Cancel</Button> 
          </DialogActions>
        </form>
        
        </DialogContent>
        {/* <DialogActions>
          <Button onClick={() => handleClose(-1)}>Cancel</Button>
          <Button onClick={() => handleClose(1)}>Send feedback</Button> */}
        {/* </DialogActions> */}
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

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});


function DrugDetails(){

  const navigate = useNavigate();
  //const ref = collection(firestore,"feedback");

  const [feedback, setFeedback] = useState("");
  const [openFeedback, setOpenFeedback] = useState(false);
  const [openInvoice, setOpenInvoice] = useState(false);
  
  const [openInventoryAdd, setOpenInventoryAdd] = useState(false);
  const [openConfirmDialog, setOpenConfirmDialog] = useState(false);
  const [cartData, setCartData] = useState([]);
  const [feedbackData, setFeedbackData] = useState([]);
  const [inventoryData, setInventoryData] = useState([]);
  const [activeInventory, setActiveInventory] = useState({
    batch_no:'',
    expiry_date:'',
    id:'',
    manufacturer_id:'',
    manufacturing_date:'',
    name:'',
    quantity:'',
    unit_price:''
  });
  const [order, setOrder] = useState({
    customer_id: '',
    delivery_agent_id : '',
    order_id : '',
    pharmacy_id : '',
    has_prescription : '',
    address : '',
    price : '',
    payment : '',
    prescription_image : '',
    prescription_typed : '',
    delivery_need : '',
    delivery_fee : '',
    time_stamp : '',
    status : '',
    customer_approval : '',
    feedback_report : '',
  })
  const [pageNumber, setPageNumber] = useState(1);
  const [snackMessage, setSnackMessage] = useState('');
  const [snackType, setSnackType] = useState('success');
  const [openSnack, setOpenSnack] = useState(false);

  const { orderId } = useParams();
  const pdfRef = useRef(null);

  

  const [searchField, setSearchField] = useState("");
  const [filteredInventory, setFilteredInventory] =  useState(inventoryData);
  var [PId , setPID] = useState('');
  const [progress, setProgress] = useState(0);
  const [loaded,setLoaded] = useState(false);
  const rootElement = document.getElementById("root");

  const getData = async () => {
    var Id = localStorage.getItem('userId');
    setPID(Id.toString());
    
    await Axios.get(baseUrl+'/PharmacyInventory/'+Id.toString())
      .then(async (response) => {
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
        setInventoryData(arr);
        setFilteredInventory(arr);
       

      })
      .catch(function (err) {
          console.log(err);
      });
  }
  
  const getOrderDetails = async () => {
    var Id = localStorage.getItem('userId');
    setPID(Id.toString());
    await Axios.get(baseUrl+'/PharmacyOrder/'+Id.toString()+'/'+orderId)
    .then((orderRes) => {
      let res = orderRes.data[0];
      var odr = {
        customer_id: res.customer_id,
        delivery_agent_id : res.delivery_agent_id,
        order_id : res.order_id,
        pharmacy_id : res.pharmacy_id,
        has_prescription : res.has_prescription,
        address : res.address,
        price : res.price,
        payment : res.payment,
        prescription_image : res.prescription_image,
        prescription_typed : res.prescription_typed,
        delivery_need : res.delivery_need,
        delivery_fee : res.delivery_fee,
        time_stamp : res.time_stamp,
        status : res.status,
        customer_approval : res.customer_approval,
        feedback_report : res.feedback_report,
      }
      setOrder(odr);
      setLoaded(true);
    });
  }

  useEffect(async () => {
    var Id = localStorage.getItem('userId');
    if(Id != null){
      setPID(Id.toString());
        getData();
        getOrderDetails();
    }else{
        navigate("/");
    }
    
    
  }, []);


  const filterData = (val) =>{
    if(val !== ""){
      const filteredList = inventoryData.filter(
        item => {
          return (
            item
            .name
            .toLowerCase()
            .includes(val.toLowerCase()) ||
            item
            .name
            .toLowerCase()
            .includes(val.toLowerCase())
          );
        }
      );
      setFilteredInventory(filteredList);
    }else{
      setFilteredInventory(inventoryData);
    }
  }

  const handleClickOpenFeedback = () => {
    setOpenFeedback(true);
  };

  const handleCloseFeedback = (value) => {
    if(value.closeType==1){
      if(value.type == "alternative"){
        var BreakErr = "";
        try{
          inventoryData.forEach(element => {
            if(element.name == value.drugName || element.name == value.brandName){
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
                batch_no: element.batch_no,
                expiry_date: element.expiry_date,
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
          batch_no: "",
          expiry_date: "",
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
    filterData("");
  };

  const handleClickOpenInvoice = () => {
    setOpenInvoice(true);
  };

  const handleClearAll = () => {
    cartData.forEach(element => {
      inventoryData.forEach(item => {
        if(item.id == element.id){
          item.quantity = item.quantity + parseInt(element.quantity);
        }
      });
    });
    setCartData([]);
    setFeedbackData([]);
  }

  const generatePDF = () => {
    let topic = "Feedback Report";
    let tableHead = "Brand Name \tDrug Name \tQuantity \tIssuable \tReason \t\tUnit Price \tAmount";
    let total = 0;
    let i = 30;
    var doc = new jsPDF();
    doc.setFontSize(22);
    doc.text(5,20,topic);
    doc.setFontSize(12);
    doc.text(5,30,tableHead);
    feedbackData.forEach(element => {
      let row = "";
      if(element.reason == ""){
        row = element.brand_name + "\t\t\t\t" + element.drug_name + "\t\t\t" + element.quantity + "\t\t\t" + element.Issuable + "\t\t\t" + element.reason + "\t\t\t\t" + element.unit_price + "\t\t\t" + element.amount;
      }else{
        row = element.brand_name + "\t\t\t\t" + element.drug_name + "\t\t\t" + element.quantity + "\t\t\t" + element.Issuable + "\t\t" + element.reason + "\t\t\t" + element.unit_price + "\t\t\t" + element.amount;
      }
      total = total + parseInt(element.amount);
      i = i+10;
      doc.setFontSize(10);
      doc.text(5,i,row);
    });
    let row = "Total \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t" + total;
    doc.setFontSize(12);
    doc.text(5,i+10,row);
    var seconds = new Date().getTime();
    doc.save(seconds+".pdf");
  }


  const handleCloseInvoice = async (value) => {
    if(value.closeType ==1){
      console.log(value.file.name);
      var Id = localStorage.getItem('userId');
      let inventoryUpdateData = {
        pid : Id,
        items : []
      }
      feedbackData.forEach(element => {
        if(element.Issuable == "Yes"){
          let item = {
            batch_no: element.batch_no,
            expiry_date: element.expiry_date,
            quantity: parseInt(element.quantity)
          }
          inventoryUpdateData.items.push(item);
        }
      });
      
      var reference = firebase.storage().ref().child(value.file.name+new Date().toISOString()+"feedback").put(value.file);
      
      try{
        await reference;
        await reference.on("state_changed", (snapshot) => {
            const prog = Math.round(
                (snapshot.bytesTransferred / snapshot.totalBytes) * 100
            );
        },
            (err) => console.log(err),
            () => {
                getDownloadURL(reference.snapshot.ref).then(  (url) => {
                    console.log(url);
                    let data = {
                      order_id: order.order_id,
                      url: url
                    }
                    Axios.put(baseUrl+'/PharmacyOrder/feedback/'+Id+'/'+order.order_id,data)
                    .then(async (res) => {
                      if(res.status == '200'){
                        console.log(res);
                        await Axios.put(baseUrl+'/PharmacyInventory/reduce_quantity',inventoryUpdateData)
                        .then(async (response) => {    
                          if(response.status == '200'){
                            setSnackMessage("Feedback Send Successfully!");
                            setSnackType("success");
                            setOpenSnack(true);
                          }
                        }); 
                      }
                    });
                })
            }
        )
      } catch (e){
        console.log(e);
      }
      
       
      
    }
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
        name:activeInventory.name,
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
        brand_name:activeInventory.name,
        drug_name:activeInventory.name,
        batch_no: activeInventory.batch_no,
        expiry_date: activeInventory.expiry_date,
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
    filterData("");
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

  const handleCloseSnack = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpenSnack(false);
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
            <div className='image-container' style={{overflow: 'hidden'}}>
            {/* <Document file={pdf} onLoadSuccess={onDocumentLoadSuccess}>
              <Page pageNumber={pageNumber} width="400" height="300"/>
            </Document> */}
            {/* <img src="https://www.madeformedical.com/wp-content/uploads/2018/07/vio-4.jpg" width="450" height="400"/> */}
            
            {order.has_prescription == "1" ? (
              <img src={order.prescription_image} width="450" height="400"/>
            ):(
              <div dangerouslySetInnerHTML={{ __html: order.prescription_image }} />
              
            )}

            </div>
            <div className='drug-container'>
              <div className="datatableTitle" style={{paddingLeft: 10}}>
              <span className='listTitle'>Cart</span>
              
              </div>
              <Table rows={cartData} columns={cartColumns.concat(actionColumnCart)} />
            </div>
          </div>
          <div className='big-container'>
            <div className='inventory-container-2'>
              <span className='listTitle'>Inventory</span>
              <div className='searchbar-container'>
                <TextField
                  hiddenLabel
                  className='searchbar'
                  id="filled-hidden-label-small"
                  placeholder="Search"
                  variant="filled"
                  size="small"
                  value={searchField}
                  onChange={(val)=>{setSearchField(val.target.value);
                                    filterData(val.target.value);}}
                />
              </div>
              <Table rows={filteredInventory} columns={drugColumns.concat(actionColumnInventory)} />
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
                
             
                <span className='total'>Total :{calculateTotal(feedbackData)}</span>
                <div style={{width: 400, flexDirection:'row'}}>
                <Button variant="contained" onClick={generatePDF} style={{margineLeft: 20}}>
                  Generate
                </Button>
                <Button variant="contained" onClick={handleClickOpenInvoice} style={{margineLeft: 20, left:10}}>
                  Send
                </Button>
                <Button variant="outlined" color="error" onClick={handleClearAll} style={{marginLeft: 20}}>
                  Clear
                </Button>
                </div>
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
            ref={pdfRef}
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

export default DrugDetails;
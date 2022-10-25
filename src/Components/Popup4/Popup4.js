import * as React from 'react';
import Button from '@mui/material/Button';
import {
  FaPencilAlt,
} from "react-icons/fa";
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Axios from "../../api/axios";

export default function Popup4({ test }) {
  const [open, setOpen] = React.useState(false);
  const [accountnumber, setAccountNumber] = React.useState();
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const changeAccountNumber = async () => {
    // var config = {
    //     method: 'post',
    //     url: ('http://localhost:3000/User/updateUsername'),
    //     headers: {},
    // };
    await Axios.post('http://localhost:3000/User/updateAccountNumber', {
      uid: test,
      user_type: "pharmacy",
      account_number: accountnumber
    });
    // navigate('/PharmacyHome');
    window.location.reload();
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        <FaPencilAlt />
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Edit Your Account Number</DialogTitle>
        <DialogContent>
          {/* <DialogContentText>
            To subscribe to this website, please enter your email address here. We
            will send updates occasionally.
          </DialogContentText> */}
          <TextField
            autoFocus
            margin="dense"
            id="name"
            type="text"
            fullWidth
            variant="standard"
            onChange={(e) => setAccountNumber(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={changeAccountNumber}>Update</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}



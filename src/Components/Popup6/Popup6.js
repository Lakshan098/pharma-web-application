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

export default function Popup6({test}) {
  const [open, setOpen] = React.useState(false);
  const [address, setAddress] = React.useState(false)

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const changeAddress =async () => {
    // var config = {
    //     method: 'post',
    //     url: ('http://localhost:3000/User/updateUsername'),
    //     headers: {},
    // };
    await Axios.post('http://localhost:3000/User/updateAddress', {
      uid: test,
      user_type: "pharmacy",
      address: address
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
        <DialogTitle>Edit Your Address</DialogTitle>
        <DialogContent>
          {/* <DialogContentText>
            To subscribe to this website, please enter your email address here. We
            will send updates occasionally.
          </DialogContentText> */}
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Address"
            type="text"
            fullWidth
            variant="standard"
            onChange={(e) => setAddress(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={changeAddress}>Update</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

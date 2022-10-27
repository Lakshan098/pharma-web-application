import React from "react";
import { useEffect, useRef, useState } from "react";
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
import { Routes, Route, useNavigate, useLocation, useSearchParams, useParams } from 'react-router-dom';
import Axios from "../../api/axios";


export default function Popup({test}) {
  const [open, setOpen] = useState(false);
  const [username, setUserName] = useState('');
  console.log(username);
  const handleClickOpen = () => {
    setOpen(true);
  };
  // const validate = (values) => {
    
  //   if (!values.username) {
  //     errors.username = "Username is required";
  //   }
   
  //   return errors;
  // }
  const handleClose = () => {
    setOpen(false);
  };

  console.log(test);
    var Id = test;
    

    const changePharmacyName =async () => {
      console.log(username);
        // var config = {
        //     method: 'post',
        //     url: ('http://localhost:3000/User/updateUsername'),
        //     headers: {},
        // };
        await Axios.post('http://localhost:3000/User/updateUsername', {
          uid: test,
          user_type: "pharmacy",
          username: username
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
        <DialogTitle>Edit Your Name</DialogTitle>
        <DialogContent>
          {/* <DialogContentText>
            To subscribe to this website, please enter your email address here. We
            will send updates occasionally.
          </DialogContentText> */}
          <TextField
            autoFocus
            margin="dense"
            id="username"
            name="username"
            value={username}
            onChange={(e) => setUserName(e.target.value)}
            type="email"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={changePharmacyName}>Update</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}



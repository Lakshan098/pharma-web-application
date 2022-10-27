import React from 'react';
import './DeletePopup.css';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

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



export default () => (
    
  <Popup trigger={<button class="Reject-btn">Reject</button>} position="right center">
    <div>Are you shure! you want to reject this gys</div>
    
  </Popup>
);

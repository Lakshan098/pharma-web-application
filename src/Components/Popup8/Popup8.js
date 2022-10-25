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
import { Routes, Route, useNavigate, useLocation, useSearchParams, useParams } from 'react-router-dom';
import Axios from "../../api/axios";

export default function Popup({ test }) {
    const [open, setOpen] = React.useState(false);
    const navigate = useNavigate();

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    console.log(test);
    var Id = test;
    

    const changeDeliveryStatus = () => {
        var config = {
            method: 'get',
            url: ('http://localhost:3000/OngoingViewDetailsNoDelivery/ChangeOngoingViewDetailsNoDelivery/' + Id),
            headers: {},
        };
        Axios(config);
        navigate('/PharmacyHome');
        window.location.reload();
    };

    return (
        <div>
            <Button class="add-complete-btn" variant="outlined" onClick={handleClickOpen}>
                <h4>Completed Order</h4>
            </Button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Confirmation</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Are you sure?
                    </DialogContentText>

                </DialogContent>
                <DialogActions>
                    <Button onClick={changeDeliveryStatus}>Yes</Button>
                    <Button onClick={handleClose}>No</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

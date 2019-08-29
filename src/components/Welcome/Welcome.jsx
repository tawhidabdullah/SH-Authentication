import React from 'react';
import Logo from "../img-comp/Logo";
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Typography } from '@material-ui/core';

const Welcome = () => {
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  }

  const handleClose = () => {
    setOpen(false);
  }


  return (
    <div className='welcomeContainer'>
    <div class="welcome">
      <div class="welcome__head">
        <Logo />
        <h1 class="welcome__head__title">
          Welcome to Shobhobe!
      </h1>
      </div>
      <div class="welcome__foot">
        <p class="welcome__foot__description">
          Press below to unlock your dashboard
      </p>
        <a href='#' class="welcome__foot-addorder-btn" onClick={handleClickOpen}>+ Add Order</a>
        <p class="welcome__foot__text">
          Change Store Info
      </p>
      </div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Wanna add some Order?"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <Typography variant='h3'>
              Comming Soon
            </Typography>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary" autoFocus>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
    </div>
  )
}

export default Welcome; 

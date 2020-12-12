import React, { useState } from 'react';
import { Snackbar, makeStyles } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';

const useStyles = makeStyles((theme) => ({
  root: {
    top: theme.spacing(2),
  },
}));

function Notifier(props) {

  const classes = useStyles();
  const { notify, setNotify } = props;

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') return;
    setNotify({
      ...notify,
      isOpen: false,
    });
  };

  return (
    <Snackbar
      className={classes.root}
      open={notify.isOpen}
      autoHideDuration={1500}
      anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
      onClose={handleClose}
    >
      <Alert severity={notify.type} onClose={handleClose}>
        {notify.message}
      </Alert>
    </Snackbar>
  )
}

export default Notifier;

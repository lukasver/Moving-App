import React, { useState } from 'react';
import { Container, Button, Modal } from '@material-ui/core';
import { DataGrid } from '@material-ui/data-grid';
import { makeStyles } from '@material-ui/core/styles';
import EmailForm from '../EmailForm';
// import { ReCAPTCHA } from 'react-google-recaptcha';
// import Recaptcha from 'react-recaptcha'; 
//data
import { dormitorio, bano, cocina, living, balcon } from '../../data.js';

const reckey = '6LctRvwZAAAAANNAEAnuFCHIeiUD6aHxwZoXCf6g'
let arrayToSend = [];

const useStyles = makeStyles(theme => ({
  paper: {
    position: 'absolute',
    width: 400,
    border: '2px solid black',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    backgroundColor: 'black',
  },
  centerModal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
}))

function DataTable({ location }) {

  const classes = useStyles();

  const [showingData, setShowingData] = useState([])
  // const [rowsPerPage, setRowsPerPage] = useState(DEFAULT_ROWS_PER_PAGE);
  const [open, setOpen] = useState(false);

  useState(() => {
    setShowingData(rows)
  }, [])

  // ================================  HANDLERS ================================ // 

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleClick = (event) => {
    const { id, item } = event.data
    if (event.isSelected) {
      arrayToSend.push({ id, item });
    } else {
      arrayToSend = arrayToSend.filter(item => item.id !== id)
    }
    console.log(arrayToSend)
  }

  // ================================  TABLE SETTINGS ================================ // 

  const columns = [
    { field: 'id', numeric: false, headerName: 'ID', width: 70 },
    { field: 'item', numeric: false, headerName: 'ARTICULO', width: 130 },
    { field: 'description', numeric: false, sortable: false, headerName: 'DESCRIPCION', width: 600 },
    { field: 'img', numeric: false, sortable: false, headerName: 'FOTOS', width: 100 },
    { field: 'precio', numeric: true, headerName: 'PRECIO U.', width: 130 },
    { field: 'send', sortable: false, width: 120, headerName: <Button onClick={handleOpen} variant="contained" disableElevation color="primary">ENVIAR</Button> }
  ];

  const ModalBody = (
    <div className={classes.paper}>
      <EmailForm handleClose={handleClose} />
    </div>
  );

  // const recaptchaLoaded = () => {
  //   console.log('captcha loaded')
  // }

  return (
    <Container>
      <h1> {location} </h1>
      <div style={{ height: 800, width: '100%' }}>
        <DataGrid rows={showingData} columns={columns} autoPageSize checkboxSelection autoHeight
          onRowSelected={handleClick} />
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        className={classes.centerModal}
      >
        {ModalBody}
      </Modal>
    </Container>
  );
}

DataTable.defaultProps = {
  location: 'Dormitorio'
}

const rows = dormitorio.map(function (item, index) {
  if (item.listed) {
    item.id = index + 1;
    return item
  } else {
    return
  }
}).filter(item => item !== undefined)


export default DataTable;
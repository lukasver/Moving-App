import React from 'react';
import { Modal, Box } from '@material-ui/core';
import EmailForm from '../EmailForm';
import PhotoGrid from './PhotoGrid';

function MultiModal(props) {

  const { open, setOpen, classes, type, dataToSend } = props;

  // ================================  HANDLERS ================================ // 

  // const handleOpen = () => {
  //   setOpen(true);
  // };

  const handleClose = () => {
    setOpen(false);
  };

  const submitBody = (
    <div className={classes.paper}>
      <EmailForm dataToSend={dataToSend} handleClose={handleClose} />
    </div>
  );

  const photoBody = (images) => (
    <div className={classes.paper}>
      <PhotoGrid photos={images} />
    </div >
    );

  return (
    <Box component='div' style={{ display: 'flex' }}>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        className={classes.centerModal}
      >
        {type === 'photos' ? photoBody() : submitBody}
      </Modal>
    </Box>
  )
}

export default MultiModal;
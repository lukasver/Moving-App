import React, { useState, useRef } from 'react';
import { send } from 'emailjs-com';
import { Box, Link, Button, IconButton, Typography } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import { useStyles } from './styles.css.js';
import Recaptcha from 'react-recaptcha';
import { counter, htmlGenerator } from '../../utils';
import CloseIcon from '@material-ui/icons/Close';
import Swal from 'sweetalert2'
import WhatsAppIcon from '@material-ui/icons/WhatsApp';

function EmailForm({ handleClose, dataToSend }) {

  const classes = useStyles();
  let contactFormId = counter();
  const recaptchaRef = useRef();

  const [values, setValues] = useState(initialValues);
  const [human, setHuman] = useState(false);
  const [errors, setErrors] = useState(true);

  // ====== MODALS ====== //
  const loadingModal = () => {
    Swal.fire({
      title: 'Enviando...',
      willOpen: () => {
        Swal.showLoading()
      }, backdrop: `#36454f,0.4`, showConfirmButton: false
    })
  }
  const errorModal = () => {
    Swal.fire({
      icon: 'error',
      title: 'Uups...',
      text: 'Ocurrió un error, tu listado no fue enviado 😞...',
      footer: 'Mejor mandanos un <a href=https://wa.link/s9ed8s>Whatsapp 📱</a>',
      showConfirmButton: false
    })
  }
  const successModal = () => {
    Swal.fire({
      icon: 'success',
      title: 'E-mail enviado. Gracias!!',
      showConfirmButton: false,
      timer: 1500
    })
  }

  // ====== HANDLERS ====== //
  const handleChange = (event) => {
    event.preventDefault();
    const { id, value } = event.target;
    setValues({ ...values, [id]: value });
    setErrors(validate({ ...values, [id]: value }));
  };

  function onChange(value) {
    console.log("Captcha value:", value);
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const formData = { ...values, contactId: contactFormId(), itemList: htmlGenerator(dataToSend) }
    loadingModal();
    send(process.env.REACT_APP_EMAILJS_SERVICE, template, formData, process.env.REACT_APP_EMAILJS_USERID)
      .then(res => {
        successModal()
      })
      .catch(error => {
        errorModal()
      })
    handleClose()
    return
  }

  const recaptchaLoaded = () => {
    console.log(recaptchaRef)
    return
  }

  const verifyCallback = (value) => {
    setHuman(true)
    return
  }

  return (
    <form className={classes.root} onSubmit={handleSubmit} autoComplete="off">
      <div style={{ position: 'relative' }}>
        <IconButton onClick={handleClose} style={{ position: 'absolute', top: -30, right: -45 }} aria-label="closeModal" size="small">
          <CloseIcon color='primary' fontSize="small" />
        </IconButton>
      </div>
      <Box component='div' mb={2}>
        <Typography variant='h4' align='center' color='primary'>Completa tus datos</Typography>
      </Box>
      <div>
        <TextField
          error={errors.contactName ? true : false}
          label="Nombre"
          variant="filled"
          helperText={errors.contactName ? 'Campo Requerido' : null}
          fullWidth
          id={'contactName'}
          value={values.contactName}
          onChange={handleChange}
        />
      </div>
      <div>
        <TextField
          error={errors.email ? true : false}
          label="Email"
          variant="filled"
          helperText={errors.email ? 'Campo Requerido' : null}
          fullWidth
          id={'email'}
          value={values.email}
          onChange={handleChange}
        />
      </div>
      <div>
        <TextField
          error={errors.whatsapp ? true : false}
          label="Whatsapp"
          helperText={errors.whatsapp ? 'Campo Requerido' : null}
          variant="filled"
          placeholder='Ej: 341 6291123'
          fullWidth
          id={'whatsapp'}
          value={values.whatsapp}
          onChange={handleChange}
        />
      </div>
      <Box className={classes.captchaCont} component="div" m={1}>
        <Recaptcha
          sitekey={process.env.REACT_APP_RECAPTCHA_FRONTEND}
          size='normal'
          render='explicit'
          onloadCallback={recaptchaLoaded}
          verifyCallback={verifyCallback}
          theme='light'
          hl='es-419'
          ref={recaptchaRef}
        />
      </Box>
      <Button
        disabled={
          (!human || !errors || JSON.stringify(errors) !== JSON.stringify({}))
            ? true
            : false
        }
        className={classes.submitbtn}
        color="primary"
        variant="contained"
        type="submit"
        fullWidth
      >
        {!human || !errors || JSON.stringify(errors) !== JSON.stringify({})
          ? 'Completar todos los campos'
          : 'Enviar'}
      </Button>
      <Box component='div' style={{display: 'flex', alignContent:'center', justifyContent: 'center', paddingBottom: 10}}>
      <Link href='https://wa.link/s9ed8s' style={{display: 'flex', alignContent:'center', justifyContent: 'center', minWidth: '100%'}}color="inherit"><Typography variant='h6'> si preferís mandanos un whatsapp</Typography> <WhatsAppIcon size='small' style={{color: 'green', margin: 4}} /></Link>
      </Box>
    </form>
  );
}

const initialValues = {
  contactName: '',
  email: '',
  whatsapp: '',
}
const template = 'contact_form'

const validate = (input) => {
  let errors = {};
  if (!input.contactName) {
    errors.contactName = 'Este campo es requerido';
  }
  if (!input.whatsapp) {
    errors.whatsapp = 'Este campo es requerido';
  }
  if (!input.email) {
    errors.email = 'Este campo es requerido';
  } else if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(input.email)) {
    errors.email = 'Ingresar un formato de e-mail válido';
  }
  return errors;
};

export default EmailForm;
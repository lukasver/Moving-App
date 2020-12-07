import React, { useState } from 'react';
import { init, sendForm } from 'emailjs-com';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { useStyles } from './styles.css.js';
import Recaptcha from 'react-recaptcha'; 

// init("user_mIb5hdem6LzLjZrCjoiQq");
// sendForm('contact_service', 'contact_form', this)



function EmailForm() {

  const classes = useStyles();

  const initialValues = {
    contactName: '',
    email: '',
    whatsapp: '',
  }

  const [values, setValues] = useState(initialValues);
  const [human, setHuman] = useState(false);
  const [errors, setErrors] = useState(true);

  const recaptchaRef = React.useRef();

  

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

  const handleSubmit = async () => {
    console.log('submited')
    const token = await recaptchaRef.current.executeAsync()
    console.log(token)
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
          fullWidth
          id={'whatsapp'}
          value={values.whatsapp}
          onChange={handleChange}
        />
      </div>
      <Recaptcha
        sitekey={process.env.REACT_APP_RECAPTCHA_FRONTEND}
        size='normal'
        render='explicit'
        onloadCallback={recaptchaLoaded}
        verifyCallback={verifyCallback}
        theme='dark'
        hl='es-419'
        ref={recaptchaRef}
      />
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
        {!errors || JSON.stringify(errors) !== JSON.stringify({})
          ? 'Completar todos los campos'
          : 'Crear Recruiter'}
      </Button>
    </form>
  );
}

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
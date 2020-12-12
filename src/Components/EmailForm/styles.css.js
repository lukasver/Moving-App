import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: '2rem',
    '& .MuiTextField-root': {
      // maxWidth: 400,
      // minWidth: 400,
      marginBottom: 20,
    },
    '& .MuiInputBase-input': {
      color: '#111111',
    },
    '& .MuiFormControl-root': {
    },
    '& .Mui-disabled': {
      backgroundColor: '#3f51b5',
      color: '#FFFFFF',
      opacity: '50%'
    },
    '& .MuiFilledInput-root': {
      backgroundColor: '#FFF',
      '&:hover': {},
    },
  },
  submitbtn: {
    maxWidth: 600,
    marginBottom: theme.spacing(3),
    // '&:hover': {
    //   color: '#111111',
    //   backgroundColor: '#FFF001',
    // },
  },
  captchaCont: {
    textAlign: "-webkit-center"
  }
}));
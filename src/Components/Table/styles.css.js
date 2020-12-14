import { makeStyles, lighten } from '@material-ui/core/styles';


export const useStyles = makeStyles(theme => ({
  paper: {
    position: 'relative',
    boxShadow: theme.shadows[3],
    backgroundColor: '#F6F1EB',
    width: '100%',
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
  root: {
    '& .Mui-selected': {
      backgroundColor: lighten(theme.palette.primary.light, 0.85),
      '&:hover': {
        backgroundColor: lighten(theme.palette.primary.light, 0.7),
      }
    },
    '& .Mui-checked': {
      color: theme.palette.primary.dark
    },
    fontSize: '18px',
  },
  table: {
    minWidth: 750,
  },
  visuallyHidden: {
    border: 0,
    clip: 'rect(0 0 0 0)',
    height: 1,
    margin: -1,
    overflow: 'hidden',
    padding: 0,
    position: 'absolute',
    top: 20,
    width: 1,
  },
}))

export const useToolbarStyles = makeStyles((theme) => ({
  root: {
    borderBottom: '1px solid grey',
    '@media (max-width: 960px)': {
      display: 'flex',
      flexDirection: 'column',
    }
  },
  highlight:
    theme.palette.type === 'light'
      ? {
        color: theme.palette.primary.main,
        backgroundColor: lighten(theme.palette.primary.light, 0.85),
      }
      : {
        color: theme.palette.text.primary,
        backgroundColor: theme.palette.primary.dark,
      },
  title: {
    flex: '1 1 100%',
    fontWeight: 500,
  },
  disabledBtn: {
    minWidth: 250,
    color: '#FFFFFF !important',
    backgroundColor: `#303f9f !important`,
    opacity: '50%',
    '@media (max-width: 960px)': {
      minWidth: 'auto',
      marginBottom: 10
    }
  },
  sendButton: {
    minWidth: 250,
    '@media (max-width: 960px)': {
      minWidth: 'auto',
      marginTop: 5,
      marginBottom: 10
    }
  }
}));

export const modalStyles = makeStyles((theme) => ({
  paper: {
    backgroundColor: '#F6F1EB',
    paddingRight: '3rem',
    paddingLeft: '3rem',
    border: '2px solid black',
  },
  centerModal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
}))

import { makeStyles } from '@material-ui/core/styles';

export const navStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(4),
  },
  navButtons: {
    color: 'white',
    display: 'flex',
    minWidth: '200px',
  },
  linkButtons: {
    textDecoration: 'none',
    color: 'white',
  },
  btnContainer: {
    display: 'inline-flex',
    justifyContent: 'space-around',
    flexGrow: 1,
  }
}));


export const drawerStyles = makeStyles((theme) => ({
  list: {
    width: 250,
    backgroundColor: '#F6F1EB',
  },
  fullList: {
    width: 'auto',
  },
  linkButtons: {
    textDecoration: 'none',
    color: '#000'
  },
}));
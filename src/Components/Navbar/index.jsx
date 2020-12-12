import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Box } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import FlightTakeoffIcon from '@material-ui/icons/FlightTakeoff';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
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

function NavBar() {
  const classes = useStyles();
  const navButtons = ['Living', 'Comedor', 'Dormitorio', 'Bano', 'Exterior']

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar variant="dense">
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <Link className={classes.linkButtons} to='/'><FlightTakeoffIcon/></Link>
          </IconButton>
          <Box component='div' className={classes.btnContainer}>
            {navButtons.map(item => {
              return <Link className={classes.linkButtons} to={item}><Button className={classes.navButtons}>{item.toUpperCase() + ' '}</Button></Link>
            })}
          </Box>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default NavBar
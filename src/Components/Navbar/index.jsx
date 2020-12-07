import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  navButtons: {
    color: 'white',
  }
}));

export default function DenseAppBar() {
  const classes = useStyles();
  const navButtons = ['Living', 'Comedor', 'Dormitorio', 'Baño', 'Exterior']

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar variant="dense">
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit">
           {navButtons.map(item => {
             return <Button className={classes.navButtons}>{item.toUpperCase()+ ' '}</Button>
           })}
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
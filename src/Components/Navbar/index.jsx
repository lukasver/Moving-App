import React, { useState } from 'react';
import { Button, Box } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import FlightTakeoffIcon from '@material-ui/icons/FlightTakeoff';
import ListIcon from '@material-ui/icons/List';
import { Link } from 'react-router-dom';
import { navStyles, drawerStyles } from './styles.css';
import Drawer from './Drawer'
import * as areas from '../../data.js';


function NavBar() {
  const classes = navStyles();

  const [click, setClick] = useState(false)
  const [buttons, setButtons] = useState(true)
  const [drawerState, setDrawerState] = useState(false);

  const navButtons = Object.keys(areas)

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      console.log(window.innerWidth)
      setButtons(false);
    } else {
      setButtons(true);
    }
  }

  window.addEventListener('resize', showButton);


  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar variant="dense">

          {buttons ?
            <IconButton onClick={() => setDrawerState(true)} edge="start" className={classes.menuButton} color="inherit" aria-label="home">
              <Link className={classes.linkButtons} to='/'><FlightTakeoffIcon /></Link>
            </IconButton>
            :
            <IconButton onClick={() => setDrawerState(true)} edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
              <ListIcon />
            </IconButton>
          }
          <Box component='div' className={classes.btnContainer}>
            {buttons && navButtons.map(item => {
              return <Link className={classes.linkButtons} to={item}><Button className={classes.navButtons}>{item.toUpperCase() + ' '}</Button></Link>
            })}
          </Box>
        </Toolbar>
        <Drawer buttons={navButtons} state={drawerState} setState={setDrawerState} classes={drawerStyles()} />
      </AppBar>
    </div>
  );
}

export default NavBar;
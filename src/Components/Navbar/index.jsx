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


function NavBar({useWindowSize}) {
  const [width, height] = useWindowSize();
  const classes = navStyles();

  console.log(width, height)

  // const [click, setClick] = useState(false)
  const [drawerState, setDrawerState] = useState(false);

  const navButtons = Object.keys(areas)

  // const handleClick = () => setClick(!click);
  // const closeMobileMenu = () => setClick(false);

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar variant="dense">

          {width >= 960 ?
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="home">
              <Link className={classes.linkButtons} to='/'><FlightTakeoffIcon /></Link>
            </IconButton>
            :
            <IconButton onClick={() => setDrawerState(true)} edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
              <ListIcon />
            </IconButton>
          }
          <Box component='div' className={classes.btnContainer}>
            {width >= 960 && navButtons.map(item => {
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
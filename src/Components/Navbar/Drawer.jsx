import React from 'react';
import { Link } from 'react-router-dom';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import { Button, Box } from '@material-ui/core';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import CloseIcon from '@material-ui/icons/Close';

function SwipeableTemporaryDrawer({ buttons, state, setState, classes }) {

  if (buttons[0] !== 'home') buttons.unshift('home')

  const toggleDrawer = (open) => (event) => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setState(open);
  };

  const list = () => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <Box component='div'>
        <Button style={{borderRadius: 0}} variant='contained' fullWidth color='primary' ><CloseIcon /></Button>
      </Box>
      <Divider />
      <List>
        {buttons.map((text, index) => (
          <Link className={classes.linkButtons} to={text === 'home' ? '/' : `/${text}`}><ListItem button key={index}>
            <ListItemIcon><ArrowForwardIosIcon /></ListItemIcon>
            <Button color='primary' fullWidth variant='contained'>{text.toUpperCase()}</Button>
          </ListItem>
          </Link>
        ))}
      </List>
    </div>
  );
  console.log('acaa', state)

  return (

      <div>
        {['left'].map((anchor) => (
          <>
            <SwipeableDrawer
              key={anchor}
              anchor={anchor}
              open={state}
              onClose={toggleDrawer(false)}
              onOpen={toggleDrawer(true)}
              PaperProps={{ style: { backgroundColor: '#F6F1EB' } }}
              // ModalProps={{ onBackdropClick: console.log(state) }}
            >
              {list(anchor)}
            </SwipeableDrawer>
          </>
        ))}
      </div>
  );
}

export default SwipeableTemporaryDrawer;
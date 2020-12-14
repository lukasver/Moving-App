import React from 'react';
import { Link } from 'react-router-dom';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

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
      <List>
        {buttons.map((text, index) => (
          <Link className={classes.linkButtons} to={text === 'home' ? '/' : `/${text}`}><ListItem button key={index}>
            <ListItemIcon><ArrowForwardIosIcon /></ListItemIcon>
            <Button color='primary' fullWidth variant='contained'>{text.toUpperCase()}</Button>
            {/* <ListItemText primary={text.toUpperCase()} /> */}
            <Divider />
          </ListItem>
          </Link>
        ))}
      </List>
    </div>
  );

  return (
    <div>
      {['left'].map((anchor) => (
        <React.Fragment key={anchor}>
          <SwipeableDrawer
            anchor={anchor}
            open={state}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
            PaperProps={{style: {backgroundColor: '#F6F1EB'}}}
          >
            {list(anchor)}
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </div>
  );
}

SwipeableTemporaryDrawer.defaultProps = {
  buttons: ['Living', 'Dormitorio']
}

export default SwipeableTemporaryDrawer;
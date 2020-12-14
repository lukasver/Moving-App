import { makeStyles } from '@material-ui/core';

export const footerStyles = makeStyles((theme) => ({
  footer: {
    position: 'relative',
    bottom: 0,
    right: 0,
    left: 0,
    background: theme.palette.primary.main,
    borderTop: '2px solid gray',
    paddingTop: 10,
    paddingBottom: 10,
  },
  link: {
    color: 'white'
  }
})) 


import React from 'react';
import { footerStyles } from './styles.css';
import { Typography, Grid, Paper, Link } from '@material-ui/core'
import OpenInNewIcon from '@material-ui/icons/OpenInNew';

function Footer() {

  const classes = footerStyles();

  return (
      <Paper elevation={3}>
        <Grid
          className={classes.footer}
          container
          direction="row"
          justify="center"
          alignItems="center">
          <Typography variant="subtitle2" style={{ color: 'white' }}> Made with ❤️ by <Link target="_blank" rel="noopener" className={classes.link} href='https://github.com/lukasver'>lukasver <OpenInNewIcon style={{ fontSize: 10 }} /></Link></Typography>
        </Grid>
      </Paper>
  )
}

export default Footer;
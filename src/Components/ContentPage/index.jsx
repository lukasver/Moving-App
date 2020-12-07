import React from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyle = makeStyles(theme => ({
  contentContainer: {
    minHeight: 300,
    backgroundColor: 'black',
    color: 'white'
  }
}))


function ContentHome() {
  const classes = useStyle();

  return (
    <div>
        <Grid className={classes.contentContainer} container item xs={12} sm={12}>
          <h1>holaaaaa</h1>
        </Grid>
    </div>
  );
}

export default ContentHome;
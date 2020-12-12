import React from 'react';
import { Box, Grid, Typography} from '@material-ui/core';
import TatuYLucas2 from '../../img/foto2.png';
import { contentPageStyles } from './styles.css.js';
import clsx from 'clsx';


function ContentHome({location}) {
  const classes = contentPageStyles();
  const [animatedPlane, setAnimatedPlane] = React.useState(null);

  React.useEffect(()=>{
    setTimeout(()=> setAnimatedPlane(true),2000)
  },[])


  return (
    <Box container component='div' className={classes.mainContainer}>
      <Grid className={(location !== '/') ? classes.contentContainerRandom : classes.contentContainer} row container xs={12} sm={12}>
        <Grid className={clsx('animate__animated', 'animate__rotateIn')} item xs={12} sm={4} >
          <img src={TatuYLucas2} className={classes.photo} height='200' width='200' alt='Tatu y Lucas' />
        </Grid>
        <Grid item container
          direction="row"
          justify="space-around"
          alignItems="center"
          xs={0} sm={8}
          style={{paddingRight:200}}>
            <Typography variant='h1' className={clsx('animate__animated', {'animate__fadeInTopLeft': !animatedPlane, 'animate__fadeOutTopRight': animatedPlane})}>{!animatedPlane ? '🛬' : '🛫'}</Typography>
            <Typography variant='h1' className={clsx('animate__animated', {'animate__fadeInTopLeft': !animatedPlane, 'animate__fadeOutTopRight': animatedPlane})}>{!animatedPlane ? '🛬' : '🛫'}</Typography>
        </Grid>
      </Grid>
    </Box>
  );
}

export default ContentHome;
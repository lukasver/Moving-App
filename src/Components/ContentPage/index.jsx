import React from 'react';
import { Box, Grid, Typography} from '@material-ui/core';
import TatuYLucas2 from '../../img/foto2.png';
import { contentPageStyles } from './styles.css.js';
import clsx from 'clsx';


function ContentHome() {
  const classes = contentPageStyles();
  const [animatedPlane, setAnimatedPlane] = React.useState(null);

  React.useEffect(()=>{
    setTimeout(()=> setAnimatedPlane(true),2000)
  },[])

  return (
    <Box container component='div' className={classes.mainContainer}>
      <Grid className={classes.contentContainer} row container xs={12} sm={12}>
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
          {/* <Paper elevation={3} className={classes.paper}>
            <Typography align='justify' variant='h5'>
              {text}
            </Typography>
          </Paper> */}
        </Grid>
      </Grid>
    </Box>
  );
}

const text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus tristique, elit ac porta sagittis, augue risus blandit magna, ut tristique purus nisl viverra orci. Duis vel turpis quis lectus finibus sagittis. Integer est mi, suscipit ac nisi vel, feugiat venenatis risus. Curabitur vitae rutrum velit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nullam dictum et diam sit amet bibendum. Nulla facilisi. Proin auctor, dolor vitae congue dignissim, tortor velit ultrices enim, in commodo lacus sapien id eros. Nullam finibus, erat nec accumsan varius, magna elit sagittis lacus, ut pharetra ipsum ipsum eget leo. Aliquam erat volutpat. Mauris finibus posuere tortor luctus pretium. Nullam vehicula sodales neque.'
export default ContentHome;
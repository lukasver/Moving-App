import React from 'react';
import { Paper, Box, Typography, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  paper: {
    margin: '20px 20px 20px 20px',
    backgroundColor: '#F6F1EB',
    minHeight: 450,
    height: 'auto'
  }
}))

function HomeContent() {

  const classes = useStyles()

  return (
    <Paper elevation={3} className={classes.paper}>
      <Box component='div' pt={2}>
        <Typography align='center' variant='h3'>
          {Title}
        </Typography>
      </Box>
      <Box component='div' m={9} mt={7} pb={9}>
        <Typography align='justify' variant='h6'>
          {Body}
        </Typography>
      </Box>
    </Paper>
  )
}

let Title = 'Hola! Somos Tatu y Lucas!'

let Body = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quis faucibus ex, non aliquet tellus. Suspendisse at lacus vitae ligula posuere accumsan. Vestibulum orci nisl, suscipit in sagittis sed, molestie ut ipsum. Nulla iaculis elit sit amet mi scelerisque lacinia. Nulla interdum vehicula sapien, nec iaculis orci ornare sit amet. Vivamus dictum ex massa, non commodo neque mollis sed. Maecenas vehicula leo non libero sollicitudin blandit. Mauris tincidunt eu neque vitae efficitur. Sed facilisis faucibus rhoncus. Vestibulum imperdiet tempor iaculis. Interdum et malesuada fames ac ante ipsum primis in faucibus.'

export default HomeContent;
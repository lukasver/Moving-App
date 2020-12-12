import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: '#000000',
    margin: '0 -3rem 0 -3rem'
  },
  gridList: {
    padding: theme.spacing(1),
    width: 600,
    height: 550,
  },
}));

function PhotoGrid({photos, comingSoon}) {

  const classes = useStyles();
  

  return (
    <div className={classes.root}>
      <GridList cellHeight={540} className={classes.gridList} cols={1}>
        {comingSoon.map((tile) => (
          <GridListTile key={tile.img} cols={tile.cols || 1}>
            <img src={tile.img} alt={tile.title} />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}

PhotoGrid.defaultProps = {
  photos: [{
    img: 'https://http2.mlstatic.com/D_NQ_NP_2X_915095-MLA43247838014_082020-F.webp'
  },{
    img: 'https://i1.wp.com/www.webelectro.com.ar/wp-content/uploads/2016/08/tv-led-ken-brown-32-kb-32-2260-hd-smart-wifi-313801-MLA20415305994_092015-O.jpeg?fit=480%2C480&ssl=1'
  },{
    img: 'https://www.nikzer.com/wp-content/uploads/2019/01/10.jpg'
  }],
  comingSoon: [{
    img: 'https://static.wixstatic.com/media/f186d1_8a28db63b7574babb9854cfd0805842e~mv2.gif'
  }]
}

export default PhotoGrid;
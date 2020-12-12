import { makeStyles } from '@material-ui/core/styles';
import banner from '../../img/fondo.JPG';

export const contentPageStyles = makeStyles(theme => ({
  contentContainerRandom: {
    minHeight: 400,
    backgroundImage: `url(https://picsum.photos/1320/460)`,
    backgroundSize: '100% 120%',
    opacity: 20,
  },
  contentContainer: {
    minHeight: 400,
    backgroundImage: `url(${banner})`,
    backgroundSize: '100% 120%',
    opacity: 20,
  },
  mainContainer: {
    border: '12px solid #3f51b5',
    borderImageSlice: 1,
    borderWidth: '5px',
    // borderImageSource: 'linear-gradient(to left, #ffffff 0%, #b6b6b6 25%, #3f51b5 100%)'
  },
  paper: {
    margin: theme.spacing(3),
    maxHeight: 300,
    minHeight: 300,
    minWidth: 500,
    backgroundColor: 'white',
    opacity: '80%',
  },
  photo: {
    width: '400px',
    height: '400px',
    borderRadius: '50%',
    overflow: 'hidden',
    border: '5px solid black',
    margin: '20px',
    'animation-name': 'bounce'
  },
}))
import TableHead from '@material-ui/core/TableHead';
import TableCell from '@material-ui/core/TableCell';
import Checkbox from '@material-ui/core/Checkbox';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import Toolbar from '@material-ui/core/Toolbar';
import DeleteIcon from '@material-ui/icons/Delete';
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
import { Typography, Button, Box } from '@material-ui/core';
import { useToolbarStyles } from './styles.css.js';
import clsx from 'clsx';

export function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

export function getComparator(order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

export function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

export function EnhancedTableHead(props) {
  const { classes, onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };
  const columns = [
    { id: 'id', numeric: false, label: 'ID' },
    { id: 'item', numeric: false, label: 'ARTICULO' },
    { id: 'description', numeric: false, label: 'DESCRIPCION' },
    { id: 'img', numeric: false, label: 'FOTOS' },
    { id: 'precio', numeric: false, label: 'PRECIO U.' },
  ];
  // { id: 'send', sortable: false, width: 120, label: <Button variant="contained" disableElevation color="primary">ENVIAR</Button> }

  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox">
          <Checkbox
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{ 'aria-label': 'select all' }}
          />
        </TableCell>
        {columns.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? 'right' : 'left'}
            padding={headCell.disablePadding ? 'none' : 'default'}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <span className={classes.visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </span>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

export const EnhancedTableToolbar = (props) => {
  const classes = useToolbarStyles();
  const { numSelected, emptySelected } = props;


  const handleEmpty = () => {
    emptySelected([])
    return;
  }

  return (
    <Toolbar
      className={clsx(classes.root, {
        [classes.highlight]: numSelected > 0,
      })}
    >
      {numSelected > 0 ? (
        <Typography className={classes.title} color="inherit" variant="subtitle1" component="div">
          {props.location.toUpperCase()} - {numSelected} items seleccionados
        </Typography>
      ) : (
          <Typography className={classes.title} variant="h6" id="tableTitle" component="div">
            {props.location.toUpperCase()}
          </Typography>
        )}

      {numSelected > 0 ? (
        <Box component='div' style={{display: 'flex'}}>
          <Tooltip title="Borrar">
            <IconButton style={{marginRight: 50}} onClick={handleEmpty} aria-label="delete">
              <DeleteIcon color='primary' />
            </IconButton>
          </Tooltip>
          <Tooltip title="Enviar">
            <Button className={classes.sendButton} onClick={props.handleSendForm} color='primary' variant='contained'>Enviar listado</Button>
          </Tooltip>
        </Box>
      ) : (
          <Tooltip title="Enviar">
            <Button className={classes.disabledBtn} onClick={props.handleSendForm} color='primary' variant='contained' disabled>Seleccionar artículos</Button>
          </Tooltip>
        )}
    </Toolbar>
  );
};
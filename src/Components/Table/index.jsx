import React, { useState } from 'react';
import { Container, Paper } from '@material-ui/core';
import { useStyles, modalStyles } from './styles.css.js';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import Checkbox from '@material-ui/core/Checkbox';
import TableContainer from '@material-ui/core/TableContainer';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import IconButton from '@material-ui/core/IconButton';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import PanoramaIcon from '@material-ui/icons/Panorama';
import MyModal from './MultiModal';
import Notifier from './Notifier';
import useMediaQuery from '@material-ui/core/useMediaQuery';


//data
import { getComparator, stableSort, EnhancedTableHead, EnhancedTableToolbar } from './tableSettings';
import * as areas from '../../data.js';

function EnhancedTable({ params }) {

  const classes = useStyles();
  const [order, setOrder] = useState('asc');
  const [orderBy, setOrderBy] = useState('calories');
  const [selected, setSelected] = useState([]);
  // const [finalSelected, setFinalSelected] = useState([]);
  const [page, setPage] = useState(0);
  const [dense, setDense] = useState(true);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [openSendModal, setOpenSendModal] = useState(false);
  const [modalType, setModalType] = useState('');
  const [notify, setNotify] = useState({
    isOpen: false,
    message: '',
    type: '',
  });

  const rows = areas[params.toLowerCase()].filter(item => item.listed)

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = rows.map((n) => ({ id: n.id, name: n.item }));
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, id, name) => {
    const selectedIndex = selected.findIndex(item => item.id === id);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, { id, name });
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      );
    }
    setSelected(newSelected);
    event.target.checked ?
      setNotify({
        isOpen: true,
        message: 'Item agregado',
        type: 'success',
      }) :
      setNotify({
        isOpen: true,
        message: 'Item removido',
        type: 'error',
      })
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleChangeDense = (event) => {
    setDense(event.target.checked);
  };

  const isSelected = (id) => (selected.findIndex(item => item.id === id) !== -1);

  const emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

  const handlePhotos = () => {
    setModalType('photos');
    setOpenSendModal(true);
  }

  const handleSendForm = () => {
    setModalType('submit');
    setOpenSendModal(true);
    return
  }

  return (
    <Container maxWidth="xl" className={classes.root}>
      <Paper variant="outlined" elevation={3} className={classes.paper}>
        <EnhancedTableToolbar emptySelected={setSelected} location={params} numSelected={selected.length} handleSendForm={handleSendForm} />
        <TableContainer>
          <Table
            className={classes.table}
            aria-labelledby="tableTitle"
            size={dense ? 'small' : 'medium'}
            aria-label="enhanced table"
          >
            <EnhancedTableHead
              classes={classes}
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={rows.length}
            />
            <TableBody>
              {stableSort(rows, getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  const isItemSelected = isSelected(row.id);
                  const labelId = `enhanced-table-checkbox-${index}`;

                  return (
                    <TableRow
                      className={classes.selectedTr}
                      hover
                      role="checkbox"
                      aria-checked={isItemSelected}
                      tabIndex={-1}
                      key={row.id}
                      selected={isItemSelected}
                    >
                      <TableCell padding="checkbox">
                        <Checkbox
                          onClick={(event) => handleClick(event, row.id, row.item)}
                          checked={isItemSelected}
                          inputProps={{ 'aria-labelledby': labelId }}
                        />
                      </TableCell>
                      <TableCell align="left" component="th" id={labelId} scope="row" padding="none">
                        {row.id}
                      </TableCell>
                      <TableCell align="left">{row.item}</TableCell>
                      <TableCell align="left">{row.description}</TableCell>
                      <TableCell align="left">{<IconButton aria-label='photos' onClick={handlePhotos}><PanoramaIcon color='primary' /></IconButton>}</TableCell>
                      <TableCell align="left">{row.price}</TableCell>
                    </TableRow>
                  );
                })}
              {emptyRows > 0 && (
                <TableRow style={{ height: (dense ? 33 : 53) * emptyRows }}>
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
      </Paper>
      <FormControlLabel
        control={<Switch checked={dense} onChange={handleChangeDense} />}
        label={dense ? 'Expandir Filas' : 'Comprimir Filas'}
      />
      <MyModal dataToSend={selected} open={openSendModal} type={modalType} setOpen={setOpenSendModal} classes={modalStyles()} />
      <Notifier notify={notify} setNotify={setNotify} />
    </Container>
  );
}

export default EnhancedTable;

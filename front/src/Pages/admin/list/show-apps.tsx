import {Container,makeStyles,Paper,Typography, createStyles, Theme} from '@material-ui/core';
import {AppTopBar} from '../../../Components/AppBar';
import {TypeForm} from '../../../util/typeForm.enum';
import { ReactNode} from 'react';
import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';

import whatsapp from './whatsapp.svg';


interface Column {

  id: 'id'|'patientId' | 'doctorId' | 'clinicId' | 'date' ;
  label: string;
  minWidth ? : number;
  align: 'center';
  format ? : (value: number) => string;
}

const columns: Column[] = [{
    id: 'id',
    label: 'Id',
    minWidth: 218,
    align: 'center'
},
{
  id: 'patientId',
    label: 'Paciente',
    minWidth: 218,
    align: 'center'
},
{
    id: 'doctorId',
    label: 'Médico',
    align: 'center',
    minWidth: 218,
},
{
    id: 'date',
    label: 'Data',
    minWidth: 218,
    align: 'center',
}
];

interface Data {
  id: number;
  patientId: string;
  doctorId: string;
  clinicId: number;
  date: string;
}

function createData(id: number, patientId: string, doctorId: string, clinicId: number, date: string): Data {

  return { id, patientId, doctorId, clinicId, date};
}

const rows = [
  createData(1,'Alberto', 'Alberto',1111 , '25/02/2021'),
  createData(2,'Gustavo', 'Gustavo',2222 , '25/02/2021'),
  createData(3,'Danilo', 'Danilo',3333 , '25/02/2021'),
  createData(4,'Pedro', 'Pedro',4444 , '25/02/2021'),
];

const useStyles = makeStyles({
  container: {
      marginTop: '3%',
      textAlign: 'center',
      display: 'flex',
      justifyContent: 'space-evenly',
      alignItems: 'center',
      flexDirection: 'column',
  },
  paper: {
      width: '75%',
      padding: '2%',
      display: 'flex',
      flexDirection: 'column',
  },
  main: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
  },
  root: {
      width: '100%',
  },
  container2: {
      maxHeight: 440,
  },
  
});

interface Props {
  type: TypeForm;
  form: ReactNode;
}


export const ShowApps = function () {
      const {
          container,
          paper,
          main,
      } = useStyles();

      const classes = useStyles();
      const [page, setPage] = React.useState(0);
      const [rowsPerPage, setRowsPerPage] = React.useState(10);

      const handleChangePage = (event: unknown, newPage: number) => {
          setPage(newPage);
      };

      const handleChangeRowsPerPage = (event: React.ChangeEvent < HTMLInputElement > ) => {
          setRowsPerPage(+event.target.value);
          setPage(0);
      };

  return (
  <>
    <AppTopBar />
    <Container className={container}>
      <Paper className={paper} elevation={3}>
        <main className={main}>
          <Typography variant="h3">Essas são as Consultas disponíveis.</Typography>
          <article className="obj-item">
            <header>
              <div>

                <Paper className={classes.root}>
                  <TableContainer className={classes.container}>
                    <Table stickyHeader aria-label="sticky table">
                      <TableHead>
                        <TableRow>
                          {columns.map((column) => (
                          <TableCell key={column.id} align={column.align} style={{ minWidth: column.minWidth }}>
                            {column.label}
                          </TableCell>
                          ))}
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
                        return (
                        <TableRow hover role="checkbox" tabIndex={-1} key={row.patientId}>
                          {columns.map((column) => {
                          const value = row[column.id];
                          return (
                          <TableCell key={column.id} align={column.align}>
                            {column.format && typeof value === 'number' ? column.format(value) : value}
                          </TableCell>
                          );
                          })}
                        </TableRow>
                        );
                        })}
                      </TableBody>
                    </Table>
                  </TableContainer>
                  <TablePagination rowsPerPageOptions={[10, 25, 100]} component="div" count={rows.length}
                    rowsPerPage={rowsPerPage} page={page} onChangePage={handleChangePage}
                    onChangeRowsPerPage={handleChangeRowsPerPage} />
                </Paper>
              </div>
            </header>
          </article>
        </main>
      </Paper>
    </Container>
  </>
  );
  };
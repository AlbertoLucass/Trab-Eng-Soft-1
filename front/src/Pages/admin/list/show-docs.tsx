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
import {Link} from 'react-router-dom';

import whatsapp from './whatsapp.svg';


interface Column {
  id: 'id'|'name' | 'crm' | 'cpf' | 'birthday' | 'rg' | 'clinicId' | 'email' | 'phone';
  label: string;
  minWidth ? : number;
  align: 'center';
  format ? : (value: number) => string;
}

const columns: Column[] = [{
      id: 'id',
      label: 'Id',
      minWidth: 118,
      align: 'center'
  },
  {
    id: 'name',
      label: 'Nome',
      minWidth: 118,
      align: 'center'
  },
  {
      id: 'crm',
      label: 'CRM',
      align: 'center',
      minWidth: 118,
  },
  {
      id: 'cpf',
      label: 'CPF',
      minWidth: 118,
      align: 'center',
      format: (value: number) => value.toLocaleString('pt-BR'),
  },
  {
      id: 'rg',
      label: 'RG',
      minWidth: 118,
      align: 'center',
      format: (value: number) => value.toFixed(2),
  },
  {
    id: 'birthday',
    label: 'Nascimento',
    minWidth: 118,
    align: 'center',
    format: (value: number) => value.toLocaleString('pt-BR'),
},
{
  id: 'clinicId',
  label: 'N° Clínica',
  minWidth: 118,
  align: 'center',
  format: (value: number) => value.toLocaleString('pt-BR'),
},
{
  id: 'email',
  label: 'Email',
  minWidth: 118,
  align: 'center',
  format: (value: number) => value.toLocaleString('pt-BR'),
},
{
    id: 'phone',
    label: 'Whatsapp',
    minWidth: 118,
    align: 'center',
},
];

interface Data {
  id: number;
  name: string;
  crm: number;
  cpf: string;
  rg: string
  phone: string;
  clinicId: number;
  email: string;
  birthday: string;
}

function createData(id: number, name: string, crm: number, cpf: string, birthday: string, rg: string, clinicId: number, email: string, phone: string): Data {

  return { id, name, crm, cpf, birthday, rg, clinicId, email , phone};
}

const rows = [
  createData(1,'Alberto', 111111,'111111' , '111111', '111111',1, 'alberto@ufba.br', '111'),
  createData(2,'Gustavo', 222222,'222222' , '222222', '222222',2, 'gustavo@ufba.br', '111'),
  createData(3,'Danilo', 333333,'333333' , '333333', '333333',3, 'danilo@ufba.br', '111'),
  createData(4,'Pedro', 444444,'444444' , '444444', '444444',4, 'pedro@ufba.br', '111'),
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
      width: '95%',
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


export const ShowDocs = function () {
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
          <Typography variant="h3">Esses são os Médicos disponíveis.</Typography>
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
                        <TableRow hover role="checkbox" tabIndex={-1} key={row.crm}>
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
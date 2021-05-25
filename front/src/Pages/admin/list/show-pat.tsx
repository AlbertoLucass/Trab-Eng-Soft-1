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
  id: 'id'|'name' | 'cpf' | 'clinicId' | 'road' | 'cep' | 'number' | 'city' | 'state' | 'email' | 'birthday' |'phone'
  label: string;
  minWidth ? : number;
  align: 'center';
  format ? : (value: number) => string;
}

const columns: Column[] = [{
      id: 'id',
      label: 'Id',
      minWidth: 90,
      align: 'center',
  },
  {
    id: 'name',
      label: 'Nome',
      minWidth: 90,
      align: 'center',
  },
  {
      id: 'cpf',
      label: 'CPF',
      minWidth: 90,
      align: 'center',
  },
  {
    id: 'clinicId',
    label: 'N° Clínica',
    minWidth: 90,
    align: 'center',
},
  {
      id: 'road',
      label: 'Rua',
      minWidth: 90,
      align: 'center',
  },
  {
    id: 'cep',
    label: 'CEP',
    minWidth: 90,
    align: 'center',
},
{
  id: 'number',
  label: 'N° Casa',
  minWidth: 90,
  align: 'center',
},
{
  id: 'city',
  label: 'N° Casa',
  minWidth: 90,
  align: 'center',
},
{
  id: 'state',
  label: 'Estado',
  minWidth: 90,
  align: 'center',
},
{
  id: 'email',
  label: 'Email',
  minWidth: 90,
  align: 'center',
},
{
  id: 'birthday',
  label: 'Nascimento',
  minWidth: 90,
  align: 'center',
},
{
  id: 'phone',
  label: 'Whatsapp',
  minWidth: 90,
  align: 'center',
},
];

interface Data {
  id: number;
  name: string;
  cpf: string;
  clinicId: number;
  road: string;
  cep: string;
  number: number;
  city: string;
  state: string;
  email: string;
  birthday: string;
  phone: string;
}

function createData(id: number, name: string, cpf: string, clinicId: number, road: string, cep: string, number: number, city: string, state: string, email: string, birthday: string, phone: string): Data {

  return { id, name, cpf, clinicId, road, cep, number , city, state, email, birthday, phone};
}

const rows = [
  createData(1, 'Alberto', '1111', 1, 'UFBA', '1515', 9 , 'Ibirataia', 'BA', 'alberto@ufba.br', '20/05/1900', '784512'),
  createData(2, 'Gustavo', '2222', 1, 'UFBA', '1515', 9 , 'Camacari', 'BA', 'gustavo@ufba.br', '20/05/1900', '784512'),
  createData(3, 'Pedro', '3333', 1, 'UFBA', '1515', 9 , 'Itabuna', 'BA', 'pedro@ufba.br', '20/05/1900', '784512'),
  createData(4, 'Danilo', '4444', 1, 'UFBA', '1515', 9 , 'Salvador', 'BA', 'danilo@ufba.br', '20/05/1900', '784512'),
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
      width: '108%',
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

export interface Doc {
  //nome, crm,cpf,telefone,numero da clinica, email
  id: number;
  name: string;
  crm: number;
  cpf: number;
  rg: string
  telefone: string;
  clinicIda: string;
  email: string;
}


export const ShowPats = function () {
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
          <Typography variant="h3">Esses são os Pacientes disponíveis.</Typography>
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
                        <TableRow hover role="checkbox" tabIndex={-1} key={row.cpf}>
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
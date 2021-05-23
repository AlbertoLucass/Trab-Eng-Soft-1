import {Container,makeStyles,Paper,Typography} from '@material-ui/core';
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

import whatsapp from './whatsapp.svg';


interface Column {
  id: 'id'|'name' | 'CRM' | 'cpf' | 'telefone' | 'rg' | 'nClinica' | 'email';
  label: string;
  minWidth ? : number;
  align ? : 'right';
  format ? : (value: number) => string;
}

const columns: Column[] = [{
      id: 'id',
      label: 'Id',
      minWidth: 125
  },
  {
    id: 'name',
      label: 'Nome',
      minWidth: 125
  },
  {
      id: 'CRM',
      label: '\u00a0CRM',
      minWidth: 125
  },
  {
      id: 'cpf',
      label: 'CPF\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0',
      minWidth: 125,
      align: 'right',
      format: (value: number) => value.toLocaleString('pt-BR'),
  },
  {
      id: 'rg',
      label: 'RG\u00a0\u00a0\u00a0',
      minWidth: 125,
      align: 'right',
      format: (value: number) => value.toFixed(2),
  },
  {
    id: 'telefone',
    label: '\u00a0\u00a0\u00a0\u00a0Telefone',
    minWidth: 125,
    align: 'right',
    format: (value: number) => value.toLocaleString('pt-BR'),
},
{
  id: 'nClinica',
  label: 'N° Clínica',
  minWidth: 125,
  align: 'right',
  format: (value: number) => value.toLocaleString('pt-BR'),
},
{
  id: 'email',
  label: 'Email',
  minWidth: 125,
  align: 'right',
  format: (value: number) => value.toLocaleString('pt-BR'),
},
];

interface Data {
  id: number;
  name: string;
  CRM: string;
  cpf: string;
  telefone: string;
  rg: string;
  nClinica: number;
  email: string;
}

function createData(id: number, name: string, CRM: string, cpf: string, telefone: string, rg: string, nClinica: number, email: string): Data {

  return { id, name, CRM, cpf, telefone, rg, nClinica, email };
}

const rows = [
  createData(1,'Alberto', '111111','111111' , '111111', '111111',1, 'alberto@ufba.br'),
  createData(2,'Gustavo', '222222','222222' , '222222', '222222',2, 'gustavo@ufba.br'),
  createData(3,'Danilo', '333333','333333' , '333333', '333333',3, 'danilo@ufba.br'),
  createData(4,'Pedro', '444444','444444' , '444444', '444444',4, 'pedro@ufba.br'),
  /*createData('China', 'CN', 1403500365, 9596961),
  createData('Italy', 'IT', 60483973, 301340),
  createData('United States', 'US', 327167434, 9833520),
  createData('Canada', 'CA', 37602103, 9984670),
  createData('Australia', 'AU', 25475400, 7692024),
  createData('Germany', 'DE', 83019200, 357578),
  createData('Ireland', 'IE', 4857000, 70273),
  createData('Mexico', 'MX', 126577691, 1972550),
  createData('Japan', 'JP', 126317000, 377973),
  createData('France', 'FR', 67022000, 640679),
  createData('United Kingdom', 'GB', 67545757, 242495),
  createData('Russia', 'RU', 146793744, 17098246),
  createData('Nigeria', 'NG', 200962417, 923768),
  createData('Brazil', 'BR', 210147125, 8515767),*/
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

export interface Doc {
  //nome, crm,cpf,telefone,numero da clinica, email
  id: number;
  name: string;
  crm: number;
  cpf: number;
  rg: string
  telefone: string;
  nClinica: string;
  email: string;
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
                        <TableRow hover role="checkbox" tabIndex={-1} key={row.CRM}>
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
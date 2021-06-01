import { Container, makeStyles, Paper, Typography } from '@material-ui/core';
import { AppTopBar } from '../../Components/AppBar';
import { ChangeEvent, useState } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';

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
  columns: any[];
  rows: any[];
  type: string;
}

export const Show = ({ columns, rows, type }: Props) => {
  const { container, paper, main } = useStyles();

  const classes = useStyles();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  function correctText() {
    if (type === 'as consultas') {
      return 'Essas são ' + type;
    } else {
      return 'Esses são ' + type;
    }
  }
  <Typography variant="h3">Esses são {type}.</Typography>;

  return (
    <>
      <AppTopBar />
      <Container className={container}>
        <Paper className={paper} elevation={3}>
          <main className={main}>
            <Typography variant="h3">{correctText()}.</Typography>
            <article style={{ width: '100%' }}>
              <header>
                <div>
                  <Paper className={classes.root}>
                    <TableContainer className={classes.container}>
                      <Table stickyHeader aria-label="sticky table">
                        <TableHead>
                          <TableRow>
                            {columns.map((column) => (
                              <TableCell
                                key={column.id}
                                align={column.align}
                                style={{ minWidth: column.minWidth }}
                              >
                                {column.label}
                              </TableCell>
                            ))}
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {rows
                            .slice(
                              page * rowsPerPage,
                              page * rowsPerPage + rowsPerPage,
                            )
                            .map((row) => {
                              return (
                                <TableRow
                                  hover
                                  role="checkbox"
                                  tabIndex={-1}
                                  key={row.id}
                                >
                                  {columns.map((column) => {
                                    const value = row[column.id];
                                    return column.id === 'phone' ? (
                                      <a
                                        href={`https://api.whatsapp.com/send?l=pt_BR&phone=55${value}&text=Olá Sr.(a), A sua consulta precisará ser remarcada."`}
                                        target="_blank"
                                        rel="noreferrer"
                                        style={{ textDecoration: 'none' }}
                                      >
                                        <TableCell
                                          key={column.id}
                                          align={column.align}
                                        >
                                          {column.format &&
                                          typeof value === 'number'
                                            ? column.format(value)
                                            : value}
                                        </TableCell>
                                      </a>
                                    ) : (
                                      <TableCell
                                        key={column.id}
                                        align={column.align}
                                      >
                                        {column.format &&
                                        typeof value === 'number'
                                          ? column.format(value)
                                          : value}
                                      </TableCell>
                                    );
                                  })}
                                </TableRow>
                              );
                            })}
                        </TableBody>
                      </Table>
                    </TableContainer>
                    <TablePagination
                      rowsPerPageOptions={[10, 25, 100]}
                      component="div"
                      count={rows.length}
                      rowsPerPage={rowsPerPage}
                      page={page}
                      onChangePage={handleChangePage}
                      onChangeRowsPerPage={handleChangeRowsPerPage}
                    />
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

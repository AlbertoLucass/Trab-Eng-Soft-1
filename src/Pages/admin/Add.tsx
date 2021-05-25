import { Container, makeStyles, Paper, Typography } from '@material-ui/core';
import { AppTopBar } from '../../Components/AppBar';
import { TypeForm } from '../../util/typeForm.enum';
import { ReactNode } from 'react';

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
    width: '80%',
    padding: '2%',
    display: 'flex',
    flexDirection: 'column',
  },
  main: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
});

interface Props {
  type: TypeForm;
  form: ReactNode;
}

export const Add = function ({ type, form }: Props) {
  const { container, paper, main } = useStyles();

  return (
    <>
      <AppTopBar />
      <Container className={container}>
        <Paper className={paper} elevation={3}>
          <main className={main}>
            <Typography variant="h3">Olá Administrador</Typography>
            <Typography>
              Para adicionar {type} preencha este formulário:
            </Typography>
          </main>
          {form}
        </Paper>
      </Container>
    </>
  );
};

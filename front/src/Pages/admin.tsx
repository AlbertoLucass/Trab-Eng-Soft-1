import {
  Container,
  TextField,
  Button,
  makeStyles,
  CircularProgress,
  Typography,
} from '@material-ui/core';
import { useState, FormEvent } from 'react';
import { useQuery } from 'react-query';
import { login } from '../util/login';
import { useHistory } from 'react-router';

const useStyles = makeStyles({
  container: {
    textAlign: 'center',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'stretch',
    flexDirection: 'column',
  },
  margin: {
    margin: 12,
  },
  circular: {
    display: 'flex',
    justifyContent: 'center',
    margin: 12,
  },
});

export const Admin = () => {
  const history = useHistory();
  const { container, margin, circular } = useStyles();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [runQuery, setRun] = useState(false);
  const { isLoading, error } = useQuery<Promise<void>>(
    'login',
    () => login({ email, password }, history),
    { enabled: runQuery },
  );
  const handleForm = (event: FormEvent) => {
    event.preventDefault();
    setRun(true);
  };

  return (
    <form noValidate onSubmit={handleForm}>
      <Container className={container} maxWidth="xs">
        <TextField
          variant="filled"
          label="email"
          name="email"
          type="email"
          color="secondary"
          placeholder="Por favor escreva seu Email"
          className={margin}
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          fullWidth
        />
        <TextField
          variant="filled"
          label="password"
          name="password"
          type="password"
          color="secondary"
          placeholder="Por favor escreva sua Senha"
          className={margin}
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          fullWidth
        />
        {isLoading && (
          <div className={circular}>
            <CircularProgress color="primary" />
          </div>
        )}
        <Button
          className={margin}
          fullWidth
          variant="contained"
          color="secondary"
          type="submit"
        >
          Login
        </Button>
        {error && (
          <Typography variant="h6">Não foi possível fazer login.</Typography>
        )}
      </Container>
    </form>
  );
};

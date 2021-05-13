import { Button, Container, makeStyles, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { SelectAppointment } from '../Components/SelectAppointment';

const useStyles = makeStyles({
  container: {
    textAlign: 'center',
    height: '100vh',
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexDirection: 'column',
  },
  admin: {
    paddingTop: 10,
    display: 'flex',
    justifyContent: 'flex-end',
  },
});

export const Home = () => {
  const { container, admin } = useStyles();

  return (
    <Container maxWidth="lg">
      <div className={admin}>
        <Link
          to="/admin"
          style={{
            textDecoration: 'none',
          }}
        >
          <Button variant="contained">Admin</Button>
        </Link>
      </div>
      <div className={container}>
        <div>
          <Typography variant="h1">Cline</Typography>
          <Typography variant="h4">Você economizando tempo!</Typography>
        </div>
        <SelectAppointment />
      </div>
    </Container>
  );
};

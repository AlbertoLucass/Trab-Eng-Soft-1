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
  title:{ 
    fontSize: '9em'
  },
  top:{
    fontSize: '1.5em'
  },
});

export const Home = () => {
  const { container, admin , title, top} = useStyles();

  return (
    <Container maxWidth="lg">
      <div className={admin} >
        <Link
          to="/admin"
          style={{
            textDecoration: 'none',
          }}
        >
          <Button className={top} variant="contained">Admin</Button>
        </Link>
      </div>
      <div className={container}>
        <div>
          <Typography className={title} >Cline</Typography>
          <Typography variant="h3" >Você economizando tempo!</Typography>
        </div>
        <SelectAppointment />
      </div>
    </Container>
  );
};

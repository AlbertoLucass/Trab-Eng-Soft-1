import { makeStyles, Paper, Typography } from '@material-ui/core';
import { Response } from '../@types/Response';
import { format } from 'date-fns';

interface Props {
  response: Response;
  index: number;
  total: number;
}

const useStyles = makeStyles({
  container: {
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'space-evenly',
    flexDirection: 'column',
    alignItems: 'stretch',
    margin: '5%',
    padding: '2%',
  },
  section: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'stretch',
  },
});

const Appointment = ({ response, index, total }: Props) => {
  const classes = useStyles();
  const { Clinic, Date: date, Doctor, Patient } = response;

  const formattedDate = format(new Date(date), 'mm:HH');
  return (
    <Paper className={classes.container}>
      <section className={classes.section}>
        <Typography variant="body1">
          Número {index + 1} de {total}
        </Typography>
      </section>
      <section className={classes.section}>
        <Typography>Paciente: {Patient.name}</Typography>
        <Typography>Data: {formattedDate}</Typography>
      </section>
      <section className={classes.section}>
        <Typography>Médico(a): {Doctor.name}</Typography>
      </section>
      <section className={classes.section}>
        <Typography>Clinica: {Clinic.name}</Typography>
        <Typography>Tel: {Clinic.phone}</Typography>
      </section>
    </Paper>
  );
};

export { Appointment };

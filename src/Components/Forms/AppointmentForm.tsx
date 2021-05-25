import { makeStyles, TextField } from '@material-ui/core';
import { FormFooter } from '../FormFooter';
import { useForm, Controller } from 'react-hook-form';

const useStyles = makeStyles({
  form: {
    display: 'flex',
    height: '70vh',
    paddingTop: '10%',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'stretch',
    alignContent: 'space-around',
    flexWrap: 'nowrap',
  },
});

interface Fields {
  patientId: string;
  doctorId: string;
  clinicId: number;
  date: string;
}

export const AppointmentForm = () => {
  const { control, handleSubmit } = useForm<Fields>();
  const onSubmit = (data: Fields) => console.log(data);
  const { form } = useStyles();
  return (
    <form className={form} noValidate onSubmit={handleSubmit(onSubmit)}>
      <Controller
        control={control}
        name="patientId"
        render={({ field }) => (
          <TextField
            variant="outlined"
            label="ID Paciente"
            {...field}
            fullWidth
            required
            color="secondary"
          />
        )}
      />
      <Controller
        control={control}
        name="doctorId"
        render={({ field }) => (
          <TextField
            variant="outlined"
            label="ID Doutor"
            {...field}
            fullWidth
            required
            color="secondary"
          />
        )}
      />
      <Controller
        control={control}
        name="clinicId"
        render={({ field }) => (
          <TextField
            variant="outlined"
            label="Número Clinica"
            {...field}
            fullWidth
            required
            color="secondary"
          />
        )}
      />
      <Controller
        control={control}
        name="date"
        render={({ field }) => (
          <TextField
            id="date"
            {...field}
            label="Data de Nascimento"
            autoFocus
            variant="outlined"
            type="date"
            color="secondary"
            required
            InputLabelProps={{
              shrink: true,
            }}
          />
        )}
      />
      <FormFooter />
    </form>
  );
};

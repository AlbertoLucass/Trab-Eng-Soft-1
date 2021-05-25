import { useForm, Controller } from 'react-hook-form';
import { Grid, makeStyles, TextField } from '@material-ui/core';
import { FormFooter } from '../FormFooter';

const useStyles = makeStyles({
  form: {
    display: 'flex',
    height: '70vh',
    paddingTop: '4%',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'stretch',
    alignContent: 'space-around',
    flexWrap: 'nowrap',
  },
});

interface Fields {
  name: string;
  email: string;
  address: {
    road: string;
    cep: string;
    state: string;
    city: string;
    number: number;
  };
  cpf: string;
  phone: string;
  birthday: string;
  clinicId: number;
}

export const PatientForm = () => {
  const { control, handleSubmit } = useForm<Fields>();
  const onSubmit = (data: Fields) => console.log(data);
  const { form } = useStyles();
  return (
    <form className={form} noValidate onSubmit={handleSubmit(onSubmit)}>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Controller
            control={control}
            name="name"
            render={({ field }) => (
              <TextField
                variant="outlined"
                label="Nome"
                {...field}
                fullWidth
                required
                color="secondary"
              />
            )}
          />
        </Grid>
        <Grid item xs={6}>
          <Controller
            control={control}
            name="cpf"
            render={({ field }) => (
              <TextField
                variant="outlined"
                label="CPF"
                fullWidth
                {...field}
                required
                color="secondary"
              />
            )}
          />
        </Grid>
        <Grid item xs={6}>
          <Controller
            control={control}
            name="phone"
            render={({ field }) => (
              <TextField
                {...field}
                variant="outlined"
                label="Telefone"
                fullWidth
                required
                color="secondary"
              />
            )}
          />
        </Grid>
        <Grid item xs={6}>
          <Controller
            control={control}
            name="clinicId"
            render={({ field }) => (
              <TextField
                {...field}
                type="number"
                variant="outlined"
                label="Numero da Cliníca"
                fullWidth
                required
                color="secondary"
              />
            )}
          />
        </Grid>
        <Grid item xs={6}>
          <Controller
            control={control}
            name="address.road"
            render={({ field }) => (
              <TextField
                {...field}
                variant="outlined"
                label="Rua"
                fullWidth
                required
                color="secondary"
              />
            )}
          />
        </Grid>
        <Grid item xs={6}>
          <Controller
            control={control}
            name="address.cep"
            render={({ field }) => (
              <TextField
                {...field}
                variant="outlined"
                label="Cep"
                fullWidth
                required
                color="secondary"
              />
            )}
          />
        </Grid>
        <Grid item xs={6}>
          <Controller
            control={control}
            name="address.number"
            render={({ field }) => (
              <TextField
                {...field}
                variant="outlined"
                label="Número Residêncial"
                fullWidth
                required
                color="secondary"
              />
            )}
          />
        </Grid>
        <Grid item xs={6}>
          <Controller
            control={control}
            name="address.city"
            render={({ field }) => (
              <TextField
                {...field}
                variant="outlined"
                label="Cidade"
                fullWidth
                required
                color="secondary"
              />
            )}
          />
        </Grid>
        <Grid item xs={6}>
          <Controller
            control={control}
            name="address.state"
            render={({ field }) => (
              <TextField
                {...field}
                variant="outlined"
                label="Estado"
                fullWidth
                required
                color="secondary"
              />
            )}
          />
        </Grid>
        <Grid item xs={6}>
          <Controller
            control={control}
            name="email"
            render={({ field }) => (
              <TextField
                {...field}
                variant="outlined"
                label="Email"
                type="email"
                fullWidth
                required
                color="secondary"
              />
            )}
          />
        </Grid>
        <Grid item xs={6}>
          <Controller
            control={control}
            name="birthday"
            render={({ field }) => (
              <TextField
                {...field}
                fullWidth
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
        </Grid>
      </Grid>
      <FormFooter />
    </form>
  );
};

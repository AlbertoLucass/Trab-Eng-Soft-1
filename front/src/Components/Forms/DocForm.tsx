import { makeStyles, TextField } from '@material-ui/core';
import { FormFooter } from '../FormFooter';
import { useForm, Controller } from 'react-hook-form';

const useStyles = makeStyles({
  form: {
    display: 'flex',
    height: '70vh',
    paddingTop: '2%',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'stretch',
    alignContent: 'space-around',
    flexWrap: 'nowrap',
  },
});

interface Fields {
  name: string;
  crm: number;
  cpf: string;
  rg: string;
  phone: string;
  birthday: string;
  clinicId: number;
  email: string;
}

export const DocForm = () => {
  const { control, handleSubmit } = useForm<Fields>();
  const onSubmit = (data: Fields) => console.log(data);
  const { form } = useStyles();
  return (
    <form className={form} noValidate onSubmit={handleSubmit(onSubmit)}>
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
      <Controller
        control={control}
        name="crm"
        render={({ field }) => (
          <TextField
            variant="outlined"
            label="CRM"
            {...field}
            fullWidth
            required
            color="secondary"
          />
        )}
      />
      <Controller
        control={control}
        name="cpf"
        render={({ field }) => (
          <TextField
            variant="outlined"
            label="CPF"
            {...field}
            fullWidth
            required
            color="secondary"
          />
        )}
      />
      <Controller
        control={control}
        name="phone"
        render={({ field }) => (
          <TextField
            variant="outlined"
            label="Telefone"
            {...field}
            fullWidth
            required
            color="secondary"
          />
        )}
      />
      <Controller
        control={control}
        name="rg"
        render={({ field }) => (
          <TextField
            variant="outlined"
            label="RG"
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
            label="Número da Cliníca"
            type="number"
            {...field}
            fullWidth
            required
            color="secondary"
          />
        )}
      />
      <Controller
        control={control}
        name="email"
        render={({ field }) => (
          <TextField
            variant="outlined"
            label="Email"
            type="email"
            {...field}
            fullWidth
            required
            color="secondary"
          />
        )}
      />
      <Controller
        control={control}
        name="email"
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

import { makeStyles, TextField } from '@material-ui/core';
import { FormFooter } from '../FormFooter';
import { useForm, Controller } from 'react-hook-form';

const useStyles = makeStyles((theme) => ({
  form: {
    display: 'flex',
    height: '70vh',
    paddingTop: '4%',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'stretch',
    alignContent: 'space-around',
    flexWrap: 'nowrap',
    marginBottom: '10%',
  },
  textField: {
    marginBottom: '1%',
  },
}));

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
  const { form, textField } = useStyles();
  return (
    <form className={form} noValidate onSubmit={handleSubmit(onSubmit)}>
      <Controller
        control={control}
        name="name"
        render={({ field }) => (
          <TextField
            variant="outlined"
            className={textField}
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
            className={textField}
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
            className={textField}
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
            className={textField}
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
            className={textField}
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
            className={textField}
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
            className={textField}
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
            className={textField}
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

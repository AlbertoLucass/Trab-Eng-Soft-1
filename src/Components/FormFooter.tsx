import { Button, makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles({
  footer: {
    padding: '2%',
  },
});

export const FormFooter = () => {
  const { footer } = useStyles();
  return (
    <footer className={footer}>
      <Typography style={{ margin: '2%' }}>
        Importante <br />
        Preencha todos os dados
      </Typography>
      <Button color="secondary" variant="contained" type="submit">
        Salvar Cadastro
      </Button>
    </footer>
  );
};

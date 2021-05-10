import {
  Container,
  CssBaseline,
  makeStyles,
  Typography,
} from '@material-ui/core';
import { QueryClient, QueryClientProvider } from 'react-query';
import { SelectAppointment } from './Components/SelectAppointment';
import { Theming } from './Theme';

const useStyles = makeStyles({
  title: {},
  container: {
    textAlign: 'center',
    height: '100vh',
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexDirection: 'column',
  },
});

function App() {
  const { container } = useStyles();

  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Theming>
        <CssBaseline>
          <Container maxWidth="lg">
            <div className={container}>
              <div>
                <Typography variant="h1">Cline</Typography>
                <Typography variant="h4">Você economizando tempo!</Typography>
              </div>
              <SelectAppointment />
            </div>
          </Container>
        </CssBaseline>
      </Theming>
    </QueryClientProvider>
  );
}

export default App;

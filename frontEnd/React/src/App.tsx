import { CssBaseline } from '@material-ui/core';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Theming } from './Theme';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Home } from './Pages/home';
import { Admin } from './Pages/admin';
import { PrivateRoute } from './util/auth';
import { Start } from './Pages/admin/start';
import { CadastroDoc } from './Pages/admin/cadastro/add-doc';
import { CadastroQuery } from './Pages/admin/cadastro/add-query';
import { CadastroPat } from './Pages/admin/cadastro/add-pat';

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Theming>
        <CssBaseline>
          <Router>
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/admin" exact component={Admin} />
              <PrivateRoute path="/admin/start" exact component={Start} />
              <Route path="/admin/start/doc" exact component={CadastroDoc} />
              <Route path="/admin/start/query" exact component={CadastroQuery} />
              <Route path="/admin/start/pat" exact component={CadastroPat} />
            </Switch>
          </Router>
        </CssBaseline>
      </Theming>
    </QueryClientProvider>
  );
}

export default App;

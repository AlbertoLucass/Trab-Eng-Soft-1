import { CssBaseline } from '@material-ui/core';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Theming } from './Theme';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Home } from './Pages/home';
import { Admin } from './Pages/admin';
import { PrivateRoute } from './util/auth';
import { Start } from './Pages/admin/start';

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
            </Switch>
          </Router>
        </CssBaseline>
      </Theming>
    </QueryClientProvider>
  );
}

export default App;

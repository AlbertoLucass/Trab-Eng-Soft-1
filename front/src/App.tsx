import { CssBaseline } from '@material-ui/core';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Theming } from './Theme';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Home } from './Pages/home';
import { Admin } from './Pages/admin';
import { PrivateRoute } from './util/auth';
import { Start } from './Pages/admin/start';
import { Add } from './Pages/admin/Add';
import { TypeForm } from './util/typeForm.enum';
import { DocForm } from './Components/Forms/DocForm';
import { PatientForm } from './Components/Forms/PartientForm';
import { AppointmentForm } from './Components/Forms/AppointmentForm';
import { ShowDocs } from './Pages/admin/list/show-docs';

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
              <PrivateRoute path="/admin/start/docs" exact component={ShowDocs} />
              
              <PrivateRoute
                path="/admin/create/doctor"
                exact
                component={() => (
                  <Add type={TypeForm.Doctor} form={<DocForm />} />
                )}
              />
              <PrivateRoute
                path="/admin/create/patient"
                exact
                component={() => (
                  <Add type={TypeForm.Patient} form={<PatientForm />} />
                )}
              />
              <PrivateRoute
                path="/admin/create/appointment"
                exact
                component={() => (
                  <Add type={TypeForm.Appointment} form={<AppointmentForm />} />
                )}
              />
            </Switch>
          </Router>
        </CssBaseline>
      </Theming>
    </QueryClientProvider>
  );
}

export default App;

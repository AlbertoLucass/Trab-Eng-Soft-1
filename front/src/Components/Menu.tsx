import { Drawer, List, ListItem, ListItemText } from '@material-ui/core';
import { Link } from 'react-router-dom';

interface IMenu {
  open: boolean;
  toggleMenu(state: boolean): void;
}

export const Menu = ({ open, toggleMenu }: IMenu) => {
  return (
    <>
      <Drawer anchor="left" open={open} onClose={() => toggleMenu(!open)}>
        <List style={{ width: 250 }}>
          {[
            { name: 'Cadastrar Médico', route: '/admin/create/doctor' },
            { name: 'Cadastrar Paciente', route: '/admin/create/patient' },
            {
              name: 'Cadastrar Apontamento',
              route: '/admin/create/appointment',
            },
            { name: 'Listar Médicos', route: '/admin/start/docs' },
            { name: 'Listar Pacientes', route: '/admin/start/pats' },
          ].map(({ name, route }) => (
            <Link
              key={name}
              style={{ textDecoration: 'none', color: '#234469' }}
              to={route}
            >
              <ListItem button>
                <ListItemText primary={name} />
              </ListItem>
            </Link>
          ))}
        </List>
      </Drawer>
    </>
  );
};

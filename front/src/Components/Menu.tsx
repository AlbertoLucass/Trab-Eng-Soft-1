import { Drawer, List, ListItem, ListItemText } from '@material-ui/core';

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
            'Cadastrar Médico',
            'Cadastrar Paciente',
            'Cadastrar Apontamento',
          ].map((text) => (
            <ListItem button key={text}>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
};

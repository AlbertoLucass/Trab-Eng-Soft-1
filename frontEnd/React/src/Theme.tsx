import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import { FC } from 'react';

const theme = createMuiTheme({
  typography: {
    allVariants: {
      fontFamily: "'Poppins', sans-serif",
    },
    h1: {
      fontWeight: 400,
    },
    h4: {
      fontWeight: 200,
    },
    body2: {
      fontSize: '1rem',
      fontWeight: 'bold',
    },
    button: {
      fontSize: '1rem',
      fontWeight: 'bold',
    },
  },
  palette: {
    primary: { main: '#86C6FD' },
    secondary: { main: '#e99e13' },
    background: { default: '#B6DCFE' },
    text: {
      primary: '#234469',
    },
  },
});

export const Theming: FC<{}> = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

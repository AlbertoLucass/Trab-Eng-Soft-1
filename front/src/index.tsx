import App from './App';
import ReactDOM from 'react-dom';
import { StrictMode } from 'react';

ReactDOM.render(
  <StrictMode>
    <App />
    <link rel="preconnect" href="https://fonts.gstatic.com" />
    <link
      href="https://fonts.googleapis.com/css2?family=Poppins:wght@200;400;700&display=swap"
      rel="stylesheet"
    />
  </StrictMode>,
  document.getElementById('root'),
);

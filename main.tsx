import React from 'react';
import ReactDOM from 'react-dom/client';

import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './assets/GlobalStyle';
import { ThemeDefault } from './assets/themes/themeDefault';
import { Routes } from './routes';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={ThemeDefault}>
      <Routes />
      <GlobalStyles />
    </ThemeProvider>
  </React.StrictMode>
);

import React from 'react';

import { ThemeProvider } from 'styled-components';

import Routes from './routes';
import GlobalStyle from './styles/global';
import theme from './styles/theme';
import DarkModeToggle from './components/DarkModeToggle';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Routes />
      <ScrollToTop />
      <DarkModeToggle />
    </ThemeProvider>
  );
}

export default App;

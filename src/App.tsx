import React from 'react';

import { ThemeProvider } from 'styled-components';

import Routes from './routes';
import GlobalStyle from './styles/global';
import theme from './styles/theme';
import DarkModeToggle from './components/DarkModeToggle';
import ScrollToTop from './components/ScrollToTop';
import { LanguageProvider } from './contexts/LanguageContext';

function App() {
  return (
    <LanguageProvider>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Routes />
        <ScrollToTop />
        <DarkModeToggle />
      </ThemeProvider>
    </LanguageProvider>
  );
}

export default App;

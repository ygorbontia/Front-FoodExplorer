import { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/global';
import theme from './styles/theme';

import { AuthProvider } from './hooks/auth';

import { Routes } from './routes';

export function App() {
  return (
    <ThemeProvider theme={ theme }>
      <GlobalStyle />
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </ThemeProvider>
  )
};
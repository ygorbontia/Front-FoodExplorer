import { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/global';
import theme from './styles/theme';

import { SignIn } from './pages/SignIn';

export function App() {
  return (
    <ThemeProvider theme={ theme }>
      <GlobalStyle />
      <SignIn />
    </ThemeProvider>
  )
};
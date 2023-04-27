import { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/global';
import theme from './styles/theme';

import { SignUp } from './pages/SignUp';

export function App() {
  return (
    <ThemeProvider theme={ theme }>
      <GlobalStyle />
      <SignUp />
    </ThemeProvider>
  )
};
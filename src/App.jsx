import { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/global';
import theme from './styles/theme';

import { Menu } from './pages/Menu';

export function App() {
  return (
    <ThemeProvider theme={ theme }>
      <GlobalStyle />
      <Menu />
    </ThemeProvider>
  )
};
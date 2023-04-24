import { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/global';
import theme from './styles/theme';

import { NewDish } from './pages/NewDish';

export function App() {
  return (
    <ThemeProvider theme={ theme }>
      <GlobalStyle />
      <NewDish />
    </ThemeProvider>
  )
};
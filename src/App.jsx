import { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/global';
import theme from './styles/theme';

import { Dish } from './pages/Dish';

export function App() {
  return (
    <ThemeProvider theme={ theme }>
      <GlobalStyle />
      <Dish />
    </ThemeProvider>
  )
};
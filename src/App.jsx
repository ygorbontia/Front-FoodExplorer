import { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/global';
import theme from './styles/theme';

import { DishDetails } from './pages/DishDetails';

export function App() {
  return (
    <ThemeProvider theme={ theme }>
      <GlobalStyle />
      <DishDetails />
    </ThemeProvider>
  )
};
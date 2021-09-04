import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Container } from './style';
import theme from './theme';


const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <h1>Olá</h1>
      </Container>
    </ThemeProvider>
  );
};

export default App;
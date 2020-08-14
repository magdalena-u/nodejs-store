import React from 'react';
import { createGlobalStyle } from 'styled-components';

import { Header } from 'components/header';

const GlobalStyle = createGlobalStyle`
body {
  margin: 0;
  padding: 0;
  font-family: 'Roboto', sans-serif;
  min-height: 100vh;
}
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
    </>
  );
}

export default App;

import React from "react";
import { createGlobalStyle } from "styled-components";

import { Header } from "components/header";

const GlobalStyle = createGlobalStyle`
body {
  margin: 0;
  padding: 0;
  font-family: 'Roboto', sans-serif;
  min-height: 100vh;
}
`;

interface ILayout {
  children: JSX.Element;
}

export const Layout: React.FC<ILayout> = ({ children }) => (
  <>
    <GlobalStyle />
    <Header />
    {children}
  </>
);

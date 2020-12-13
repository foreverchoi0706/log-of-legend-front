import React from "react";
import styled, { createGlobalStyle } from "styled-components";

import Home from "./components/Home";

const GlobalStyle = createGlobalStyle`
  body{
    margin: 0;
    background-color : black;
    color : white;
  }
`;

const App = () => {
  return (
    <div>
      <GlobalStyle />
      <Home/>
    </div>
  );
};

export default App;

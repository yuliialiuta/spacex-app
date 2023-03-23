import React from "react";
import Router from "./Components/Router/index";
import { BrowserRouter } from "react-router-dom";
import GlobalStyle from "./styles/global";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Router />
      <p>Hello</p>
    </BrowserRouter>
  );
};

export default App;

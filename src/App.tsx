import React from "react";
import Router from "./Components/Router/index";
import { BrowserRouter } from "react-router-dom";
import GlobalStyle from "./styles/global";
import HomePage from "./Components/Pages/HomePage";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Router />
    </BrowserRouter>
  );
};

export default App;

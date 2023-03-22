import React from "react";
import Router from "./Components/Router/index";
import { BrowserRouter } from "react-router-dom";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Router />
      <p>Hello</p>
    </BrowserRouter>
  );
};

export default App;

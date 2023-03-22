import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../../Components/Pages/HomePage/index";
import FavouritesPage from "../../Components/Pages/FavouritesPage/index";

const Router: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/favourites" element={<FavouritesPage />}></Route>
    </Routes>
  );
};

export default Router;

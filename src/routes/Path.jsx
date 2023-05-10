import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Recipes from "../Pages/Recipes";
import Detail from "../components/Detail";
import Search from "../components/Search";
import Filter from "../components/Filter";

const Path = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/recipes" element={<Recipes />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/filter" element={<Filter />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </div>
  );
};

export default Path;

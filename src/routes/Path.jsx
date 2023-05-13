import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Recipes from "../Pages/Recipes";
import RouteGuard from "../components/RouteGuard";
import Detail from "../Pages/Detail";
import Search from "../Pages/Search";
import Filter from "../Pages/Filter";

const Path = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/recipes" element={<Recipes />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/filter" element={<Filter/>} />
        <Route
          path="/search"
          element={
            <RouteGuard>
              <Search/>
            </RouteGuard>
          }
        />
      </Routes>
    </div>
  );
};

export default Path;

import React from "react";
import RecipeIntro from "../components/RecipeIntro";
import Categories from "../components/Categories";
import AllMeals from "../components/AllMeals";
import ScrollToTop from "../components/ScrollToTop";

const Recipes = () => {
  return (
    <>
      <div className="flex flex-col">
        <div className="flex flex-col gap-16 p-3 md:p-6">
          <div className="ml-12 md:ml-18 lg:ml-20 mr-4 flex flex-wrap items-center justify-between gap-5 p-3 mt-20">
            <RecipeIntro />
            <Categories />
          </div>
          <div className="">
            <AllMeals />
          </div>
        </div>
        <div className=" flex self-end mb-3">
          <ScrollToTop />
        </div>
      </div>
    </>
  );
};

export default Recipes;

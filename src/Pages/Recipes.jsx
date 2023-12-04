import React from "react";
import RecipeIntro from "../components/RecipeIntro";
import Categories from "../components/Categories";
import AllMeals from "../components/AllMeals";
import ScrollToTop from "../components/ScrollToTop";
import { useGetRandomSingleMealQuery } from "../redux/api/MealApi";
import { Loader } from "@mantine/core";

const Recipes = () => {
  const {data:meals,isLoading} = useGetRandomSingleMealQuery()

  if (isLoading) {
    return (
      <div className=" flex justify-center items-center h-screen">
        <Loader color="orange" variant="bars" size="xl" />
      </div>
    );
  }
  return (
    <>
      <div className="">
        <div className="flex flex-col items-center">
          <div className="flex flex-col gap-10">
            <div className=" max-w-sm md:max-w-7xl flex flex-row flex-wrap items-center md:justify-between xl:justify-around px-6 xl:px-4 mt-20">
              <RecipeIntro  />
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
      </div>
    </>
  );
};

export default Recipes;

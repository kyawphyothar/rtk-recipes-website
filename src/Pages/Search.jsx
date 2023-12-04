import React, { useEffect, useState } from "react";
import { Link, Navigate, useLocation } from "react-router-dom";
import { useGetSearchedMealQuery } from "../redux/api/MealApi";
import SearchItems from "../components/SearchItems";
import { Loader } from "@mantine/core";

const Search = () => {
  const [searchMeal, setSearchMeal] = useState([]);
  const location = useLocation();
  // console.log(location);
  const meal = location.state.searchValue;
  //  console.log(meal);
  const { data: meals, isLoading } = useGetSearchedMealQuery(meal);
  // console.log(meals);

  useEffect(() => {
    try {
      if (meals && meals.meals) {
        setSearchMeal(meals.meals);
      }
    } catch (error) {
      console.log(error);
    }
  }, [meals]);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Loader color="orange" variant="bars" size="xl" />
      </div>
    );
  }

  if (!isLoading && searchMeal.length === 0) {
    return (
      <div className=" flex justify-center items-center h-screen">
        <div className=" flex flex-col gap-2 items-center text-center bg-white dark:bg-gray-500 rounded-xl p-5 shadow">
          <h2 className="text-2xl text-red-500 font-medium ">
            No meals found.
          </h2>
          <p className=" text-gray-600 dark:text-white/80">
            Please try searching again.
          </p>
          <Link to={"/"}>
            <button className="bg-gray-500 hover:bg-gray-600 text-white px-3 py-1 rounded-3xl">
              Back To Home
            </button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className=" flex flex-col items-center">
      <div className="mt-20 flex gap-10 justify-center flex-wrap xl:max-w-6xl">
        {searchMeal?.map((meal) => {
          return <SearchItems key={meal?.idMeal} {...meal} />;
        })}
      </div>
    </div>
  );
};

export default Search;

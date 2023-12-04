import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useFilterMealByCategoryQuery } from "../redux/api/MealApi";
import FilterMeal from "../components/FilterMeal";
import { Loader } from "@mantine/core";
import { MdArrowBackIosNew } from "react-icons/md";

const Filter = () => {
  const [filterMeal, setFilterMeal] = useState([]);
  const location = useLocation();
  // console.log(location);
  const strCategory = location?.state?.category;

  const { data: meals, isLoading } = useFilterMealByCategoryQuery(strCategory);
  // console.log(meals);

  useEffect(() => {
    try {
      if (meals && meals.meals) {
        setFilterMeal(meals.meals);
      }
    } catch (error) {
      console.log(error);
    }
  }, [meals]);

  if (isLoading) {
    return (
      <div className=" flex justify-center items-center h-screen">
        <Loader color="orange" variant="bars" size="lg" />
      </div>
    );
  }
  return (
    <div className=" flex flex-col items-center mt-20 gap-10">
      <div className="flex gap-10 justify-center flex-wrap xl:max-w-6xl">
        {filterMeal?.map((meal) => {
          return <FilterMeal key={meal?.idMeal} {...meal} />;
        })}
      </div>
    </div>
  );
};

export default Filter;

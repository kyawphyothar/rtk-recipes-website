import React, { useEffect, useState } from "react";
import DisplayMeals from "./DisplayMeals";
import {
  useGetAllMealsQuery,
  useGetMealCategoryQuery,
} from "../redux/api/MealApi";

const Meals = ({ name }) => {
  const [allMeals, setAllMeals] = useState([]);
  const { data: meals, isLoading } = useGetAllMealsQuery(name);
  // console.log(meals);

  useEffect(() => {
    try {
      if (meals && meals?.meals) {
        setAllMeals(meals?.meals);
      }
    } catch (error) {
      console.log(error);
    }
  }, [meals]);

  return (
    <div className="flex flex-col gap-7 p-5 items-center mt-5">
      <h2 className="text-3xl  font-semibold text-orange-500 font-heading">
        {name}
      </h2>
      <div className="flex gap-10 justify-center flex-wrap xl:max-w-6xl">
        {allMeals?.map((meal) => {
          return <DisplayMeals key={meal?.idMeal} {...meal} />;
        })}
      </div>
      <div className="border border-gray-300 w-[80%] mt-5 mx-auto"></div>
    </div>
  );
};

export default Meals;

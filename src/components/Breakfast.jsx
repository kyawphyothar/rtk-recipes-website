import React, { useEffect, useState } from "react";
import { useGetBreakfastQuery } from "../redux/api/MealApi";
import DisplayBreakfast from "./DisplayBreakfast";

const Breakfast = () => {
  const [breakfast, setBreakfast] = useState([]);
  const { data: meals } = useGetBreakfastQuery();
  useEffect(() => {
    try {
      if (meals && meals.meals) {
        setBreakfast(meals.meals);
      }
    } catch (error) {
      console.log(error);
    }
  }, [meals]);

  return (
    <div className=" flex flex-col gap-10">
      <div className="ml-10 md:ml-12 lg:ml-24  flex flex-col gap-2">
        <h2 className="text-3xl font-semibold text-orange-500 font-heading">Breakfast</h2>
        <p className="text-lg font-medium text-gray-500 dark:text-white/75">
          Breakfast is the first meal of a day. The word in English refers to
          breaking the fasting period of the previous night. There is a strong
          likelihood for one or more \"typical\", or \"traditional\", breakfast
          menus to exist in most places, but their composition varies widely
          from place to place, and has varied over time, so that globally a very
          wide range of preparations and ingredients are now associated with
          breakfast.
        </p>
      </div>
      <div className="flex gap-10 justify-center flex-wrap">
        {breakfast?.map((meal) => {
          return <DisplayBreakfast key={meal?.idMeal} {...meal} />;
        })}
      </div>
      <div className="border border-gray-300 w-[80%] mt-5 mx-auto"></div>
    </div>
  );
};

export default Breakfast;

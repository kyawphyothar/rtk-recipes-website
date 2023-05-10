import React, { useEffect, useState } from "react";
import { useGetMiscellaneousQuery } from "../redux/api/MealApi";
import DisplayMiscellaneous from "./DisplayMiscellaneous";

const Miscellaneous = () => {
  const [miscellaneous, setMiscellaneous] = useState();
  const { data: meals } = useGetMiscellaneousQuery();
  useEffect(() => {
    try {
      if (meals && meals.meals) {
        setMiscellaneous(meals.meals);
      }
    } catch (error) {
      console.log(error);
    }
  }, [meals]);
  return (
    <div className="flex flex-col gap-10">
      <div className=" ml-10 md:ml-12 lg:ml-28  flex flex-col gap-2">
        <h2 className="text-3xl font-semibold text-orange-500">
          Miscellaneous
        </h2>
        <p className="text-lg font-medium text-gray-500 dark:text-white/75">
          General foods that don't fit into another category
        </p>
      </div>
      <div className="flex gap-10 justify-center flex-wrap">
        {miscellaneous?.map((meal) => {
          return <DisplayMiscellaneous key={meal?.idMeal} {...meal} />;
        })}
      </div>
      <div className="border border-gray-300 w-[80%] mt-5 mx-auto"></div>
    </div>
  );
};

export default Miscellaneous;

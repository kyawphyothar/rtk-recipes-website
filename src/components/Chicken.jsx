import React, { useEffect, useState } from "react";
import { useGetChickenQuery } from "../redux/api/MealApi";
import DisplayChicken from "./DisplayChicken";

const Chicken = () => {
  const [chicken, setChicken] = useState([]);
  const { data: meals } = useGetChickenQuery();
  // console.log(meals);
  useEffect(() => {
    try {
      if (meals && meals?.meals) {
        setChicken(meals?.meals);
      }
    } catch (error) {
      console.log(error);
    }
  }, [meals]);

  return (
    <div className="flex flex-col gap-7">
      <div className=" ml-10 md:ml-12 lg:ml-24  flex flex-col gap-2">
        <h2 className="text-3xl font-semibold text-orange-500 font-heading">Chicken</h2>
        <p className="text-lg text-gray-500 dark:text-white/75 font-medium">
          Chicken is a type of domesticated fowl, a subspecies of the red
          junglefowl. It is one of the most common and widespread domestic
          animals, with a total population of more than 19 billion as of
          2011.[1] Humans commonly keep chickens as a source of food (consuming
          both their meat and eggs) and, more rarely, as pets.
        </p>
      </div>
      <div className="flex gap-10 justify-center flex-wrap">
        {chicken?.map((meal) => {
          return <DisplayChicken key={meal?.idMeal} {...meal} />;
        })}
      </div>
      <div className="border border-gray-300 w-[80%] mt-5 mx-auto"></div>
    </div>
  );
};

export default Chicken;

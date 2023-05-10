import React, { useEffect, useState } from "react";
import { useGetStarterQuery } from "../redux/api/MealApi";
import DisplayStarter from "./DisplayStarter";

const Starter = () => {
  const [stater, setStarter] = useState([]);
  const { data: meals } = useGetStarterQuery();

  useEffect(() => {
    try {
      if (meals && meals.meals) {
        setStarter(meals.meals);
      }
    } catch (error) {
      console.log(error);
    }
  }, [meals]);
  return (
    <div className=" flex flex-col gap-10">
      <div className="ml-10 md:ml-12 lg:ml-24  flex flex-col gap-2">
        <h2 className="text-3xl font-semibold text-orange-500 font-heading">Starter</h2>
        <p className="text-lg font-medium text-gray-500 dark:text-white/75">
          An entrée in modern French table service and that of much of the
          English-speaking world (apart from the United States and parts of
          Canada) is a dish served before the main course of a meal; it may be
          the first dish served, or it may follow a soup or other small dish or
          dishes. In the United States and parts of Canada, an entrée is the
          main dish or the only dish of a meal.\r\n\r\nHistorically, the entrée
          was one of the stages of the “Classical Order” of formal French table
          service of the 18th and 19th centuries. It formed a part of the “first
          service” of the meal, which consisted of potage, hors d'œuvre, and
          entrée (including the bouilli and relevé). The “second service”
          consisted of roast (rôti), salad, and entremets (the entremets
          sometimes being separated into a “third service” of their own). The
          final service consisted only of dessert.
        </p>
      </div>
      <div className="flex gap-10 justify-center flex-wrap">
        {stater?.map((meal) => {
          return <DisplayStarter key={meal?.idMeal} {...meal} />;
        })}
      </div>
      <div className="border border-gray-300 w-[80%] mt-5 mx-auto"></div>
    </div>
  );
};

export default Starter;

import React, { useEffect, useState } from "react";
import { useGetVeganQuery } from "../redux/api/MealApi";
import DisplayVegan from "./DisplayVegan";

const Vegan = () => {
  const [vegan, setVegan] = useState([]);
  const { data: meals } = useGetVeganQuery();
  useEffect(() => {
    try {
      if (meals && meals.meals) {
        setVegan(meals.meals);
      }
    } catch (error) {
      console.log(error);
    }
  }, [meals]);
  return (
    <div className=" flex flex-col gap-10">
      <div className="ml-10 md:ml-12 lg:ml-24  flex flex-col gap-2">
        <h2 className="text-3xl font-semibold text-orange-500 font-heading">Vegan</h2>
        <p className="text-lg font-medium text-gray-500 dark:text-white/75">
          Veganism is both the practice of abstaining from the use of animal
          products, particularly in diet, and an associated philosophy that
          rejects the commodity status of animals.[b] A follower of either the
          diet or the philosophy is known as a vegan (pronounced /'vi:gan/
          VEE-gən). Distinctions are sometimes made between several categories
          of veganism. Dietary vegans (or strict vegetarians) refrain from
          consuming animal products, not only meat but also eggs, dairy products
          and other animal-derived substances.[c] The term ethical vegan is
          often applied to those who not only follow a vegan diet but extend the
          philosophy into other areas of their lives, and oppose the use of
          animals for any purpose.[d] Another term is environmental veganism,
          which refers to the avoidance of animal products on the premise that
          the harvesting or industrial farming of animals is environmentally
          damaging and unsustainable.
        </p>
      </div>
      <div className="flex gap-10 justify-center flex-wrap">
        {vegan?.map((meal) => {
          return <DisplayVegan key={meal?.idMeal} {...meal} />;
        })}
      </div>
      <div className="border border-gray-300 w-[80%] mt-5 mx-auto"></div>
    </div>
  );
};

export default Vegan;

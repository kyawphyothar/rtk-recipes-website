import React, { useEffect, useState } from "react";
import { useGetGoatQuery } from "../redux/api/MealApi";
import DisplayGoat from "./DisplayGoat";

const Goat = () => {
  const [goat, setGoat] = useState([]);
  const { data: meals } = useGetGoatQuery();
  useEffect(() => {
    try {
      if (meals && meals.meals) {
        setGoat(meals.meals);
      }
    } catch (error) {
      console.log(error);
    }
  }, [meals]);
  return (
    <div className=" flex flex-col gap-10">
      <div className="ml-10 md:ml-12 lg:ml-24  flex flex-col gap-2">
        <h2 className="text-3xl font-semibold text-orange-500 font-heading">Goat</h2>
        <p className="text-lg font-medium text-gray-500 dark:text-white/75">
          The domestic goat or simply goat (Capra aegagrus hircus) is a
          subspecies of C. aegagrus domesticated from the wild goat of Southwest
          Asia and Eastern Europe. The goat is a member of the animal family
          Bovidae and the subfamily Caprinae, meaning it is closely related to
          the sheep. There are over 300 distinct breeds of goat. Goats are one
          of the oldest domesticated species of animal, and have been used for
          milk, meat, fur and skins across much of the world. Milk from goats is
          often turned into goat cheese.
        </p>
      </div>
      <div className="flex gap-10 justify-center flex-wrap">
        {goat?.map((meal) => {
          return <DisplayGoat key={meal?.idMeal} {...meal} />;
        })}
      </div>
    </div>
  );
};

export default Goat;

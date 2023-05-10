import React, { useEffect, useState } from "react";
import { useGetSeaFoodQuery } from "../redux/api/MealApi";
import DisplaySeafood from "./DisplaySeafood";

const Seafood = () => {
  const [seaFood, setSeaFood] = useState([]);

  const { data: meals, isLoading } = useGetSeaFoodQuery();
  // console.log(meals);

  useEffect(() => {
    try {
      if (meals && meals.meals) {
        setSeaFood(meals.meals);
      }
    } catch (error) {
      console.log(error);
    }
  }, [meals]);

  return (
    <div className=" flex flex-col gap-10">
      <div className="ml-10 md:ml-12 lg:ml-24  flex flex-col gap-2">
        <h2 className="text-3xl font-semibold text-orange-500 font-heading">Seafood</h2>
        <p className="text-lg font-medium text-gray-500 dark:text-white/75">
          Seafood is any form of sea life regarded as food by humans. Seafood
          prominently includes fish and shellfish. Shellfish include various
          species of molluscs, crustaceans, and echinoderms. Historically, sea
          mammals such as whales and dolphins have been consumed as food, though
          that happens to a lesser extent in modern times. Edible sea plants,
          such as some seaweeds and microalgae, are widely eaten as seafood
          around the world, especially in Asia (see the category of sea
          vegetables). In North America, although not generally in the United
          Kingdom, the term \"seafood\" is extended to fresh water organisms
          eaten by humans, so all edible aquatic life may be referred to as
          seafood. For the sake of completeness, this article includes all
          edible aquatic life.
        </p>
      </div>
      <div className="flex gap-10 justify-center flex-wrap">
        {seaFood?.map((meal) => {
          return <DisplaySeafood key={meal?.idMeal} {...meal} />;
        })}
      </div>
      <div className="border border-gray-300 w-[80%] mt-5 mx-auto"></div>
    </div>
  );
};

export default Seafood;

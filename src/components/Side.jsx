import React, { useEffect, useState } from "react";
import { useGetSideQuery } from "../redux/api/MealApi";
import DisplaySide from "./DisplaySide";

const Side = () => {
  const [side, setSide] = useState([]);
  const { data: meals } = useGetSideQuery();

  useEffect(() => {
    try {
      if (meals && meals.meals) {
        setSide(meals.meals);
      }
    } catch (error) {
      console.log(error);
    }
  }, [meals]);
  return (
    <div className=" flex flex-col gap-10">
      <div className="ml-10 md:ml-12 lg:ml-24  flex flex-col gap-2">
        <h2 className="text-3xl font-semibold text-orange-500 font-heading">Side</h2>
        <p className=" text-lg font-medium text-gray-500 dark:text-white/75">
          A side dish, sometimes referred to as a side order, side item, or
          simply a side, is a food item that accompanies the entrée or main
          course at a meal. Side dishes such as salad, potatoes and bread are
          commonly used with main courses throughout many countries of the
          western world. New side orders introduced within the past
          decade[citation needed], such as rice and couscous, have grown to be
          quite popular throughout Europe, especially at formal occasions (with
          couscous appearing more commonly at dinner parties with Middle Eastern
          dishes).
        </p>
      </div>
      <div className="flex gap-10 justify-center flex-wrap">
        {side?.map((meal) => {
          return <DisplaySide key={meal?.idMeal} {...meal} />;
        })}
      </div>
      <div className="border border-gray-300 w-[80%] mt-5 mx-auto"></div>
    </div>
  );
};

export default Side;

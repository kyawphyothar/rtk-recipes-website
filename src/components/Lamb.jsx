import React, { useEffect, useState } from "react";
import { useGetLambQuery } from "../redux/api/MealApi";
import DisplayLamb from "./DisplayLamb";

const Lamb = () => {
  const [lamb, setLamb] = useState([]);
  const { data: meals } = useGetLambQuery();

  useEffect(() => {
    try {
      if (meals && meals.meals) {
        setLamb(meals.meals);
      }
    } catch (error) {
      console.log(error);
    }
  }, [meals]);
  return (
    <div className=" flex flex-col gap-10">
      <div className=" ml-10 md:ml-12 lg:ml-24  flex flex-col gap-2">
        <h2 className="text-3xl font-semibold text-orange-500">Lamb</h2>
        <p className="text-lg font-medium text-gray-500 dark:text-white/75">
          Lamb, hogget, and mutton are the meat of domestic sheep (species Ovis
          aries) at different ages.\r\n\r\nA sheep in its first year is called a
          lamb, and its meat is also called lamb. The meat of a juvenile sheep
          older than one year is hogget; outside the USA this is also a term for
          the living animal. The meat of an adult sheep is mutton, a term only
          used for the meat, not the living animals. The term mutton is almost
          always used to refer to goat meat in the Indian subcontinent.
        </p>
      </div>
      <div className="flex gap-10 justify-center flex-wrap">
        {lamb?.map((meal) => {
          return <DisplayLamb key={meal?.idMeal} {...meal} />;
        })}
      </div>
      <div className="border border-gray-300 w-[80%] mt-5 mx-auto"></div>
    </div>
  );
};

export default Lamb;

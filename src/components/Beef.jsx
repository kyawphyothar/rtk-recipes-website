import React, { useEffect, useState } from "react";
import DisplayBeef from "./DisplayBeef";
import { useGetBeefQuery } from "../redux/api/MealApi";
import { Loader } from "@mantine/core";

const Beef = () => {
  const [beef, setBeef] = useState([]);
  const { data: meals } = useGetBeefQuery();
  // console.log(meals);
  useEffect(() => {
    try {
      if (meals && meals?.meals) {
        setBeef(meals?.meals);
      }
    } catch (error) {
      console.log(error);
    }
  }, [meals]);

  return (
    <div className="flex flex-col gap-7 p-5">
      <div className=" ml-10 md:ml-12 lg:ml-20  flex flex-col gap-2">
        <h2 className="text-3xl font-semibold text-orange-500 font-heading">Beef</h2>
        <p className="text-lg text-gray-500 dark:text-white/75 font-medium">
          Beef is the culinary name for meat from cattle, particularly skeletal
          muscle. Humans have been eating beef since prehistoric times.[1] Beef
          is a source of high-quality protein and essential nutrients.[2]
        </p>
      </div>
      <div className="flex gap-10 justify-center flex-wrap">
        {beef?.map((meal) => {
          return <DisplayBeef key={meal?.idMeal} {...meal} />;
        })}
      </div>
      <div className="border border-gray-300 w-[80%] mt-5 mx-auto"></div>
    </div>
  );
};

export default Beef;

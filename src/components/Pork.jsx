import React, { useEffect, useState } from "react";
import { useGetPorkQuery } from "../redux/api/MealApi";
import DisplayPork from "./DisplayPork";

const Pork = () => {
  const [pork, setPork] = useState([]);
  const { data: meals } = useGetPorkQuery();

  useEffect(() => {
    try {
      if (meals && meals.meals) {
        setPork(meals.meals);
      }
    } catch (error) {
      console.log(error);
    }
  }, [meals]);
  return (
    <div className=" flex flex-col gap-10">
      <div className="ml-10 md:ml-12 lg:ml-24  flex flex-col gap-2">
        <h2 className="text-3xl font-semibold text-orange-500 font-heading">Pork</h2>
        <p className="text-lg font-medium text-gray-500 dark:text-white/75">
          Pork is the culinary name for meat from a domestic pig (Sus scrofa
          domesticus). It is the most commonly consumed meat worldwide,[1] with
          evidence of pig husbandry dating back to 5000 BC. Pork is eaten both
          freshly cooked and preserved. Curing extends the shelf life of the
          pork products. Ham, smoked pork, gammon, bacon and sausage are
          examples of preserved pork. Charcuterie is the branch of cooking
          devoted to prepared meat products, many from pork.\r\n\r\nPork is the
          most popular meat in Eastern and Southeastern Asia, and is also very
          common in the Western world, especially in Central Europe. It is
          highly prized in Asian cuisines for its fat content and pleasant
          texture. Consumption of pork is forbidden by Jewish and Muslim dietary
          law, a taboo that is deeply rooted in tradition, with several
          suggested possible causes. The sale of pork is limited in Israel and
          illegal in certain Muslim countries.
        </p>
      </div>
      <div className="flex gap-10 justify-center flex-wrap">
        {pork?.map((meal) => {
          return <DisplayPork key={meal?.idMeal} {...meal} />;
        })}
      </div>
      <div className="border border-gray-300 w-[80%] mt-5 mx-auto"></div>
    </div>
  );
};

export default Pork;

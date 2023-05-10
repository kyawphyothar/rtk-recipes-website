import React, { useEffect, useState } from "react";
import { useGetPastaQuery } from "../redux/api/MealApi";
import DisplayPasta from "./DisplayPasta";

const Pasta = () => {
  const [pasta, setPasta] = useState([]);
  const { data: meals } = useGetPastaQuery();

  useEffect(() => {
    try {
      if (meals && meals.meals) {
        setPasta(meals.meals);
      }
    } catch (error) {
      console.log(error);
    }
  }, [meals]);
  return (
    <div className=" flex flex-col gap-10">
      <div className="ml-10 md:ml-12 lg:ml-24  flex flex-col gap-2">
        <h2 className="text-3xl font-semibold text-orange-500 font-heading">Pasta</h2>
        <p className="text-lg  font-medium text-gray-500 dark:text-white/75">
          Pasta is a staple food of traditional Italian cuisine, with the first
          reference dating to 1154 in Sicily.\r\n\r\nAlso commonly used to refer
          to the variety of pasta dishes, pasta is typically a noodle made from
          an unleavened dough of a durum wheat flour mixed with water or eggs
          and formed into sheets or various shapes, then cooked by boiling or
          baking. As an alternative for those wanting a different taste, or who
          need to avoid products containing gluten, some pastas can be made
          using rice flour in place of wheat.[3][4] Pastas may be divided into
          two broad categories, dried (pasta secca) and fresh (pasta fresca).
        </p>
      </div>
      <div className="flex gap-10 justify-center flex-wrap">
        {pasta?.map((meal) => {
          return <DisplayPasta key={meal?.idMeal} {...meal} />;
        })}
      </div>
      <div className="border border-gray-300 w-[80%] mt-5 mx-auto"></div>
    </div>
  );
};

export default Pasta;

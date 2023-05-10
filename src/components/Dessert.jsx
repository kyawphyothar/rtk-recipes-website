import React, { useEffect, useState } from "react";
import { useGetDessertQuery } from "../redux/api/MealApi";
import DisplayDessert from "./DisplayDessert";

const Dessert = () => {
  const [dessert, setDessert] = useState([]);

  const { data: meals } = useGetDessertQuery();
  useEffect(() => {
    try {
      if (meals && meals?.meals) {
        setDessert(meals?.meals);
      }
    } catch (error) {
      console.log(error);
    }
  }, [meals]);
  return (
    <div className=" flex flex-col gap-7">
      <div className=" ml-10 md:ml-12 lg:ml-24  flex flex-col gap-2">
        <h2 className="text-3xl font-semibold text-orange-500 font-heading">Dessert</h2>
        <p className="text-lg font-medium text-gray-500 dark:text-white/75">
          Dessert is a course that concludes a meal. The course usually consists
          of sweet foods, such as confections dishes or fruit, and possibly a
          beverage such as dessert wine or liqueur, however in the United States
          it may include coffee, cheeses, nuts, or other savory items regarded
          as a separate course elsewhere. In some parts of the world, such as
          much of central and western Africa, and most parts of China, there is
          no tradition of a dessert course to conclude a meal.\r\n\r\nThe term
          dessert can apply to many confections, such as biscuits, cakes,
          cookies, custards, gelatins, ice creams, pastries, pies, puddings, and
          sweet soups, and tarts. Fruit is also commonly found in dessert
          courses because of its naturally occurring sweetness. Some cultures
          sweeten foods that are more commonly savory to create desserts.
        </p>
      </div>
      <div className="flex gap-10 justify-center flex-wrap">
        {dessert?.map((meal) => {
          return <DisplayDessert key={meal?.idMeal} {...meal} />;
        })}
      </div>
      <div className="border border-gray-300 w-[80%] mt-5 mx-auto"></div>
    </div>
  );
};

export default Dessert;

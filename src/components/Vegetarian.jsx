import React, { useEffect, useState } from "react";
import { useGetVegetarianQuery } from "../redux/api/MealApi";
import DisplayVegetarian from "./DisplayVegetarian";

const Vegetarian = () => {
  const [vegetarian, setVegetarian] = useState([]);
  const { data: meals } = useGetVegetarianQuery();
  useEffect(() => {
    try {
      if (meals && meals.meals) {
        setVegetarian(meals.meals);
      }
    } catch (error) {
      console.log(error);
    }
  }, [meals]);

  return (
    <div className=" flex flex-col gap-10">
      <div className="ml-10 md:ml-12 lg:ml-24  flex flex-col gap-2">
        <h2 className="text-3xl font-semibold text-orange-500 font-heading">Vegetarian</h2>
        <p className="text-lg font-medium text-gray-500 dark:text-white/75">
          Vegetarianism is the practice of abstaining from the consumption of
          meat (red meat, poultry, seafood, and the flesh of any other animal),
          and may also include abstention from by-products of animal
          slaughter.\r\n\r\nVegetarianism may be adopted for various reasons.
          Many people object to eating meat out of respect for sentient life.
          Such ethical motivations have been codified under various religious
          beliefs, as well as animal rights advocacy. Other motivations for
          vegetarianism are health-related, political, environmental, cultural,
          aesthetic, economic, or personal preference. There are variations of
          the diet as well: an ovo-lacto vegetarian diet includes both eggs and
          dairy products, an ovo-vegetarian diet includes eggs but not dairy
          products, and a lacto-vegetarian diet includes dairy products but not
          eggs. A vegan diet excludes all animal products, including eggs and
          dairy. Some vegans also avoid other animal products such as beeswax,
          leather or silk clothing, and goose-fat shoe polish.
        </p>
      </div>
      <div className="flex gap-10 justify-center flex-wrap">
        {vegetarian?.map((meal) => {
          return <DisplayVegetarian key={meal?.idMeal} {...meal} />;
        })}
      </div>
      <div className="border border-gray-300 w-[80%] mt-5 mx-auto"></div>
    </div>
  );
};

export default Vegetarian;

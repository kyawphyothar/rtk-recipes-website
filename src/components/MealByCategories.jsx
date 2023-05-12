import React, { useEffect, useState } from "react";
import { useGetMealCategoryQuery } from "../redux/api/MealApi";
import { UseCustomProvider } from "./Context/DarkModeContext";


const MealByCategories = () => {
  const [mealsByCategories, setMealsByCategories] = useState([]);
  const { data: categories,isLoading} = useGetMealCategoryQuery();
  const {theme} = UseCustomProvider()

  useEffect(() => {
    try {
      if (categories && categories.categories) {
        setMealsByCategories(categories.categories);
      }
    } catch (error) {
      console.log(error);
    }
  }, [categories]);
  //  console.log(meals);
 
  return (
    <div className="mt-10 flex flex-col items-center gap-5">
      <div className="flex flex-col items-center text-center">
        <h3 className=" text-xl text-gray-600 dark:text-white/75">We provide</h3>
        <h2 className=" text-3xl font-heading text-gray-700 tracking-wider font-semibold dark:text-white/80 ">
          Meals By Categories
        </h2>
        <p className="text-lg tracking-wide text-gray-600 dark:text-white/75">
          You can find what type of meal you like to cook.
        </p>
      </div>
      <div className={`${ isLoading ? "hidden" : "block"} flex justify-center mb-5`}>
        <div className={` ${theme === "dark" ? "carousel-parent-dark" : "carousel-parent"} max-w-xs  sm:max-w-xl md:max-w-2xl  carousel  carousel-center  h-[220px] p-3`}>
          <div className="carousel-custom flex items-center gap-5 ">
            {mealsByCategories?.map((meal) => {
              return (
                <div
                  className="carousel-item select-none flex flex-col gap-3 items-center  bg-white dark:bg-black/70 rounded-3xl"
                  key={meal.idCategory}
                >
                  <img
                    src={meal?.strCategoryThumb}
                    alt=""
                    className=" select-none w-[150px] p-2 rounded-lg"
                  />
                  <h1 className=" text-lg text-gray-600 dark:text-white/80 font-medium">{meal?.strCategory}</h1>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="mt-20 border  border-gray-300 w-[70%] md:w-[60%] mx-auto"></div>
    </div>
  );
};

export default MealByCategories;

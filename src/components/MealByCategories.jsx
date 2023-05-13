import React, { useEffect, useState } from "react";
import { useGetMealCategoryQuery } from "../redux/api/MealApi";
import { UseCustomProvider } from "./Context/DarkModeContext";
// import ScrollReveal from "scrollreveal";
import Fade from "react-reveal/Fade";

const MealByCategories = () => {
  const [mealsByCategories, setMealsByCategories] = useState([]);
  const { data: categories, isLoading } = useGetMealCategoryQuery();
  const { theme } = UseCustomProvider();

  // useEffect(() => {
  //   ScrollReveal().reveal(".animate", {
  //     delay: 1400,
  //     origin: "bottom",
  //     distance: "150px",
  //     interval: 1000,
  //   });
  //   // ScrollReveal().reveal(".animate2", {
  //   //   delay: 1600,
  //   //   origin: "bottom",
  //   //   distance: "100px",
  //   //   interval: 800,
  //   // });
  // }, []);

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
    <div className="mt-10 flex flex-col items-center gap-5 ">
      <Fade bottom>
        <div className="animate2 flex flex-col items-center text-center">
          <h3 className=" text-xl text-gray-600 dark:text-white/75">
            We provide
          </h3>
          <h2 className=" text-3xl font-heading text-gray-700 tracking-wider font-medium dark:text-white/80 ">
            Meals By Categories
          </h2>
          <p className=" text-lg tracking-wide text-gray-600 dark:text-white/75">
            You can find what type of meal you like to cook.
          </p>
        </div>
        <div className={` flex justify-center mb-5 `}>
          <div
            className={` ${
              theme === "dark" ? "carousel-parent-dark" : "carousel-parent"
            } max-w-xs  sm:max-w-xl md:max-w-2xl  carousel  carousel-center  h-[220px] p-3 `}
          >
            <div className=" carousel-custom flex items-center gap-5 ">
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
                    <h1 className=" text-lg text-gray-600 dark:text-white/80 font-medium">
                      {meal?.strCategory}
                    </h1>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Fade>
      <div className="mt-20 border  border-gray-300 w-[70%] md:w-[60%] mx-auto"></div>
    </div>
  );
};

export default MealByCategories;

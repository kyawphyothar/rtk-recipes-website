import React, { useEffect, useState } from "react";
import { useGetRandomSingleMealQuery } from "../redux/api/MealApi";
import { Loader } from "@mantine/core";
import { UseCustomProvider } from "./Context/DarkModeContext";
import Fade from "react-reveal/Fade";

const HeroSection = () => {
  const [randomSingleMeal, setRandomSingleMeal] = useState({});
  const { data: meals, isLoading } = useGetRandomSingleMealQuery();
  // console.log(meals);
  const { theme } = UseCustomProvider();

  useEffect(() => {
    try {
      if (meals && meals?.meals) {
        setRandomSingleMeal(meals?.meals);
      }
    } catch (error) {
      console.log(error);
    }
  }, [meals]);
  const meal = randomSingleMeal[0];

  if (isLoading) {
    return (
      <div className=" flex justify-center items-center h-screen">
        <Loader color="orange" variant="bars" size="xl" />
      </div>
    );
  }
  return (
    <div className=" mt-40">
      <div className="flex flex-wrap gap-16 md:flex-nowrap justify-center">
        <Fade bottom>
          <div className="">
            <p className="w-72 sm:w-80 md:w-80  text-xl font-medium text-gray-600 dark:text-white/75 leading-8 tracking-wide">
              <span className=" text-2xl ">
                Welcome to <br className=" md:hidden" />
                <span className="font-semibold  text-3xl text-orange-600">
                  Cook's Corner
                </span>
                ,<br />
              </span>
              your go-to destination for delicious recipes and cooking
              inspiration! Whether you're an experienced home cook or just
              starting out in the kitchen, we've got you covered with a wide
              range of recipes that are both easy to follow and packed with
              flavor.
            </p>
          </div>
        </Fade>
        <Fade bottom>
          <div className=" flex justify-center p-3">
            <img
              src={meal?.strMealThumb}
              alt=""
              className={`${
                theme === "dark" ? "hero-img-dark" : "hero-img"
              } w-[250px]   rounded-3xl`}
            />
          </div>
        </Fade>
      </div>

      <div className="mt-20 border  border-gray-300 w-[70%] md:w-[60%] mx-auto"></div>
    </div>
  );
};

export default HeroSection;

import React from "react";
import Book from "/book.png";
import Pan from "/frying-pan.png";
import IngredientImg from "/ingredients.png";
import { UseCustomProvider } from "./Context/DarkModeContext";
import Fade from "react-reveal/Fade";

const Services = () => {
  const { theme } = UseCustomProvider();
  return (
    <div className="">
      <Fade bottom>
        <div className="flex flex-col items-center gap-5 mt-20">
          <h1 className=" capitalize text-3xl text-gray-800 dark:text-white/80 font-medium title ">
            Provided services
          </h1>
          <div className="flex justify-center flex-wrap gap-7 items-center">
            <Fade left>
              <div
                className={`${
                  theme === "dark" ? "serviceCard-dark" : "serviceCard"
                }   dark:bg-[#646464] p-5  w-[230px] flex flex-col gap-5 items-center`}
              >
                <img
                  src={IngredientImg}
                  alt=""
                  className="w-[100px] serviceCardImg"
                />
                <h1 className="text-xl text-center font-semibold text-gray-600 dark:text-white/75">
                  Essential Ingredients for Every Kitchen
                </h1>
              </div>
            </Fade>
            <Fade bottom>
            <div
              className={`${
                theme === "dark" ? "serviceCard-dark" : "serviceCard"
              }   dark:bg-[#646464] p-5  w-[230px] flex flex-col gap-5 items-center`}
              >
              <img src={Book} alt="" className="w-[100px] serviceCardImg" />
              <h1 className="text-xl text-center font-semibold text-gray-600 dark:text-white/75">
                Step-by-Step Cooking Instructions
              </h1>
            </div>
            </Fade>
            <Fade right>
            <div
              className={`${
                theme === "dark" ? "serviceCard-dark" : "serviceCard"
              }   dark:bg-[#646464] p-5  w-[230px] flex flex-col gap-5 items-center`}
              >
              <img src={Pan} alt="" className="w-[100px] serviceCardImg" />
              <h1 className="text-xl text-center font-semibold text-gray-600 dark:text-white/75">
                The Ultimate Cooking Guide
              </h1>
            </div>
              </Fade>
          </div>
        </div>
      </Fade>
      <div className="mt-20 border  border-gray-300 w-[70%] md:w-[60%] mx-auto"></div>
    </div>
  );
};

export default Services;

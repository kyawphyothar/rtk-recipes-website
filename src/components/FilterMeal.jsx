import React from "react";
import { Link } from "react-router-dom";
import "animate.css";
import { UseCustomProvider } from "./Context/DarkModeContext";
import { MdArrowBackIosNew } from "react-icons/md";

const FilterMeal = (props) => {
  const { theme } = UseCustomProvider();
  const { idMeal, strMeal, strMealThumb } = props;
  return (
    <>
      <div
        className={`${
          theme === "dark" ? "FoodCard-dark" : "FoodCard"
        }  relative overflow-hidden w-[300px] h-[200px] md:w-[200px] md:h-[280px]  flex flex-col gap-3 items-center `}
      >
        <img src={strMealThumb} alt="" className="w-[200px] FoodCardImg" />
        <div className="w-44 ">
          <h3 className=" text-xl font-medium text-yellow-500">
            {strMeal.substring(0, 30) + "..."}
          </h3>
        </div>
        <div className="w-[300px] h-[200px] md:w-[200px] md:h-[280px] flex justify-center items-center absolute bg-white/10 group hover:backdrop-blur-sm">
          <Link to={`/detail/${idMeal}`}>
            <button className="bg-orange-400 hover:bg-orange-500 px-2 py-1 rounded-3xl text-white food-card-button opacity-0 group-hover:opacity-100 transition-opacity">
              View Recipes
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default FilterMeal;

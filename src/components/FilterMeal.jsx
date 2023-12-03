import React from "react";
import { Link } from "react-router-dom";
import "animate.css";
import { UseCustomProvider } from "./Context/DarkModeContext";

const FilterMeal = (props) => {
  const {theme} = UseCustomProvider()
  const { idMeal, strMeal, strMealThumb } = props;
  return (
    <div>
      <div className="">
        
      </div>
      <div
        className={`${
          theme === "dark" ? "FoodCard-dark" : "FoodCard"
        }  relative overflow-hidden  w-[200px] h-[280px]  flex flex-col gap-3 items-center `}
      >
        <img src={strMealThumb} alt="" className="w-[200px] FoodCardImg" />
        <div className="w-44 ">
          <h3 className=" text-xl font-medium text-yellow-500">{strMeal.substring(0,30)+"..."}</h3>
        </div>
        <div className="FoodCardOverlay ">
          <Link to={`/detail/${idMeal}`}>
            <button className="bg-orange-400 hover:bg-orange-500 px-2 py-1 rounded-3xl text-white">
              View Recipes
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FilterMeal;

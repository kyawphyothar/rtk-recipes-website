import React from "react";
import { Link } from "react-router-dom";
import { UseCustomProvider } from "./Context/DarkModeContext";

const DisplayMeals = (props) => {
  const { theme } = UseCustomProvider();
  const { idMeal, strMeal, strMealThumb } = props;
  return (
    <div>
      <div
        className={`${
          theme === "dark" ? "FoodCard-dark" : "FoodCard"
        }  relative overflow-hidden w-[300px] h-[200px] md:w-[200px] md:h-[280px] flex flex-row md:flex-col md:gap-3 items-center `}
      >
        <img src={strMealThumb} alt="" className="w-[150px] h-[200px] object-cover md:w-[200px] md:FoodCardImg" />
        <div className="w-44 ">
          <h3 className=" text-xl font-medium text-yellow-500 text-center">
            {strMeal.substring(0, 25) + "..."}
          </h3>
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

export default DisplayMeals;

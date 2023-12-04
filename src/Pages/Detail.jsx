import React, { useEffect, useState } from "react";
import { useGetDetailQuery } from "../redux/api/MealApi";
import { Link, useParams } from "react-router-dom";
import { MdArrowBackIosNew } from "react-icons/md";
import { Loader } from "@mantine/core";
import { UseCustomProvider } from "../components/Context/DarkModeContext";
import Guide from "./Guide";

const Detail = () => {
  const [meal, setMeal] = useState([]);
  const { theme } = UseCustomProvider();
  const { id } = useParams();
  const { data: meals, isLoading } = useGetDetailQuery(id);
  const [instructions, setInstructions] = useState(true);
  const [ingredients, setIngredients] = useState(false);
  

  useEffect(() => {
    try {
      if (meals && meals?.meals) {
        setMeal(meals?.meals);
      }
    } catch (error) {
      console.log(error);
    }
  }, [meals]);
  const singleMeal = meal[0];

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Loader color="orange" variant="bars" size="lg" />
      </div>
    );
  }

  
  return (
    <div className=" mt-20 flex flex-col gap-10 items-center justify-center">
      <div className="flex flex-col gap-5 ">
        <div className="flex gap-3 items-baseline max-w-lg " style={{ color: "#F63E04" }}>
          <Link to={"/recipes"}>
            <p className=" text-2xl">
              <MdArrowBackIosNew />
            </p>
          </Link>
          <h1 className=" text-2xl md:text-4xl font-semibold">
            {singleMeal?.strMeal}
          </h1>
        </div>
        <div
          className={`${
            theme === "dark" ? "detailCard-dark" : "detailCard"
          } w-[300px] sm:w-[400px] md:w-[500px] flex gap-3 md:gap-5 `}
        >
          <img
            src={singleMeal?.strMealThumb}
            alt=""
            className="w-[200px] detailCardImg "
          />
          <div className=" flex  items-center">
            <div className=" flex flex-col gap-3 text-lg">
              <h2 className=" text-gray-500 dark:text-white/80">
                <span className=" text-orange-500   font-semibold">
                  Category:
                </span>{" "}
                {singleMeal?.strCategory}
              </h2>
              <h2 className=" text-gray-500 dark:text-white/80">
                <span className=" text-orange-500  font-semibold">
                  Cuisine:
                </span>{" "}
                {singleMeal?.strArea}
              </h2>
            </div>
          </div>
        </div>
      </div>
        <Guide className=" justify-self-start" instructionsProp={instructions} setInstructionsProp={setInstructions} ingredientsProp={ingredients} setIngredientsProp={setIngredients} singleMeal={singleMeal} />
    </div>
  );
};

export default Detail;

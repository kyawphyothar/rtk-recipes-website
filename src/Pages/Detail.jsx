import React, { useEffect, useState } from "react";
import { useGetDetailQuery } from "../redux/api/MealApi";
import { Link, useParams } from "react-router-dom";
import { MdArrowBackIosNew } from "react-icons/md";
import { BsYoutube } from "react-icons/bs";
import { Loader } from "@mantine/core";
import { UseCustomProvider } from "../components/Context/DarkModeContext";

const Detail = () => {
  const [meal, setMeal] = useState([]);
  const { theme } = UseCustomProvider();
  const { id } = useParams();
  const { data: meals, isLoading } = useGetDetailQuery(id);
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
    <div className=" flex justify-center max-w-xl md:max-w-4xl lg:max-w-7xl p-5 mt-20">
      <div className="flex flex-col gap-10  ">
        <div className="flex gap-2 items-center " style={{ color: "#F63E04" }}>
          <Link to={"/recipes"}>
            <p className=" text-lg mb-1">
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
        <div className=" flex flex-col gap-3">
          <h3 className=" text-orange-500  text-2xl font-semibold">
            Ingredients
          </h3>
          <ul className="list-disc text-gray-500 dark:text-white/75 text-lg pl-6">
            {singleMeal &&
              Object.keys(singleMeal)
                .filter(
                  (key) => key.startsWith("strIngredient") && singleMeal[key]
                )
                .map((key) => (
                  <li key={key}>
                    {singleMeal[key]} -{" "}
                    {
                      singleMeal[
                        `strMeasure${key.slice("strIngredient".length)}`
                      ]
                    }
                  </li>
                ))}
          </ul>
        </div>
        <div className="w-[300px] md:w-[600px]  flex flex-col gap-3">
          <h3 className=" text-orange-500  font-semibold  text-2xl">
            Instructions
          </h3>
          <p className="text-lg text-gray-500 dark:text-white/75 tracking-wide leading-7">
            {singleMeal?.strInstructions}
          </p>
          <div className="">
            <p className="text-lg font-medium text-gray-600 dark:text-white/80">
              Watch on YouTube:{" "}
            </p>
            <a
              href={singleMeal?.strYoutube}
              target="_blank"
              className="text-red-500 dark:text-red-600 text-3xl"
            >
              <BsYoutube />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;

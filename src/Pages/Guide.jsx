import React, { useState } from "react";
import { motion } from "framer-motion";
import { BsYoutube } from "react-icons/bs";

const Guide = ({
  instructionsProp,
  setInstructionsProp,
  ingredientsProp,
  setIngredientsProp,
  singleMeal,
}) => {
  const toggleInstructionsAndIngredients = (showInstructions) => {
    setInstructionsProp(showInstructions);
    setIngredientsProp(!showInstructions);
  };

  const [menuItem, setMenuItem] = useState([
    {
      id: 1,
      title: "Ingredients",
      name: "ingredients",
      active: true,
    },
    {
      id: 2,
      title: "Instructions",
      name: "instructions",
      active: false,
    },
  ]);

  //for cate animation
  const handleCategoryClick = (categoryId) => {
    const updatedCategories = menuItem.map((category) => {
      if (category.id === categoryId) {
        return { ...category, active: true };
      } else {
        return { ...category, active: false };
      }
    });
    setMenuItem(updatedCategories);
    toggleInstructionsAndIngredients(true);
  };

  const getActiveDivRight = () => {
    const activeCategory = menuItem.find((category) => category.active);
    if (activeCategory.title === "Ingredients") {
      return 150;
    } else {
      return 0;
    }
  };

  return (
    <>
      <div className="  bg-white  dark:bg-white/40 p-1 rounded-xl self-center">
        <div className="flex relative">
          {menuItem.map((el) => {
            return (
              <div
                key={el.id}
                className={`w-[140px] md:w-[150px] py-1 cursor-pointer `}
                onClick={() => handleCategoryClick(el.id)}
              >
                <p className="relative z-20 text-center text-gray-600 dark:text-white/80 w-[140px] md:w-[150px]">
                  {el.title}
                </p>
              </div>
            );
          })}
          <motion.div
            className="z-10 absolute w-[140px] md:w-[150px] h-full rounded-2xl bg-orange-500  "
            initial={{ right: getActiveDivRight() }}
            animate={{ right: getActiveDivRight() }}
            transition={{ duration: 0.3 }}
          ></motion.div>
        </div>
      </div>
      <div className={`${ingredientsProp ? "" : "hidden"}`}>
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
                  {singleMeal[`strMeasure${key.slice("strIngredient".length)}`]}
                </li>
              ))}
        </ul>
      </div>
      <div className={`${instructionsProp ? "" : "hidden"}`}>
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
    </>
  );
};

export default Guide;

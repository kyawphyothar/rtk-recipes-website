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
  const [menuItem, setMenuItem] = useState([
    {
      id: 1,
      title: "Ingredients",
      name: "ingredients",
      active: false,
    },
    {
      id: 2,
      title: "Instructions",
      name: "instructions",
      active: true,
    },
  ]);

  const toggleInstructionsAndIngredients = (categoryId) => {
    const showInstructions = categoryId === 1; //to toggle between two categories
    setInstructionsProp(!showInstructions);
    setIngredientsProp(showInstructions);
  };

  //for cate animation
  const handleCategoryClick = (categoryId) => {
    const updatedCategories = menuItem.map((category) => {
      return {
        ...category,
        active: category.id === categoryId,
      };
    });
    setMenuItem(updatedCategories);
    toggleInstructionsAndIngredients(categoryId); // Pass the category ID to the toggle function
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
      <div className=" flex flex-col justify-center gap-5 items-center">
        <div className="  bg-white  dark:bg-white/40 p-1 rounded-xl self-center">
          <div className="flex relative">
            {menuItem.map((el) => {
              return (
                <div
                  key={el.id}
                  className={`w-[140px] md:w-[160px] py-1 cursor-pointer `}
                  onClick={() => handleCategoryClick(el.id)}
                >
                  <p className="relative z-20 text-center text-gray-600 dark:text-white/80 w-[140px] md:w-[150px]">
                    {el.title}
                  </p>
                </div>
              );
            })}
            <motion.div
              className="z-10 absolute w-[140px] md:w-[160px] h-full rounded-2xl bg-orange-500  "
              initial={{ right: getActiveDivRight() }}
              animate={{ right: getActiveDivRight() }}
              transition={{ duration: 0.3 }}
            ></motion.div>
          </div>
        </div>
        <div className="">
          <div className={`${ingredientsProp ? "" : "hidden"} flex flex-col gap-5 `}>
            <h3 className=" text-orange-500  text-2xl font-semibold">
              Ingredients
            </h3>
            <ul className="list-disc text-gray-500 dark:text-white/75 text-lg">
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
          <div className={`${ingredientsProp ? "hidden" : ""} max-w-lg p-3 md:max-w-xl flex flex-col gap-5`}>
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
    </>
  );
};

export default Guide;

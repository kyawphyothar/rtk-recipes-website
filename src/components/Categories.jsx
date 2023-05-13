import React, { useEffect, useState } from "react";
import { useGetMealCategoryQuery } from "../redux/api/MealApi";
import { useNavigate } from "react-router-dom";
import { MdKeyboardArrowDown } from "react-icons/md";

const Categories = () => {
  const [mealCategories, setMealCategories] = useState([]);
  const { data: categories } = useGetMealCategoryQuery();
  // console.log(categories);
  const nav = useNavigate();

  useEffect(() => {
    try {
      if (categories && categories.categories) {
        setMealCategories(categories.categories);
      }
    } catch (error) {
      console.log(error);
    }
  }, [categories]);

  const onClickHandler = (e) => {
    try {
      const category = e.target.innerText;
      nav("/filter", { state: { category } });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex justify-end mt-5">
      <div className="">
        <div className="dropdown md:dropdown-end   border border-gray-500 p-2 rounded">
          <label tabIndex={0} className="flex gap-2 items-center ">
            <p className=" text-gray-500 dark:text-white/70 font-medium">Filter by category </p>
            <MdKeyboardArrowDown className="text-gray-500 dark:text-white/70 text-xl " />
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content  menu p-2 shadow bg-gray-200 dark:bg-gray-700 dark:text-white/80 rounded-box w-52"
          >
            {" "}
            <div className="scrollable overflow-y-auto h-60" >
              {mealCategories?.map((category) => {
                return (
                  <li key={category.idCategory} className=" custom-list-item">
                    <a onClick={onClickHandler}>{category.strCategory}</a>
                  </li>
                );
              })}
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Categories;

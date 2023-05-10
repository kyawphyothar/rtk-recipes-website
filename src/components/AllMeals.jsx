import React from "react";
import Seafood from "./Seafood";
import Chicken from "./Chicken";
import Beef from "./Beef";
import Dessert from "./Dessert";
import Lamb from "./Lamb";
import Miscellaneous from "./Miscellaneous";
import Pasta from "./Pasta";
import Pork from "./Pork";
import Side from "./Side";
import Starter from "./Starter";
import Vegan from "./Vegan";
import Vegetarian from "./Vegetarian";
import Breakfast from "./Breakfast";
import Goat from "./Goat";

const AllMeals = () => {
  return (
    <>
      <div className="flex flex-col gap-20">
        <Beef />
        <Chicken />
        <Dessert />
        <Lamb />
        <Miscellaneous />
        <Pasta />
        <Pork />
        <Seafood />
        <Side />
        <Starter />
        <Vegan />
        <Vegetarian />
        <Breakfast />
        <Goat />
      </div>
    </>
  );
};

export default AllMeals;

import React from "react";
import Meals from "./Meals";

const AllMeals = () => {
  const data =[
    {name : 'Beef'},
    {name : 'Chicken'},
    {name : 'Dessert'},
    {name : 'Miscellaneous'},
    {name : 'Pasta'},
    {name : 'Pork'},
    {name : 'Seafood'},
    {name : 'Side'},
    {name : 'Starter'},
    {name : 'Vegan'},
    {name : 'Vegetarian'},
    {name : 'Breakfast'},
    {name : 'Lamb'},
    {name : 'Goat'},
  ]
  return (
    <>
      <div className="flex flex-col gap-20">
        {data?.map(meal=>{
          return(
            <Meals name={meal.name}/>
          )
        })}
        <Meals />
      </div>
    </>
  );
};

export default AllMeals;

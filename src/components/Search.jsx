import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { useGetSearchedMealQuery } from '../redux/api/MealApi';
import SearchItems from './SearchItems';

const Search = () => {
    const [searchMeal,setSearchMeal] = useState([]);
    const location = useLocation();
   const meal = location.state.searchValue;
//    console.log(meal);
   const {data:meals} = useGetSearchedMealQuery(meal)
//    console.log(meals);

   useEffect(()=>{
    try {
        if (meals&& meals.meals) {
            setSearchMeal(meals.meals)
        }
    } catch (error) {
        console.log(error);
    }
   },[meals])
  return (
    <div>
        <div className="mt-20 flex flex-wrap justify-center gap-10">
            {
             searchMeal?.map((meal)=>{
                return <SearchItems key={meal?.idMeal} {...meal}/>
             })
            }
        </div>
    </div>
  )
}

export default Search
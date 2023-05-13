import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { useFilterMealByCategoryQuery } from '../redux/api/MealApi';
import FilterMeal from '../components/FilterMeal';
import { Loader } from '@mantine/core';

const Filter = () => {
  const [filterMeal,setFilterMeal] = useState([])
  const location = useLocation()
  // console.log(location);
  const strCategory = location?.state?.category

  const {data:meals , isLoading} = useFilterMealByCategoryQuery(strCategory)
  // console.log(meals);

  useEffect(()=>{
    try {
      if (meals&&meals.meals) {
        setFilterMeal(meals.meals)
      }
    } catch (error) {
      console.log(error);
    }
  },[meals])

  if (isLoading) {
    return (
      <div className=" flex justify-center items-center h-screen">
        <Loader color='orange' variant="bars" size="lg"/>
      </div>
    )
  }
  return (
    <div className=' flex flex-wrap justify-center gap-10 mt-20 '>
        {
          filterMeal?.map((meal)=>{
            return <FilterMeal key={meal?.idMeal} {...meal}/>
          })
        }
    </div>
  )
}

export default Filter
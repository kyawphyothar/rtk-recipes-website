import React from 'react'
import Path from './routes/Path'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { useGetRandomSingleMealQuery } from './redux/api/MealApi'
import { Loader } from '@mantine/core'

const App = () => {
  const { data : meals, isLoading} = useGetRandomSingleMealQuery()

  if (isLoading) {
    return (
      <div className=" flex justify-center items-center h-screen">
        <Loader color="orange" variant="bars" size="xl" />
      </div>
    );
  }

  return (
    <div className="dark:bg-[#212227] ">
      <Navbar/>
      <Path/>
      <Footer/>
    </div>
  )
}

export default App
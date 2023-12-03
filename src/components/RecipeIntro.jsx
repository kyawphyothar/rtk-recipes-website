import React from 'react'
import { MdArrowBackIosNew } from 'react-icons/md'
import { Link } from 'react-router-dom'

const RecipeIntro = () => {
  return (
    <div>
        <div className="px-2">
          <div className=" text-orange-600  flex gap-1 items-center align-baseline">
            <Link to={"/"}>
              <p className="text-lg cursor-pointer select-none mb-1">
                <MdArrowBackIosNew />
              </p>
            </Link>
            <h1 className="text-4xl font-semibold tracking-wide font-heading ">Recipes</h1>
          </div>
          <p className="text-gray-400 dark:text-white/80 text-lg font-medium ">
            We provide easy recipes and instructions to cook at home
          </p>
          <div className="">

          </div>
        </div>
    </div>
  )
}

export default RecipeIntro
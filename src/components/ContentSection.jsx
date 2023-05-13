import React from "react";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import Fade from "react-reveal/Fade";

const ContentSection = () => {
  return (
    <div className="mt-20 flex flex-col gap-5 items-center ">
      <Fade bottom>
        <div className="">
          <h1 className="text-3xl font-medium text-gray-800 dark:text-white/80 title">
            What We Offer
          </h1>
        </div>
        <div className="flex flex-wrap  md:gap-10 items-center justify-center  ">
          <div className="">
            <img
              src="https://img.freepik.com/free-photo/thai-food-som-tum-papaya-salad_1150-35490.jpg?w=740&t=st=1683026624~exp=1683027224~hmac=f0e46e88c31fb894e2f1cc713fb4fe2da375886f14c6db1c7abb5a0f2669100b"
              alt=""
              className="w-[330px] md:w-[360px] mb-7 cs-img"
            />
          </div>
          <div className="w-[400px]  flex flex-col gap-2 p-5">
            <p className="text-xl leading-7 tracking-wider font-medium text-gray-600 dark:text-white/75  p-5">
              <strong>We</strong> offer a comprehensive range of resources to
              help you become a better home cook. Our step-by-step cooking
              instructions, informative ingredients, and detailed cooking guide
              videos are designed to help you take your cooking skills to the
              next level.
            </p>
            <Link to={"/recipes"}>
              <button className="bg-orange-500 text-lg text-white px-3 py-2 rounded-3xl flex items-center font-medium ml-5">
                Check Recipes
                <BsFillArrowRightCircleFill className=" inline-block ml-3" />
              </button>
            </Link>
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default ContentSection;

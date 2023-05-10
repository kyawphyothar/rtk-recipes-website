import React from "react";
import VegetablesPic from "/vegetables.jpg";
import Curry from "/Curry.jpg";
const About = () => {
  return (
    <div className=" mt-20  lg:max-w-6xl ">
      <div className=" flex flex-wrap justify-around items-center gap-12">
        <div className="flex flex-col gap-3">
          <h1 className="text-3xl font-about font-semibold text-gray-500 dark:text-white/80 font- heading">
            About Us
          </h1>
          <p className=" text-lg font-medium text-gray-600 dark:text-white/75 w-[300px] md:w-[500px]  leading-7 tracking-wide">
            Our website is dedicated to helping people of all skill levels
            create delicious, healthy meals at home. We believe that cooking is
            a fun and rewarding experience that brings people together, and we
            want to help make that experience as easy and enjoyable as possible.{" "}
          </p>
            <p className=" text-lg font-medium text-gray-700 dark:text-white/80 w-[300px] md:w-[500px]  leading-7 tracking-wide">
            Thank you for visiting our meal recipes website, and we hope
            you find inspiration and joy in the recipes we offer. Happy cooking!
            </p>
        </div>
        <div className="flex flex-col">
          <img
            src="https://images.unsplash.com/photo-1505576399279-565b52d4ac71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjJ8fHJlY2lwZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60"
            alt=""
            className=" w-[150px] h-[150px] md:w-[200px] md:h-[200px] object-cover aboutPic"
          />
          <img
            src={Curry}
            alt=""
            className="w-[100px] h-[100px] md:w-[140px] md:h-[140px] ml-32 object-cover aboutPic"
          />
          <img
            src={VegetablesPic}
            alt=""
            className="w-[130px]  h-[130px] md:w-[170px] md:h-[170px] object-cover aboutPic"
          />
        </div>
      </div>
    </div>
  );
};

export default About;

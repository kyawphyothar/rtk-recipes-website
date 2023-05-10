import React from "react";
import { BsFillArrowUpCircleFill } from "react-icons/bs";

const ScrollToTop = () => {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="">
      <button
        className=" flex items-center bg-gray-500 text-white scroll-button shadow px-4 font-medium hover:bg-gray-600 py-2"
        onClick={handleScrollToTop}
      >
        {" "}
        <span className=" text-2xl inline-block mr-3">
          <BsFillArrowUpCircleFill />
        </span>
        Scroll to Top
      </button>
    </div>
  );
};

export default ScrollToTop;

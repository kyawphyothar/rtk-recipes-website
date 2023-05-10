import React from "react";
import HeroSection from "../components/HeroSection";
import Services from "../components/Services";
import MealsCarousel from "../components/MealsCarousel";
import ContentSection from "../components/ContentSection";

const Home = () => {
  return (
    <>
      <div className=" ">
        <HeroSection />
        <MealsCarousel />
        <Services />
        <ContentSection />
      </div>
    </>
  );
};

export default Home;

import React from "react";
import horns from "../images/horns-bg.svg";

const HomePage = () => {
  return (
    <div
      className="relative mt-16 bg-orange bg-top md:bg-center bg-no-repeat bg-local"
      style={{ backgroundImage: `url(${horns})` }}
    >
      <div className="rounded-full border-2 border-red text-center h-32 w-32 front-end-badge hidden xl:flex justify-center items-center">
        <p className="text-white text-lg font-bold">Front-End Developer</p>
      </div>
      <div className="flex p-5 gap-8 md:gap-18 lg:gap-20 flex-col justify-center items-center text-center h-screen">
        <div className="h-44 sm:h-80 md:hidden"></div>
        <p className="text-6xl lg:text-7xl main-title text-white md:max-w-xl lg:max-w-3xl leading-tight">
          Let me take the bull by the horns.
        </p>
        <p className="max-w-lg md:max-w-xs lg:max-w-md text-2xl font-semibold main-subtitle text-red-dark">
          I'll do it not because it's easy, but because it's hard.
        </p>
      </div>
    </div>
  );
};

export default HomePage;

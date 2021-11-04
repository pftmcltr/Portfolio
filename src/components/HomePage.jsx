import React from "react";
import horns from "../images/horns-bg.svg";

const HomePage = () => {
  return (
    <div
      className="relative mb-24 mt-5 md:mt-0 bg-top md:bg-center bg-no-repeat bg-local"
      style={{ backgroundImage: `url(${horns})` }}
    >
      <div className="rounded-full border-2 border-red text-center h-32 w-32 front-end-badge hidden xl:flex justify-center items-center">
        <p className="text-white text-lg font-bold">Front-End Developer</p>
      </div>
      <div className="flex p-5 gap-10 flex-col md:justify-center items-center text-center md:h-screen">
        <div className="h-48 sm:h-80 md:hidden"></div>
        <p className="text-6xl md:text-7xl main-title text-white sm:max-w-xl lg:max-w-3xl leading-tight">
          Let me take the bull by the horns.
        </p>
        <p className="max-w-md md:max-w-xs lg:max-w-sm text-xl font-medium main-subtitle text-orange-light">
          Now, you might ask yourself if I'm the man for the job. Just keep
          scrolling down and maybe you'll find the answer.
        </p>
      </div>
    </div>
  );
};

export default HomePage;

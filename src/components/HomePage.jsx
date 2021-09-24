import React from "react";
import horns from "../images/horns-bg.svg";
// import { FaChevronDown } from "react-icons/fa";

const HomePage = () => {
  return (
    <>
      {/* Main container */}
      <div
        className="bg-orange bg-top md:bg-center bg-no-repeat bg-local "
        style={{ backgroundImage: `url(${horns})` }}
      >
        <div className="rounded-full hidden border-2 border-red text-center h-32 w-32 circle-text xl:flex flex-col justify-center items-center">
          <p className="text-orange-light text-lg font-bold">
            Front-End Developer
          </p>
        </div>
        <div className="flex p-5 gap-8 md:gap-20 flex-col justify-center items-center text-center h-screen">
          <div className="h-44 sm:h-80 md:hidden"></div>
          <p className="text-6xl lg:text-7xl main-title text-white md:max-w-xl lg:max-w-3xl ">
            Taking the bull by the horns is not my job.
          </p>
          <p className="md:max-w-xs lg:max-w-sm text-2xl font-bold main-subtitle text-orange-light">
            But I want it to be. So let's talk business, I'm all for it.
          </p>

          {/* <div className="flex flex-col text-white text-lg border-2 border-white rounded-full md:hidden text-center justify-center items-center h-12 w-12">
          <a href="#" alt="arrow down">
            <FaChevronDown />
          </a>
        </div> */}
        </div>
      </div>
    </>
  );
};

export default HomePage;

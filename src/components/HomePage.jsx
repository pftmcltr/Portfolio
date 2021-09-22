import React from "react";
import horns from "../images/horns-bg.svg";
import { FaChevronDown } from "react-icons/fa";
import { IconContext } from "react-icons/";

const HomePage = () => {
  return (
    <>
      <div className="rounded-full hidden border-2 border-red text-center h-32 w-32  circle-text xl:flex flex-col justify-center items-center">
        <p className="text-white text-lg font-bold"> George Bucurescu</p>
      </div>
      <div
        className="flex gap-16 md:gap-20 flex-col justify-end md:justify-center items-center text-center bg-orange h-screen bg-top md:bg-center bg-no-repeat bg-local main-background"
        style={{ backgroundImage: `url(${horns})` }}
      >
        <p className="text-4xl md:text-6xl lg:text-7xl main-title">
          Let me take the bull
          <br />
          by the horns
        </p>
        <p className="text-lg md:text-xl lg:text-2xl font-semibold main-subtitle">
          Meetings, deadlines, overtime. <br />
          I'm not afraid of them.
          <br />
          Bring it on.
        </p>

        <div className="flex flex-col mb-16 text-white text-3xl border-2 border-white rounded-full md:hidden text-center justify-center items-center h-14 w-14">
          <a href="#" alt="arrow down">
            <FaChevronDown />
          </a>
        </div>
      </div>
    </>
  );
};

export default HomePage;

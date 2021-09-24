import React from "react";
import bull from "../images/skills.svg";
import background from "../images/Waihou.svg";

const Skills = () => {
  return (
    <div className="bg-orange">
      <div className="px-5 text-6xl md:text-7xl text-center md:text-right text-orange max-w-6xl mx-auto font-black section-title">
        <p className="outlined">Take a look at</p>
        <p className="text-white leading-tight">my skills</p>
      </div>
      <div className="relative flex flex-wrap justify-center ">
        <img src={bull} className="max-w-5xl z-20 " />
        <div className="absolute hidden md:flex  z-10 top-0 left-14 items-center justify-center ">
          <p className="text-orange-dark p-5 text-left text-7xl lg:text-8xl font-black">
            REACT AND
            <br />
            REACT NATIVE
            <br />
            REDUX
            <br />
            NODE.JS
            <br />
            CSS + SCSS
          </p>
        </div>
      </div>
    </div>
  );
};

export default Skills;

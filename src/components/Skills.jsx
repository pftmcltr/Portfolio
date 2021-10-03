import React from "react";
import bull from "../images/skills.svg";

const Skills = () => {
  return (
    <div className="bg-orange">
      <div className="bg-orange px-5 mt-16 text-6xl md:text-7xl text-center md:text-right text-orange max-w-6xl mx-auto font-black section-title">
        <p className="outlined leading-tight">And some of my</p>
        <p className="text-white leading-tight">coding skills</p>
      </div>
      <div className="relative flex flex-wrap justify-center ">
        <img
          src={bull}
          className="xs:max-w-4xl lg:max-w-6xl bull-skills"
          alt="bull"
        />
        <div className="absolute skills-bg hidden md:flex top-0 left-14 items-center justify-center ">
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

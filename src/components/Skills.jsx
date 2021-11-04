import React from "react";
import bull from "../images/skills.svg";

const Skills = () => {
  return (
    <div className="bg-orange">
      <div className="bg-orange px-5 mb-5 mt-20 text-5xl sm:text-6xl md:text-7xl text-center md:text-right text-orange max-w-6xl mx-auto font-black">
        <p className="outlined leading-tight">And some of</p>
        <p className="text-white leading-tight">my skills</p>
      </div>
      <div className="relative flex bg-gradient-to-b from-orange to-orange-dark w-full overflow-hidden flex-wrap justify-end md:mr-20">
        <img src={bull} className="xl:max-w-4xl  bull-skills" alt="bull" />
        <div className="absolute skills-bg flex top-0 left-14 items-center justify-center ">
          <p className="p-5 text-left text-4xl sm:6xl md:text-7xl lg:text-8xl font-black text-orange-dark">
            REACT
            <br />
            NEXT.JS
            <br />
            REDUX
            <br />
            NODE.JS
            <br />
            CSS + SCSS
            <br />
            TAILWIND
          </p>
        </div>
      </div>
    </div>
  );
};

export default Skills;

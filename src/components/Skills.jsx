import React from "react";
import bull from "../images/skills.svg";

const Skills = () => {
  return (
    <div data-aos="fade" className="bg-orange">
      <div className="bg-orange px-5 mb-5 mt-20 text-5xl sm:text-6xl md:text-7xl text-center md:text-right text-orange max-w-6xl mx-auto font-black">
        <p className="outlined leading-tight">And some of</p>
        <p className="text-white leading-tight">my skills</p>
      </div>
      <div className="relative mt-10 flex bg-orange w-full overflow-hidden flex-wrap justify-center">
        <img src={bull} className="xl:max-w-4xl bull-skills" alt="bull" />
        <div className="absolute left-20 skills-bg flex items-center justify-center overflow-hidden roll-text">
          <p className="p-5 text-left text-4xl sm:6xl md:text-7xl lg:text-8xl font-black skills-gradient">
            REACT
            <br />
            NEXT.JS
            <br />
            REDUX
            <br />
            NODE.JS
            <br />
            SCSS
            <br />
            TAILWIND
            <br />
            BOOTSTRAP
            <br />
            TYPESCRIPT
            <br />
            GIT+GITHUB
            <br />
            PYTHON
            <br />
            LINUX
            <br />
            MONGODB
            <br />
            REACT NATIVE
            <br />
            POSTMAN
            <br />
            STRAPI
          </p>
        </div>
      </div>
    </div>
  );
};

export default Skills;

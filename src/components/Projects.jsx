import React from "react";
import hopin from "../images/hopin-cover-single.jpg";
import crypto from "../images/crypto.jpg";
import aimdb from "../images/aimdb.jpg";

const Projects = () => {
  return (
    <div className="bg-orange">
      <div className="px-5 pb-5 text-6xl md:text-7xl text-center md:text-left text-orange max-w-6xl mx-auto font-black section-title">
        <p className="outlined">Take a look at</p>
        <p className="text-white leading-tight">some of my projects</p>
      </div>
      <div className="flex justify-center flex-wrap gap-12 py-10 px-10">
        <div className="flex flex-wrap justify-center gap-12">
          <div className="border border-orange-dark bg-orange hover:bg-opacity-20 hover:bg-orange-dark duration-300 max-w-3xl xl:max-w-xl project-container">
            <img src={hopin} alt="hopin" />
            <div className="p-10">
              <p className="text-orange-light font-bold">
                01 &nbsp;&nbsp;━&nbsp;&nbsp; Mobile App
              </p>
              <p className="text-white text-4xl font-extrabold my-10">Hop.In</p>
              <p className="text-orange-light text-xl font-medium">
                Ridesharing & Food delivery Android app created with React
                Native and Expo.
              </p>
              <p className="text-white opacity-0 text-lg font-bold details-cta mt-5">
                Click for details!
              </p>
            </div>
          </div>
          <div className="border border-orange-dark bg-orange  hover:bg-opacity-20 hover:bg-orange-dark duration-300 max-w-3xl xl:max-w-xl project-container">
            <img src={crypto} alt="cryptomoney cover" />
            <div className="p-10">
              <p className="text-orange-light font-bold">
                02 &nbsp;&nbsp;━&nbsp;&nbsp; Website
              </p>
              <p className="text-white text-4xl font-extrabold my-10">
                CryptoMoney
              </p>
              <p className="text-orange-light text-xl font-medium">
                A cryptocurrency news website{" "}
              </p>
              <p className="text-white opacity-0 text-lg font-bold details-cta mt-5">
                Click for details!
              </p>
            </div>
          </div>
        </div>
        <div className="relative border border-orange-dark bg-orange  hover:bg-opacity-20 hover:bg-orange-dark duration-300 project-container max-w-3xl xl:max-w-3xl">
          <img src={aimdb} alt="aimdb" />
          <div className="absolute hidden lg:flex justify-center items-center text-center text-lg xl:text-md font-bold text-white top-12 lg:-left-14 bg-red rounded-full h-28 w-28 shadow-lg">
            Latest project
          </div>
          <div className="p-10">
            <p className="text-orange-light font-bold">
              02 &nbsp;&nbsp;━&nbsp;&nbsp; Website
            </p>
            <p className="text-white text-4xl font-extrabold my-10">A.I.MDb</p>
            <p className="text-orange-light text-xl font-medium">
              Virtual assistant with AI, connected to a movie database API.
            </p>
            <p className="text-white opacity-0 text-lg font-bold details-cta mt-5">
              Click for details!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;

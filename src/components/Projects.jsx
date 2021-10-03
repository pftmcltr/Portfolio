import React from "react";
import hopin from "../images/hopin-cover-single.jpg";
import crypto from "../images/crypto.jpg";
import aimdb from "../images/aimdb.jpg";

const Projects = () => {
  return (
    <div className="bg-orange">
      <div className="px-5 mt-5 text-6xl md:text-7xl text-center md:text-left text-orange max-w-6xl mx-auto font-black section-title">
        <p className="outlined leading-tight">Take a look at some of</p>
        <p className="text-white leading-tight">my projects</p>
      </div>

      {/* HOPIN */}
      <div className="flex justify-center flex-wrap gap-12 py-10 px-10">
        <div className="flex flex-wrap justify-center gap-12">
          <div className="border border-orange-dark bg-orange hover:shadow-md duration-300 max-w-3xl xl:max-w-xl project-container">
            <img src={hopin} alt="hopin" />
            <div className="py-10 md:px-20 px-5">
              <p className="text-red-dark font-bold">
                01 &nbsp;&nbsp;━&nbsp;&nbsp; Mobile App
              </p>
              <p className="text-white text-4xl font-extrabold my-10">Hop.In</p>
              <p className="text-orange-light text-xl font-medium">
                Ridesharing & Food delivery Android app created with React
                Native and Expo.
              </p>
              <br />
              <div className="flex flex-wrap justify-center items-center text-center details-cta mt-5 pt-5 border-t-2 border-orange-dark">
                <div className="w-1/3 ">
                  {" "}
                  <p className="mb-3 text-white font-bold text-lg">Link</p>
                  <p className="text-orange-light font-medium">Netflify</p>
                </div>
                <div className="w-1/3 border-r-2 border-l-2 border-orange-dark ">
                  {" "}
                  <p className="mb-3 text-white font-bold text-lg">Code</p>
                  <p className="text-orange-light font-medium">GitHub</p>
                </div>
                <div className="w-1/3">
                  {" "}
                  <p className="mb-3 text-white font-bold text-lg">Year</p>
                  <p className="text-orange-light font-medium">2021</p>
                </div>
              </div>
            </div>
          </div>

          {/* CRYPTOMONEY */}
          <div className="border border-orange-dark bg-orange  hover:shadow-md  duration-300 max-w-3xl xl:max-w-xl project-container">
            <img src={crypto} alt="cryptomoney cover" />
            <div className="py-10 md:px-20 px-5">
              <p className="text-red-dark font-bold">
                02 &nbsp;&nbsp;━&nbsp;&nbsp; Website
              </p>
              <p className="text-white text-4xl font-extrabold my-10">
                CryptoMoney
              </p>
              <p className="text-orange-light text-xl font-medium">
                A website for cryptocurrency news and stats.
              </p>
              <br />
              <div className="flex flex-wrap justify-center items-center text-center details-cta mt-5 pt-5 border-t-2 border-orange-dark">
                <div className="w-1/3 ">
                  {" "}
                  <p className="mb-3 text-white font-bold text-lg">Link</p>
                  <p className="text-orange-light font-medium">Netflify</p>
                </div>
                <div className="w-1/3 border-r-2 border-l-2 border-orange-dark ">
                  {" "}
                  <p className="mb-3 text-white font-bold text-lg">Code</p>
                  <p className="text-orange-light font-medium">GitHub</p>
                </div>
                <div className="w-1/3">
                  {" "}
                  <p className="mb-3 text-white font-bold text-lg">Year</p>
                  <p className="text-orange-light font-medium">2021</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* AIMBD */}
        <div className="relative border border-orange-dark bg-orange   hover:shadow-md  duration-300 project-container max-w-3xl xl:max-w-3xl">
          <img src={aimdb} alt="aimdb" />
          <div className="absolute hidden lg:flex justify-center items-center text-center text-xl xl:text-md font-bold text-white top-12 lg:-left-16 bg-red rounded-full h-32 w-32 shadow-lg">
            Latest project
          </div>
          <div className="py-10 md:px-20 px-5">
            <p className="text-red-dark font-bold">
              03 &nbsp;&nbsp;━&nbsp;&nbsp; Website
            </p>
            <p className="text-white text-4xl font-extrabold my-10">A.I.MDb</p>
            <p className="text-orange-light text-xl font-medium">
              Virtual assistant with AI, connected to a movie database API.
            </p>
            <br />
            <div className="flex flex-wrap justify-center items-center text-center details-cta mt-5 pt-5 border-t-2 border-orange-dark">
              <div className="w-1/3 ">
                {" "}
                <p className="mb-3 text-white font-bold text-lg">Link</p>
                <p className="text-orange-light font-medium">Netflify</p>
              </div>
              <div className="w-1/3 border-r-2 border-l-2 border-orange-dark ">
                {" "}
                <p className="mb-3 text-white font-bold text-lg">Code</p>
                <p className="text-orange-light font-medium">GitHub</p>
              </div>
              <div className="w-1/3">
                {" "}
                <p className="mb-3 text-white font-bold text-lg">Year</p>
                <p className="text-orange-light font-medium">2021</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;

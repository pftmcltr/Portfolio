import React from "react";
import hopin from "../images/hopin-cover-single.jpg";
import crypto from "../images/crypto.jpg";
import hopinSim from "../images/hopin-sim.jpg";
import cryptoSimMobile from "../images/crypto-sim-mobile.jpg";
import cryptoSimWeb from "../images/crypto-sim-web.jpg";
import aimdb from "../images/aimdb.jpg";
import aimdbSimWeb from "../images/aimdb-sim-web.jpg";
import aimdbSimMobile from "../images/aimdb-sim-mobile.jpg";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const Projects = () => {
  return (
    <div className="bg-orange">
      <div className="px-5 mb-5 text-5xl sm:text-6xl md:text-7xl text-center md:text-left text-orange max-w-6xl mx-auto font-black section-title">
        <p className="outlined leading-tight">Take a look at some of</p>
        <p className="text-white leading-tight">my projects</p>
      </div>

      <div className="flex justify-center flex-wrap gap-12 p-10">
        <div className="flex flex-wrap justify-center gap-12">
          {/* HOPIN */}
          <div className="border border-orange-dark bg-orange hover:shadow-md duration-300 max-w-3xl xl:max-w-xl project-container">
            <Carousel
              dynamicHeight={false}
              emulateTouch={true}
              showArrows={true}
              showThumbs={true}
              showStatus={true}
              showIndicators={false}
              thumbWidth={40}
              infiniteLoop={true}
            >
              <div>
                <img src={hopin} alt="hopin" />
              </div>
              <div>
                <img src={hopinSim} alt="hopin" />
              </div>
            </Carousel>
            <div className="px-10 py-5">
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
            <Carousel
              dynamicHeight={false}
              emulateTouch={true}
              showArrows={true}
              showThumbs={true}
              showStatus={true}
              showIndicators={false}
              thumbWidth={40}
              infiniteLoop={true}
            >
              <div>
                <img src={crypto} alt="cryptomoney" />
              </div>
              <div>
                <img src={cryptoSimMobile} alt="cryptomoney" />
              </div>
              <div>
                <img src={cryptoSimWeb} alt="cryptomoney" />
              </div>
            </Carousel>
            <div className="px-10 py-5">
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
        <div className="relative border border-orange-dark bg-orange   hover:shadow-md  duration-300 project-container max-w-3xl">
          <Carousel
            dynamicHeight={false}
            emulateTouch={true}
            showArrows={true}
            showThumbs={true}
            showStatus={true}
            showIndicators={false}
            thumbWidth={40}
            infiniteLoop={true}
          >
            <div>
              <img src={aimdb} alt="aimdb" />
            </div>
            <div>
              <img src={aimdbSimMobile} alt="aimdb" />
            </div>
            <div>
              <img src={aimdbSimWeb} alt="aimdb" />
            </div>
          </Carousel>
          <div className="absolute hidden lg:flex justify-center items-center text-center text-xl xl:text-md font-bold text-white top-12 lg:-left-16 bg-red rounded-full h-32 w-32 shadow-lg">
            Latest project
          </div>
          <div className="px-10 py-5">
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

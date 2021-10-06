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
            <div className="p-10 pt-5">
              <p className="text-red-dark font-bold text-lg">
                01 &nbsp;&nbsp;━&nbsp;&nbsp; Hop.In
              </p>
              <p className="text-white text-2xl font-bold my-5">
                Ridesharing & Food Delivery App created with React Native and
                Expo
              </p>
              <p className="text-orange-light text-lg font-medium">
                While working on this project, I prefered to learn some things
                the hard way, therefore I used a combination of free APIs for
                geolocation, routes and directions, plus the Yelp API for
                restaurant data based on coordinates.
              </p>
              <div className="flex flex-wrap justify-center items-center text-center details-cta mt-5">
                <div className="w-1/3 ">
                  {" "}
                  <p className="mb-2 text-orange-light font-medium text-lg">
                    Link
                  </p>
                  <a
                    href="https://expo.dev/@georrgecb/hop-in"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <p className="text-white text-lg font-semibold">Expo Go</p>
                  </a>
                </div>
                <div className="w-1/3 border-r-2 border-l-2 border-orange-dark">
                  {" "}
                  <p className="mb-2 text-orange-light font-medium text-lg">
                    Code
                  </p>{" "}
                  <a
                    href="https://github.com/georrgecb/hop.in"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <p className="text-white text-lg font-semibold">GitHub</p>{" "}
                  </a>
                </div>
                <div className="w-1/3">
                  {" "}
                  <p className="mb-2 text-orange-light font-medium text-lg">
                    Year
                  </p>
                  <p className="text-white text-lg font-semibold">2021</p>
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
            <div className="p-10 pt-5">
              <p className="text-red-dark font-bold text-lg">
                02 &nbsp;&nbsp;━&nbsp;&nbsp; CryptoMoney
              </p>
              <p className="text-white text-2xl font-bold my-5">
                Fully functional Cryptocurrency News Website
              </p>
              <p className="text-orange-light text-lg font-medium">
                I got the chance to experiment with Redux Toolkit's createApi
                feature, which is very useful for complex projects. Furthermore,
                I learned a lot about number and date formats.
              </p>
              <div className="flex flex-wrap justify-center items-center text-center details-cta mt-5">
                <div className="w-1/3 ">
                  {" "}
                  <p className="mb-2 text-orange-light font-medium text-lg">
                    Link
                  </p>
                  <a
                    href="https://cryptomoney-ftw.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <p className="text-white text-lg font-semibold">Netflify</p>
                  </a>
                </div>
                <div className="w-1/3 border-r-2 border-l-2 border-orange-dark">
                  {" "}
                  <p className="mb-2 text-orange-light font-medium text-lg">
                    Code
                  </p>
                  <a
                    href="https://github.com/georrgecb/CryptoMoney"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <p className="text-white text-lg font-semibold">GitHub</p>{" "}
                  </a>
                </div>
                <div className="w-1/3">
                  {" "}
                  <p className="mb-2 text-orange-light font-medium text-lg">
                    Year
                  </p>
                  <p className="text-white text-lg font-semibold">2021</p>
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
          <div className="p-10 pt-5">
            <p className="text-red-dark font-bold text-lg">
              03 &nbsp;&nbsp;━&nbsp;&nbsp; A.I.MDb
            </p>
            <p className="text-white text-2xl font-bold my-5">
              AI Virtual Assistant connected to a Movie Database
            </p>
            <p className="text-orange-light text-lg font-medium">
              The virtual assistant powered by Alan AI is programmed to show the
              most popular movies, new releases and comprehensive details about
              any movie. Johnny is able not only to return data, but also to
              read the titles, go to different pages and sections, make small
              talk and more.
            </p>

            <div className="flex flex-wrap justify-center items-center text-center details-cta mt-5">
              <div className="w-1/3 ">
                {" "}
                <p className="mb-2 text-orange-light font-medium text-lg">
                  Link
                </p>
                <a
                  href="https://aimdb.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <p className="text-white text-lg font-semibold">Netflify</p>
                </a>
              </div>
              <div className="w-1/3 border-r-2 border-l-2 border-orange-dark ">
                {" "}
                <p className="mb-2 text-orange-light font-medium text-lg">
                  Code
                </p>
                <a
                  href="https://github.com/georrgecb/AIMDb"
                  target="_blank"
                  rel="noreferrer"
                >
                  {" "}
                  <p className="text-white text-lg font-semibold">
                    GitHub
                  </p>{" "}
                </a>
              </div>
              <div className="w-1/3">
                {" "}
                <p className="mb-2 text-orange-light font-medium text-lg">
                  Year
                </p>
                <p className="text-white text-lg font-semibold">2021</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;

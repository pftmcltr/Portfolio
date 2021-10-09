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

const data = [
  {
    index: "01",
    title: "Ridesharing & Food Delivery App created with React Native and Expo",
    description:
      "While working on this project, I prefered to learn some things the hard way, therefore I used a combination of free APIs for geolocation, routes and directions, plus the Yelp API for restaurant data based on coordinates.",
    link: "https://expo.dev/@georrgecb/hop-in",
    code: "https://github.com/georrgecb/hop.in",
    year: 2021,
  },
  {
    index: "02",
    title: "Fully functional Crypto News Website",
    description:
      "I got the chance to experiment with number & date formats and with Redux Toolkit's createApi feature, which is very useful for complex projects.",
    link: "https://cryptomoney-ftw.netlify.app/",
    code: "https://github.com/georrgecb/CryptoMoney",
    year: 2021,
  },
  {
    index: "03",
    title: "AI Virtual Assistant connected to a Movie Database",
    description:
      "The virtual assistant powered by Alan AI is programmed to show the most popular movies, new releases and comprehensive details about any movie. Johnny is able not only to return data, but also to read the titles, go to different pages and sections, make small talk and more.",
    link: "https://aimdb.netlify.app/",
    code: "https://github.com/georrgecb/AIMDb",
    year: 2021,
  },
];

const hopinData = data[0];
const cryptoData = data[1];
const aimdbData = data[2];

const Projects = () => {
  return (
    <div className="bg-orange">
      <div className="px-5 mb-5 text-5xl sm:text-6xl md:text-7xl text-center md:text-left text-orange max-w-6xl mx-auto font-black">
        <p className="outlined leading-tight">Take a look at some of</p>
        <p className="text-white leading-tight">my projects</p>
      </div>

      <div className="flex justify-center flex-wrap gap-16 xl:gap-24 p-10">
        <div className="flex flex-wrap gap-16 justify-center items-center">
          {/* HOPIN */}

          <div className="border border-orange-dark bg-orange max-w-3xl xl:max-w-2xl">
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
            <div className="p-5">
              <div className="mb-10 flex justify-start items-center gap-5">
                <span className="text-white flex justify-center items-center text-3xl font-bold p-2 rounded-full bg-orange-dark">
                  {hopinData.index}
                </span>{" "}
                <p className="text-white text-3xl font-bold">
                  {hopinData.title}
                </p>
              </div>
              <div className="flex flex-col justify-center items-stretch ">
                <div className="mb-10">
                  <p className="mb-2 text-orange-light font-medium text-md">
                    Short Intro
                  </p>
                  <p className="text-white text-lg font-semibold">
                    {hopinData.description}
                  </p>
                </div>
                <div className="flex items-stretch justify-center text-left gap-2">
                  <div className="border w-full md:w-3/5 border-orange-dark border-dashed p-3 hvr-bounce-to-right">
                    <a href={hopinData.link} target="_blank" rel="noreferrer">
                      <p className="mb-2 text-orange-light font-medium text-md">
                        Link
                      </p>
                      <p className="text-white text-lg font-semibold">
                        {" "}
                        Expo Go
                      </p>
                    </a>
                  </div>
                  <div className="border md:w-1/5 border-orange-dark border-dashed p-3 hvr-bounce-to-right">
                    <a href={hopinData.code} target="_blank" rel="noreferrer">
                      <p className="mb-2 text-orange-light font-medium text-md">
                        Code
                      </p>
                      <p className="text-white text-lg font-semibold ">
                        GitHub
                      </p>{" "}
                    </a>
                  </div>
                  <div className="border md:w-1/5 border-orange-dark border-dashed p-3 hvr-bounce-to-right">
                    {" "}
                    <p className="mb-2 text-orange-light font-medium text-md ">
                      Year
                    </p>
                    <p className="text-white text-lg font-semibold">
                      {hopinData.year}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CRYPTOMONEY */}
          <div className="border border-orange-dark bg-orange max-w-3xl xl:max-w-lg">
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
            <div className="p-5">
              <div className="mb-10 flex justify-start items-center gap-5">
                <span className="text-white flex justify-center items-center text-3xl font-bold p-2 rounded-full bg-orange-dark">
                  {cryptoData.index}
                </span>{" "}
                <p className="text-white text-3xl font-bold">
                  {cryptoData.title}
                </p>
              </div>
              <div className="flex flex-col justify-center items-stretch ">
                <div className="mb-10">
                  <p className="mb-2 text-orange-light font-medium text-md">
                    Short Intro
                  </p>
                  <p className="text-white text-lg font-semibold">
                    {cryptoData.description}
                  </p>
                </div>
                <div className="flex items-stretch justify-center text-left gap-2">
                  <div className="border w-full md:w-3/5 border-orange-dark border-dashed p-3 hvr-bounce-to-right">
                    <a href={cryptoData.link} target="_blank" rel="noreferrer">
                      <p className="mb-2 text-orange-light font-medium text-md">
                        Link
                      </p>
                      <p className="text-white text-lg font-semibold">
                        {" "}
                        Netflify
                      </p>
                    </a>
                  </div>
                  <div className="border md:w-1/5 border-orange-dark border-dashed p-3 hvr-bounce-to-right">
                    <a href={cryptoData.code} target="_blank" rel="noreferrer">
                      <p className="mb-2 text-orange-light font-medium text-md">
                        Code
                      </p>
                      <p className="text-white text-lg font-semibold ">
                        GitHub
                      </p>{" "}
                    </a>
                  </div>
                  <div className="border md:w-1/5 border-orange-dark border-dashed p-3 hvr-bounce-to-right">
                    {" "}
                    <p className="mb-2 text-orange-light font-medium text-md ">
                      Year
                    </p>
                    <p className="text-white text-lg font-semibold">
                      {cryptoData.year}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* AIMBD */}
        <div className="relative border border-orange-dark bg-orange max-w-3xl">
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
          <div className="absolute hidden lg:flex justify-center items-center text-center text-xl xl:text-md font-bold text-white top-12 lg:-left-16 bg-red rounded-full h-32 w-32 shadow-lg hvr-bounce-in">
            Latest project
          </div>
          <div className="p-5">
            <div className="mb-10 flex justify-start items-center gap-5">
              <span className="text-white flex justify-center items-center text-3xl font-bold p-2 rounded-full bg-orange-dark">
                {aimdbData.index}
              </span>{" "}
              <p className="text-white text-3xl font-bold">{aimdbData.title}</p>
            </div>
            <div className="flex flex-col justify-center items-stretch ">
              <div className="mb-10">
                <p className="mb-2 text-orange-light font-medium text-md">
                  Short Intro
                </p>
                <p className="text-white text-lg font-semibold">
                  {aimdbData.description}
                </p>
              </div>
              <div className="flex items-stretch justify-center text-left gap-2">
                <div className="border w-full md:w-3/5 border-orange-dark border-dashed p-3 hvr-bounce-to-right">
                  <a href={aimdbData.link} target="_blank" rel="noreferrer">
                    <p className="mb-2 text-orange-light font-medium text-md">
                      Link
                    </p>
                    <p className="text-white text-lg font-semibold">
                      {" "}
                      Netflify
                    </p>
                  </a>
                </div>
                <div className="border md:w-1/5 border-orange-dark border-dashed p-3 hvr-bounce-to-right">
                  <a href={aimdbData.code} target="_blank" rel="noreferrer">
                    <p className="mb-2 text-orange-light font-medium text-md">
                      Code
                    </p>
                    <p className="text-white text-lg font-semibold ">GitHub</p>{" "}
                  </a>
                </div>
                <div className="border md:w-1/5 border-orange-dark border-dashed p-3 hvr-bounce-to-right">
                  {" "}
                  <p className="mb-2 text-orange-light font-medium text-md ">
                    Year
                  </p>
                  <p className="text-white text-lg font-semibold">
                    {aimdbData.year}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;

import React from "react";

import aimdbOne from "../images/aimdbOne.jpg";
import aimdbTwo from "../images/aimdbTwo.jpg";
import aimdbThree from "../images/aimdbThree.jpg";
import cryptoOne from "../images/cryptoOne.jpg";
import cryptoTwo from "../images/cryptoTwo.jpg";
import cryptoThree from "../images/cryptoThree.jpg";
import rcgOne from "../images/rcgOne.jpg";
import rcgTwo from "../images/rcgTwo.jpg";
import rcgThree from "../images/rcgThree.jpg";
import hopOne from "../images/hopOne.jpg";
import hopTwo from "../images/hopTwo.jpg";
import hopThree from "../images/hopThree.jpg";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const data = [
  {
    index: 1,
    title: "AI Virtual Assistant connected to a Movie Database",
    description:
      "The virtual assistant powered by Alan AI is programmed to show the most popular movies, new releases and comprehensive details about any movie. Johnny is able not only to return data, but also to read the titles, go to different pages and sections, make small talk and more.",
    link: "https://aimdb.netlify.app/",
    linkTo: "Live on Netlify",
    code: "https://github.com/georrgecb/AIMDb",
    year: 2021,
    imageOne: aimdbOne,
    imageTwo: aimdbTwo,
    imageThree: aimdbThree,
    tech: ["React", "Redux Toolkit", "Alan AI", "Material UI"],
  },
  {
    index: 2,
    title: "Static Website with a Headless CMS provided by Strapi",
    description:
      "Next.js and Strapi work hand in hand when building a website with blog articles. The former makes the website super fast and optimized for search engines, the latter allows users to create and modify the data stored in a MongoDB database.",
    link: "https://rcgrivita.vercel.app/",
    linkTo: "Live on Vercel",
    code: "https://github.com/georrgecb/RCG-Blog",
    year: 2021,
    imageOne: rcgOne,
    imageTwo: rcgTwo,
    imageThree: rcgThree,
    tech: ["React", "Next.js", "Tailwind", "Strapi", "MongoDB"],
  },
  {
    index: 3,
    title: "Ridesharing & Food Delivery App created with React Native",
    description:
      "The app uses a combination of free APIs for geolocation and the Yelp API for restaurant data based on the given coordinates. Although it's not fully functional, Hop.in provides with real information about your ride (distance, duration, price) and restaurants (rating, distance from your location, category).",
    link: "https://expo.dev/@georrgecb/hop-in",
    linkTo: "Open in Expo Go",
    code: "https://github.com/georrgecb/hop.in",
    year: 2021,
    imageOne: hopOne,
    imageTwo: hopTwo,
    imageThree: hopThree,
    tech: ["React Native", "Redux Toolkit", "Expo", "Tailwind"],
  },
  {
    index: 4,
    title: "Fully Functional Crypto News Website",
    description:
      "With Redux Toolkit's RTK Query already set up, the website is more scalable and, in the future, it can connect easier to new APIs. Right now, CryptoMoney gets real time data from Bing News and Coin Ranking API.",
    link: "https://cryptomoney-ftw.netlify.app/",
    linkTo: "Live on Netlify",
    code: "https://github.com/georrgecb/CryptoMoney",
    year: 2021,
    imageOne: cryptoOne,
    imageTwo: cryptoTwo,
    imageThree: cryptoThree,
    tech: ["React", "Redux Toolkit", "Ant Design"],
  },
];

const Projects = () => {
  return (
    <div data-aos="fade" className="bg-orange">
      <div className="px-5 mb-5 text-5xl sm:text-6xl md:text-7xl text-center md:text-left text-orange max-w-6xl mx-auto font-black">
        <p className="outlined leading-tight">Take a look at some of</p>
        <p className="text-white leading-tight">my projects</p>
      </div>

      <div className="p-10 lg:px-24 grid grid-cols-1 md:grid-cols-2 gap-16 items-stretch">
        {data.map((proj) => (
          <div
            key={proj.index}
            className="relative border border-orange-dark bg-orange flex flex-col justify-start"
          >
            <Carousel
              dynamicHeight={false}
              emulateTouch={true}
              showArrows={true}
              showThumbs={true}
              showStatus={true}
              showIndicators={false}
              thumbWidth={50}
              infiniteLoop={true}
            >
              <div>
                <img src={proj.imageOne} alt="project's cover" />
              </div>
              <div>
                <img src={proj.imageTwo} alt="project's cover" />
              </div>
              <div>
                <img src={proj.imageThree} alt="project's cover" />
              </div>
            </Carousel>
            {/* Badge Latest */}
            {proj.index === 1 ? (
              <div className="absolute hidden cursor-default lg:flex justify-center items-center text-center text-xl xl:text-md font-bold text-white top-12 lg:-left-16 bg-red rounded-full h-32 w-32 shadow-lg hvr-bounce-in">
                Latest project
              </div>
            ) : null}
            <div className="p-5 flex flex-col h-full justify-between items-stretch">
              <div>
                <div className="mb-10 flex justify-start items-center gap-5">
                  <span className="text-white flex justify-center items-center text-3xl font-bold p-2 rounded-full bg-orange-dark">
                    0{proj.index}
                  </span>{" "}
                  <p className="text-white text-2xl lg:text-3xl font-bold">
                    {proj.title}
                  </p>
                </div>

                <div className="mb-10">
                  <p className="mb-2 text-orange-light font-medium text-md">
                    Short Intro
                  </p>
                  <p className="text-white text-lg font-semibold">
                    {proj.description}
                  </p>
                </div>
              </div>
              <div>
                <div className="flex flex-wrap gap-3 pb-10">
                  {proj.tech.map((t, i) => (
                    <div
                      key={i}
                      className="bg-orange-dark rounded-full px-3 py-1 flex justify-center items-center  hover:border-opacity-100 border-2 border-opacity-0 border-white duration-300 cursor-default"
                    >
                      <p className=" text-orange-light text-md text-center font-bold">
                        {t}
                      </p>
                    </div>
                  ))}
                </div>
                <div className="flex items-stretch justify-center text-left gap-2">
                  <div className="border rounded-lg w-full md:w-3/5 border-orange-dark  p-3 hvr-bounce-to-right">
                    <a href={proj.link} target="_blank" rel="noreferrer">
                      <p className="mb-2 text-orange-light font-medium text-md">
                        Link
                      </p>
                      <p className="text-white text-lg font-semibold">
                        {" "}
                        {proj.linkTo}
                      </p>
                    </a>
                  </div>
                  <div className="border rounded-lg md:w-1/5 border-orange-dark  p-3 hvr-bounce-to-right ">
                    <a href={proj.code} target="_blank" rel="noreferrer">
                      <p className="mb-2 text-orange-light font-medium text-md">
                        Code
                      </p>
                      <p className="text-white text-lg font-semibold ">
                        GitHub
                      </p>{" "}
                    </a>
                  </div>
                  <div className="border rounded-lg md:w-1/5 border-orange-dark  p-3 hvr-bounce-to-right">
                    {" "}
                    <p className="mb-2 text-orange-light font-medium text-md ">
                      Year
                    </p>
                    <p className="text-white text-lg font-semibold">
                      {proj.year}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;

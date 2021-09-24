import React from "react";

const AboutMe = () => {
  return (
    <div className="bg-orange">
      {/* Title */}
      <div className="px-5 pb-5 text-6xl md:text-7xl text-center md:text-left text-orange max-w-6xl mx-auto font-black section-title">
        <p className="outlined"> I'm George and I like</p>
        <p className="text-white leading-tight">building things</p>
      </div>
      {/* Content */}
      <div className="flex flex-row flex-wrap lg:flex-nowrap py-10">
        <div className="flex-grow-0 lg:flex-shrink-0 lg:max-w-lg">
          <div className="bg-orange-dark rounded-r-sm  p-10 text-white">
            <p className="font-bold text-3xl">A blank page is all I need.</p>
            <p className="font-normal text-2xl">
              <br />
              This website used to be a blank page. Completely empty, just like
              my bank account. But look at it now, it's so alive! <br />
              <br />
              Building things that other people use it's really wonderful.
            </p>
          </div>
        </div>
        <div className="p-5 mt-5 lg:mt-0 lg:px-32 lg:py-20">
          <p className="text-left text-blue font-bold text-xl">About me</p>
          <p className="text-white text-4xl xl:text-5xl font-extrabold my-5">
            Copywriter by day, Developer by night.
          </p>
          <div className="text-2xl text-orange-light font-medium">
            <p>
              After 6 years in advertising, working for big brands, I've taugth
              myself front-end development. Now I write less in&nbsp;
              <span className="text-blue">.doc</span> and more in{" "}
              <span className="text-blue">.jsx</span>,{" "}
              <span className="text-blue">.css</span> and&nbsp;
              <span className="text-blue">.py</span>, but you know what?! Even
              code can tell a story.
            </p>
            <p className="mt-5">
              More about me on&nbsp;
              <span className="underline">LinkedIn</span> and other websites.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;

import React from "react";

const AboutMe = () => {
  return (
    <div className="bg-orange md:-mt-28">
      {/* Title */}
      <div className="px-5 mb-5 text-5xl sm:text-6xl md:text-7xl text-center md:text-left text-orange max-w-6xl mx-auto font-black section-title">
        <p className="outlined leading-tight">I'm George and I like</p>
        <p className="text-white leading-tight">building things</p>
      </div>
      {/* Content */}
      <div className="flex flex-row flex-wrap lg:flex-nowrap py-10">
        <div className="flex-grow-0 lg:flex-shrink-0 lg:max-w-lg">
          <div className="bg-orange-dark p-10 text-orange-light">
            <p className="font-bold text-3xl">A blank page is all I need.</p>
            <p className="font-medium text-xl">
              <br />
              This website used to be a blank page. Empty, just like my bank
              account. But look at it now: so colorful, so alive! <br />
              <br />
              Building things that other people use is truly wonderful, and
              that's what I want to do.
            </p>
            <br />
            <br />
            <hr />
            <br />
            <p className="font-medium text-right text-xl contact-text">
              Ask me anything ⇢
            </p>
          </div>
        </div>
        <div className="p-10 mt-5 lg:mt-10 lg:px-24 xl:px-44 lg:py-20">
          <p className="text-left text-red-dark font-bold text-xl">About me</p>
          <p className="text-white text-4xl xl:text-5xl font-extrabold my-5 leading-tight">
            Copywriter by day, developer by night.
          </p>
          <div className="text-2xl text-orange-light font-medium">
            <p>
              After 6 years spent in well-respected advertising agencies,
              working for major brands, I opened a book about Python. Now I
              write less in .doc and more in .jsx, .css and .py. But you know
              what? Even code can tell a story.
            </p>
            <p className="mt-5">
              More about me on&nbsp;
              <a
                href="https://www.linkedin.com/in/george-bucurescu/"
                target="_blank"
                rel="noreferrer"
                className="underline font-bold"
              >
                LinkedIn
              </a>{" "}
              and other websites.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;

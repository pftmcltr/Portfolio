import React, { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import bullWarning from "../images/bullWarning.svg";
const Contact = () => {
  const [valueInput] = useState("bucurescu.george@gmail.com");
  const [copied, setCopied] = useState(false);
  return (
    <div id="bottom" className="bg-orange pb-10 pt-28">
      {/* Title */}
      <div className="px-5 mb-10 text-5xl sm:text-6xl md:text-7xl text-center md:text-left text-orange max-w-6xl mx-auto font-black">
        <p className="outlined">Do you need</p>
        <p className="text-white ">my expertise?</p>
      </div>

      <div className="flex  flex-1 flex-wrap flex-shrink justify-center items-center">
        <img
          src={bullWarning}
          alt="bull warning sign"
          className="w-60 bull-warning-animation hidden lg:block z-20"
        />
        <div className="lg:-ml-32 md:m-10 md:p-20 bg-orange md:border-2 border-orange-dark  flex flex-col justify-center items-center gap-10 md:max-w-2xl ">
          <p className="text-xl px-5 md:px-0 font-medium text-orange-light text-center">
            <i>
              {" "}
              If there's a raging bull on the loose, just say the word and I'll
              grab it by the horns!
            </i>
          </p>
          {/* email box */}
          <div className="">
            <div className="flex justify-center items-center shadow-lg hvr-bounce-to-top">
              <div className="relative gap-4 flex justify-center items-center text-orange-dark border-b-2 p-5">
                <div
                  className="absolute justify-center items-center px-4 hidden top-0 left-0 w-full h-full"
                  style={{
                    background: copied && "#19232C",
                    display: copied && "flex",
                  }}
                >
                  <p className="text-white text-bold text-center text-md font-extrabold">
                    Copied!
                  </p>
                </div>

                <p className="text-orange-light text-center font-medium text-lg md:text-xl ">
                  bucurescu.george@gmail.com
                </p>
                <CopyToClipboard
                  text={valueInput}
                  onCopy={() => setCopied(true)}
                >
                  <button>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                      />
                    </svg>
                  </button>
                </CopyToClipboard>
              </div>
            </div>
          </div>
          {/* email box */}
        </div>
      </div>
    </div>
  );
};

export default Contact;

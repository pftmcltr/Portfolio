import React, { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";

const Contact = () => {
  const [valueInput] = useState("bucurescu.george@gmail.com");
  const [copied, setCopied] = useState(false);
  return (
    <div className="bg-orange mb-10 mt-20 md:mt-5 lg:mt-0">
      {/* Title */}
      <div className="px-5 mb-16 text-5xl sm:text-6xl md:text-9xl text-center text-orange max-w-6xl mx-auto font-black section-title">
        <p className="outlined">Do you need</p>
        <p className="text-white ">my expertise?</p>
      </div>

      <div className="flex justify-center items-center">
        <div className="flex flex-wrap flex-shrink flex-col gap-10 justify-center items-center">
          <p className="px-10 max-w-xl text-2xl font-light text-orange-light text-center">
            <i>
              If there's a raging bull on the loose, just say the word and I'll
              grab it by the horns. And then, maybe we'll become friends.
            </i>
          </p>
          <div className="flex justify-center items-center shadow-lg">
            <div className="relative gap-4 flex justify-center items-center text-orange-dark border-2 p-5">
              <div
                className="absolute justify-center items-center px-4 hidden top-0 left-0 w-full h-full"
                style={{
                  background: copied && "#1f2d3d",
                  display: copied && "flex",
                }}
              >
                <p className="text-white text-bold text-center text-lg font-extrabold">
                  Copied!
                </p>
              </div>
              <CopyToClipboard text={valueInput} onCopy={() => setCopied(true)}>
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

              <p className="text-orange-light bg-orange text-center font-medium text-lg md:text-2xl">
                bucurescu.george@gmail.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

import React from "react";
import { ReactComponent as BullHead } from "../images/bull-head-white.svg";
import { ReactComponent as BullSteam } from "../images/bull-steam-white.svg";
import { FaLinkedin, FaInstagram } from "react-icons/fa";
import { IconContext } from "react-icons/";

const Header = () => {
  return (
    <div className="p-10 pb-0 -mt-24 lg:-mt-16 z-10 bg-transparent w-full fixed">
      <div className="flex justify-between">
        <div className="home-button-container">
          <BullHead className="bull-head" />
          <BullSteam className="bull-stream" />
        </div>
        <div className="flex gap-5 pt-3">
          <IconContext.Provider value={{ color: "white", size: "1.5rem" }}>
            <div>
              <a href="/" alt="linkedin" target="_blank">
                <FaLinkedin />
              </a>
            </div>
            <div>
              <a href="/" alt="instagram" target="_blank">
                <FaInstagram />
              </a>
            </div>
          </IconContext.Provider>
        </div>
      </div>
    </div>
  );
};

export default Header;

import React from "react";
import { ReactComponent as BullHead } from "../images/bull-head-white.svg";
import { ReactComponent as BullSteam } from "../images/bull-steam-white.svg";
import { FaLinkedin, FaInstagram } from "react-icons/fa";
import { IconContext } from "react-icons";
import { HashLink } from "react-router-hash-link";

const Header = () => {
  return (
    <div className="p-10 pb-0 w-full" id="top">
      <div className="flex justify-between">
        <HashLink smooth to="#top">
          <div className="home-button-container z-10 fixed">
            <BullHead className="bull-head" />
            <BullSteam className="bull-stream" />
          </div>
        </HashLink>
        <div className="flex gap-5 pt-3">
          <IconContext.Provider value={{ color: "white", size: "1.5rem" }}>
            <div>
              <a
                href="https://www.linkedin.com/in/george-bucurescu/"
                alt="linkedin"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedin />
              </a>
            </div>
            <div>
              <a
                href="https://www.instagram.com/georgebucurescu/"
                alt="instagram"
                target="_blank"
                rel="noreferrer"
              >
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
